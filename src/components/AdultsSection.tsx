import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calculator, CreditCard, TrendingUp } from "lucide-react";

const AdultsSection = () => {
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
            Take control of your financial future with advanced tools, insights, and strategies designed for modern adults.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left side - Feature cards */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-trust-blue" />
                  </div>
                  <div>
                    <CardTitle>Advanced Budgeting</CardTitle>
                    <CardDescription>Sophisticated budget planning and tracking</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Zero-based budgeting methods</li>
                  <li>• Expense categorization and analysis</li>
                  <li>• Monthly and yearly financial planning</li>
                  <li>• Emergency fund calculations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-growth-green/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-growth-green" />
                  </div>
                  <div>
                    <CardTitle>Investment Planning</CardTitle>
                    <CardDescription>Build wealth through smart investing</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Portfolio diversification strategies</li>
                  <li>• Risk assessment tools</li>
                  <li>• Retirement planning calculators</li>
                  <li>• Market analysis and insights</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Debt Management</CardTitle>
                    <CardDescription>Strategic debt reduction and elimination</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Debt snowball vs. avalanche methods</li>
                  <li>• Credit score improvement strategies</li>
                  <li>• Loan consolidation analysis</li>
                  <li>• Payment optimization plans</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-trust-blue" />
                  </div>
                  <div>
                    <CardTitle>Financial Analytics</CardTitle>
                    <CardDescription>Data-driven financial insights</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Spending pattern analysis</li>
                  <li>• Net worth tracking</li>
                  <li>• Cash flow projections</li>
                  <li>• Goal progress monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button variant="trust" size="xl" className="group">
            Access Professional Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdultsSection;