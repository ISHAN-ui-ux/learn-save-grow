import { useParams, Navigate } from "react-router-dom";
import { LessonSlides } from "@/components/LessonSlides";

export default function Lesson() {
  const { categoryId, lessonId } = useParams();
  const categoryIndex = parseInt(categoryId || "1");
  const lessonIndex = parseInt(lessonId || "1");

  // Single comprehensive financial literacy slideshow
  const categories = [
    {
      id: 1,
      title: "Financial Literacy Masterclass",
      lessons: [
        {
          id: 1,
          title: "Complete Financial Literacy - 20 Slides + Interactive Activities",
          content: `## Slide 1: Introduction to Personal Finance

Personal finance is the comprehensive management of your financial resources to achieve both short-term needs and long-term life goals. According to the Federal Reserve's 2022 Survey of Consumer Finances, the median American household has $5,300 in savings, while 37% of Americans cannot cover a $400 emergency expense without borrowing. This course will transform your financial understanding and empower you to build lasting wealth.

**Key Statistics:**
- Average American saves only 13% of income (Bureau of Economic Analysis, 2023)
- 78% of Americans live paycheck to paycheck (CareerBuilder Survey, 2023)
- Only 57% of Americans are financially literate (FINRA, 2022)

## Slide 2: Understanding Money and Its History

Money evolved from bartering systems to modern digital currencies. The Federal Reserve defines money as anything that serves as a medium of exchange, unit of account, and store of value. Understanding money's evolution helps us appreciate modern financial systems and prepare for future changes like digital currencies and blockchain technology.

**Timeline of Money:**
- 9000 BCE: Livestock and grain as currency
- 700 BCE: First metal coins in Lydia
- 1862: First paper money in the US
- 1971: End of gold standard
- 2009: Bitcoin created

## Slide 3: The Psychology of Money

Behavioral economics shows that emotions drive 90% of financial decisions (Nobel Prize winner Daniel Kahneman's research). Understanding psychological biases like loss aversion, anchoring, and present bias is crucial for making rational financial choices. The Harvard Business School's research indicates that people who understand their money psychology are 45% more likely to achieve their financial goals.

**Common Money Biases:**
- Loss aversion: Feeling losses twice as strongly as gains
- Present bias: Overvaluing immediate rewards
- Anchoring: Relying too heavily on first information received
- Confirmation bias: Seeking information that confirms existing beliefs

## Slide 4: Income and Career Development

Your earning potential is your most valuable asset. The Bureau of Labor Statistics shows that college graduates earn $1.2 million more over their lifetime than high school graduates. However, income optimization isn't just about education—it's about strategic career planning, skill development, and understanding market demands.

**Income Maximization Strategies:**
- Continuous learning and skill development
- Strategic job changes every 2-3 years (average 10-20% salary increase)
- Building multiple income streams
- Negotiating salaries and benefits effectively
- Understanding your industry's compensation trends

## Slide 5: The Power of Budgeting

A budget is your money's GPS system. The 50/30/20 rule, popularized by Senator Elizabeth Warren, suggests allocating 50% to needs, 30% to wants, and 20% to savings and debt repayment. However, YNAB (You Need A Budget) research shows that people who actively budget save 600% more than those who don't.

**Advanced Budgeting Methods:**
- Zero-based budgeting: Every dollar has a purpose
- Envelope method: Physical cash allocation
- Pay-yourself-first: Savings before expenses
- 80/20 simplified approach: Save 20%, spend 80%

## Slide 6: Emergency Funds - Your Financial Safety Net

Financial experts recommend 3-6 months of expenses in an emergency fund. However, the Federal Reserve's data shows that emergency fund needs vary by income stability and family size. Government workers might need 3 months, while freelancers should aim for 8-12 months.

**Emergency Fund Statistics:**
- 40% of Americans can't cover a $400 emergency (Federal Reserve, 2023)
- People with emergency funds are 70% less likely to go into debt
- High-yield savings accounts currently offer 4-5% APY (2024)
- Emergency funds prevent 89% of financial stress-related decisions

## Slide 7: Debt Management and Credit Scores

Debt can be a tool or a trap. The average American has $6,194 in credit card debt with an average interest rate of 24.37% (Federal Reserve Bank of St. Louis, 2024). Understanding good debt (mortgages, education) versus bad debt (high-interest credit cards) is crucial for financial success.

**Credit Score Impact:**
- 740+ score: Best interest rates, save $100,000+ on mortgage
- 670-739: Good rates, most products available
- 580-669: Higher rates, limited options
- Below 580: Significant challenges, high costs

## Slide 8: Investment Fundamentals

Investing is how money grows beyond inflation. The S&P 500 has averaged 10% annual returns over 90+ years (Standard & Poor's historical data). However, successful investing requires understanding risk tolerance, diversification, and long-term thinking. Warren Buffett's research shows that time in the market beats timing the market.

**Investment Vehicle Comparison:**
- Stocks: Higher risk/reward, average 10% annually
- Bonds: Lower risk, 3-5% annually
- Real Estate: Tangible assets, 8-12% annually including appreciation
- Index Funds: Diversified, low-cost, match market returns

## Slide 9: The Magic of Compound Interest

Albert Einstein allegedly called compound interest "the eighth wonder of the world." Investing $1,000 monthly from age 25-35 (only $120,000 total) grows to $1.37 million by age 65 at 8% returns. Starting at 35 requires $2,000 monthly to reach the same goal.

**Compound Interest Examples:**
- $100/month for 40 years at 7%: $262,481
- $500/month for 30 years at 8%: $679,073
- $1,000/month for 20 years at 9%: $667,887

## Slide 10: Retirement Planning Strategies

The retirement crisis is real: 64% of Americans aren't on track for retirement (Employee Benefit Research Institute, 2023). Social Security replaces only 40% of pre-retirement income. The rule of thumb is to save 10-15% of income for retirement, but many experts now recommend 20%+ due to longer lifespans and healthcare costs.

**Retirement Account Options:**
- 401(k): Employer-sponsored, often with matching
- Traditional IRA: Tax-deductible contributions, taxed withdrawals
- Roth IRA: After-tax contributions, tax-free withdrawals
- HSA: Triple tax advantage for healthcare expenses

## Slide 11: Insurance and Risk Management

Insurance transfers risk from you to insurance companies. The right coverage protects your financial plan from catastrophic events. The National Association of Insurance Commissioners reports that 1 in 8 drivers will file a claim annually, and medical bankruptcies account for 66.5% of all bankruptcies.

**Essential Insurance Types:**
- Health insurance: Mandatory and critical
- Auto insurance: Required by law in most states
- Life insurance: 5-10x annual income if you have dependents
- Disability insurance: Protects your earning ability
- Umbrella policy: Additional liability protection

## Slide 12: Tax Planning and Optimization

Tax planning can save thousands annually. The Tax Foundation reports that Americans spend 13.3 hours annually on tax preparation. Understanding tax-advantaged accounts, deductions, and credits can significantly impact your wealth building. The difference between tax avoidance (legal) and tax evasion (illegal) is crucial.

**Tax-Saving Strategies:**
- Maximize 401(k) contributions: $23,000 limit (2024)
- Use tax-loss harvesting in investment accounts
- Understand standard vs. itemized deductions
- Consider municipal bonds for high earners
- Time income and deductions strategically

## Slide 13: Real Estate as an Investment

Real estate historically appreciates 3-5% annually and provides rental income. The National Association of Realtors reports that homeownership builds wealth through appreciation and forced savings. However, real estate requires significant capital, carries maintenance costs, and isn't liquid.

**Real Estate Investment Options:**
- Primary residence: Homeownership benefits
- Rental properties: Income and appreciation
- REITs: Real estate exposure without direct ownership
- Real estate crowdfunding: Lower barrier to entry
- House hacking: Live in one unit, rent others

## Slide 14: Building Multiple Income Streams

Millionaires average 7 income streams according to IRS research on high earners. Multiple income streams provide security and accelerate wealth building. The gig economy, digital products, and passive investments offer opportunities to diversify income beyond traditional employment.

**Income Stream Categories:**
- Active earned income: Salary, wages, business profits
- Portfolio income: Dividends, interest, capital gains
- Passive income: Rental properties, royalties, business investments
- Side hustles: Freelancing, e-commerce, consulting

## Slide 15: Financial Goal Setting and Planning

SMART financial goals (Specific, Measurable, Achievable, Relevant, Time-bound) are 42% more likely to be achieved according to Dominican University research. Breaking long-term goals into shorter milestones maintains motivation and allows course corrections.

**Goal Setting Framework:**
- Short-term (1 year): Emergency fund, debt reduction
- Medium-term (2-5 years): Home down payment, vehicle replacement
- Long-term (5+ years): Retirement, children's education
- Review and adjust quarterly

## Slide 16: Technology and Financial Management

Fintech has revolutionized personal finance. Mobile banking, robo-advisors, and budgeting apps have made financial management more accessible. The Federal Reserve reports that 89% of Americans use mobile banking, and robo-advisors manage over $1.4 trillion in assets.

**Essential Financial Technology:**
- Budgeting apps: Mint, YNAB, Personal Capital
- Investment platforms: Vanguard, Fidelity, Schwab
- Robo-advisors: Betterment, Wealthfront
- Mobile banking: Real-time account monitoring
- Credit monitoring: Free credit score tracking

## Slide 17: Economic Cycles and Market Understanding

Economic cycles are inevitable. Understanding recession indicators, inflation impacts, and market volatility helps make informed decisions. The National Bureau of Economic Research shows recessions occur every 6-10 years on average, but markets recover and continue growing long-term.

**Economic Indicators:**
- GDP growth: Measures economic health
- Unemployment rate: Job market strength
- Inflation rate: Purchasing power changes
- Interest rates: Borrowing and saving costs
- Stock market performance: Investor confidence

## Slide 18: Estate Planning and Legacy Building

Estate planning isn't just for the wealthy. Without proper planning, state laws determine asset distribution. The American Bar Association reports that 67% of Americans don't have a will. Basic estate planning includes wills, powers of attorney, and beneficiary designations.

**Essential Estate Planning Documents:**
- Will: Asset distribution instructions
- Trust: Asset management and tax benefits
- Power of attorney: Financial decision authority
- Healthcare directive: Medical decision preferences
- Beneficiary designations: Retirement and insurance accounts

## Slide 19: Financial Mistakes to Avoid

Learning from others' mistakes is cheaper than making your own. Common financial mistakes cost Americans billions annually. Understanding these pitfalls helps avoid them and accelerates wealth building.

**Major Financial Mistakes:**
- Not starting early: Lost compound interest opportunities
- Emotional investing: Buying high, selling low
- Insufficient insurance: Inadequate risk protection
- Lifestyle inflation: Increasing expenses with income
- No emergency fund: Forced debt for emergencies
- Ignoring fees: Investment and banking cost erosion

## Slide 20: Creating Your Financial Action Plan

Knowledge without action produces no results. Creating a specific, written financial plan increases success probability by 85% according to financial planning research. Your financial plan should address all areas covered in this course and include specific timelines and milestones.

**Your 90-Day Action Plan:**
1. Calculate net worth and monthly cash flow
2. Establish emergency fund savings goal
3. Open high-yield savings and investment accounts
4. Create and implement a budget system
5. Begin or increase retirement contributions
6. Review and optimize insurance coverage
7. Set up automatic savings and investments
8. Schedule quarterly financial reviews`,
          activities: [
            {
              type: "quiz",
              title: "Financial Knowledge Quiz #1",
              description: "Test your understanding of fundamental financial concepts",
              questions: [
                {
                  question: "According to the Federal Reserve's 2022 Survey, what percentage of Americans cannot cover a $400 emergency expense without borrowing?",
                  options: ["25%", "37%", "50%", "63%"],
                  correctAnswer: 1,
                  explanation: "37% of Americans cannot cover a $400 emergency expense without borrowing, highlighting the importance of emergency funds."
                },
                {
                  question: "What is the average annual return of the S&P 500 over the past 90+ years?",
                  options: ["7%", "8%", "10%", "12%"],
                  correctAnswer: 2,
                  explanation: "The S&P 500 has averaged approximately 10% annual returns over 90+ years, making it a popular long-term investment choice."
                },
                {
                  question: "How much more do college graduates typically earn over their lifetime compared to high school graduates?",
                  options: ["$500,000", "$800,000", "$1.2 million", "$2 million"],
                  correctAnswer: 2,
                  explanation: "According to the Bureau of Labor Statistics, college graduates earn approximately $1.2 million more over their lifetime than high school graduates."
                },
                {
                  question: "What credit score range typically qualifies for the best interest rates?",
                  options: ["650+", "700+", "740+", "800+"],
                  correctAnswer: 2,
                  explanation: "A credit score of 740+ typically qualifies for the best interest rates and can save over $100,000 on a mortgage."
                },
                {
                  question: "According to research, people who actively budget save how much more than those who don't?",
                  options: ["200% more", "400% more", "600% more", "800% more"],
                  correctAnswer: 2,
                  explanation: "YNAB research shows that people who actively budget save 600% more than those who don't budget."
                }
              ]
            },
            {
              type: "quiz",
              title: "Advanced Financial Concepts Quiz #2",
              description: "Test your knowledge of investment and retirement planning",
              questions: [
                {
                  question: "What percentage of Americans are not on track for retirement according to the Employee Benefit Research Institute?",
                  options: ["45%", "55%", "64%", "75%"],
                  correctAnswer: 2,
                  explanation: "64% of Americans aren't on track for retirement, highlighting the retirement crisis facing many Americans."
                },
                {
                  question: "How many income streams do millionaires average according to IRS research?",
                  options: ["3", "5", "7", "10"],
                  correctAnswer: 2,
                  explanation: "Millionaires average 7 income streams according to IRS research on high earners, showing the importance of income diversification."
                },
                {
                  question: "What percentage of Americans don't have a will according to the American Bar Association?",
                  options: ["45%", "56%", "67%", "78%"],
                  correctAnswer: 2,
                  explanation: "67% of Americans don't have a will, leaving their estate distribution to state laws rather than their preferences."
                },
                {
                  question: "How much do robo-advisors currently manage in assets?",
                  options: ["$500 billion", "$1.4 trillion", "$2.1 trillion", "$3.2 trillion"],
                  correctAnswer: 1,
                  explanation: "Robo-advisors manage over $1.4 trillion in assets, showing the growing acceptance of automated investment management."
                },
                {
                  question: "What percentage of all bankruptcies are attributed to medical expenses?",
                  options: ["45.5%", "56.3%", "66.5%", "78.2%"],
                  correctAnswer: 2,
                  explanation: "Medical bankruptcies account for 66.5% of all bankruptcies, emphasizing the importance of adequate health insurance."
                }
              ]
            },
            {
              type: "shortAnswer",
              title: "Emergency Fund Planning",
              description: "Analyze your emergency fund needs and create a specific plan",
              prompt: "Based on your current financial situation and the course content about emergency funds, create a detailed plan for building your emergency fund. Your response must be at least 100 words and include: (1) How many months of expenses you should save and why, (2) Where you will keep this money and why, (3) Your specific monthly savings plan to reach this goal, and (4) What expenses you would include in your emergency fund calculation.",
              rubric: "Excellent (90-100): Demonstrates clear understanding of emergency fund principles, provides specific and realistic plan with detailed reasoning. Good (80-89): Shows good understanding with mostly specific details. Fair (70-79): Basic understanding with some specifics. Poor (60-69): Limited understanding or vague responses. Failing (0-59): Incorrect information or insufficient detail.",
              minWords: 100
            },
            {
              type: "shortAnswer", 
              title: "Investment Strategy Development",
              description: "Design a personal investment approach based on your goals and risk tolerance",
              prompt: "Create a comprehensive investment strategy based on the course material about investment fundamentals, compound interest, and retirement planning. Your response must be at least 100 words and address: (1) Your investment goals and timeline, (2) Your risk tolerance and why, (3) Specific investment vehicles you would use (stocks, bonds, index funds, etc.) and allocation percentages, (4) How you plan to automate your investing, and (5) When and how you will review and rebalance your portfolio.",
              rubric: "Excellent (90-100): Comprehensive strategy with clear reasoning, appropriate risk assessment, and specific implementation plan. Good (80-89): Well-developed strategy with good reasoning. Fair (70-79): Basic strategy with some specifics. Poor (60-69): Minimal strategy or unclear reasoning. Failing (0-59): Inadequate or incorrect strategy.",
              minWords: 100
            },
            {
              type: "shortAnswer",
              title: "Debt Management Action Plan", 
              description: "Develop a strategic approach to managing and eliminating debt",
              prompt: "Analyze the debt management concepts from the course and create a specific action plan for handling debt (whether current debt or future debt decisions). Your response must be at least 100 words and include: (1) Your strategy for prioritizing debt payments (avalanche vs. snowball method and why), (2) How you will avoid accumulating bad debt in the future, (3) Your approach to good debt (mortgages, education) vs. bad debt (credit cards), and (4) Specific steps to improve or maintain your credit score.",
              rubric: "Excellent (90-100): Clear understanding of debt management principles with specific, actionable plan and sound reasoning. Good (80-89): Good plan with solid understanding. Fair (70-79): Basic plan with some specifics. Poor (60-69): Limited plan or understanding. Failing (0-59): Poor understanding or inadequate planning.",
              minWords: 100
            },
            {
              type: "shortAnswer",
              title: "Multiple Income Streams Planning",
              description: "Design a strategy for building multiple income sources",
              prompt: "Based on the course content about building multiple income streams and career development, create a detailed plan for diversifying your income. Your response must be at least 100 words and cover: (1) Your current income situation and skills assessment, (2) Three specific additional income streams you could develop and why they fit your situation, (3) Timeline and action steps for developing each income stream, and (4) How these additional income streams align with your overall financial goals.",
              rubric: "Excellent (90-100): Realistic and well-researched plan with clear action steps and alignment to personal situation. Good (80-89): Good plan with solid reasoning. Fair (70-79): Basic plan with some realism. Poor (60-69): Unrealistic or poorly thought out plan. Failing (0-59): Inadequate planning or unrealistic expectations.",
              minWords: 100
            },
            {
              type: "shortAnswer",
              title: "Financial Technology Integration",
              description: "Plan how to leverage technology for better financial management",
              prompt: "Explain how you will integrate financial technology into your money management strategy based on the course content. Your response must be at least 100 words and address: (1) Specific apps or tools you will use for budgeting, investing, and banking, (2) How you will ensure security while using financial technology, (3) What financial metrics you will track and how often, and (4) How technology will help you automate your financial plan and stay on track with your goals.",
              rubric: "Excellent (90-100): Comprehensive technology integration plan with appropriate tool selection and security considerations. Good (80-89): Good plan with most elements addressed. Fair (70-79): Basic plan with some specifics. Poor (60-69): Limited integration or poor tool selection. Failing (0-59): Inadequate planning or poor understanding of financial technology.",
              minWords: 100
            },
            {
              type: "essay",
              title: "Personal Financial Philosophy and Long-term Plan",
              description: "Synthesize all course concepts into a comprehensive financial philosophy and life plan",
              prompt: "Write a comprehensive essay that synthesizes all the concepts from this financial literacy course into your personal financial philosophy and long-term plan. Your essay must be at least 300 words and should include: (1) Your personal financial values and what wealth means to you, (2) Your short-term (1 year), medium-term (5 years), and long-term (20+ years) financial goals with specific timelines and amounts, (3) How you will integrate budgeting, saving, investing, debt management, insurance, and tax planning into a cohesive strategy, (4) Your plan for avoiding common financial mistakes discussed in the course, (5) How you will adapt your plan as your life circumstances change, and (6) What steps you will take in the next 90 days to begin implementing this plan. Use specific examples and dollar amounts where possible, and reference at least 5 different concepts from the course content.",
              rubric: "Excellent (90-100): Comprehensive, well-organized essay that demonstrates deep understanding of financial concepts with specific, realistic plans and clear integration of course material. Shows original thinking and practical application. Good (80-89): Well-written essay with good understanding and planning, references multiple course concepts. Fair (70-79): Adequate essay with basic planning and some course references. Poor (60-69): Limited planning, minimal course integration, or unclear writing. Failing (0-59): Inadequate length, poor understanding of concepts, or unrealistic planning.",
              minWords: 300
            }
          ]
        }
      ]
    }
  ];

  const category = categories.find(cat => cat.id === categoryIndex);
  const lesson = category?.lessons.find(l => l.id === lessonIndex);

  if (!category || !lesson) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
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