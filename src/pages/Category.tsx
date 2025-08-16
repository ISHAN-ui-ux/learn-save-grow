import { useParams, Navigate, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronLeft, 
  Play, 
  CheckCircle, 
  Lock, 
  Clock,
  Target,
  Star,
  Coins,
  Calculator,
  CreditCard,
  TrendingUp,
  Shield,
  PiggyBank
} from "lucide-react";

export default function Category() {
  const { categoryId } = useParams();
  
  const categoryIndex = parseInt(categoryId || "1") - 1;

  const categories = [
    {
      id: 1,
      title: "Financial Foundations",
      description: "Master the basics of money management for all ages - One comprehensive slideshow",
      icon: Coins,
      difficulty: "Beginner",
      totalLessons: 1,
      estimatedTime: "30-45 min",
      lessons: [
        {
          id: 1,
          title: "Financial Foundations - Complete Slideshow",
          description: "One comprehensive slideshow covering all money management basics with interactive activities",
          duration: "45 min",
          difficulty: "Beginner",
          topics: ["Money Basics", "Banking", "Budgeting", "Saving", "Smart Spending"]
        }
      ]
    },
    {
      id: 2,
      title: "Smart Spending & Budgeting",
      description: "Learn budgeting and smart spending - One comprehensive slideshow",
      icon: Calculator,
      difficulty: "Beginner",
      totalLessons: 1,
      estimatedTime: "30-45 min",
      lessons: [
        {
          id: 1,
          title: "Smart Spending & Budgeting - Complete Slideshow",
          description: "One comprehensive slideshow covering budgeting strategies and smart spending with interactive activities",
          duration: "45 min",
          difficulty: "Beginner",
          topics: ["Budget Creation", "Expense Tracking", "Needs vs Wants", "Shopping Strategies"]
        }
      ]
    },
    {
      id: 3,
      title: "Saving & Goal Setting",
      description: "Build emergency funds and achieve goals - One comprehensive slideshow",
      icon: Target,
      difficulty: "Intermediate",
      totalLessons: 1,
      estimatedTime: "30-45 min",
      lessons: [
        {
          id: 1,
          title: "Saving & Goal Setting - Complete Slideshow",
          description: "One comprehensive slideshow covering saving strategies and goal achievement with interactive activities",
          duration: "45 min",
          difficulty: "Intermediate",
          topics: ["Emergency Funds", "Savings Goals", "Compound Interest", "Automated Saving"]
        }
      ]
    },
    {
      id: 4,
      title: "Credit & Banking",
      description: "Understand credit and banking - One comprehensive slideshow",
      icon: CreditCard,
      difficulty: "Intermediate",
      totalLessons: 1,
      estimatedTime: "30-45 min",
      lessons: [
        {
          id: 1,
          title: "Credit & Banking - Complete Slideshow",
          description: "One comprehensive slideshow covering credit scores, banking, and loans with interactive activities",
          duration: "45 min",
          difficulty: "Intermediate",
          topics: ["Credit Scores", "Bank Accounts", "Loans", "Credit Cards", "Financial Services"]
        }
      ]
    },
    {
      id: 5,
      title: "Investing & Wealth Building",
      description: "Start investing and building wealth - One comprehensive slideshow",
      icon: TrendingUp,
      difficulty: "Advanced",
      totalLessons: 1,
      estimatedTime: "45-60 min",
      lessons: [
        {
          id: 1,
          title: "Investing & Wealth Building - Complete Slideshow",
          description: "One comprehensive slideshow covering investment basics and wealth building with interactive activities",
          duration: "60 min",
          difficulty: "Advanced",
          topics: ["Investment Types", "Stock Market", "Retirement Accounts", "Risk Management", "Portfolio Building"]
        }
      ]
    },
    {
      id: 6,
      title: "Advanced Financial Planning",
      description: "Master financial planning - One comprehensive slideshow",
      icon: Shield,
      difficulty: "Advanced",
      totalLessons: 1,
      estimatedTime: "45-60 min",
      lessons: [
        {
          id: 1,
          title: "Advanced Financial Planning - Complete Slideshow",
          description: "One comprehensive slideshow covering comprehensive financial planning with interactive activities",
          duration: "60 min",
          difficulty: "Advanced",
          topics: ["Tax Planning", "Insurance", "Estate Planning", "Business Finance", "Advanced Strategies"]
        }
      ]
    }
  ];

  const category = categories.find(cat => cat.id === parseInt(categoryId || "1"));

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const IconComponent = category.icon;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Learning Paths
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{category.title}</h1>
            <p className="text-xl text-muted-foreground">{category.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Badge variant={category.difficulty === "Beginner" ? "default" : category.difficulty === "Intermediate" ? "secondary" : "destructive"}>
            {category.difficulty}
          </Badge>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{category.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Target className="h-4 w-4" />
            <span>{category.totalLessons} lessons</span>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Completed: 0 of {category.totalLessons} lessons</span>
                <span>0%</span>
              </div>
              <Progress value={0} className="h-2" />
              <p className="text-sm text-muted-foreground">
                Start your journey with the first lesson below!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lessons Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Lessons</h2>
        
        <div className="grid gap-4">
          {category.lessons.map((lesson, index) => (
            <Card key={lesson.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  {/* Lesson Number */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{lesson.id}</span>
                  </div>

                  {/* Lesson Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {lesson.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {lesson.difficulty}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{lesson.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {lesson.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        {lesson.topics.length} topics
                      </div>
                    </div>

                    {/* Topics Preview */}
                    <div className="mt-3">
                      <div className="flex flex-wrap gap-1">
                        {lesson.topics.map((topic, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Button asChild>
                      <Link to={`/lesson/${category.id}/${lesson.id}`}>
                        <Play className="h-4 w-4 mr-2" />
                        Start Lesson
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Ready to Begin?</CardTitle>
          <CardDescription>
            Start with the first lesson and unlock your path to financial literacy!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="lg" asChild>
            <Link to={`/lesson/${category.id}/1`}>
              <Play className="h-5 w-5 mr-2" />
              Start First Lesson
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}