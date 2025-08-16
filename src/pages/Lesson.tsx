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

### Commodity Money (3000 BCE - 1900s)
- **Examples**: Gold, silver, cattle, shells, salt
- **Advantages**: Intrinsic value, durability, portability
- **Problems**: Heavy to carry, difficult to divide, value fluctuations

### Paper Money (1100s - Present)
- **Innovation**: Representing value rather than being the value
- **Advantages**: Lightweight, easy to transport, divisible
- **Risk**: Depends on trust in the issuing authority

### Electronic Money (1950s - Present)
- **Forms**: Credit cards, debit cards, wire transfers
- **Benefits**: Instant transactions, global reach, digital records
- **Considerations**: Technology dependence, security concerns

### Digital Currencies (2000s - Present)
- **Types**: Cryptocurrencies (Bitcoin), Central Bank Digital Currencies (CBDCs)
- **Innovations**: Decentralization, programmable money, blockchain technology
- **Questions**: Regulation, environmental impact, adoption

## Money in the Modern Economy

Today's money system is more complex than ever. Most money exists as digital entries in bank computers rather than physical cash. The Federal Reserve manages the money supply, and international markets determine exchange rates between currencies.

### Key Statistics About Money Today:
- Less than 8% of all money exists as physical cash
- Over $5 trillion worth of currency is traded daily in foreign exchange markets
- The average American makes 50+ electronic payments per month
- Mobile payments are growing 20%+ annually worldwide

Understanding these fundamentals prepares you to make informed financial decisions and navigate our increasingly digital economy.`,
          activities: ["comprehensive_quiz", "written_analysis", "case_study"]
        },
        {
          id: 2,
          title: "Types of Money",
          content: `## Types of Money

Understanding different forms of money helps us navigate our modern financial system and make informed decisions about how we store, transfer, and use our wealth.

### Physical Currency

**Coins and Bills**
Physical currency remains important despite the digital revolution. The U.S. Mint produces billions of coins annually, while the Bureau of Engraving and Printing creates about 7.4 billion banknotes each year.

**Security Features**
Modern currency includes sophisticated anti-counterfeiting measures:
- Watermarks visible when held to light
- Color-changing ink that shifts when tilted
- Security threads embedded in the paper
- Microprinting too small to reproduce accurately
- Raised printing with distinctive texture

**Global Perspective**
Different countries have unique approaches to physical currency:
- Canada eliminated the penny in 2013 due to production costs
- Sweden is moving toward becoming cashless
- Some countries use polymer (plastic) bills for durability
- The Euro is used by 19 countries, demonstrating currency union

### Digital Money

**Electronic Payments**
Digital transactions now dominate financial activity:
- Credit and debit card networks process trillions of dollars annually
- ACH (Automated Clearing House) handles direct deposits and bill payments
- Wire transfers enable large, immediate transfers
- Payment apps like Venmo and Cash App popularize peer-to-peer transfers

**Mobile Payments**
Smartphone-based payments are revolutionizing commerce:
- NFC (Near Field Communication) enables tap-to-pay
- QR codes provide another contactless option
- Biometric authentication adds security layers
- Integration with loyalty programs and receipts

**Central Bank Digital Currencies (CBDCs)**
Governments worldwide are exploring digital versions of their currencies:
- China's digital yuan is already in limited circulation
- The European Central Bank is developing a digital euro
- The Federal Reserve is researching a digital dollar
- CBDCs could provide more direct monetary policy tools

### Cryptocurrency

**Bitcoin and Beyond**
Cryptocurrencies represent a paradigm shift in money:
- Decentralized networks eliminate the need for central authorities
- Blockchain technology provides transparent, immutable records
- Limited supply creates scarcity similar to precious metals
- Global accessibility transcends national boundaries

**Practical Considerations**
While innovative, cryptocurrencies face challenges:
- High volatility makes them risky stores of value
- Energy consumption for mining raises environmental concerns
- Regulatory uncertainty affects adoption and stability
- Technical complexity barriers limit mainstream use

**Stablecoins**
These attempt to combine crypto benefits with price stability:
- Pegged to stable assets like the U.S. dollar
- Used for international transfers and DeFi applications
- Backed by reserves of traditional assets
- Growing use in commerce and savings

