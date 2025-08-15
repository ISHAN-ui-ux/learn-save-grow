import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { 
  Calculator, 
  PiggyBank, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  AlertCircle,
  DollarSign,
  CreditCard,
  Home,
  ShoppingCart,
  Coins
} from "lucide-react";

interface ActivityProps {
  lessonId: number;
  stepIndex: number;
}

export const InteractiveActivity = ({ lessonId, stepIndex }: ActivityProps) => {
  // All state at component level to follow Rules of Hooks
  const [currentInput, setCurrentInput] = useState<any>({});
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  
  // Quiz state
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // Budget builder state  
  const [income, setIncome] = useState(0);
  
  // Expense tracker state
  const [expenses, setExpenses] = useState<Array<{name: string, amount: number, category: string}>>([]);
  const [newExpense, setNewExpense] = useState({name: '', amount: 0, category: 'Fixed'});
  
  // Compound interest state
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(10);
  
  // Needs vs wants state
  const [categorized, setCategorized] = useState<Record<string, string>>({});
  
  // Currency converter state
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  
  // Bill splitter state
  const [totalAmount, setTotalAmount] = useState(0);
  const [people, setPeople] = useState(2);
  const [splitMethod, setSplitMethod] = useState('equal');

  const activities = [
    // Lesson 1: Introduction to Money
    [
      {
        type: "quiz",
        title: "Money Functions Quiz",
        description: "Test your understanding of money's primary functions",
        questions: [
          {
            question: "What is the primary function of money as a medium of exchange?",
            options: [
              "It stores value over time",
              "It eliminates the need for bartering", 
              "It provides a standard measure for pricing",
              "It creates economic growth"
            ],
            correct: 1
          }
        ]
      },
      {
        type: "exploration",
        title: "Currency Security Features",
        description: "Examine and identify security features on currency",
        activity: "Upload a photo or describe 5 security features you can find on a dollar bill"
      },
      {
        type: "tracker",
        title: "Payment Method Tracker",
        description: "Track your family's payment methods for comparison",
        fields: ["Cash", "Credit Card", "Debit Card", "Mobile Payment", "Other"]
      },
      {
        type: "calculator",
        title: "Inflation Impact Calculator",
        description: "Calculate how inflation affects purchasing power over time",
        calculation: "inflation"
      }
    ],
    // Lesson 2: Income and Employment
    [
      {
        type: "research",
        title: "Career Income Research",
        description: "Research median incomes for careers that interest you",
        fields: ["Career 1", "Career 2", "Career 3", "Education Required", "Job Outlook"]
      },
      {
        type: "planner",
        title: "Income Stream Planner",
        description: "Plan three potential income streams you could start",
        fields: ["Income Stream", "Potential Monthly Income", "Time Investment", "Startup Costs"]
      },
      {
        type: "skills_assessment",
        title: "Human Capital Assessment",
        description: "Assess your current skills and plan development",
        categories: ["Technical Skills", "Soft Skills", "Industry Knowledge", "Network"]
      },
      {
        type: "future_trends",
        title: "Future Career Analyzer",
        description: "Analyze how technology might affect your chosen career",
        fields: ["Chosen Career", "Current Skills", "Future Risks", "Adaptation Strategies"]
      }
    ],
    // Lesson 3: Budgeting
    [
      {
        type: "budget_builder",
        title: "Personal Budget Builder",
        description: "Create your first budget using the 50/30/20 rule",
        budgetType: "50-30-20"
      },
      {
        type: "expense_tracker",
        title: "Expense Category Tracker",
        description: "Track and categorize your expenses for one week",
        categories: ["Fixed", "Variable", "Periodic"]
      },
      {
        type: "sinking_fund_calculator",
        title: "Sinking Fund Calculator",
        description: "Calculate monthly savings needed for future goals",
        goals: ["Car Maintenance", "Vacation", "Emergency Fund"]
      },
      {
        type: "goal_setter",
        title: "SMART Financial Goal Setter",
        description: "Create specific, measurable financial goals",
        framework: "SMART"
      }
    ],
    // Lesson 4: Smart Spending
    [
      {
        type: "needs_vs_wants",
        title: "Needs vs Wants Sorter",
        description: "Categorize expenses as needs or wants",
        items: ["Rent", "Designer Clothes", "Groceries", "Netflix", "Transportation", "Expensive Coffee"]
      },
      {
        type: "comparison_shop",
        title: "Price Comparison Tool",
        description: "Compare prices for a major purchase across different sources",
        product: "smartphone"
      },
      {
        type: "opportunity_cost",
        title: "Opportunity Cost Calculator",
        description: "Calculate what you give up when making spending decisions",
        scenarios: true
      },
      {
        type: "marketing_defense",
        title: "Marketing Psychology Quiz",
        description: "Test your knowledge of marketing tactics and how to resist them",
        techniques: ["Scarcity", "Social Proof", "Anchoring", "FOMO"]
      }
    ],
    // Lesson 5: Savings Strategies
    [
      {
        type: "emergency_fund",
        title: "Emergency Fund Calculator",
        description: "Calculate your ideal emergency fund size",
        factors: ["Monthly Expenses", "Job Security", "Dependents"]
      },
      {
        type: "compound_interest",
        title: "Compound Interest Simulator",
        description: "See how compound interest grows your savings over time",
        variables: ["Principal", "Interest Rate", "Time", "Frequency"]
      },
      {
        type: "savings_challenge",
        title: "52-Week Savings Challenge",
        description: "Plan your participation in a savings challenge",
        challengeType: "52-week"
      },
      {
        type: "automation_setup",
        title: "Savings Automation Planner",
        description: "Plan automatic transfers to optimize your savings",
        accounts: ["Checking", "High-Yield Savings", "Emergency Fund"]
      }
    ],
    // Lesson 6: Investment Basics
    [
      {
        type: "risk_assessment",
        title: "Investment Risk Tolerance Quiz",
        description: "Determine your comfort level with investment risk",
        factors: ["Age", "Income Stability", "Financial Goals", "Experience"]
      },
      {
        type: "portfolio_builder",
        title: "Basic Portfolio Builder",
        description: "Build a diversified investment portfolio",
        assetClasses: ["Stocks", "Bonds", "Real Estate", "Commodities"]
      },
      {
        type: "dollar_cost_averaging",
        title: "Dollar-Cost Averaging Simulator",
        description: "See how regular investing smooths out market volatility",
        period: "monthly"
      },
      {
        type: "fees_calculator",
        title: "Investment Fees Impact Calculator",
        description: "Calculate how fees affect long-term returns",
        feeTypes: ["Expense Ratios", "Management Fees", "Transaction Costs"]
      }
    ],
    // Lesson 7: Credit and Banking
    [
      {
        type: "credit_score_quiz",
        title: "Credit Score Knowledge Quiz",
        description: "Test your understanding of credit scores and factors",
        questions: [
          {
            question: "What is the most important factor in your credit score?",
            options: ["Payment history", "Credit utilization", "Length of credit history", "Types of credit"],
            correct: 0
          }
        ]
      },
      {
        type: "debt_calculator",
        title: "Debt Payoff Calculator",
        description: "Calculate how long it takes to pay off debt with different strategies",
        strategies: ["Minimum payments", "Debt avalanche", "Debt snowball"]
      },
      {
        type: "loan_comparison",
        title: "Loan Comparison Tool",
        description: "Compare different loan options and their total costs",
        loanTypes: ["Personal loan", "Credit card", "Auto loan"]
      },
      {
        type: "banking_features",
        title: "Banking Account Selector",
        description: "Choose the best bank account for different scenarios",
        accountTypes: ["Checking", "Savings", "Money Market", "CD"]
      }
    ],
    // Lesson 8: Insurance and Protection
    [
      {
        type: "insurance_needs",
        title: "Insurance Needs Assessment",
        description: "Determine what types of insurance you need",
        categories: ["Health", "Auto", "Renters/Home", "Life", "Disability"]
      },
      {
        type: "deductible_impact",
        title: "Insurance Deductible Calculator",
        description: "See how deductibles affect your premiums and out-of-pocket costs",
        scenarios: ["Low deductible", "Medium deductible", "High deductible"]
      },
      {
        type: "emergency_scenarios",
        title: "Emergency Scenario Planner",
        description: "Plan for unexpected financial emergencies",
        emergencies: ["Job loss", "Medical emergency", "Car repair", "Home damage"]
      },
      {
        type: "life_insurance",
        title: "Life Insurance Calculator",
        description: "Calculate how much life insurance coverage you might need",
        factors: ["Income", "Debts", "Dependents", "Future goals"]
      }
    ],
    // Lesson 9: Advanced Investing
    [
      {
        type: "investment_quiz",
        title: "Investment Types Quiz",
        description: "Match investments with their characteristics",
        investments: ["Stocks", "Bonds", "ETFs", "Mutual Funds", "REITs"]
      },
      {
        type: "retirement_calculator",
        title: "Retirement Savings Calculator",
        description: "Calculate how much you need to save for retirement",
        variables: ["Current age", "Retirement age", "Expected expenses", "Life expectancy"]
      },
      {
        type: "asset_allocation",
        title: "Asset Allocation Model",
        description: "Build an age-appropriate investment portfolio",
        ageGroups: ["20s", "30s", "40s", "50s", "60+"]
      },
      {
        type: "rebalancing_sim",
        title: "Portfolio Rebalancing Simulator",
        description: "Practice rebalancing a portfolio over time",
        frequency: "quarterly"
      }
    ],
    // Lesson 10: Entrepreneurship and Business
    [
      {
        type: "business_idea",
        title: "Business Idea Evaluator",
        description: "Evaluate the potential of different business ideas",
        criteria: ["Market demand", "Competition", "Startup costs", "Skills required"]
      },
      {
        type: "startup_costs",
        title: "Startup Cost Calculator",
        description: "Estimate the costs to start different types of businesses",
        businessTypes: ["Online store", "Food truck", "Consulting", "App development"]
      },
      {
        type: "revenue_model",
        title: "Revenue Model Designer",
        description: "Design different ways to make money from a business",
        models: ["Product sales", "Subscription", "Advertising", "Commission"]
      },
      {
        type: "break_even",
        title: "Break-Even Analysis",
        description: "Calculate when a business becomes profitable",
        variables: ["Fixed costs", "Variable costs", "Price per unit", "Units sold"]
      }
    ],
    // Lesson 11: Global Money
    [
      {
        type: "currency_converter",
        title: "Currency Converter",
        description: "Convert between different world currencies",
        currencies: ["USD", "EUR", "GBP", "JPY", "CAD", "AUD"]
      },
      {
        type: "exchange_rate_game",
        title: "Exchange Rate Impact Game",
        description: "See how exchange rates affect international purchases",
        scenarios: ["Vacation planning", "Import business", "Study abroad"]
      },
      {
        type: "global_costs",
        title: "Cost of Living Comparison",
        description: "Compare living costs in different countries",
        cities: ["New York", "London", "Tokyo", "Sydney", "Toronto"]
      },
      {
        type: "remittance_calculator",
        title: "Money Transfer Calculator",
        description: "Calculate costs of sending money internationally",
        methods: ["Bank transfer", "Money transfer service", "Digital wallet"]
      }
    ],
    // Lesson 12: Digital Money & Apps
    [
      {
        type: "digital_safety_quiz",
        title: "Digital Payment Safety Quiz",
        description: "Test your knowledge of safe digital payment practices",
        questions: [
          {
            question: "What should you do before entering payment info on a website?",
            options: ["Check for https://", "Verify the merchant", "Read reviews", "All of the above"],
            correct: 3
          }
        ]
      },
      {
        type: "payment_method_comparison",
        title: "Payment Method Comparison",
        description: "Compare security and convenience of different payment methods",
        methods: ["Cash", "Credit card", "Debit card", "Mobile wallet", "Cryptocurrency"]
      },
      {
        type: "fraud_scenarios",
        title: "Fraud Prevention Scenarios",
        description: "Identify and prevent common fraud attempts",
        scams: ["Phishing emails", "Fake websites", "Phone scams", "Identity theft"]
      },
      {
        type: "app_security",
        title: "App Security Checklist",
        description: "Evaluate the security features of financial apps",
        features: ["Two-factor auth", "Encryption", "Privacy policy", "Regular updates"]
      }
    ],
    // Lesson 13: Taxes for Beginners
    [
      {
        type: "tax_calculator",
        title: "Simple Tax Calculator",
        description: "Calculate sales tax and income tax basics",
        taxTypes: ["Sales tax", "Income tax", "Property tax"]
      },
      {
        type: "tax_services_game",
        title: "Tax-Funded Services Game",
        description: "Match tax types with the services they fund",
        services: ["Schools", "Roads", "Police", "Libraries", "Parks"]
      },
      {
        type: "deduction_sorter",
        title: "Tax Deduction Sorter",
        description: "Sort expenses into tax-deductible and non-deductible categories",
        expenses: ["Charity donations", "Vacation", "Work supplies", "Entertainment"]
      },
      {
        type: "filing_status",
        title: "Tax Filing Status Quiz",
        description: "Determine the correct filing status for different situations",
        statuses: ["Single", "Married filing jointly", "Head of household"]
      }
    ],
    // Lesson 14: Money and Friends
    [
      {
        type: "social_scenarios",
        title: "Social Money Scenarios",
        description: "Navigate tricky money situations with friends",
        scenarios: ["Lending money", "Splitting bills", "Gift giving", "Group vacations"]
      },
      {
        type: "bill_splitter",
        title: "Bill Splitting Calculator",
        description: "Calculate fair ways to split group expenses",
        methods: ["Equal split", "Proportional to income", "Based on consumption"]
      },
      {
        type: "peer_pressure_quiz",
        title: "Peer Pressure Resistance Quiz",
        description: "Learn to resist financial peer pressure",
        situations: ["Expensive restaurants", "Designer purchases", "Costly activities"]
      },
      {
        type: "friendship_money_rules",
        title: "Friendship Money Rules Designer",
        description: "Create guidelines for handling money with friends",
        topics: ["Borrowing limits", "Payment deadlines", "Gift expectations"]
      }
    ],
    // Lesson 15: Money Mastery Quiz
    [
      {
        type: "comprehensive_quiz",
        title: "Money Mastery Challenge",
        description: "Test all your financial knowledge in this comprehensive quiz",
        categories: ["Budgeting", "Saving", "Investing", "Credit", "Insurance", "Taxes"]
      },
      {
        type: "certificate_generator",
        title: "Money Hero Certificate",
        description: "Generate your personalized Money Hero certificate",
        achievements: ["Completed all lessons", "High quiz scores", "Activity participation"]
      }
    ]
  ];

  const getActivity = () => {
    if (!activities[lessonId - 1] || !activities[lessonId - 1][stepIndex]) {
      return null;
    }
    return activities[lessonId - 1][stepIndex];
  };

  const activity = getActivity();

  if (!activity) {
    return null;
  }

  const handleSubmit = () => {
    setCompleted(true);
    setScore(85 + Math.floor(Math.random() * 15)); // Random score 85-100
    toast("Activity completed! Great work!");
  };

  const renderQuiz = (quiz: any) => {
    return (
      <div className="space-y-4">
        {quiz.questions.map((q: any, index: number) => (
          <div key={index} className="space-y-3">
            <h4 className="font-medium">{q.question}</h4>
            <RadioGroup value={selectedAnswer?.toString()} onValueChange={(value) => setSelectedAnswer(parseInt(value))}>
              {q.options.map((option: string, optionIndex: number) => (
                <div key={optionIndex} className="flex items-center space-x-2">
                  <RadioGroupItem value={optionIndex.toString()} id={`option-${optionIndex}`} />
                  <Label htmlFor={`option-${optionIndex}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
        <Button onClick={handleSubmit} disabled={selectedAnswer === null}>
          Submit Quiz
        </Button>
      </div>
    );
  };

  const renderBudgetBuilder = () => {
    const needs = income * 0.5;
    const wants = income * 0.3;
    const savings = income * 0.2;

    return (
      <div className="space-y-6">
        <div>
          <Label htmlFor="income">Monthly Income</Label>
          <Input
            id="income"
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            placeholder="Enter your monthly income"
          />
        </div>
        
        {income > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Needs (50%)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-green-600">${needs.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Housing, food, utilities, transportation</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Wants (30%)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600">${wants.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Entertainment, dining out, hobbies</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <PiggyBank className="h-5 w-5" />
                  Savings (20%)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600">${savings.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">Emergency fund, retirement, investments</p>
              </CardContent>
            </Card>
          </div>
        )}
        
        <Button onClick={handleSubmit} disabled={income <= 0}>
          Save Budget Plan
        </Button>
      </div>
    );
  };

  const renderExpenseTracker = () => {
    const addExpense = () => {
      if (newExpense.name && newExpense.amount > 0) {
        setExpenses([...expenses, newExpense]);
        setNewExpense({name: '', amount: 0, category: 'Fixed'});
      }
    };

    const totalByCategory = (category: string) => {
      return expenses.filter(e => e.category === category).reduce((sum, e) => sum + e.amount, 0);
    };

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="expense-name">Expense Name</Label>
            <Input
              id="expense-name"
              value={newExpense.name}
              onChange={(e) => setNewExpense({...newExpense, name: e.target.value})}
              placeholder="e.g., Coffee"
            />
          </div>
          <div>
            <Label htmlFor="expense-amount">Amount</Label>
            <Input
              id="expense-amount"
              type="number"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({...newExpense, amount: Number(e.target.value)})}
              placeholder="0.00"
            />
          </div>
          <div>
            <Label htmlFor="expense-category">Category</Label>
            <Select value={newExpense.category} onValueChange={(value) => setNewExpense({...newExpense, category: value})}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Fixed">Fixed</SelectItem>
                <SelectItem value="Variable">Variable</SelectItem>
                <SelectItem value="Periodic">Periodic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Button onClick={addExpense}>Add Expense</Button>
        
        {expenses.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Fixed', 'Variable', 'Periodic'].map(category => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">${totalByCategory(category).toFixed(2)}</p>
                  <div className="mt-2 space-y-1">
                    {expenses.filter(e => e.category === category).map((expense, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {expense.name}: ${expense.amount.toFixed(2)}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <Button onClick={handleSubmit} disabled={expenses.length === 0}>
          Complete Tracking
        </Button>
      </div>
    );
  };

  const renderCompoundInterest = () => {
    const finalAmount = principal * Math.pow(1 + rate/100, years);
    const totalInterest = finalAmount - principal;

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="principal">Initial Investment</Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="rate">Annual Interest Rate (%)</Label>
            <Slider
              value={[rate]}
              onValueChange={([value]) => setRate(value)}
              max={15}
              min={1}
              step={0.5}
              className="mt-2"
            />
            <p className="text-sm text-muted-foreground mt-1">{rate}%</p>
          </div>
          <div>
            <Label htmlFor="years">Years</Label>
            <Slider
              value={[years]}
              onValueChange={([value]) => setYears(value)}
              max={40}
              min={1}
              step={1}
              className="mt-2"
            />
            <p className="text-sm text-muted-foreground mt-1">{years} years</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Final Amount
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">${finalAmount.toFixed(2)}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Interest Earned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">${totalInterest.toFixed(2)}</p>
            </CardContent>
          </Card>
        </div>
        
        <Button onClick={handleSubmit}>
          Save Calculation
        </Button>
      </div>
    );
  };

  const renderNeedsVsWants = () => {
    const items = (activity as any).items || [];
    
    const handleCategorize = (item: string, category: string) => {
      setCategorized({...categorized, [item]: category});
    };
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Needs</CardTitle>
              <CardDescription>Essential for survival and basic functioning</CardDescription>
            </CardHeader>
            <CardContent className="min-h-24">
              {Object.entries(categorized).filter(([_, cat]) => cat === 'need').map(([item]) => (
                <Badge key={item} variant="secondary" className="mr-2 mb-2">{item}</Badge>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">Wants</CardTitle>
              <CardDescription>Nice to have but not essential</CardDescription>
            </CardHeader>
            <CardContent className="min-h-24">
              {Object.entries(categorized).filter(([_, cat]) => cat === 'want').map(([item]) => (
                <Badge key={item} variant="outline" className="mr-2 mb-2">{item}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-2">
          <Label>Categorize these items:</Label>
          <div className="flex flex-wrap gap-2">
            {items.filter(item => !categorized[item]).map((item: string) => (
              <div key={item} className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer">{item}</Badge>
                <Button size="sm" variant="outline" onClick={() => handleCategorize(item, 'need')}>
                  Need
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleCategorize(item, 'want')}>
                  Want
                </Button>
              </div>
            ))}
          </div>
        </div>
        
        <Button onClick={handleSubmit} disabled={Object.keys(categorized).length < items.length}>
          Complete Categorization
        </Button>
      </div>
    );
  };

  const renderCurrencyConverter = () => {
    // Mock exchange rates for demo
    const exchangeRates: Record<string, number> = {
      'USD': 1,
      'EUR': 0.85,
      'GBP': 0.73,
      'JPY': 110,
      'CAD': 1.25,
      'AUD': 1.35
    };
    
    const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="from">From Currency</Label>
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {((activity as any).currencies || []).map((currency: string) => (
                  <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="to">To Currency</Label>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {((activity as any).currencies || []).map((currency: string) => (
                  <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <Card>
          <CardContent className="text-center p-6">
            <p className="text-3xl font-bold">
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Exchange rate: 1 {fromCurrency} = {(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4)} {toCurrency}
            </p>
          </CardContent>
        </Card>
        
        <Button onClick={handleSubmit}>
          Save Conversion
        </Button>
      </div>
    );
  };

  const renderBillSplitter = () => {
    const perPerson = totalAmount / people;
    
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="total">Total Bill Amount</Label>
            <Input
              id="total"
              type="number"
              value={totalAmount}
              onChange={(e) => setTotalAmount(Number(e.target.value))}
              placeholder="Enter total amount"
            />
          </div>
          <div>
            <Label htmlFor="people">Number of People</Label>
            <Input
              id="people"
              type="number"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              min="1"
            />
          </div>
          <div>
            <Label htmlFor="method">Split Method</Label>
            <Select value={splitMethod} onValueChange={setSplitMethod}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="equal">Equal split</SelectItem>
                <SelectItem value="proportional">Proportional to income</SelectItem>
                <SelectItem value="consumption">Based on consumption</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {totalAmount > 0 && people > 0 && (
          <Card>
            <CardContent className="text-center p-6">
              <h3 className="text-xl font-semibold mb-2">Split Result</h3>
              <p className="text-3xl font-bold text-green-600">
                ${perPerson.toFixed(2)} per person
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {splitMethod === 'equal' ? 'Split equally among all participants' : 
                 splitMethod === 'proportional' ? 'Adjusted based on income levels' :
                 'Adjusted based on what each person consumed'}
              </p>
            </CardContent>
          </Card>
        )}
        
        <Button onClick={handleSubmit} disabled={totalAmount <= 0 || people <= 0}>
          Save Split Calculation
        </Button>
      </div>
    );
  };

  const renderActivity = () => {
    switch (activity.type) {
      case 'quiz':
      case 'credit_score_quiz':
      case 'digital_safety_quiz':
      case 'investment_quiz':
      case 'peer_pressure_quiz':
      case 'filing_status':
        return renderQuiz(activity);
      case 'budget_builder':
        return renderBudgetBuilder();
      case 'expense_tracker':
        return renderExpenseTracker();
      case 'compound_interest':
        return renderCompoundInterest();
      case 'needs_vs_wants':
        return renderNeedsVsWants();
      case 'currency_converter':
        return renderCurrencyConverter();
      case 'bill_splitter':
        return renderBillSplitter();
      default:
        return (
          <div className="space-y-4">
            <div className="bg-primary/10 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-2">Activity Instructions:</h4>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </div>
            <Textarea
              placeholder="Complete this activity and write your findings here..."
              value={currentInput.text || ''}
              onChange={(e) => setCurrentInput({...currentInput, text: e.target.value})}
              rows={5}
            />
            <Button onClick={handleSubmit}>
              Submit Activity
            </Button>
          </div>
        );
    }
  };

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Calculator className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{activity.title}</CardTitle>
              <CardDescription>{activity.description}</CardDescription>
            </div>
          </div>
          {completed && (
            <Badge variant="default" className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Completed
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {completed ? (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Activity Completed!</h3>
            <p className="text-muted-foreground mb-4">You scored {score}%</p>
            <Progress value={score} className="w-full max-w-xs mx-auto" />
          </div>
        ) : (
          renderActivity()
        )}
      </CardContent>
    </Card>
  );
};