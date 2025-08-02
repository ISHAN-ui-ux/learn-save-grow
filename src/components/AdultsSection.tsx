import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Calculator, 
  CreditCard, 
  TrendingUp, 
  PiggyBank, 
  Home, 
  Car, 
  GraduationCap,
  Shield,
  Building,
  Target,
  Clock,
  DollarSign,
  FileText,
  Users,
  Briefcase,
  Heart,
  Banknote,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Trophy,
  LineChart,
  Wallet,
  CreditCard as Card2,
  Smartphone
} from "lucide-react";

const AdultsSection = () => {
  const financialGoals = [
    { 
      title: "Emergency Fund", 
      target: 10000, 
      current: 6500, 
      icon: Shield, 
      color: "bg-red-500",
      deadline: "6 months"
    },
    { 
      title: "House Down Payment", 
      target: 50000, 
      current: 23000, 
      icon: Home, 
      color: "bg-blue-500",
      deadline: "2 years"
    },
    { 
      title: "Retirement Fund", 
      target: 500000, 
      current: 125000, 
      icon: PiggyBank, 
      color: "bg-green-500",
      deadline: "15 years"
    },
    { 
      title: "Car Purchase", 
      target: 25000, 
      current: 18500, 
      icon: Car, 
      color: "bg-purple-500",
      deadline: "8 months"
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Personal Finance Mastery",
      description: "Complete guide to managing your personal finances",
      modules: 12,
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 2847,
      price: "$99",
      featured: true
    },
    {
      id: 2,
      title: "Investment Strategies & Portfolio Management",
      description: "Learn to build and manage a diversified investment portfolio",
      modules: 15,
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.9,
      students: 1923,
      price: "$149"
    },
    {
      id: 3,
      title: "Tax Optimization & Planning",
      description: "Maximize your tax savings with advanced strategies",
      modules: 10,
      duration: "4 weeks",
      level: "Advanced",
      rating: 4.7,
      students: 856,
      price: "$199"
    },
    {
      id: 4,
      title: "Real Estate Investment",
      description: "Build wealth through real estate investing",
      modules: 14,
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 1456,
      price: "$179"
    },
    {
      id: 5,
      title: "Retirement Planning Strategies",
      description: "Secure your financial future with proper retirement planning",
      modules: 11,
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 2134,
      price: "$129"
    },
    {
      id: 6,
      title: "Debt Management & Credit Repair",
      description: "Eliminate debt and build excellent credit",
      modules: 8,
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 3421,
      price: "$79"
    }
  ];

  const tools = [
    {
      name: "Budget Tracker Pro",
      description: "Advanced budgeting with AI-powered insights",
      icon: Calculator,
      color: "bg-blue-500",
      features: ["Real-time tracking", "AI insights", "Goal setting", "Reports"]
    },
    {
      name: "Investment Analyzer",
      description: "Portfolio analysis and optimization tools",
      icon: TrendingUp,
      color: "bg-green-500",
      features: ["Portfolio analysis", "Risk assessment", "Rebalancing", "Performance tracking"]
    },
    {
      name: "Debt Optimizer",
      description: "Strategic debt elimination planning",
      icon: CreditCard,
      color: "bg-red-500",
      features: ["Payoff strategies", "Interest calculators", "Credit monitoring", "Payment plans"]
    },
    {
      name: "Retirement Planner",
      description: "Comprehensive retirement planning calculator",
      icon: PiggyBank,
      color: "bg-purple-500",
      features: ["Retirement goals", "Contribution planning", "Social Security", "Withdrawal strategies"]
    },
    {
      name: "Tax Optimizer",
      description: "Maximize tax savings and deductions",
      icon: FileText,
      color: "bg-orange-500",
      features: ["Deduction finder", "Tax planning", "Withholding calculator", "Strategy recommendations"]
    },
    {
      name: "Net Worth Tracker",
      description: "Track and grow your net worth over time",
      icon: BarChart3,
      color: "bg-indigo-500",
      features: ["Asset tracking", "Liability monitoring", "Growth analysis", "Goal setting"]
    }
  ];

  const achievements = [
    { title: "Budget Master", icon: Calculator, earned: true, description: "Created and followed a budget for 3 months" },
    { title: "Debt Slayer", icon: CreditCard, earned: true, description: "Paid off $10,000 in debt" },
    { title: "Investment Rookie", icon: TrendingUp, earned: false, description: "Made your first investment" },
    { title: "Emergency Ready", icon: Shield, earned: false, description: "Built a 6-month emergency fund" },
    { title: "Homeowner", icon: Home, earned: false, description: "Purchased your first home" },
    { title: "Retirement Saver", icon: PiggyBank, earned: false, description: "Contributed to retirement for 12 months" }
  ];

  return (
    <section id="adults" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-trust bg-clip-text text-transparent">Professional</span>
            <br />
            Financial Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take control of your financial future with advanced tools, courses, and strategies designed for modern adults.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Financial Health Dashboard */}
            <Card className="border-2 border-trust-blue/20 bg-gradient-to-br from-trust-blue/5 to-growth-green/5">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-trust-blue">Your Financial Health Score</CardTitle>
                <CardDescription>Based on your current financial profile</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-trust-blue mb-2">78</div>
                  <Badge variant="secondary" className="bg-trust-blue/20 text-trust-blue">Good</Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold">Emergency Fund</div>
                    <div className="text-lg font-bold text-green-600">85%</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold">Debt Ratio</div>
                    <div className="text-lg font-bold text-blue-600">32%</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold">Investments</div>
                    <div className="text-lg font-bold text-purple-600">68%</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <PiggyBank className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold">Savings Rate</div>
                    <div className="text-lg font-bold text-orange-600">22%</div>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="trust" size="lg">
                    Get Personalized Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Budget Planner</h3>
                  <p className="text-sm text-muted-foreground">Create and manage budgets</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Investment Tracker</h3>
                  <p className="text-sm text-muted-foreground">Monitor your portfolio</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Debt Manager</h3>
                  <p className="text-sm text-muted-foreground">Eliminate debt faster</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Goal Tracker</h3>
                  <p className="text-sm text-muted-foreground">Track financial goals</p>
                </CardContent>
              </Card>
            </div>

            {/* Featured Learning Paths */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Featured Learning Paths</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 border-trust-blue/30 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <Badge className="w-fit bg-trust-blue">MOST POPULAR</Badge>
                    <CardTitle className="text-trust-blue">Financial Independence</CardTitle>
                    <CardDescription>Master the fundamentals of achieving financial freedom</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="text-trust-blue font-semibold">3/8 modules</span>
                      </div>
                      <Progress value={37.5} />
                    </div>
                    <Button variant="outline" className="w-full border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white">
                      Continue Learning
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-growth-green/30 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <Badge className="w-fit bg-growth-green">NEW</Badge>
                    <CardTitle className="text-growth-green">Investment Mastery</CardTitle>
                    <CardDescription>Build wealth through smart investing strategies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="text-growth-green font-semibold">0/12 modules</span>
                      </div>
                      <Progress value={0} />
                    </div>
                    <Button variant="outline" className="w-full border-growth-green text-growth-green hover:bg-growth-green hover:text-white">
                      Start Course
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-400/30 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <Badge className="w-fit bg-orange-500">ADVANCED</Badge>
                    <CardTitle className="text-orange-600">Tax Optimization</CardTitle>
                    <CardDescription>Advanced strategies to minimize your tax burden</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="text-orange-600 font-semibold">7/10 modules</span>
                      </div>
                      <Progress value={70} />
                    </div>
                    <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
                      Continue Learning
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Professional Financial Courses</h3>
              <p className="text-muted-foreground">Expert-led courses designed for serious financial growth</p>
            </div>

            <div className="grid gap-6">
              {courses.map((course) => (
                <Card key={course.id} className={`border-2 transition-all duration-300 hover:shadow-lg ${course.featured ? 'border-trust-blue/50 bg-trust-blue/5' : 'border-gray-200'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="text-xl font-semibold">{course.title}</h4>
                          {course.featured && <Badge className="bg-trust-blue">FEATURED</Badge>}
                        </div>
                        <p className="text-muted-foreground mb-4">{course.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Modules:</span>
                            <div className="font-semibold">{course.modules}</div>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Duration:</span>
                            <div className="font-semibold">{course.duration}</div>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Level:</span>
                            <Badge variant="outline" className={`
                              ${course.level === 'Beginner' ? 'border-green-400 text-green-600' :
                                course.level === 'Intermediate' ? 'border-yellow-400 text-yellow-600' :
                                'border-red-400 text-red-600'}
                            `}>
                              {course.level}
                            </Badge>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Students:</span>
                            <div className="font-semibold">{course.students.toLocaleString()}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <div key={star} className={`w-4 h-4 ${star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                  ⭐
                                </div>
                              ))}
                            </div>
                            <span className="text-sm font-semibold">{course.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-trust-blue mb-4">{course.price}</div>
                        <Button variant={course.featured ? "default" : "outline"} className="mb-2">
                          Enroll Now
                        </Button>
                        <div>
                          <Button variant="ghost" size="sm">Preview</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tools Tab */}
          <TabsContent value="tools" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Professional Financial Tools</h3>
              <p className="text-muted-foreground">Advanced calculators and planners for comprehensive financial management</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-trust-blue/50 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full hover:bg-trust-blue hover:text-white">
                      Launch Tool
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Goals Tab */}
          <TabsContent value="goals" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Your Financial Goals</h3>
              <p className="text-muted-foreground">Track and achieve your most important financial objectives</p>
            </div>

            <div className="grid gap-6">
              {financialGoals.map((goal, index) => {
                const progress = (goal.current / goal.target) * 100;
                const GoalIcon = goal.icon;
                
                return (
                  <Card key={index} className="border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${goal.color} rounded-full flex items-center justify-center`}>
                            <GoalIcon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold">{goal.title}</h4>
                            <p className="text-sm text-muted-foreground">Target: {goal.deadline}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className={`
                          ${progress >= 80 ? 'border-green-400 text-green-600' :
                            progress >= 50 ? 'border-yellow-400 text-yellow-600' :
                            'border-red-400 text-red-600'}
                        `}>
                          {Math.round(progress)}% Complete
                        </Badge>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Current: ${goal.current.toLocaleString()}</span>
                          <span>Target: ${goal.target.toLocaleString()}</span>
                        </div>
                        <Progress value={progress} />
                        <div className="text-sm text-muted-foreground">
                          ${(goal.target - goal.current).toLocaleString()} remaining
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Update Progress</Button>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Button variant="trust" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Add New Goal
              </Button>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Financial Achievements</h3>
              <p className="text-muted-foreground">Celebrate your financial milestones and unlock new badges</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`
                  border-2 transition-all duration-300 hover:scale-105
                  ${achievement.earned ? 'border-yellow-400/50 bg-yellow-50/50' : 'border-gray-300/50 bg-gray-50/50 opacity-75'}
                `}>
                  <CardContent className="p-6 text-center">
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4
                      ${achievement.earned ? 'bg-yellow-400' : 'bg-gray-400'}
                    `}>
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                    <Badge variant={achievement.earned ? "default" : "secondary"} className={
                      achievement.earned ? "bg-yellow-400 text-yellow-900" : ""
                    }>
                      {achievement.earned ? "Earned!" : "In Progress"}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Financial Community</h3>
              <p className="text-muted-foreground">Connect with like-minded individuals on their financial journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-trust-blue/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Discussion Forums
                  </CardTitle>
                  <CardDescription>Join conversations about financial topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-sm">💰 Investment Strategies</div>
                      <div className="text-xs text-muted-foreground">847 members • 23 new posts today</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-sm">🏠 Real Estate Investing</div>
                      <div className="text-xs text-muted-foreground">532 members • 15 new posts today</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-sm">🎯 FIRE Community</div>
                      <div className="text-xs text-muted-foreground">1,234 members • 41 new posts today</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Join Discussions
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-growth-green/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Expert Sessions
                  </CardTitle>
                  <CardDescription>Live sessions with financial experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-sm">Market Analysis Webinar</div>
                      <div className="text-xs text-muted-foreground">Tomorrow, 2:00 PM EST</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-sm">Tax Season Q&A</div>
                      <div className="text-xs text-muted-foreground">Friday, 7:00 PM EST</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-sm">Retirement Planning Workshop</div>
                      <div className="text-xs text-muted-foreground">Next Monday, 1:00 PM EST</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Register for Events
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-purple-400/20">
              <CardHeader>
                <CardTitle className="text-center">Success Stories</CardTitle>
                <CardDescription className="text-center">Real achievements from our community members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">$50K</div>
                    <div className="text-sm">Debt Eliminated</div>
                    <div className="text-xs text-muted-foreground">Sarah M.</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">$250K</div>
                    <div className="text-sm">Portfolio Value</div>
                    <div className="text-xs text-muted-foreground">Mike R.</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">$100K</div>
                    <div className="text-sm">Emergency Fund</div>
                    <div className="text-xs text-muted-foreground">Jennifer L.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="trust" size="xl" className="group">
            Access Professional Tools
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdultsSection;