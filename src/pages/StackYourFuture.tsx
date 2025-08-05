import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
  AlertTriangle
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

const randomEvents: RandomEvent[] = [
  {
    id: "speeding-ticket",
    title: "Speeding Ticket",
    description: "Oh no! You got caught speeding and received a $100 fine.",
    amount: 100,
    paymentOptions: ["Pay from Cash", "Pay from Savings", "Skip Payment (Risk)"]
  },
  {
    id: "medical-bill",
    title: "Medical Bill",
    description: "Unexpected dental work costs you $250.",
    amount: 250,
    paymentOptions: ["Pay from Cash", "Pay from Savings", "Use Credit"]
  },
  {
    id: "car-repair",
    title: "Car Repair",
    description: "Your car needs urgent repairs costing $500.",
    amount: 500,
    paymentOptions: ["Pay from Cash", "Pay from Savings", "Take Loan"]
  },
  {
    id: "bonus",
    title: "Work Bonus",
    description: "Great news! You received a performance bonus of $300.",
    amount: -300,
    paymentOptions: ["Add to Cash", "Invest in Savings", "Invest in Index Fund"]
  }
];

const StackYourFuture = () => {
  const [currentYear, setCurrentYear] = useState(1);
  const [currentPeriod, setCurrentPeriod] = useState(1); // 1 or 2 (6-month periods per year)
  const [pocketCash, setPocketCash] = useState(5000.00);
  const [totalInvested, setTotalInvested] = useState(0);
  const [showRandomEvent, setShowRandomEvent] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<RandomEvent | null>(null);
  const [showInvestmentDialog, setShowInvestmentDialog] = useState(false);
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [actionType, setActionType] = useState("");
  const { toast } = useToast();

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

  // Calculate net worth
  const netWorth = pocketCash + investments.reduce((total, inv) => total + inv.balance + inv.profit, 0);

  // Random event trigger
  useEffect(() => {
    const eventChance = Math.random();
    if (eventChance < 0.15 && currentPeriod === 2) { // 15% chance each year
      const randomEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];
      setCurrentEvent(randomEvent);
      setShowRandomEvent(true);
    }
  }, [currentYear, currentPeriod]);

  // Advance time period
  const advanceTime = () => {
    if (currentPeriod === 1) {
      setCurrentPeriod(2);
      // Add semi-annual income
      setPocketCash(prev => prev + 1000);
      toast({
        title: "Income Received",
        description: "You received $1,000 for this period!"
      });
    } else {
      setCurrentPeriod(1);
      setCurrentYear(prev => prev + 1);
      // Add semi-annual income
      setPocketCash(prev => prev + 1000);
      
      // Update investment profits
      updateInvestmentProfits();
      
      toast({
        title: "New Year Started",
        description: `Welcome to Year ${currentYear + 1}! You received $1,000.`
      });
    }
  };

  const updateInvestmentProfits = () => {
    setInvestments(prev => prev.map(inv => {
      let profitChange = 0;
      
      switch (inv.type) {
        case "savings":
        case "cd":
        case "bonds":
          profitChange = inv.balance * (inv.interestRate || 0.02) * 0.5; // Semi-annual
          break;
        case "index":
          profitChange = inv.balance * (Math.random() * 0.2 - 0.05); // -5% to +15% annually
          break;
        case "stock":
          const volatility = inv.trend === "up" ? 0.3 : -0.1;
          profitChange = inv.balance * (Math.random() * 0.4 - 0.2 + volatility);
          break;
        case "commodity":
          profitChange = inv.balance * (Math.random() * 0.3 - 0.15); // More volatile
          break;
      }
      
      return { ...inv, profit: inv.profit + profitChange };
    }));
  };

  const handleRandomEventChoice = (choice: string) => {
    if (!currentEvent) return;
    
    const amount = Math.abs(currentEvent.amount);
    
    if (currentEvent.amount > 0) { // Expense
      switch (choice) {
        case "Pay from Cash":
          if (pocketCash >= amount) {
            setPocketCash(prev => prev - amount);
            toast({ title: "Payment Made", description: `Paid $${amount} from cash.` });
          } else {
            toast({ title: "Insufficient Cash", description: "Not enough cash available!" });
            return;
          }
          break;
        case "Pay from Savings":
          const savings = investments.find(inv => inv.id === "savings");
          if (savings && savings.balance >= amount) {
            setInvestments(prev => prev.map(inv => 
              inv.id === "savings" ? { ...inv, balance: inv.balance - amount } : inv
            ));
            toast({ title: "Payment Made", description: `Paid $${amount} from savings.` });
          } else {
            toast({ title: "Insufficient Savings", description: "Not enough in savings!" });
            return;
          }
          break;
        default:
          toast({ title: "Risky Choice", description: "This may affect your credit score!" });
      }
    } else { // Income
      switch (choice) {
        case "Add to Cash":
          setPocketCash(prev => prev + amount);
          break;
        case "Invest in Savings":
          setInvestments(prev => prev.map(inv => 
            inv.id === "savings" ? { ...inv, balance: inv.balance + amount } : inv
          ));
          break;
        case "Invest in Index Fund":
          setInvestments(prev => prev.map(inv => 
            inv.id === "index" ? { ...inv, balance: inv.balance + amount } : inv
          ));
          break;
      }
      toast({ title: "Money Added", description: `Added $${amount}!` });
    }
    
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* Year Progress */}
            <Card className="bg-slate-700 text-white">
              <CardHeader className="pb-2">
                <div className="text-sm opacity-90">YEAR {currentYear} PERIOD {currentPeriod} OF 20</div>
                <Progress value={((currentYear - 1 + (currentPeriod - 1) * 0.5) / 20) * 100} className="h-2" />
              </CardHeader>
            </Card>

            {/* Pig Character */}
            <Card className="bg-gradient-to-br from-pink-100 to-pink-200">
              <CardContent className="p-4 text-center">
                <PiggyBank className="h-16 w-16 mx-auto mb-2 text-pink-600" />
                <div className="bg-white rounded-lg p-2 text-sm">
                  "Smart investing in year {currentYear}!"
                </div>
              </CardContent>
            </Card>

            {/* Financial Info */}
            <Card className="bg-slate-700 text-white">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <div className="text-sm opacity-90">POCKET CASH</div>
                    <div className="text-xl font-bold text-green-400">
                      ${pocketCash.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90">OVERALL NET WORTH</div>
                    <div className="text-xl font-bold text-green-400">
                      ${netWorth.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Links */}
            <Card className="bg-slate-700 text-white">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-600">
                    <Trophy className="h-4 w-4 mr-2" />
                    LEADERBOARD
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-slate-600">
                    <Award className="h-4 w-4 mr-2" />
                    ACHIEVEMENTS
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
            <div className="grid grid-cols-3 gap-4">
              {investments.map((investment) => (
                <Card key={investment.id} className="bg-gradient-to-br from-amber-100 to-orange-200 border-2 border-amber-300">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-bold text-slate-700">
                        {investment.title}
                      </CardTitle>
                      {investment.type === "stock" && (
                        <div className={`text-xs px-2 py-1 rounded ${
                          investment.trend === "up" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                        }`}>
                          {investment.trend === "up" ? "↗" : "↘"}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Investment Icon */}
                    <div className="flex justify-center">
                      {investment.type === "savings" && <Building className="h-8 w-8 text-blue-600" />}
                      {investment.type === "cd" && <CreditCard className="h-8 w-8 text-purple-600" />}
                      {investment.type === "index" && <TrendingUp className="h-8 w-8 text-red-600" />}
                      {investment.type === "stock" && <TrendingUp className="h-8 w-8 text-slate-600" />}
                      {investment.type === "bonds" && <Building className="h-8 w-8 text-green-600" />}
                      {investment.type === "commodity" && investment.title.includes("WHEAT") && <Wheat className="h-8 w-8 text-yellow-600" />}
                      {investment.type === "commodity" && investment.title.includes("GOLD") && <Coins className="h-8 w-8 text-yellow-600" />}
                    </div>

                    {/* Investment Details */}
                    <div className="text-center space-y-1">
                      <div>
                        <div className="text-xs text-slate-600">BALANCE</div>
                        <div className="font-bold">${investment.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                      </div>
                      {investment.shares !== undefined && (
                        <div>
                          <div className="text-xs text-slate-600">SHARES</div>
                          <div className="font-bold">{investment.shares}</div>
                        </div>
                      )}
                      <div>
                        <div className="text-xs text-slate-600">PROFIT/LOSS</div>
                        <div className={`font-bold ${investment.profit >= 0 ? "text-green-600" : "text-red-600"}`}>
                          {investment.profit >= 0 ? "+" : "-"}${Math.abs(investment.profit).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </div>
                      </div>
                      {investment.price && (
                        <div>
                          <div className="text-xs text-slate-600">PRICE</div>
                          <div className="text-xs">${investment.price.toFixed(2)}</div>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      {getInvestmentActions(investment.type).map((action) => (
                        <Button 
                          key={action} 
                          size="sm" 
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
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
      </div>

      {/* Random Event Dialog */}
      <Dialog open={showRandomEvent} onOpenChange={setShowRandomEvent}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              {currentEvent?.title}
            </DialogTitle>
            <DialogDescription>
              {currentEvent?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            {currentEvent?.paymentOptions.map((option, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="w-full"
                onClick={() => handleRandomEventChoice(option)}
              >
                {option}
              </Button>
            ))}
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