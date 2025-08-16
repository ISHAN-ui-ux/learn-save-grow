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
        {
          id: 2,
          title: "Creating Your First Budget",
          description: "Step-by-step guide to creating a personal budget",
          duration: "35 min",
          difficulty: "Medium",
          topics: ["50/30/20 Rule", "Zero-Based Budgeting", "Envelope Method"]
        },
        {
          id: 3,
          title: "Tracking Your Expenses",
          description: "Tools and techniques for monitoring spending",
          duration: "25 min",
          difficulty: "Easy",
          topics: ["Expense Apps", "Receipt Tracking", "Monthly Reviews"]
        },
        {
          id: 4,
          title: "Needs vs Wants",
          description: "Learning to distinguish between essential and optional expenses",
          duration: "20 min",
          difficulty: "Easy",
          topics: ["Priority Setting", "Decision Making", "Value Assessment"]
        },
        {
          id: 5,
          title: "Smart Shopping Strategies",
          description: "Getting the best value for your money",
          duration: "30 min",
          difficulty: "Medium",
          topics: ["Comparison Shopping", "Coupons", "Bulk Buying", "Sales Timing"]
        },
        {
          id: 6,
          title: "Avoiding Budget Busters",
          description: "Common spending traps and how to avoid them",
          duration: "25 min",
          difficulty: "Medium",
          topics: ["Impulse Buying", "Subscription Creep", "Social Pressure"]
        },
        {
          id: 7,
          title: "Adjusting Your Budget",
          description: "How to modify budgets when life changes",
          duration: "20 min",
          difficulty: "Medium",
          topics: ["Life Changes", "Income Fluctuations", "Goal Updates"]
        },
        {
          id: 8,
          title: "Budget Success Stories",
          description: "Real-world examples of successful budgeting",
          duration: "18 min",
          difficulty: "Easy",
          topics: ["Case Studies", "Common Challenges", "Success Strategies"]
        }
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
        {
          id: 2,
          title: "Building Your Emergency Fund",
          description: "Creating a financial safety net for unexpected expenses",
          duration: "25 min",
          difficulty: "Medium",
          topics: ["Emergency Fund Size", "Where to Keep It", "When to Use It"]
        },
        {
          id: 3,
          title: "Short-Term Savings Goals",
          description: "Planning and saving for near-future purchases",
          duration: "22 min",
          difficulty: "Easy",
          topics: ["Goal Setting", "Saving Strategies", "Timeline Planning"]
        },
        {
          id: 4,
          title: "Long-Term Financial Planning",
          description: "Building wealth for major life goals",
          duration: "35 min",
          difficulty: "Hard",
          topics: ["Retirement Planning", "Major Purchases", "Life Events"]
        },
        {
          id: 5,
          title: "Understanding Compound Interest",
          description: "The power of time and growth in investing",
          duration: "28 min",
          difficulty: "Medium",
          topics: ["Compound Growth", "Time Value", "Investment Returns"]
        },
        {
          id: 6,
          title: "Savings Account Options",
          description: "Choosing the right accounts for your savings",
          duration: "20 min",
          difficulty: "Easy",
          topics: ["Account Types", "Interest Rates", "Fees and Requirements"]
        },
        {
          id: 7,
          title: "Automating Your Savings",
          description: "Making saving effortless through automation",
          duration: "18 min",
          difficulty: "Medium",
          topics: ["Auto-transfers", "Direct Deposit", "Apps and Tools"]
        },
        {
          id: 8,
          title: "Overcoming Saving Challenges",
          description: "Common obstacles and how to overcome them",
          duration: "25 min",
          difficulty: "Medium",
          topics: ["Low Income Saving", "Motivation", "Setbacks"]
        }
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
        {
          id: 2,
          title: "Understanding Credit Scores",
          description: "How credit scores work and why they matter",
          duration: "30 min",
          difficulty: "Medium",
          topics: ["Credit Reports", "Score Factors", "Improving Credit"]
        },
        {
          id: 3,
          title: "Types of Bank Accounts",
          description: "Choosing the right accounts for your needs",
          duration: "25 min",
          difficulty: "Easy",
          topics: ["Checking Accounts", "Savings Accounts", "CDs", "Money Market"]
        },
        {
          id: 4,
          title: "Introduction to Credit Cards",
          description: "Using credit cards responsibly",
          duration: "35 min",
          difficulty: "Medium",
          topics: ["How Credit Works", "Interest Rates", "Responsible Use"]
        },
        {
          id: 5,
          title: "Building Credit History",
          description: "Establishing and maintaining good credit",
          duration: "28 min",
          difficulty: "Medium",
          topics: ["First Credit Card", "Payment History", "Credit Mix"]
        },
        {
          id: 6,
          title: "Understanding Loans",
          description: "Different types of loans and when to use them",
          duration: "32 min",
          difficulty: "Hard",
          topics: ["Personal Loans", "Auto Loans", "Student Loans", "Mortgages"]
        },
        {
          id: 7,
          title: "Banking Fees and How to Avoid Them",
          description: "Understanding bank fees and minimizing costs",
          duration: "22 min",
          difficulty: "Easy",
          topics: ["Common Fees", "Fee Avoidance", "Account Management"]
        },
        {
          id: 8,
          title: "Online vs Traditional Banking",
          description: "Choosing between online and brick-and-mortar banks",
          duration: "20 min",
          difficulty: "Easy",
          topics: ["Online Banks", "Traditional Banks", "Hybrid Options"]
        }
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
        {
          id: 2,
          title: "Stock Market Basics",
          description: "Understanding how the stock market works",
          duration: "40 min",
          difficulty: "Hard",
          topics: ["Stock Exchanges", "Market Orders", "Bull vs Bear Markets"]
        },
        {
          id: 3,
          title: "Introduction to Mutual Funds",
          description: "Diversified investing made simple",
          duration: "35 min",
          difficulty: "Medium",
          topics: ["Fund Types", "Expense Ratios", "Active vs Passive"]
        },
        {
          id: 4,
          title: "Retirement Accounts (401k, IRA)",
          description: "Tax-advantaged retirement savings",
          duration: "45 min",
          difficulty: "Hard",
          topics: ["Account Types", "Contribution Limits", "Tax Benefits"]
        },
        {
          id: 5,
          title: "Portfolio Diversification",
          description: "Spreading risk across different investments",
          duration: "38 min",
          difficulty: "Hard",
          topics: ["Asset Classes", "Risk Management", "Rebalancing"]
        },
        {
          id: 6,
          title: "Understanding Investment Risk",
          description: "Risk tolerance and investment strategy",
          duration: "30 min",
          difficulty: "Medium",
          topics: ["Risk Types", "Risk Assessment", "Risk vs Return"]
        },
        {
          id: 7,
          title: "Dollar-Cost Averaging",
          description: "A systematic approach to investing",
          duration: "25 min",
          difficulty: "Medium",
          topics: ["Regular Investing", "Market Timing", "Automation"]
        },
        {
          id: 8,
          title: "Investment Fees and Taxes",
          description: "Understanding costs that impact returns",
          duration: "32 min",
          difficulty: "Hard",
          topics: ["Management Fees", "Tax Implications", "Cost Minimization"]
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