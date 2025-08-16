import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { InteractiveActivity } from "@/components/InteractiveActivity";
import { ChevronLeft, ChevronRight, Trophy, Target, BookOpen } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface LessonSlidesProps {
  lessonId: number;
  lessonData: any;
}

interface Slide {
  type: 'content' | 'activity' | 'score';
  title: string;
  content?: string;
  activityIndex?: number;
  score?: number;
  grade?: string;
}

export const LessonSlides = ({ lessonId, lessonData }: LessonSlidesProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedActivities, setCompletedActivities] = useState<Record<number, any>>({});
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    // Generate slides structure alternating content and activities
    const generatedSlides: Slide[] = [];
    
    // Split lesson content into sections (assuming it's structured with headers)
    const contentSections = lessonData.content.split(/(?=##)/g).filter(section => section.trim());
    
    contentSections.forEach((section, index) => {
      // Add content slide
      generatedSlides.push({
        type: 'content',
        title: `${lessonData.title} - Part ${index + 1}`,
        content: section
      });
      
      // Add activity slide if there's a corresponding activity
      if (lessonData.activities && lessonData.activities[index]) {
        generatedSlides.push({
          type: 'activity',
          title: `Interactive Activity ${index + 1}`,
          activityIndex: index
        });
        
        // Add score slide placeholder (will be shown after activity completion)
        generatedSlides.push({
          type: 'score',
          title: `Activity ${index + 1} Results`,
          activityIndex: index
        });
      }
    });
    
    setSlides(generatedSlides);
  }, [lessonData]);

  const handleActivityComplete = (activityIndex: number, result: any) => {
    setCompletedActivities(prev => ({
      ...prev,
      [activityIndex]: result
    }));
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const canProceed = () => {
    const slide = slides[currentSlide];
    if (slide?.type === 'activity') {
      return completedActivities[slide.activityIndex!] !== undefined;
    }
    return true;
  };

  const getProgressPercentage = () => {
    return ((currentSlide + 1) / slides.length) * 100;
  };

  const renderSlide = () => {
    const slide = slides[currentSlide];
    if (!slide) return null;

    switch (slide.type) {
      case 'content':
        return (
          <Card className="min-h-[500px]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <CardTitle>{slide.title}</CardTitle>
              </div>
              <CardDescription>
                Lesson {lessonId} - Slide {currentSlide + 1} of {slides.length}
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {slide.content || ''}
              </ReactMarkdown>
            </CardContent>
          </Card>
        );

      case 'activity':
        return (
          <Card className="min-h-[500px]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <CardTitle>{slide.title}</CardTitle>
              </div>
              <CardDescription>
                Complete this activity to continue to the next section
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InteractiveActivity 
                lessonId={lessonId} 
                stepIndex={slide.activityIndex!}
                onComplete={(result) => handleActivityComplete(slide.activityIndex!, result)}
              />
            </CardContent>
          </Card>
        );

      case 'score':
        const result = completedActivities[slide.activityIndex!];
        if (!result) {
          // If no result yet, show activity first
          setCurrentSlide(currentSlide - 1);
          return null;
        }
        
        return (
          <Card className="min-h-[500px]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                <CardTitle>{slide.title}</CardTitle>
              </div>
              <CardDescription>
                Great job! Here's how you performed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">
                  {result.score || 'N/A'}
                  {result.score && '/100'}
                </div>
                {result.grade && (
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Grade: {result.grade}
                  </Badge>
                )}
              </div>
              
              {result.feedback && (
                <div className="bg-primary/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Feedback:</h4>
                  <p className="text-sm">{result.feedback}</p>
                </div>
              )}
              
              {result.strengths && result.strengths.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">Strengths:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {result.strengths.map((strength: string, i: number) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {result.improvements && result.improvements.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">Areas for Improvement:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {result.improvements.map((improvement: string, i: number) => (
                      <li key={i}>{improvement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Ready to continue? Click "Next" to proceed to the next section.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  if (slides.length === 0) {
    return <div>Loading slides...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>{currentSlide + 1} of {slides.length} slides</span>
        </div>
        <Progress value={getProgressPercentage()} className="h-2" />
      </div>

      {/* Current Slide */}
      <div className="min-h-[600px]">
        {renderSlide()}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-2">
          {slides[currentSlide]?.type === 'activity' && !canProceed() && (
            <Badge variant="secondary">Complete activity to continue</Badge>
          )}
        </div>

        <Button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1 || !canProceed()}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Slide indicator dots */}
      <div className="flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide 
                ? 'bg-primary' 
                : index < currentSlide 
                  ? 'bg-primary/60' 
                  : 'bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
};