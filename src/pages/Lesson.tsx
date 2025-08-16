import { useParams, Navigate } from "react-router-dom";
import { LessonSlides } from "@/components/LessonSlides";

export default function Lesson() {
  const { categoryId, lessonId } = useParams();
  const categoryIndex = parseInt(categoryId || "1");
  const lessonIndex = parseInt(lessonId || "1");

  // Comprehensive lesson data organized by categories
  const categories = [
    {
      id: 1,
      title: "Financial Foundations",
      lessons: [
        {
          id: 1,
          title: "What is Money?",
          content: `## What is Money?

Money is one of humanity's most important inventions. At its core, money is anything that people agree to accept in exchange for goods and services. But money serves three crucial functions that make our modern economy possible.

### The Three Functions of Money

**1. Medium of Exchange**
Before money existed, people had to barter - trading goods directly for other goods. This created the "double coincidence of wants" problem: you needed to find someone who both had what you wanted AND wanted what you had. Money solves this by serving as an intermediary that everyone accepts.

**2. Unit of Account**
Money provides a common measure to compare the value of different goods and services. Instead of saying "one cow equals five chickens," we can price everything in dollars, making comparisons easy and standardized.

**3. Store of Value**
Money allows you to save purchasing power for the future. You can work today, save money, and use it weeks, months, or years later. However, inflation can erode this function over time.

## Historical Evolution of Money

Understanding how money evolved helps us appreciate its importance and predict future changes.

### Barter System (Prehistory - 3000 BCE)
- **How it worked**: Direct exchange of goods and services
- **Problems**: Double coincidence of wants, difficulty storing value, no standard measure
- **Example**: Trading 3 chickens for 1 goat

### Modern Money Systems

Today's money system is more complex than ever. Most money exists as digital entries in bank computers rather than physical cash. The Federal Reserve manages the money supply, and international markets determine exchange rates between currencies.

Understanding these fundamentals prepares you to make informed financial decisions and navigate our increasingly digital economy.`,
          activities: ["comprehensive_quiz", "written_analysis", "case_study"]
        },
        {
          id: 2,
          title: "Types of Money",
          content: `## Types of Money

Understanding different forms of money helps us navigate our modern financial system and make informed decisions about how we store, transfer, and use our wealth.

### Physical Currency

Modern currency includes sophisticated anti-counterfeiting measures:
- Watermarks visible when held to light
- Color-changing ink that shifts when tilted
- Security threads embedded in the paper
- Microprinting too small to reproduce accurately
- Raised printing with distinctive texture

### Digital Money

Digital transactions now dominate financial activity:
- Credit and debit card networks process trillions of dollars annually
- Mobile payments are revolutionizing commerce
- Central Bank Digital Currencies are being developed worldwide

### Cryptocurrency

Cryptocurrencies represent a paradigm shift in money:
- Decentralized networks eliminate the need for central authorities
- Blockchain technology provides transparent, immutable records
- High volatility makes them risky stores of value

This evolution of money from physical to digital forms reflects humanity's ongoing quest for more efficient, secure, and convenient ways to store and transfer value.`,
          activities: ["digital_money_quiz", "currency_comparison", "payment_security_lab"]
        }
      ]
    },
    {
      id: 2,
      title: "Smart Spending & Budgeting",
      lessons: [
        {
          id: 1,
          title: "Introduction to Budgeting",
          content: `## Introduction to Budgeting

A budget is your financial roadmap - a plan that tells your money where to go instead of wondering where it went. Despite its importance, only about 32% of Americans maintain a household budget.

### Why Budgeting Matters

**Financial Control**
Budgeting provides visibility into your spending patterns and helps you:
- Identify where your money actually goes
- Spot opportunities to reduce unnecessary expenses
- Ensure important financial goals are funded
- Avoid overspending and debt accumulation

**Stress Reduction**
Financial uncertainty is a major source of stress. A budget provides:
- Predictability in your financial life
- Confidence in your ability to handle expenses
- Peace of mind about your financial future

### Common Budgeting Methods

**The 50/30/20 Rule**
- 50% for Needs: Essential expenses you can't avoid
- 30% for Wants: Discretionary spending that enhances your lifestyle  
- 20% for Savings and Debt: Building financial security

**Zero-Based Budgeting**
Every dollar gets assigned a specific purpose until Income - All Allocations = $0.

This foundation of understanding why budgets matter sets the stage for creating and maintaining a successful financial plan.`,
          activities: ["budget_basics_quiz", "spending_habits_assessment", "budget_method_explorer"]
        }
      ]
    }
  ];

  const category = categories.find(c => c.id === categoryIndex);
  const lesson = category?.lessons.find(l => l.id === lessonIndex);

  if (!category || !lesson) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <LessonSlides 
        lessonId={`${categoryIndex}-${lessonIndex}`} 
        lessonData={lesson} 
        categoryTitle={category.title}
        categoryId={categoryIndex}
        totalLessons={category.lessons.length}
        currentLessonIndex={lessonIndex}
      />
    </div>
  );
}