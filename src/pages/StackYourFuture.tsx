import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PiggyBank, 
  TrendingUp, 
  TrendingDown,
  Building,
  Wheat,
  Coins,
  CreditCard,
  Trophy,
  Award,
  Briefcase,
  ArrowLeft,
  AlertTriangle,
  Target,
  Star,
  Medal,
  Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type InvestmentType = "savings" | "cd" | "index" | "stock" | "bonds" | "commodity";

interface Investment {
  id: string;
  title: string;
  balance: number;
  profit: number;
  shares?: number;
  type: InvestmentType;
  trend?: "up" | "down";
  price?: number;
  interestRate?: number;
}

interface RandomEvent {
  id: string;
  title: string;
  description: string;
  amount: number;
  paymentOptions: string[];
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  earned: boolean;
  condition: (gameState: any) => boolean;
}

const randomEvents: RandomEvent[] = [
  {
    id: "parking-ticket",
    title: "💸 Parking Ticket",
    description: "You're broke! Got hit with a $75 parking ticket.",
    amount: 75,
    paymentOptions: ["Pay from Cash", "Sell Investments", "Ignore (Credit Hit)"]
  },
  {
    id: "robbery",
    title: "🔫 You Got Robbed!",
    description: "Someone mugged you on the street! Lost $200 cash.",
    amount: 200,
    paymentOptions: ["Pay from Cash", "Sell Investments", "Report to Police"]
  },
  {
    id: "girlfriend-betrayal",
    title: "💔 Girlfriend Ran Away",
    description: "Your girlfriend ran away with everything! She took $1,500 from your accounts.",
    amount: 1500,
    paymentOptions: ["Pay from Cash", "Sell Investments", "Take Legal Action"]
  },
  {
    id: "jail-time",
    title: "🚔 You Went to Jail",
    description: "Wrong place, wrong time! Need $3,000 for bail money.",
    amount: 3000,
    paymentOptions: ["Pay from Cash", "Sell Investments", "Stay in Jail (Lose Year)"]
  },
  {
    id: "car-accident",
    title: "🚗 Car Accident",
    description: "Crashed your car! Insurance doesn't cover it all. Need $800.",
    amount: 800,
    paymentOptions: ["Pay from Cash", "Sell Investments", "Take Bus (Lose Income)"]
  },
  {
    id: "medical-emergency",
    title: "🏥 Medical Emergency",
    description: "Emergency room visit! Bills came to $1,200.",
    amount: 1200,
    paymentOptions: ["Pay from Cash", "Sell Investments", "Payment Plan"]
  },
  {
    id: "tax-audit",
    title: "📋 Tax Audit",
    description: "IRS wants their money! Owe $900 in back taxes.",
    amount: 900,
    paymentOptions: ["Pay from Cash", "Sell Investments", "Payment Plan"]
  },
  {
    id: "inheritance",
    title: "💰 Inheritance",
    description: "Your rich uncle left you some money! Received $2,000.",
    amount: -2000,
    paymentOptions: ["Add to Cash", "Invest in Index Fund", "Buy Stocks"]
  },
  {
    id: "lottery-win",
    title: "🎰 Lottery Ticket",
    description: "Lucky day! Won $500 on a scratch-off ticket.",
    amount: -500,
    paymentOptions: ["Add to Cash", "Invest in Stocks", "Buy More Tickets"]
  },
  {
    id: "work-bonus",
    title: "💼 Performance Bonus",
    description: "Boss loves your work! Received a $1,000 bonus.",
    amount: -1000,
    paymentOptions: ["Add to Cash", "Max Out 401k", "Invest in Index Fund"]
  }
];

