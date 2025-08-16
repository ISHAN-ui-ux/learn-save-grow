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
      description: "Master the basics of money management for all ages",
      icon: Coins,
      difficulty: "Beginner",
      totalLessons: 8,
      estimatedTime: "2-3 weeks",
      lessons: [
        {
          id: 1,
          title: "What is Money?",
          description: "Understanding the fundamental role and functions of money",
          duration: "15 min",
          difficulty: "Easy",
          topics: ["Functions of Money", "History of Currency", "Modern Payment Systems"]
        },
        {
          id: 2,
          title: "Types of Money",
          description: "Exploring physical currency, digital money, and cryptocurrencies",
          duration: "20 min", 
          difficulty: "Easy",
          topics: ["Physical Currency", "Digital Payments", "Cryptocurrency Basics"]
        },
        {
          id: 3,
          title: "Money Around the World",
          description: "Learning about different currencies and exchange rates",
          duration: "18 min",
          difficulty: "Easy",
          topics: ["World Currencies", "Exchange Rates", "Global Economy"]
        },
        {
          id: 4,
          title: "Earning Money",
          description: "Understanding different ways to earn income",
          duration: "25 min",
          difficulty: "Medium",
          topics: ["Types of Income", "Job Markets", "Entrepreneurship"]
        },
        {
          id: 5,
          title: "Spending Wisely",
          description: "Making smart spending decisions and avoiding common traps",
          duration: "22 min",
          difficulty: "Medium",
          topics: ["Needs vs Wants", "Smart Shopping", "Avoiding Scams"]
        },
        {
          id: 6,
          title: "Introduction to Banking",
          description: "Understanding banks and basic financial services",
          duration: "20 min",
          difficulty: "Easy",
          topics: ["Bank Accounts", "Interest", "Financial Services"]
        },
        {
          id: 7,
          title: "Financial Goal Setting",
          description: "Learning to set and achieve financial goals",
          duration: "25 min",
          difficulty: "Medium",
          topics: ["SMART Goals", "Short vs Long-term", "Goal Tracking"]
        },
        {
          id: 8,
          title: "Money Management Basics",
          description: "Fundamental principles of managing personal finances",
          duration: "30 min",
          difficulty: "Medium",
          topics: ["Financial Planning", "Record Keeping", "Basic Budgeting"]
        }
      ]
    },
    {
      id: 2,
      title: "Smart Spending & Budgeting",
      description: "Learn to make informed spending decisions and create budgets",
      icon: Calculator,
      difficulty: "Beginner",
      totalLessons: 12,
      estimatedTime: "3-4 weeks",
      lessons: [
        {
          id: 1,
          title: "Introduction to Budgeting",
          description: "Understanding what budgets are and why they matter",
          duration: "20 min",
          difficulty: "Easy",
          topics: ["Budget Basics", "Why Budget", "Common Mistakes"]
        },
        {
          id: 2,
          title: "Creating Your First Budget",
          description: "Step-by-step guide to creating a personal budget",
          duration: "35 min",
          difficulty: "Medium",
          topics: ["50/30/20 Rule", "Zero-Based Budgeting", "Envelope Method"]
        },
        // Add more lessons...
      ]
    },
    {
      id: 3,
      title: "Saving & Goal Setting",
      description: "Build emergency funds and work toward financial goals",
      icon: Target,
      difficulty: "Intermediate",
      totalLessons: 10,
      estimatedTime: "4-5 weeks",
      lessons: [
        {
          id: 1,
          title: "The Power of Saving",
          description: "Understanding why saving is crucial for financial success",
          duration: "18 min",
          difficulty: "Easy",
          topics: ["Benefits of Saving", "Compound Interest", "Starting Small"]
        },
        // Add more lessons...
      ]
    },
    {
      id: 4,
      title: "Credit & Banking",
      description: "Understand credit scores, loans, and banking services",
      icon: CreditCard,
      difficulty: "Intermediate",
      totalLessons: 15,
      estimatedTime: "5-6 weeks",
      lessons: [
        {
          id: 1,
          title: "Banking Fundamentals",
          description: "Understanding different types of bank accounts and services",
          duration: "25 min",
          difficulty: "Easy",
          topics: ["Account Types", "Banking Fees", "Choosing a Bank"]
        },
        // Add more lessons...
      ]
    },
    {
      id: 5,
      title: "Investing & Wealth Building",
      description: "Start investing and building long-term wealth",
      icon: TrendingUp,
      difficulty: "Advanced",
      totalLessons: 18,
      estimatedTime: "6-8 weeks",
      lessons: [
        {
          id: 1,
          title: "Investment Basics",
          description: "Introduction to investing and building wealth",
          duration: "30 min",
          difficulty: "Medium",
          topics: ["What is Investing", "Risk vs Return", "Investment Types"]
        },
        // Add more lessons...
      ]
    },
    {
      id: 6,
      title: "Advanced Financial Planning",
      description: "Master comprehensive financial planning strategies",
      icon: Shield,
      difficulty: "Advanced",
      totalLessons: 20,
      estimatedTime: "8-10 weeks",
      lessons: [
        {
          id: 1,
          title: "Comprehensive Financial Planning",
          description: "Creating a complete financial plan for your future",
          duration: "40 min",
          difficulty: "Hard",
          topics: ["Financial Assessment", "Long-term Planning", "Professional Help"]
        },
        // Add more lessons...
      ]
    }
  ];

  const category = categories[categoryIndex];

  if (!category) {
    return <Navigate to="/not-found" replace />;
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
                    {index === 0 ? (
                      <Button asChild>
                        <Link to={`/lesson/${category.id}/${lesson.id}`}>
                          <Play className="h-4 w-4 mr-2" />
                          Start Lesson
                        </Link>
                      </Button>
                    ) : (
                      <Button variant="outline" disabled>
                        <Lock className="h-4 w-4 mr-2" />
                        Locked
                      </Button>
                    )}
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