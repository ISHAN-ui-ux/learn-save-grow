import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Target, TrendingUp } from "lucide-react";
import { useState } from "react";

const ToolsSection = () => {
  const [savingsGoal, setSavingsGoal] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState("");
  const [savingsResult, setSavingsResult] = useState<number | null>(null);

  // Budget Tracker State
  const [income, setIncome] = useState("");
  const [housing, setHousing] = useState("");
  const [food, setFood] = useState("");
  const [transportation, setTransportation] = useState("");
  const [other, setOther] = useState("");
  const [budgetResult, setBudgetResult] = useState<number | null>(null);

  // Investment Calculator State
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [years, setYears] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [investmentResult, setInvestmentResult] = useState<number | null>(null);

  const calculateSavings = () => {
    const goal = parseFloat(savingsGoal);
    const monthly = parseFloat(monthlyAmount);
    
    if (goal && monthly) {
      const months = Math.ceil(goal / monthly);
      setSavingsResult(months);
    }
  };

  const calculateBudget = () => {
    const incomeAmount = parseFloat(income) || 0;
    const housingAmount = parseFloat(housing) || 0;
    const foodAmount = parseFloat(food) || 0;
    const transportationAmount = parseFloat(transportation) || 0;
    const otherAmount = parseFloat(other) || 0;
    
    const totalExpenses = housingAmount + foodAmount + transportationAmount + otherAmount;
    const available = incomeAmount - totalExpenses;
    setBudgetResult(available);
  };

  const calculateInvestment = () => {
    const initial = parseFloat(initialInvestment) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const timeYears = parseFloat(years) || 0;
    const rate = parseFloat(annualReturn) || 0;
    
    if (timeYears > 0 && rate > 0) {
      const monthlyRate = rate / 100 / 12;
      const totalMonths = timeYears * 12;
      
      // Future value of initial investment
      const futureValueInitial = initial * Math.pow(1 + rate / 100, timeYears);
      
      // Future value of monthly contributions (annuity)
      const futureValueMonthly = monthly * (Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate;
      
      const totalValue = futureValueInitial + futureValueMonthly;
      setInvestmentResult(totalValue);
    }
  };

  return (
    <section id="tools" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Financial <span className="bg-gradient-primary bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive calculators and tools to help you make informed financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Savings Goal Calculator */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Savings Goal Calculator</CardTitle>
              <CardDescription>Find out how long it will take to reach your savings goal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="savings-goal">Savings Goal ($)</Label>
                <Input
                  id="savings-goal"
                  type="number"
                  placeholder="Enter your goal amount"
                  value={savingsGoal}
                  onChange={(e) => setSavingsGoal(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="monthly-savings">Monthly Savings ($)</Label>
                <Input
                  id="monthly-savings"
                  type="number"
                  placeholder="How much can you save monthly?"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(e.target.value)}
                />
              </div>
              <Button onClick={calculateSavings} className="w-full">
                Calculate
              </Button>
              {savingsResult && (
                <div className="p-4 bg-accent rounded-lg text-center">
                  <p className="text-accent-foreground font-semibold">
                    You'll reach your goal in <span className="text-primary text-xl">{savingsResult}</span> months!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Budget Tracker Preview */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-trust rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Budget Tracker</CardTitle>
              <CardDescription>Track your monthly income and expenses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="income">Monthly Income ($)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="Enter monthly income"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="housing">Housing ($)</Label>
                <Input
                  id="housing"
                  type="number"
                  placeholder="Rent/mortgage"
                  value={housing}
                  onChange={(e) => setHousing(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="food">Food ($)</Label>
                <Input
                  id="food"
                  type="number"
                  placeholder="Groceries & dining"
                  value={food}
                  onChange={(e) => setFood(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="transportation">Transportation ($)</Label>
                <Input
                  id="transportation"
                  type="number"
                  placeholder="Car, gas, public transit"
                  value={transportation}
                  onChange={(e) => setTransportation(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="other">Other Expenses ($)</Label>
                <Input
                  id="other"
                  type="number"
                  placeholder="Entertainment, shopping, etc."
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                />
              </div>
              <Button onClick={calculateBudget} className="w-full">
                Calculate Budget
              </Button>
              {budgetResult !== null && (
                <div className={`p-4 rounded-lg text-center ${budgetResult >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  <p className="font-semibold">
                    {budgetResult >= 0 ? 'Available: ' : 'Over Budget: '}
                    <span className="text-xl">${Math.abs(budgetResult).toFixed(2)}</span>
                  </p>
                  <p className="text-sm mt-1">
                    {budgetResult >= 0 ? 'Great! You have money left to save or invest.' : 'You need to reduce expenses or increase income.'}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Investment Growth Calculator */}
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle>Investment Growth</CardTitle>
              <CardDescription>See how your investments can grow over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="initial">Initial Investment ($)</Label>
                <Input
                  id="initial"
                  type="number"
                  placeholder="Starting amount"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="monthly-investment">Monthly Contribution ($)</Label>
                <Input
                  id="monthly-investment"
                  type="number"
                  placeholder="Monthly addition"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="years">Investment Period (Years)</Label>
                <Input
                  id="years"
                  type="number"
                  placeholder="How many years?"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="return">Expected Annual Return (%)</Label>
                <Input
                  id="return"
                  type="number"
                  placeholder="e.g., 7"
                  value={annualReturn}
                  onChange={(e) => setAnnualReturn(e.target.value)}
                />
              </div>
              <Button onClick={calculateInvestment} className="w-full">
                Calculate Growth
              </Button>
              {investmentResult && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center">
                  <p className="font-semibold text-lg">
                    Projected Value: <span className="text-xl">${investmentResult.toFixed(2)}</span>
                  </p>
                  <p className="text-sm mt-1">
                    Total contribution: ${((parseFloat(initialInvestment) || 0) + (parseFloat(monthlyContribution) || 0) * (parseFloat(years) || 0) * 12).toFixed(2)}
                  </p>
                  <p className="text-sm">
                    Potential earnings: ${(investmentResult - ((parseFloat(initialInvestment) || 0) + (parseFloat(monthlyContribution) || 0) * (parseFloat(years) || 0) * 12)).toFixed(2)}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl">
            Explore All Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;