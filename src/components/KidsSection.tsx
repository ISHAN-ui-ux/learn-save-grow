import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Gamepad2, 
  Gift, 
  PiggyBank, 
  Star, 
  Trophy,
  Target,
  Coins,
  Home,
  UtensilsCrossed,
  Film,
  ShoppingCart,
  Calculator,
  ChevronRight,
  Play,
  Lock,
  CheckCircle,
  Timer,
  Users
} from "lucide-react";

const KidsSection = () => {
  const budgetCategories = [
    { icon: Home, label: "RENT", amount: 85, color: "bg-orange-500" },
    { icon: UtensilsCrossed, label: "FOOD", amount: 65, color: "bg-red-500" },
    { icon: Film, label: "ENTERTAIN.", amount: 40, color: "bg-green-500" }
  ];

  const lessons = [
    { 
      id: 1, 
      title: "What is Money?", 
      description: "Learn about coins, bills, and digital money",
      duration: "10 min",
      status: "completed",
      points: 100,
      difficulty: "Easy"
    },
    { 
      id: 2, 
      title: "Earning Money", 
      description: "Discover different ways to earn money as a kid",
      duration: "15 min",
      status: "current",
      points: 150,
      difficulty: "Easy"
    },
    { 
      id: 3, 
      title: "Budget Battle Game", 
      description: "Drag expenses into your monthly budget",
      duration: "20 min",
      status: "locked",
      points: 200,
      difficulty: "Medium"
    },
    { 
      id: 4, 
      title: "Smart Spending Choices", 
      description: "Learn the difference between wants and needs",
      duration: "12 min",
      status: "locked",
      points: 175,
      difficulty: "Medium"
    },
    { 
      id: 5, 
      title: "Savings Superhero", 
      description: "Set goals and track your saving progress",
      duration: "18 min",
      status: "locked",
      points: 250,
      difficulty: "Hard"
    },
    { 
      id: 6, 
      title: "Investment Explorer", 
      description: "Understand how money can grow over time",
      duration: "25 min",
      status: "locked",
      points: 300,
      difficulty: "Hard"
    }
  ];

  const achievements = [
    { title: "First Dollar Saved", icon: PiggyBank, earned: true },
    { title: "Budget Master", icon: Calculator, earned: true },
    { title: "Smart Spender", icon: ShoppingCart, earned: false },
    { title: "Goal Crusher", icon: Target, earned: false },
    { title: "Money Genius", icon: Trophy, earned: false }
  ];

  return (
    <section id="kids" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-kids bg-clip-text text-transparent">Money Adventure</span>
            <br />
            Learning Hub! 🎮
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of kids on an epic journey to become money heroes through games, challenges, and fun activities!
          </p>
          
          {/* Progress Overview */}
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-kids-accent/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-kids-primary font-semibold">Your Progress</span>
              <Badge variant="secondary" className="bg-kids-accent/20 text-kids-primary">Level 2</Badge>
            </div>
            <Progress value={35} className="mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>350 / 1000 XP</span>
              <span>Next: Level 3</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          {/* Curriculum Tab */}
          <TabsContent value="curriculum" className="space-y-8">
            {/* Featured Game - Budget Battle */}
            <Card className="border-2 border-kids-accent/30 bg-gradient-to-br from-kids-primary/10 to-kids-secondary/10 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-kids-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">$250</span>
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-kids-primary">BUDGET BATTLE</CardTitle>
                    <Badge variant="outline" className="border-kids-accent text-kids-accent mt-2">Featured Game</Badge>
                  </div>
                </div>
                <CardDescription className="text-lg">
                  🎯 Drag your expenses into the budget! Can you stay within $250?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Budget Categories */}
                <div className="bg-white/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-kids-primary mb-4 text-center">MONTHLY BUDGET</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {budgetCategories.map((category, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                          <category.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-sm font-semibold text-muted-foreground">{category.label}</div>
                        <div className="text-lg font-bold text-kids-primary">${category.amount}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="kids" size="lg" className="shadow-lg">
                      <Play className="mr-2 h-5 w-5" />
                      Play Budget Battle
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Path */}
            <div>
              <h3 className="text-2xl font-bold text-kids-primary mb-6 text-center">📚 Complete Learning Path</h3>
              <div className="grid gap-4">
                {lessons.map((lesson, index) => (
                  <Card key={lesson.id} className={`
                    border-2 transition-all duration-300 hover:scale-102
                    ${lesson.status === 'completed' ? 'border-green-400/50 bg-green-50/50' : 
                      lesson.status === 'current' ? 'border-kids-accent/50 bg-kids-primary/5' : 
                      'border-gray-300/50 bg-gray-50/50 opacity-75'}
                  `}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        {/* Status Icon */}
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          ${lesson.status === 'completed' ? 'bg-green-500' : 
                            lesson.status === 'current' ? 'bg-kids-accent' : 
                            'bg-gray-400'}
                        `}>
                          {lesson.status === 'completed' ? (
                            <CheckCircle className="h-6 w-6 text-white" />
                          ) : lesson.status === 'current' ? (
                            <Play className="h-6 w-6 text-white" />
                          ) : (
                            <Lock className="h-6 w-6 text-white" />
                          )}
                        </div>

                        {/* Lesson Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-semibold">{lesson.title}</h4>
                            <Badge variant="outline" className={`
                              ${lesson.difficulty === 'Easy' ? 'border-green-400 text-green-600' :
                                lesson.difficulty === 'Medium' ? 'border-yellow-400 text-yellow-600' :
                                'border-red-400 text-red-600'}
                            `}>
                              {lesson.difficulty}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-2">{lesson.description}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Timer className="h-4 w-4" />
                              {lesson.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4" />
                              {lesson.points} XP
                            </span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button 
                          variant={lesson.status === 'completed' ? 'outline' : lesson.status === 'current' ? 'kids' : 'ghost'}
                          disabled={lesson.status === 'locked'}
                          className="min-w-[100px]"
                        >
                          {lesson.status === 'completed' ? 'Review' : 
                           lesson.status === 'current' ? 'Continue' : 
                           'Locked'}
                          {lesson.status !== 'locked' && <ChevronRight className="ml-2 h-4 w-4" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Games Tab */}
          <TabsContent value="games" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kids-primary">Budget Battle</CardTitle>
                  <CardDescription>Master the art of budgeting in this drag-and-drop challenge!</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="kids" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kids-primary">Smart Shopper</CardTitle>
                  <CardDescription>Learn to distinguish between wants and needs while shopping!</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="kids" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                    <PiggyBank className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kids-primary">Savings Challenge</CardTitle>
                  <CardDescription>Race against time to reach your savings goals!</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="kids" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coins className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kids-primary">Money Counter</CardTitle>
                  <CardDescription>Practice counting coins and making change!</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="kids" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kids-primary">Goal Getter</CardTitle>
                  <CardDescription>Set financial goals and track your progress!</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="kids" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kids-primary">Money Quiz Challenge</CardTitle>
                  <CardDescription>Test your knowledge and challenge friends!</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="kids" className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-kids-primary mb-4">🏆 Your Achievements</h3>
              <p className="text-muted-foreground">Earn badges by completing lessons and games!</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`
                  text-center border-2 transition-all duration-300 hover:scale-105
                  ${achievement.earned ? 'border-yellow-400/50 bg-yellow-50/50' : 'border-gray-300/50 bg-gray-50/50 opacity-75'}
                `}>
                  <CardContent className="p-6">
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4
                      ${achievement.earned ? 'bg-yellow-400' : 'bg-gray-400'}
                    `}>
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-sm mb-2">{achievement.title}</h4>
                    <Badge variant={achievement.earned ? "default" : "secondary"}>
                      {achievement.earned ? "Earned!" : "Locked"}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-kids-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kids-primary">Total XP</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-kids-primary">350</div>
                  <p className="text-muted-foreground">Experience Points</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-kids-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kids-primary">Lessons Completed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-kids-primary">2/6</div>
                  <p className="text-muted-foreground">Keep going!</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-kids-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-kids-primary">Current Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-kids-primary">2</div>
                  <p className="text-muted-foreground">Money Hero</p>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Challenge */}
            <Card className="border-2 border-kids-accent/30">
              <CardHeader className="text-center">
                <CardTitle className="text-kids-primary">🎯 Weekly Challenge</CardTitle>
                <CardDescription>Complete 3 lessons this week to earn a special badge!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Progress</span>
                    <span className="text-kids-primary font-semibold">2/3 lessons</span>
                  </div>
                  <Progress value={67} />
                  <div className="text-center">
                    <Badge variant="outline" className="border-kids-accent text-kids-accent">
                      2 days remaining
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="kids" size="xl" className="group shadow-lg">
            <Play className="mr-2 h-6 w-6" />
            Start Your Money Adventure! 🚀
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KidsSection;