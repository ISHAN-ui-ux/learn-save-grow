import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
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
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const BuildYourStax = () => {
  const [currentYear, setCurrentYear] = useState(1);
  const [pocketCash] = useState(6054.20);
  const [netWorth] = useState(112200.83);

  const investments = [
    {
      title: "SAVINGS ACCOUNT",
      icon: Building,
      balance: 8947.68,
      profit: null,
      type: "savings"
    },
    {
      title: "CERTIFICATE OF DEPOSIT",
      icon: CreditCard,
      profit: 6035.89,
      type: "cd"
    },
    {
      title: "INDEX FUND",
      icon: TrendingUp,
      profit: 8781.52,
      type: "index"
    },
    {
      title: "IT'S ELECTRIC INC.",
      shares: 2,
      profit: 2718.84,
      type: "stock",
      trend: "up"
    },
    {
      title: "BIG BANK",
      shares: 8,
      profit: 1976.89,
      type: "stock",
      trend: "up"
    },
    {
      title: "STRONG OIL CO.",
      shares: 5,
      profit: 1438.04,
      type: "stock",
      trend: "down"
    },
    {
      title: "JADE'S PAINT CO.",
      shares: 1,
      profit: 568.30,
      type: "stock",
      trend: "up"
    },
    {
      title: "BIG TECH CO.",
      shares: 4,
      profit: 3403.12,
      type: "stock",
      trend: "up"
    },
    {
      title: "GOVERNMENT BONDS",
      profit: 529.94,
      type: "bonds"
    },
    {
      title: "WHEAT",
      profit: 471.33,
      percent: 3.2,
      type: "commodity"
    },
    {
      title: "GOLD",
      profit: 519.29,
      type: "commodity"
    }
  ];

  const getInvestmentActions = (type: string) => {
    switch (type) {
      case "savings":
        return ["DEPOSIT", "WITHDRAW"];
      case "cd":
      case "bonds":
        return ["BUY", "COLLECT"];
      case "index":
        return ["BUY", "SELL"];
      case "stock":
        return ["BUY", "SELL"];
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
          <h1 className="text-3xl font-bold text-primary">Build Your Stax</h1>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-4">
            {/* Year Progress */}
            <Card className="bg-slate-700 text-white">
              <CardHeader className="pb-2">
                <div className="text-sm opacity-90">YEAR {currentYear} OF 20</div>
                <Progress value={(currentYear / 20) * 100} className="h-2" />
              </CardHeader>
            </Card>

            {/* Pig Character */}
            <Card className="bg-gradient-to-br from-pink-100 to-pink-200">
              <CardContent className="p-4 text-center">
                <PiggyBank className="h-16 w-16 mx-auto mb-2 text-pink-600" />
                <div className="bg-white rounded-lg p-2 text-sm">
                  "Good luck on year {currentYear}!"
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
                      ${pocketCash.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm opacity-90">OVERALL NET WORTH</div>
                    <div className="text-xl font-bold text-green-400">
                      ${netWorth.toLocaleString()}
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
              {investments.map((investment, index) => (
                <Card key={index} className="bg-gradient-to-br from-amber-100 to-orange-200 border-2 border-amber-300">
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
                      {investment.balance && (
                        <div>
                          <div className="text-xs text-slate-600">BALANCE</div>
                          <div className="font-bold">${investment.balance.toLocaleString()}</div>
                        </div>
                      )}
                      {investment.shares && (
                        <div>
                          <div className="text-xs text-slate-600">SHARES</div>
                          <div className="font-bold">{investment.shares}</div>
                        </div>
                      )}
                      {investment.profit && (
                        <div>
                          <div className="text-xs text-slate-600">PROFIT</div>
                          <div className={`font-bold ${investment.profit > 0 ? "text-green-600" : "text-red-600"}`}>
                            ${Math.abs(investment.profit).toLocaleString()}
                          </div>
                        </div>
                      )}
                      {investment.percent && (
                        <div className="text-xs text-green-600">+{investment.percent}%</div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                      {getInvestmentActions(investment.type).map((action, actionIndex) => (
                        <Button 
                          key={actionIndex} 
                          size="sm" 
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                        >
                          {action}
                        </Button>
                      ))}
                      
                      {/* Quantity selector for stocks */}
                      {investment.type === "stock" && (
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <Button size="sm" variant="outline" className="w-8 h-8 p-0">-</Button>
                          <span className="text-sm px-2">1</span>
                          <Button size="sm" variant="outline" className="w-8 h-8 p-0">+</Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildYourStax;