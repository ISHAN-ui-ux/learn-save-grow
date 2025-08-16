import { useParams, Navigate } from "react-router-dom";
import { LessonSlides } from "@/components/LessonSlides";

export default function Lesson() {
  const { id } = useParams();
  const lessonId = parseInt(id || "1");

  // Comprehensive lesson data with expanded content and activities
  const lessons = [
    {
      id: 1,
      title: "Introduction to Money",
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

Understanding these fundamentals prepares you to make informed financial decisions and navigate our increasingly digital economy.

## Security Features of Modern Currency

Physical currency includes numerous security features to prevent counterfeiting:
- **Watermarks**: Visible when held to light
- **Security threads**: Embedded strips with microprinting
- **Color-changing ink**: Shifts color when tilted
- **Raised printing**: Textured feel of important elements
- **Microprinting**: Tiny text difficult to reproduce

## The Psychology of Money

Money isn't just an economic tool - it affects our psychology and behavior:
- **Loss aversion**: People feel losses more strongly than equivalent gains
- **Mental accounting**: We treat money differently based on its source
- **Present bias**: We prefer immediate rewards over future benefits
- **Social comparison**: Our spending is influenced by others' behavior

Understanding these psychological factors helps you make better financial decisions and avoid common money mistakes.`,
      activities: [
        "comprehensive_quiz",
        "written_analysis", 
        "case_study",
        "interactive_timeline",
        "inflation_calculator"
      ]
    },
    {
      id: 2,
      title: "Income and Earning Money",
      content: `## Understanding Income

Income is the money you receive on a regular basis from various sources. Understanding different types of income is crucial for financial planning and tax purposes.

### Types of Income

**1. Earned Income**
- **Definition**: Money received in exchange for work or services
- **Examples**: Wages, salaries, tips, commissions, bonuses
- **Tax implications**: Subject to payroll taxes and income taxes
- **Characteristics**: Requires active participation and time investment

**2. Passive Income**
- **Definition**: Money earned with minimal ongoing effort
- **Examples**: Rental income, dividends, royalties, business investments
- **Benefits**: Can generate money while you sleep or vacation
- **Requirements**: Usually requires initial capital investment or creative work

**3. Portfolio Income**
- **Definition**: Income from investments like stocks, bonds, and mutual funds
- **Examples**: Capital gains, dividend payments, interest from bonds
- **Risk factors**: Subject to market volatility
- **Tax advantages**: Often taxed at lower capital gains rates

## Career Development and Income Growth

Your earning potential depends on various factors you can influence through strategic decisions.

### Factors Affecting Income Potential

**Education and Skills**
- College graduates earn $1.2 million more over their lifetime than high school graduates
- Specialized skills in technology, healthcare, and finance command premium salaries
- Continuous learning and certification updates increase marketability

**Industry Choice**
- Technology, finance, and healthcare typically offer higher salaries
- Geographic location significantly impacts compensation (Silicon Valley vs. rural areas)
- Growth industries offer better advancement opportunities

**Experience and Performance**
- Each year of relevant experience typically increases salary by 3-5%
- High performers can earn 20-50% more than average employees
- Leadership and management roles offer substantial pay increases`,
      activities: [
        "income_calculator",
        "career_planning",
        "gig_economy_explorer",
        "tax_withholding_calculator"
      ]
    }
    // Additional lessons would follow the same pattern...
  ];

  const lesson = lessons.find(l => l.id === lessonId);

  if (!lesson) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <LessonSlides lessonId={lessonId} lessonData={lesson} />
    </div>
  );
}