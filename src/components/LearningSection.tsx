import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Gamepad2, 
  Gift, 
  PiggyBank, 
  Star, 
  Trophy,
  Target,
  Coins,
  Home,
  Calculator,
  ChevronRight,
  Play,
  Lock,
  CheckCircle,
  Timer,
  Users,
  TrendingUp,
  CreditCard,
  Shield,
  Building,
  GraduationCap,
  BarChart3,
  LineChart,
  Briefcase
} from "lucide-react";

const LearningSection = () => {
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load completed lessons from localStorage
    const completed = localStorage.getItem('completedLessons');
    if (completed) {
      setCompletedLessons(new Set(JSON.parse(completed)));
    }
  }, []);
  const learningPaths = [
    {
      title: "Foundations of Financial Literacy",
      description: "Master the fundamentals of handling money wisely and building financial confidence",
      icon: Coins,
      slides: 10,
      duration: "30-40 mins",
      difficulty: "Beginner",
      topics: ["Financial Literacy Basics", "Budgeting Fundamentals", "Credit Management", "Investment Introduction"]
    },
    {
      title: "Building Wealth and Budgeting", 
      description: "Advanced strategies for wealth building through strategic budgeting and investing",
      icon: TrendingUp,
      slides: 10,
      duration: "35-45 mins",
      difficulty: "Intermediate", 
      topics: ["Advanced Budgeting", "Investment Accounts", "Asset Allocation", "Multiple Income Streams"]
    },
    {
      title: "Investing and Advanced Financial Planning",
      description: "Sophisticated investment strategies and comprehensive financial planning",
      icon: Shield,
      slides: 10,
      duration: "40-50 mins",
      difficulty: "Advanced",
      topics: ["Investment Strategies", "Risk Management", "Retirement Planning", "Estate Planning"]
    }
  ];

  const gameActivities = [
    {
      title: "Stack Your Future",
      description: "An investment simulation game designed to teach financial literacy and investment strategies. Manage a portfolio over 20 simulated years, making decisions about savings accounts, CDs, index funds, individual stocks, and more. Learn about dollar-cost averaging, risk management, and long-term investment consequences using real market data.",
      icon: TrendingUp,
      players: "Solo",
      difficulty: "Medium",
      time: "20 years (simulated)",
      featured: true
    }
  ];

  return (
    <section id="learning" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Financial <span className="bg-gradient-primary bg-clip-text text-transparent">Learning</span> for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic money concepts to advanced investment strategies - learn at your own pace with interactive lessons, games, and practical tools.
          </p>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="courses">Learning Paths</TabsTrigger>
            <TabsTrigger value="games">Interactive Games</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningPaths.map((path, index) => {
                const lessonKey = `${index + 1}-1`;
                const isCompleted = completedLessons.has(lessonKey);
                
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <path.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={path.difficulty === "Beginner" ? "default" : path.difficulty === "Intermediate" ? "secondary" : "destructive"}>
                            {path.difficulty}
                          </Badge>
                          {isCompleted && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Completed
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{path.title}</CardTitle>
                      <CardDescription>{path.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{path.slides} slides</span>
                          <span>{path.duration}</span>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm font-medium">What you'll learn:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {path.topics.map((topic, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-green-500" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
                          <Link to={`/lesson/${index + 1}/1`}>
                            {isCompleted ? 'Review Lesson' : 'Start Lesson'}
                            <Play className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="games" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gameActivities.map((game, index) => (
                <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${game.featured ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-kids rounded-lg flex items-center justify-center">
                          <game.icon className="h-6 w-6 text-white" />
                        </div>
                        {game.featured && <Badge className="bg-primary">Featured</Badge>}
                      </div>
                    </div>
                    <CardTitle>{game.title}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <Users className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                          <p className="text-muted-foreground">{game.players}</p>
                        </div>
                        <div className="text-center">
                          <Target className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                          <p className="text-muted-foreground">{game.difficulty}</p>
                        </div>
                        <div className="text-center">
                          <Timer className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                          <p className="text-muted-foreground">{game.time}</p>
                        </div>
                      </div>
                      <Button className="w-full" variant={game.featured ? "default" : "outline"} asChild>
                        <Link to="/stack-your-future">
                          <Play className="mr-2 h-4 w-4" />
                          Play Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LearningSection;