import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Target, TrendingUp } from "lucide-react";
import { useState } from "react";

const ToolsSection = () => {
  const [savingsGoal, setSavingsGoal] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateSavings = () => {
    const goal = parseFloat(savingsGoal);
    const monthly = parseFloat(monthlyAmount);
    
    if (goal && monthly) {
      const months = Math.ceil(goal / monthly);
      setResult(months);
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
              {result && (
                <div className="p-4 bg-accent rounded-lg text-center">
                  <p className="text-accent-foreground font-semibold">
                    You'll reach your goal in <span className="text-primary text-xl">{result}</span> months!
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
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Income</span>
                  <span className="text-sm font-medium text-growth-green">$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Housing</span>
                  <span className="text-sm font-medium">$1,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Food</span>
                  <span className="text-sm font-medium">$600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Transportation</span>
                  <span className="text-sm font-medium">$400</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-medium">
                  <span>Available</span>
                  <span className="text-primary">$2,500</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Open Full Tracker
              </Button>
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
              <div className="text-center">
                <div className="text-2xl font-bold text-growth-green mb-2">$50,000</div>
                <p className="text-sm text-muted-foreground mb-4">
                  Projected value after 10 years
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Initial Investment:</span>
                    <span>$10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Contribution:</span>
                    <span>$200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expected Return:</span>
                    <span>7% annually</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Customize Calculation
              </Button>
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