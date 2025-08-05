import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Send, 
  Bot, 
  User, 
  Home, 
  Globe, 
  FolderOpen, 
  MessageCircle,
  Search,
  Sparkles,
  Calculator,
  TrendingUp,
  PiggyBank,
  Building,
  BookOpen,
  Gamepad2,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your finance and business assistant. I can help you with:\n\n• **Personal Finance** - budgeting, saving, investing\n• **Business Planning** - startups, strategies, market analysis\n• **Investment Advice** - stocks, bonds, retirement planning\n• **Financial Education** - concepts, terms, best practices\n\nWhat would you like to explore today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: {
          message: input,
          context: "finance and business assistant - respond with detailed, helpful information using markdown formatting where appropriate",
        },
      });

      if (error) {
        throw new Error(error.message || "Failed to get response");
      }
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickPrompts = [
    { icon: Calculator, label: "Budget Help", prompt: "Help me create a monthly budget" },
    { icon: TrendingUp, label: "Investing", prompt: "Explain investment basics for beginners" },
    { icon: PiggyBank, label: "Saving", prompt: "Best strategies for saving money" },
    { icon: Building, label: "Business", prompt: "How to start a small business" },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header with Navigation Tabs */}
      <div className="bg-white border-b border-green-200">
        <div className="flex items-center px-4 py-3">
          <Link to="/" className="mr-4">
            <Button variant="ghost" size="sm" className="text-green-700 hover:bg-green-100">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Tabs defaultValue="chat" className="flex-1">
            <TabsList className="bg-green-100">
              <TabsTrigger value="chat" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                AI Chat
              </TabsTrigger>
              <TabsTrigger value="learn" asChild>
                <Link to="/blog" className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Learn Finance
                </Link>
              </TabsTrigger>
              <TabsTrigger value="practice" asChild>
                <Link to="/stack-your-future" className="flex items-center">
                  <Gamepad2 className="h-4 w-4 mr-2" />
                  Practice Game
                </Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-14 bg-white border-b border-green-200 flex items-center justify-center">
          <h1 className="text-xl font-semibold text-green-800">Finance Assistant</h1>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
            {messages.length === 1 ? (
              // Welcome Screen
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Finance Assistant</h2>
                <p className="text-gray-600 mb-12 max-w-2xl">
                  Your AI-powered finance and business companion. Get expert insights on investing, budgeting, business planning, and more.
                </p>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-12 w-full max-w-md">
                  {quickPrompts.map((prompt, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-green-50 hover:border-green-200"
                      onClick={() => setInput(prompt.prompt)}
                    >
                      <prompt.icon className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">{prompt.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            ) : (
              // Chat Messages
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-8 max-w-3xl mx-auto">
                  {messages.slice(1).map((message) => (
                    <div key={message.id} className="space-y-4">
                      {message.role === "user" && (
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">{message.content}</p>
                          </div>
                        </div>
                      )}
                      
                      {message.role === "assistant" && (
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="prose prose-sm max-w-none text-gray-900">
                              <ReactMarkdown 
                                remarkPlugins={[remarkGfm]}
                                components={{
                                  h1: ({children}) => <h1 className="text-xl font-bold mb-4 text-gray-900">{children}</h1>,
                                  h2: ({children}) => <h2 className="text-lg font-semibold mb-3 text-gray-900">{children}</h2>,
                                  h3: ({children}) => <h3 className="text-base font-medium mb-2 text-gray-900">{children}</h3>,
                                  p: ({children}) => <p className="mb-4 text-gray-800 leading-relaxed">{children}</p>,
                                  ul: ({children}) => <ul className="mb-4 space-y-1">{children}</ul>,
                                  ol: ({children}) => <ol className="mb-4 space-y-1 list-decimal list-inside">{children}</ol>,
                                  li: ({children}) => <li className="text-gray-800">{children}</li>,
                                  strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                                  code: ({children}) => <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">{children}</code>,
                                  pre: ({children}) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                                  blockquote: ({children}) => <blockquote className="border-l-4 border-green-500 pl-4 mb-4 text-gray-700 italic">{children}</blockquote>,
                                  table: ({children}) => <table className="w-full border-collapse border border-gray-300 mb-4">{children}</table>,
                                  th: ({children}) => <th className="border border-gray-300 px-3 py-2 bg-gray-50 font-semibold text-left">{children}</th>,
                                  td: ({children}) => <td className="border border-gray-300 px-3 py-2">{children}</td>,
                                }}
                              >
                                {message.content}
                              </ReactMarkdown>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.1s]"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-green-200">
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <div className="flex items-center space-x-2 bg-white border border-green-300 rounded-xl px-4 py-3 focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500">
                    <Search className="h-4 w-4 text-gray-400" />
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask anything about finance, investing, or business..."
                      disabled={isLoading}
                      className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 text-base placeholder:text-gray-500"
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={isLoading || !input.trim()}
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Quick Actions Row */}
                {messages.length === 1 && (
                  <div className="flex items-center justify-center space-x-2 mt-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Sparkles className="h-4 w-4" />
                      <span>Try:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Budget planning", "Investment strategy", "Business advice", "Debt management"].map((topic) => (
                        <Button
                          key={topic}
                          variant="outline"
                          size="sm"
                          className="h-7 px-3 text-xs border-green-300 hover:bg-green-50 hover:border-green-300"
                          onClick={() => setInput(`Help me with ${topic.toLowerCase()}`)}
                        >
                          {topic}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Chat;