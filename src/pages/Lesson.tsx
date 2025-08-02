import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Trophy,
  Play,
  Home,
  UtensilsCrossed,
  Film,
  PiggyBank,
  Calculator,
  ShoppingCart,
  Target,
  Coins,
  DollarSign,
  CreditCard,
  TrendingUp,
  Building,
  Gamepad2,
  Users
} from "lucide-react";

const Lesson = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [lessonProgress, setLessonProgress] = useState<Record<string, boolean>>({});

  const lessons = [
    {
      id: 1,
      title: "What is Money?",
      description: "Learn about coins, bills, and digital money",
      duration: "10 min",
      icon: Coins,
      difficulty: "Easy",
      steps: [
        {
          title: "Introduction to Money",
          content: "Money is something we use to buy things we need and want. It comes in different forms!",
          activity: "Look at the different types of money below:"
        },
        {
          title: "Coins and Bills",
          content: "Physical money includes coins (like pennies, nickels, dimes, quarters) and bills (like $1, $5, $10, $20).",
          activity: "Can you count these coins? 🪙 🪙 🪙 = ?"
        },
        {
          title: "Digital Money",
          content: "Today, we also use digital money - like when parents use cards or phones to pay for things!",
          activity: "Think of times you've seen digital payments being used."
        },
        {
          title: "Quiz Time!",
          content: "Test what you've learned about money!",
          activity: "Complete the quiz to finish this lesson."
        }
      ]
    },
    {
      id: 2,
      title: "Earning Money",
      description: "Discover different ways to earn money as a kid",
      duration: "15 min",
      icon: PiggyBank,
      difficulty: "Easy",
      steps: [
        {
          title: "How Do People Earn Money?",
          content: "People work to earn money. This means they do jobs that help others and get paid for it!",
          activity: "Think about jobs you know - what do these people do?"
        },
        {
          title: "Ways Kids Can Earn Money",
          content: "Even kids can earn money by helping around the house, selling lemonade, or doing small jobs for neighbors.",
          activity: "List 3 ways you could earn money as a kid."
        },
        {
          title: "Allowance and Chores",
          content: "Many kids earn money by doing chores at home and receiving an allowance from their parents.",
          activity: "What chores could you do to earn money?"
        },
        {
          title: "Earning Money Game",
          content: "Let's play a game about earning money!",
          activity: "Match the job with how much money they might earn."
        }
      ]
    },
    {
      id: 3,
      title: "Budget Battle Game",
      description: "Master budgeting with our interactive game",
      duration: "20 min",
      icon: Calculator,
      difficulty: "Medium",
      steps: [
        {
          title: "What is a Budget?",
          content: "A budget is a plan for how to spend your money. It helps you make sure you have enough for what you need!",
          activity: "Think about what you need vs. what you want."
        },
        {
          title: "Budget Categories",
          content: "We organize our spending into categories like: Needs (rent, food) and Wants (entertainment, toys).",
          activity: "Drag expenses into the right categories!"
        },
        {
          title: "The $250 Challenge",
          content: "You have $250 to budget for the month. Can you allocate it wisely across all categories?",
          activity: "Play the Budget Battle game!"
        },
        {
          title: "Budget Mastery",
          content: "Great job! You've learned how to create a budget and stick to it.",
          activity: "Review your budget choices and see how you did."
        }
      ]
    },
    {
      id: 4,
      title: "Smart Spending Choices",
      description: "Learn the difference between wants and needs",
      duration: "12 min",
      icon: ShoppingCart,
      difficulty: "Medium",
      steps: [
        {
          title: "Needs vs Wants",
          content: "Needs are things you must have to live (food, shelter, clothes). Wants are nice to have but not essential.",
          activity: "Sort these items into needs and wants."
        },
        {
          title: "Making Smart Choices",
          content: "When shopping, always think: Do I need this or do I just want it?",
          activity: "Practice making spending decisions!"
        },
        {
          title: "The Shopping Game",
          content: "You have $50 to spend. Choose wisely between needs and wants!",
          activity: "Complete the shopping challenge."
        }
      ]
    },
    {
      id: 5,
      title: "Savings Superhero",
      description: "Set goals and track your saving progress",
      duration: "18 min",
      icon: Target,
      difficulty: "Medium",
      steps: [
        {
          title: "Why Save Money?",
          content: "Saving money helps you buy bigger things later and prepares you for emergencies!",
          activity: "Think of something you'd like to save up for."
        },
        {
          title: "Setting Savings Goals",
          content: "A savings goal is something specific you want to buy and how much money you need.",
          activity: "Set your first savings goal!"
        },
        {
          title: "Tracking Progress",
          content: "Keep track of how much you've saved toward your goal. Celebrate small wins!",
          activity: "Use our savings tracker tool."
        },
        {
          title: "Savings Strategies",
          content: "Learn different ways to save money faster and smarter.",
          activity: "Choose your savings strategy."
        }
      ]
    },
    {
      id: 6,
      title: "Investment Explorer",
      description: "Understand how money can grow over time",
      duration: "25 min",
      icon: TrendingUp,
      difficulty: "Hard",
      steps: [
        {
          title: "What is Investing?",
          content: "Investing means putting your money into something that might grow and give you more money back later.",
          activity: "Learn about different types of investments."
        },
        {
          title: "How Money Grows",
          content: "When you invest, your money can grow over time through something called compound interest.",
          activity: "See how $10 can become $20 over time!"
        },
        {
          title: "Investment Simulation",
          content: "Try our investment game to see how your money could grow!",
          activity: "Play the investment simulator."
        }
      ]
    },
    {
      id: 7,
      title: "Money Counter Master",
      description: "Practice counting coins and making change",
      duration: "15 min",
      icon: Coins,
      difficulty: "Easy",
      steps: [
        {
          title: "Coin Values",
          content: "Learn the value of each coin: penny (1¢), nickel (5¢), dime (10¢), quarter (25¢).",
          activity: "Practice identifying coins."
        },
        {
          title: "Counting Practice",
          content: "Count different combinations of coins to find the total value.",
          activity: "Solve coin counting puzzles!"
        },
        {
          title: "Making Change",
          content: "Learn how to make change when buying something.",
          activity: "Practice the change-making game."
        }
      ]
    },
    {
      id: 8,
      title: "Credit Card Basics",
      description: "Understand how credit cards work",
      duration: "20 min",
      icon: CreditCard,
      difficulty: "Hard",
      steps: [
        {
          title: "What is Credit?",
          content: "Credit is borrowed money that you promise to pay back later.",
          activity: "Learn about responsible credit use."
        },
        {
          title: "Credit Card Simulation",
          content: "See what happens when you use credit cards responsibly vs. irresponsibly.",
          activity: "Play the credit card game."
        }
      ]
    },
    {
      id: 9,
      title: "Banking Basics",
      description: "Learn about banks and how they work",
      duration: "18 min",
      icon: Building,
      difficulty: "Medium",
      steps: [
        {
          title: "What Do Banks Do?",
          content: "Banks keep your money safe and help it grow through interest.",
          activity: "Explore different bank services."
        },
        {
          title: "Opening Your First Account",
          content: "Learn what you need to open a bank account.",
          activity: "Bank account simulation game."
        }
      ]
    },
    {
      id: 10,
      title: "Entrepreneurship for Kids",
      description: "Start your own mini business",
      duration: "30 min",
      icon: Building,
      difficulty: "Hard",
      steps: [
        {
          title: "Business Ideas for Kids",
          content: "Explore fun business ideas like lemonade stands, pet sitting, or tutoring.",
          activity: "Choose your business idea."
        },
        {
          title: "Business Planning",
          content: "Learn how to plan your business and calculate costs and profits.",
          activity: "Create your business plan."
        }
      ]
    },
    {
      id: 11,
      title: "Money Around the World",
      description: "Discover different currencies globally",
      duration: "16 min",
      icon: DollarSign,
      difficulty: "Medium",
      steps: [
        {
          title: "Global Currencies",
          content: "Different countries use different money called currencies.",
          activity: "Match countries with their currencies."
        },
        {
          title: "Exchange Rates",
          content: "Learn how money from one country compares to money from another.",
          activity: "Currency conversion game."
        }
      ]
    },
    {
      id: 12,
      title: "Digital Money & Apps",
      description: "Understanding digital payments",
      duration: "22 min",
      icon: Gamepad2,
      difficulty: "Medium",
      steps: [
        {
          title: "Digital Wallets",
          content: "Learn about apps that hold digital money safely.",
          activity: "Explore digital payment safety."
        },
        {
          title: "Online Shopping Safety",
          content: "Stay safe when buying things online.",
          activity: "Online safety quiz."
        }
      ]
    },
    {
      id: 13,
      title: "Taxes for Beginners",
      description: "Understanding what taxes are",
      duration: "14 min",
      icon: Calculator,
      difficulty: "Hard",
      steps: [
        {
          title: "What Are Taxes?",
          content: "Taxes are money we pay to the government to fund public services.",
          activity: "Learn about what taxes pay for."
        },
        {
          title: "Simple Tax Calculation",
          content: "Practice calculating basic sales tax.",
          activity: "Tax calculation game."
        }
      ]
    },
    {
      id: 14,
      title: "Money and Friends",
      description: "Handling money in social situations",
      duration: "17 min",
      icon: Users,
      difficulty: "Medium",
      steps: [
        {
          title: "Lending Money to Friends",
          content: "Learn when and how to lend money to friends safely.",
          activity: "Social money scenarios."
        },
        {
          title: "Group Expenses",
          content: "How to fairly split costs when doing activities with friends.",
          activity: "Bill splitting practice."
        }
      ]
    },
    {
      id: 15,
      title: "Money Mastery Quiz",
      description: "Test everything you've learned",
      duration: "25 min",
      icon: Trophy,
      difficulty: "Hard",
      steps: [
        {
          title: "Final Challenge",
          content: "Put all your money knowledge to the test in this comprehensive quiz!",
          activity: "Complete the Money Mastery Challenge."
        },
        {
          title: "Graduation Ceremony",
          content: "Congratulations! You're now a certified Money Hero!",
          activity: "Claim your Money Hero certificate."
        }
      ]
    }
  ];

  const currentLesson = lessons.find(lesson => lesson.id === parseInt(lessonId || "1"));
  
  useEffect(() => {
    // Load lesson progress from localStorage
    const saved = localStorage.getItem('lessonProgress');
    if (saved) {
      setLessonProgress(JSON.parse(saved));
    }
  }, []);

  const markLessonComplete = (lessonId: number) => {
    const updated = { ...lessonProgress, [lessonId]: true };
    setLessonProgress(updated);
    localStorage.setItem('lessonProgress', JSON.stringify(updated));
    setIsCompleted(true);
  };

  const nextStep = () => {
    if (currentLesson && currentStep < currentLesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentLesson) {
      markLessonComplete(currentLesson.id);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextLesson = () => {
    if (currentLesson && currentLesson.id < 15) {
      navigate(`/lesson/${currentLesson.id + 1}`);
      setCurrentStep(0);
      setIsCompleted(false);
    }
  };

  if (!currentLesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  const LessonIcon = currentLesson.icon;
  const progress = ((currentStep + 1) / currentLesson.steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation Header */}
      <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className={`
                ${currentLesson.difficulty === 'Easy' ? 'border-green-400 text-green-600' :
                  currentLesson.difficulty === 'Medium' ? 'border-yellow-400 text-yellow-600' :
                  'border-red-400 text-red-600'}
              `}>
                {currentLesson.difficulty}
              </Badge>
              <span className="text-sm text-muted-foreground">{currentLesson.duration}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Lesson Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center">
              <LessonIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-kids-primary">
                Lesson {currentLesson.id}: {currentLesson.title}
              </h1>
              <p className="text-muted-foreground">{currentLesson.description}</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Step {currentStep + 1} of {currentLesson.steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </div>

        {/* Lesson Content */}
        {!isCompleted ? (
          <Card className="max-w-4xl mx-auto border-2 border-kids-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-kids-primary">
                {currentLesson.steps[currentStep]?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  {currentLesson.steps[currentStep]?.content}
                </p>
                
                {/* Interactive Activity Area */}
                <div className="bg-kids-primary/10 rounded-xl p-8 mb-6">
                  <h3 className="text-xl font-semibold text-kids-primary mb-4">
                    🎯 Activity Time!
                  </h3>
                  <p className="text-muted-foreground">
                    {currentLesson.steps[currentStep]?.activity}
                  </p>
                  
                  {/* Activity Placeholder */}
                  <div className="mt-6 p-6 bg-white/50 rounded-lg border-2 border-dashed border-kids-accent/30">
                    <Play className="h-12 w-12 text-kids-accent mx-auto mb-4" />
                    <p className="text-kids-primary font-semibold">Interactive Activity Coming Soon!</p>
                    <p className="text-sm text-muted-foreground">
                      This is where the interactive lesson content will be displayed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-6">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <div className="text-center">
                  <Badge variant="secondary">
                    {currentStep + 1} / {currentLesson.steps.length}
                  </Badge>
                </div>

                <Button 
                  variant="kids" 
                  onClick={nextStep}
                  className="flex items-center gap-2"
                >
                  {currentStep === currentLesson.steps.length - 1 ? 'Complete Lesson' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Lesson Complete */
          <Card className="max-w-2xl mx-auto border-2 border-green-400/50 bg-green-50/50">
            <CardContent className="text-center p-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Lesson Complete! 🎉
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Great job completing "{currentLesson.title}"! You've earned 150 XP.
              </p>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <span className="ml-2 text-lg font-semibold">+150 XP</span>
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => navigate('/')}>
                  Back to Curriculum
                </Button>
                {currentLesson.id < 15 && (
                  <Button variant="kids" onClick={nextLesson} className="flex items-center gap-2">
                    Next Lesson
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Lesson;