const StackYourFuture = () => {
  const [currentYear, setCurrentYear] = useState(1);
  const [currentPeriod, setCurrentPeriod] = useState(1);
  const [pocketCash, setPocketCash] = useState(5000.00);
  const [showRandomEvent, setShowRandomEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<RandomEvent | null>(null);
  const [showInvestmentDialog, setShowInvestmentDialog] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [actionType, setActionType] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(120); // 2 minutes in seconds
  const [eventsHandled, setEventsHandled] = useState(0);
  const [sellCount, setSellCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [showAchievementDialog, setShowAchievementDialog] = useState(false);
  const { toast } = useToast();

  const achievements: Achievement[] = [
    {
      id: "first-investment",
      title: "🚀 First Investment",
      description: "Made your first investment in any asset",
      icon: Trophy,
      earned: false,
      condition: (state) => state.totalInvested > 0
    },
    {
      id: "first-thousand",
      title: "💰 First Thousand",
      description: "Reached $1,000 in total net worth",
      icon: Coins,
      earned: false,
      condition: (state) => state.netWorth >= 1000
    },
    {
      id: "first-hundred-k",
      title: "💎 First $100K",
      description: "Achieved $100,000 in net worth",
      icon: Medal,
      earned: false,
      condition: (state) => state.netWorth >= 100000
    },
    {
      id: "first-million",
      title: "🎯 First Million",
      description: "Became a millionaire! $1,000,000 net worth",
      icon: Crown,
      earned: false,
      condition: (state) => state.netWorth >= 1000000
    },
    {
      id: "millionaire",
      title: "🏆 Millionaire Status",
      description: "Official millionaire with sustained wealth",
      icon: Star,
      earned: false,
      condition: (state) => state.netWorth >= 1000000 && state.currentYear >= 5
    },
    {
      id: "billionaire",
      title: "👑 Billionaire",
      description: "The ultimate achievement - $1 billion net worth",
      icon: Crown,
      earned: false,
      condition: (state) => state.netWorth >= 1000000000
    },
    {
      id: "diversified-portfolio",
      title: "📊 Diversified Portfolio",
      description: "Invested in at least 4 different types of assets",
      icon: TrendingUp,
      earned: false,
      condition: (state) => state.investments.filter((inv: Investment) => inv.balance > 0).length >= 4
    },
    {
      id: "stock-master",
      title: "📈 Stock Market Master",
      description: "Own shares in at least 3 different stocks",
      icon: Building,
      earned: false,
      condition: (state) => state.investments.filter((inv: Investment) => inv.type === "stock" && (inv.shares || 0) > 0).length >= 3
    },
    {
      id: "survivor",
      title: "💪 Survivor",
      description: "Survived 10 random events without going bankrupt",
      icon: Award,
      earned: false,
      condition: (state) => state.eventsHandled >= 10 && state.netWorth > 0
    },
    {
      id: "diamond-hands",
      title: "💎 Diamond Hands",
      description: "Never sold a single investment for 5 years",
      icon: PiggyBank,
      earned: false,
      condition: (state) => state.currentYear >= 5 && state.sellCount === 0
    }
  ];

  const [earnedAchievements, setEarnedAchievements] = useState<string[]>([]);

  const [investments, setInvestments] = useState<Investment[]>([
    {
      id: "savings",
      title: "SAVINGS ACCOUNT",
      balance: 0,
      profit: 0,
      type: "savings",
      interestRate: 0.02
    },
    {
      id: "cd",
      title: "CERTIFICATE OF DEPOSIT",
      balance: 0,
      profit: 0,
      type: "cd",
      interestRate: 0.035
    },
    {
      id: "index",
      title: "INDEX FUND",
      balance: 0,
      profit: 0,
      type: "index",
      price: 100
    },
    {
      id: "electric-inc",
      title: "IT'S ELECTRIC INC.",
      balance: 0,
      shares: 0,
      profit: 0,
      type: "stock",
      trend: "up",
      price: 45.50
    },
    {
      id: "big-bank",
      title: "BIG BANK",
      balance: 0,
      shares: 0,
      profit: 0,
      type: "stock",
      trend: "up",
      price: 32.25
    },
    {
      id: "strong-oil",
      title: "STRONG OIL CO.",
      balance: 0,
      shares: 0,
      profit: 0,
      type: "stock",
      trend: "down",
      price: 28.75
    },
    {
      id: "bonds",
      title: "GOVERNMENT BONDS",
      balance: 0,
      profit: 0,
      type: "bonds",
      interestRate: 0.025
    },
    {
      id: "wheat",
      title: "WHEAT",
      balance: 0,
      profit: 0,
      type: "commodity",
      price: 15.50
    },
    {
      id: "gold",
      title: "GOLD",
      balance: 0,
      profit: 0,
      type: "commodity",
      price: 1950.00
    }
  ]);

  // Calculate net worth and total invested
  const netWorth = pocketCash + investments.reduce((total, inv) => total + inv.balance + inv.profit, 0);
  const totalInvested = investments.reduce((total, inv) => total + inv.balance, 0);

  // Auto-advance timer
  useEffect(() => {
    if (currentYear >= 20) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          advanceTime();
          return 120; // Reset to 2 minutes
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentYear]);

  // Check win/lose conditions
  useEffect(() => {
    if (currentYear >= 20 && !gameWon && !gameLost) {
      if (netWorth >= 15000000) {
        setGameWon(true);
        toast({
          title: "🎉 YOU WON!",
          description: `Congratulations! You reached $${netWorth.toLocaleString()} and won the game!`,
        });
      } else {
        setGameLost(true);
        toast({
          title: "💸 Game Over",
          description: `You ended with $${netWorth.toLocaleString()}. You needed $15 million to win.`,
        });
      }
    }
  }, [currentYear, netWorth]);

  // Check achievements
  const checkAchievements = () => {
    const gameState = { currentYear, netWorth, totalInvested, investments, pocketCash, eventsHandled, sellCount };
    
    achievements.forEach(achievement => {
      if (!earnedAchievements.includes(achievement.id) && achievement.condition(gameState)) {
        setEarnedAchievements(prev => [...prev, achievement.id]);
        toast({
          title: "🎉 Achievement Unlocked!",
          description: `${achievement.title}: ${achievement.description}`,
        });
      }
    });
  };

  // Check achievements after any state change
  useEffect(() => {
    checkAchievements();
  }, [currentYear, netWorth, totalInvested, investments, eventsHandled, sellCount]);

  // Random event trigger - more frequent
  useEffect(() => {
    const eventChance = Math.random();
    if (eventChance < 0.4 && currentPeriod === 2) {
      const randomEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];
      setCurrentEvent(randomEvent);
      setShowRandomEvent(true);
    }
  }, [currentYear, currentPeriod]);

  // Advance time period
  const advanceTime = () => {
    if (currentYear >= 20) return;
    
    if (currentPeriod === 1) {
      setCurrentPeriod(2);
      setPocketCash(prev => prev + 1000);
      toast({
        title: "💰 Income Received",
        description: "You received $1,000 for this period!"
      });
    } else {
      setCurrentPeriod(1);
      setCurrentYear(prev => prev + 1);
      setPocketCash(prev => prev + 1000);
      updateInvestmentProfits();
      updateStockPrices();
      toast({
        title: "📅 New Year Started",
        description: `Welcome to Year ${currentYear + 1}! You received $1,000.`
      });
    }
    setTimeRemaining(120); // Reset timer
  };

  const updateStockPrices = () => {
    setInvestments(prev => prev.map(inv => {
      if (inv.type === "stock") {
        const change = (Math.random() - 0.5) * 0.2; // -10% to +10%
        const newPrice = Math.max(1, (inv.price || 50) * (1 + change));
        const newTrend = change > 0 ? "up" : "down";
        return { ...inv, price: newPrice, trend: newTrend };
      }
      return inv;
    }));
  };

  const updateInvestmentProfits = () => {
    setInvestments(prev => prev.map(inv => {
      let profitChange = 0;
      
      switch (inv.type) {
        case "savings":
        case "cd":
        case "bonds":
          profitChange = inv.balance * (inv.interestRate || 0.02) * 0.5;
          break;
        case "index":
          profitChange = inv.balance * (Math.random() * 0.2 - 0.05);
          break;
        case "stock":
          const priceChange = (inv.price || 50) - 50; // Compare to initial price
          const trend = priceChange > 0 ? "up" : "down";
          const volatility = trend === "up" ? 0.15 : -0.15;
          profitChange = inv.balance * (Math.random() * 0.3 - 0.15 + volatility);
          break;
        case "commodity":
          profitChange = inv.balance * (Math.random() * 0.3 - 0.15);
          break;
      }
      
      return { ...inv, profit: inv.profit + profitChange };
    }));
  };

  const handleRandomEventChoice = (choice: string) => {
    if (!currentEvent) return;
    
    const amount = Math.abs(currentEvent.amount);
    
    if (currentEvent.amount > 0) {
      switch (choice) {
        case "Pay from Cash":
          if (pocketCash >= amount) {
            setPocketCash(prev => prev - amount);
            toast({ title: "💸 Payment Made", description: `Paid $${amount} from cash.` });
          } else {
            toast({ title: "💔 Insufficient Cash", description: "Not enough cash available!" });
            return;
          }
          break;
        case "Sell Investments":
          const totalInvestmentValue = investments.reduce((sum, inv) => sum + inv.balance, 0);
          if (totalInvestmentValue >= amount) {
            // Sell from largest investment first
            let remaining = amount;
            setInvestments(prev => prev.map(inv => {
              if (remaining > 0 && inv.balance > 0) {
                const sellAmount = Math.min(remaining, inv.balance);
                remaining -= sellAmount;
                setSellCount(count => count + 1);
                return { ...inv, balance: inv.balance - sellAmount };
              }
              return inv;
            }));
            setPocketCash(prev => prev + amount);
            toast({ title: "💰 Investments Sold", description: `Sold $${amount} in investments to pay.` });
          } else {
            toast({ title: "💸 Not Enough Investments", description: "Can't cover the cost!" });
            return;
          }
          break;
        default:
          toast({ title: "⚠️ Risky Choice", description: "This will have consequences!" });
      }
    } else {
      switch (choice) {
        case "Add to Cash":
          setPocketCash(prev => prev + amount);
          break;
        case "Invest in Index Fund":
        case "Max Out 401k":
          setInvestments(prev => prev.map(inv => 
            inv.id === "index" ? { ...inv, balance: inv.balance + amount } : inv
          ));
          break;
        case "Buy Stocks":
          const stockInvestments = investments.filter(inv => inv.type === "stock");
          if (stockInvestments.length > 0) {
            const randomStock = stockInvestments[Math.floor(Math.random() * stockInvestments.length)];
            setInvestments(prev => prev.map(inv => 
              inv.id === randomStock.id ? { ...inv, balance: inv.balance + amount } : inv
            ));
          }
          break;
        default:
          setPocketCash(prev => prev + amount);
      }
      toast({ title: "💰 Money Added", description: `Added $${amount}!` });
    }
    
    setEventsHandled(prev => prev + 1);
    setShowRandomEvent(false);
    setCurrentEvent(null);
  };

  const openInvestmentDialog = (investment: Investment, action: string) => {
    setSelectedInvestment(investment);
    setActionType(action);
    setShowInvestmentDialog(true);
    setInvestmentAmount("");
  };

  const handleInvestmentAction = () => {
    if (!selectedInvestment || !investmentAmount) return;
    
    const amount = parseFloat(investmentAmount);
    if (amount <= 0) return;

    switch (actionType) {
      case "DEPOSIT":
      case "BUY":
        if (pocketCash >= amount) {
          setPocketCash(prev => prev - amount);
          setInvestments(prev => prev.map(inv => 
            inv.id === selectedInvestment.id 
              ? { 
                  ...inv, 
                  balance: inv.balance + amount,
                  shares: inv.type === "stock" ? (inv.shares || 0) + Math.floor(amount / (inv.price || 1)) : inv.shares
                }
              : inv
          ));
          toast({ title: "Investment Made", description: `Invested $${amount} in ${selectedInvestment.title}` });
        } else {
          toast({ title: "Insufficient Funds", description: "Not enough cash available!" });
          return;
        }
        break;
      case "WITHDRAW":
      case "SELL":
        if (selectedInvestment.balance >= amount) {
          setPocketCash(prev => prev + amount);
          setInvestments(prev => prev.map(inv => 
            inv.id === selectedInvestment.id 
              ? { 
                  ...inv, 
                  balance: inv.balance - amount,
                  shares: inv.type === "stock" ? Math.max(0, (inv.shares || 0) - Math.floor(amount / (inv.price || 1))) : inv.shares
                }
              : inv
          ));
          setSellCount(prev => prev + 1);
          toast({ title: "Withdrawal Made", description: `Withdrew $${amount} from ${selectedInvestment.title}` });
        } else {
          toast({ title: "Insufficient Balance", description: "Not enough invested in this option!" });
          return;
        }
        break;
    }
    
    setShowInvestmentDialog(false);
  };

  const getInvestmentActions = (type: InvestmentType) => {
    switch (type) {
      case "savings":
        return ["DEPOSIT", "WITHDRAW"];
      case "cd":
      case "bonds":
        return ["BUY", "COLLECT"];
      case "index":
      case "stock":
      case "commodity":
        return ["BUY", "SELL"];
      default:
        return ["BUY", "SELL"];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-7xl mx-auto">
        <Tabs defaultValue="game" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-800 border-slate-700">
            <TabsTrigger value="game" className="text-white data-[state=active]:bg-blue-600">Investment Game</TabsTrigger>
            <TabsTrigger value="achievements" className="text-white data-[state=active]:bg-purple-600">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="game">
            <div className="grid grid-cols-12 gap-6">
              {/* Left Sidebar */}
              <div className="col-span-3 space-y-4">
                {/* Year Progress */}
                <Card className="bg-slate-800 text-white border-slate-700">
                  <CardHeader className="pb-2">
                    <div className="text-sm opacity-90">YEAR {currentYear} PERIOD {currentPeriod} OF 20</div>
                    <Progress value={((currentYear - 1 + (currentPeriod - 1) * 0.5) / 20) * 100} className="h-2" />
                    <div className="text-xs mt-2 text-red-400">
                      Time: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}
                    </div>
                  </CardHeader>
                </Card>

                {/* Game Status */}
                <Card className="bg-gradient-to-br from-green-800 to-emerald-900 border-green-600">
                  <CardContent className="p-4 text-center">
                    <Target className="h-16 w-16 mx-auto mb-2 text-green-400" />
                    <div className="bg-black/30 rounded-lg p-2 text-sm text-white">
                      {gameWon ? "🎉 YOU WON!" : gameLost ? "💸 Game Over" : `Goal: $15M by Year 20`}
                    </div>
                    <div className="text-xs mt-1 text-green-300">
                      Progress: {((netWorth / 15000000) * 100).toFixed(1)}%
                    </div>
                  </CardContent>
                </Card>

                {/* Financial Info */}
                <Card className="bg-slate-800 text-white border-slate-700">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm opacity-90">💰 POCKET CASH</div>
                        <div className="text-xl font-bold text-green-400">
                          ${pocketCash.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm opacity-90">💎 OVERALL NET WORTH</div>
                        <div className="text-xl font-bold text-blue-400">
                          ${netWorth.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm opacity-90">📊 EVENTS SURVIVED</div>
                        <div className="text-lg font-bold text-purple-400">
                          {eventsHandled}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation Links */}
                <Card className="bg-slate-800 text-white border-slate-700">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-600">
                        <Trophy className="h-4 w-4 mr-2" />
                        LEADERBOARD
                      </Button>
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start text-white hover:bg-purple-600"
                        onClick={() => setShowAchievementDialog(true)}
                      >
                        <Award className="h-4 w-4 mr-2" />
                        ACHIEVEMENTS ({earnedAchievements.length}/{achievements.length})
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-600">
                        <Briefcase className="h-4 w-4 mr-2" />
                        PORTFOLIO
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Investment Grid */}
              <div className="col-span-9">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <Link to="/">
                    <Button variant="outline" size="sm">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                  <h1 className="text-3xl font-bold text-primary">Stack Your Future</h1>
                  <Button onClick={advanceTime} className="ml-auto">
                    Advance to {currentPeriod === 1 ? "Period 2" : `Year ${currentYear + 1}`}
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {investments.map((investment) => (
                    <Card key={investment.id} className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-600 text-white">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm font-bold text-white">
                            {investment.title}
                          </CardTitle>
                          {investment.type === "stock" && (
                            <div className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${
                              investment.trend === "up" ? "bg-green-600 text-white" : "bg-red-600 text-white"
                            }`}>
                              {investment.trend === "up" ? (
                                <>↗ <TrendingUp className="h-3 w-3" /></>
                              ) : (
                                <>↘ <TrendingDown className="h-3 w-3" /></>
                              )}
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {/* Investment Icon */}
                        <div className="flex justify-center">
                          {investment.type === "savings" && <Building className="h-8 w-8 text-blue-400" />}
                          {investment.type === "cd" && <CreditCard className="h-8 w-8 text-purple-400" />}
                          {investment.type === "index" && <TrendingUp className="h-8 w-8 text-red-400" />}
                          {investment.type === "stock" && <TrendingUp className="h-8 w-8 text-green-400" />}
                          {investment.type === "bonds" && <Building className="h-8 w-8 text-green-400" />}
                          {investment.type === "commodity" && investment.title.includes("WHEAT") && <Wheat className="h-8 w-8 text-yellow-400" />}
                          {investment.type === "commodity" && investment.title.includes("GOLD") && <Coins className="h-8 w-8 text-yellow-400" />}
                        </div>

                        {/* Investment Details */}
                        <div className="text-center space-y-1">
                          <div>
                            <div className="text-xs text-slate-400">BALANCE</div>
                            <div className="font-bold text-green-400">${investment.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                          </div>
                          {investment.shares !== undefined && (
                            <div>
                              <div className="text-xs text-slate-400">SHARES</div>
                              <div className="font-bold text-blue-400">{investment.shares}</div>
                            </div>
                          )}
                          <div>
                            <div className="text-xs text-slate-400">PROFIT/LOSS</div>
                            <div className={`font-bold ${investment.profit >= 0 ? "text-green-400" : "text-red-400"}`}>
                              {investment.profit >= 0 ? "+" : "-"}${Math.abs(investment.profit).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                            </div>
                          </div>
                          {investment.price && (
                            <div>
                              <div className="text-xs text-slate-400">PRICE</div>
                              <div className={`text-xs font-bold ${investment.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                                ${investment.price.toFixed(2)}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2">
                          {getInvestmentActions(investment.type).map((action) => (
                            <Button 
                              key={action} 
                              size="sm" 
                              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold"
                              onClick={() => openInvestmentDialog(investment, action)}
                            >
                              {action}
                            </Button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">🏆 Investment Achievements</h2>
                <p className="text-slate-300 mb-8">
                  Unlock achievements by reaching investment milestones and financial goals
                </p>
                <div className="flex justify-center gap-4 mb-8">
                  <Badge variant="outline" className="text-lg p-2 bg-purple-600 text-white border-purple-400">
                    {earnedAchievements.length} / {achievements.length} Unlocked
                  </Badge>
                  <Badge variant="secondary" className="text-lg p-2 bg-blue-600 text-white">
                    {Math.round((earnedAchievements.length / achievements.length) * 100)}% Complete
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement) => {
                  const isEarned = earnedAchievements.includes(achievement.id);
                  return (
                    <Card 
                      key={achievement.id} 
                      className={`transition-all duration-300 cursor-pointer hover:scale-105 ${
                        isEarned 
                          ? 'bg-gradient-to-br from-yellow-600 to-orange-600 border-yellow-400 shadow-lg shadow-yellow-500/20' 
                          : 'bg-slate-800 border-slate-600 opacity-70'
                      }`}
                      onClick={() => setShowAchievementDialog(true)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                          isEarned 
                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg' 
                            : 'bg-slate-700'
                        }`}>
                          <achievement.icon className={`h-8 w-8 ${
                            isEarned ? 'text-white' : 'text-slate-400'
                          }`} />
                        </div>
                        <h3 className={`font-bold text-lg mb-2 ${isEarned ? 'text-white' : 'text-slate-300'}`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm mb-4 ${isEarned ? 'text-yellow-100' : 'text-slate-400'}`}>
                          {achievement.description}
                        </p>
                        <Badge variant={isEarned ? "default" : "secondary"} 
                               className={isEarned ? "bg-green-600 text-white" : "bg-slate-600 text-slate-300"}>
                          {isEarned ? "🏆 Earned" : "🔒 Locked"}
                        </Badge>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Random Event Dialog */}
      <Dialog open={showRandomEvent} onOpenChange={setShowRandomEvent}>
        <DialogContent className="bg-slate-900 border-red-600 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-400 text-xl">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              {currentEvent?.title}
            </DialogTitle>
            <DialogDescription className="text-slate-300 text-lg">
              {currentEvent?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            {currentEvent?.paymentOptions.map((option, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="w-full bg-slate-800 border-slate-600 text-white hover:bg-slate-700 py-3 text-lg"
                onClick={() => handleRandomEventChoice(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Achievement Dialog */}
      <Dialog open={showAchievementDialog} onOpenChange={setShowAchievementDialog}>
        <DialogContent className="bg-slate-900 border-purple-600 text-white max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-purple-400 text-2xl">
              <Trophy className="h-8 w-8 text-purple-500" />
              Your Achievements
            </DialogTitle>
            <DialogDescription className="text-slate-300 text-lg">
              Track your progress and unlock new milestones
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
            {achievements.map((achievement) => {
              const isEarned = earnedAchievements.includes(achievement.id);
              return (
                <div 
                  key={achievement.id} 
                  className={`p-4 rounded-lg border ${
                    isEarned 
                      ? 'bg-gradient-to-r from-yellow-600 to-orange-600 border-yellow-400' 
                      : 'bg-slate-800 border-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <achievement.icon className={`h-8 w-8 ${isEarned ? 'text-white' : 'text-slate-400'}`} />
                    <div>
                      <h4 className={`font-bold ${isEarned ? 'text-white' : 'text-slate-300'}`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm ${isEarned ? 'text-yellow-100' : 'text-slate-400'}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      {/* Investment Dialog */}
      <Dialog open={showInvestmentDialog} onOpenChange={setShowInvestmentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{actionType} - {selectedInvestment?.title}</DialogTitle>
            <DialogDescription>
              {actionType === "BUY" || actionType === "DEPOSIT" 
                ? `How much would you like to ${actionType.toLowerCase()}?`
                : `How much would you like to ${actionType.toLowerCase()}?`
              }
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="number"
              placeholder="Enter amount"
              value={investmentAmount}
              onChange={(e) => setInvestmentAmount(e.target.value)}
            />
            <div className="text-sm text-muted-foreground">
              Available cash: ${pocketCash.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              {selectedInvestment && (
                <div>Current balance: ${selectedInvestment.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowInvestmentDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleInvestmentAction}>
              {actionType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StackYourFuture;