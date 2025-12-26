import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate authentication
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      console.error('Missing authorization header');
      return new Response(
        JSON.stringify({ error: 'Missing authorization' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();
    if (authError || !user) {
      console.error('Auth error:', authError?.message || 'No user found');
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Authenticated user:', user.id);

    const { question, response, answerKey, activityType, rubric } = await req.json();

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const systemPrompt = `You are an expert financial literacy educator. Grade student responses based on the provided answer key and rubric. 

ACTIVITY TYPE: ${activityType}
QUESTION: ${question}
ANSWER KEY: ${answerKey}
RUBRIC: ${rubric}

Provide your response in JSON format with:
{
  "score": (0-100),
  "feedback": "detailed constructive feedback",
  "strengths": ["strength1", "strength2"],
  "improvements": ["improvement1", "improvement2"],
  "grade": "A/B/C/D/F"
}

Be encouraging but accurate. Focus on financial concepts understanding.`;

    const apiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Student Response: ${response}` }
        ],
        max_tokens: 500,
        temperature: 0.3,
      }),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.text();
      console.error('OpenAI API Error:', errorData);
      throw new Error(`OpenAI API error: ${apiResponse.status}`);
    }

    const data = await apiResponse.json();
    let gradingResult;
    
    try {
      gradingResult = JSON.parse(data.choices[0].message.content);
    } catch (parseError) {
      // Fallback if JSON parsing fails
      gradingResult = {
        score: 75,
        feedback: data.choices[0].message.content,
        strengths: ["Shows understanding of basic concepts"],
        improvements: ["Could provide more detailed explanation"],
        grade: "B"
      };
    }

    return new Response(JSON.stringify(gradingResult), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in ai-grade-response function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      score: 0,
      feedback: "Unable to grade response. Please try again.",
      strengths: [],
      improvements: ["Please try submitting your response again"],
      grade: "F"
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});