### The Future of Money

**Emerging Trends**
Several developments are shaping money's future:
- Programmable money that executes automatically
- Internet of Things (IoT) devices making autonomous payments
- Artificial intelligence optimizing financial decisions
- Quantum computing potentially disrupting current security

**Implications for Personal Finance**
Understanding these trends helps in financial planning:
- Diversify across different money types
- Stay informed about technological developments
- Consider security and privacy implications
- Adapt to changing payment preferences

This evolution of money from physical to digital forms reflects humanity's ongoing quest for more efficient, secure, and convenient ways to store and transfer value.`,
          activities: ["digital_money_explorer", "currency_security_lab", "payment_method_analyzer"]
        }
        // More lessons in Financial Foundations...
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

A budget is your financial roadmap - a plan that tells your money where to go instead of wondering where it went. Despite its importance, only about 32% of Americans maintain a household budget. Those who do budget are more likely to feel financially secure and achieve their goals.

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
- Reduced anxiety about money decisions

**Goal Achievement**
Budgets transform dreams into achievable plans:
- Break large goals into manageable monthly amounts
- Track progress toward important milestones
- Adjust spending to accelerate goal achievement
- Build wealth systematically over time

### Common Budgeting Misconceptions

**"Budgets Are Too Restrictive"**
Reality: Budgets actually provide more freedom by:
- Ensuring you can afford the things you value most
- Eliminating guilt about reasonable spending
- Preventing financial crises that truly restrict choices
- Creating margin for spontaneous purchases

**"I Don't Earn Enough to Budget"**
Reality: Lower incomes make budgeting more important, not less:
- Every dollar matters more when resources are limited
- Budgeting helps stretch limited income further
- Identifies opportunities to increase income
- Prevents debt cycles that worsen financial situations

**"Budgeting Takes Too Much Time"**
Reality: Modern tools make budgeting efficient:
- Apps can automate much of the tracking process
- Simple budgeting methods require minimal time investment
- The time saved avoiding financial problems exceeds budgeting time
- Skills improve with practice, making the process faster

### The Psychology of Money

Understanding behavioral factors improves budgeting success:

**Mental Accounting**
People treat money differently based on its source:
- Tax refunds often feel like "free money" for splurging
- Windfall gains are spent more freely than earned income
- Money from different accounts feels separate even when it's not
- Understanding this helps create more effective budget categories

**Present Bias**
Humans naturally prioritize immediate rewards:
- Future benefits feel less valuable than immediate pleasures
- This makes saving and budgeting psychologically challenging
- Automatic transfers help overcome this bias
- Visual reminders of future goals increase motivation

**Social Influence**
Our spending is heavily influenced by others:
- Social media showcases highlight reels, not full financial pictures
- Peer pressure affects spending decisions at all income levels
- Cultural attitudes toward money vary significantly
- Building supportive financial communities helps maintain good habits

### Building Your Financial Foundation

Before creating specific budget categories, establish core principles:

**Values-Based Spending**
Align your budget with what matters most to you:
- Identify your top 3-5 life priorities
- Ensure your budget supports these priorities
- Reduce spending on things that don't align with your values
- This makes budgeting feel empowering rather than restrictive

**Emergency Preparedness**
Build resilience into your financial plan:
- Start with a small emergency fund ($500-$1,000)
- Work toward 3-6 months of expenses in savings
- Consider potential financial disruptions in your situation
- An emergency fund prevents budget derailment from unexpected expenses

**Flexibility and Adaptation**
Create budgets that work with real life:
- Allow for reasonable lifestyle expenses
- Build in buffer amounts for category overages
- Review and adjust monthly based on actual spending
- Change is normal - budgets should evolve with your life

This foundation of understanding why budgets matter, how psychology affects spending, and what principles guide effective budgeting sets the stage for creating and maintaining a successful financial plan.`,
          activities: ["budget_assessment", "spending_psychology_quiz", "values_alignment_exercise"]
        }
        // More lessons in Smart Spending & Budgeting...
      ]
    }
    // More categories...
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