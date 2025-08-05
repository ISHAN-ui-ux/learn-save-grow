import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Trophy,
  Play,
  Home,
  UtensilsCrossed,
  Film,
  PiggyBank,
  Calculator,
  ShoppingCart,
  Target,
  Coins,
  DollarSign,
  CreditCard,
  TrendingUp,
  Building,
  Gamepad2,
  Users
} from "lucide-react";

const Lesson = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [lessonProgress, setLessonProgress] = useState<Record<string, boolean>>({});

  const lessons = [
    {
      id: 1,
      title: "Introduction to Money",
      description: "Understanding the fundamental role of money in the economy",
      duration: "25 min",
      icon: Coins,
      difficulty: "Easy",
      steps: [
        {
          title: "What is Money?",
          content: `Money is a medium of exchange that facilitates transactions between parties. Throughout history, various items have served as money - from shells and beads to precious metals like gold and silver. Today, we primarily use government-issued currency.

Money serves three primary functions:
1. **Medium of Exchange**: Facilitates trade by eliminating the need for bartering
2. **Store of Value**: Maintains purchasing power over time (though inflation affects this)
3. **Unit of Account**: Provides a standard measure for pricing goods and services

The value of money is largely based on trust - we accept it because we believe others will accept it too. This concept is called "fiat money," meaning money that has value because the government declares it to be legal tender.

Modern economies rely heavily on the velocity of money - how quickly money circulates through the economy. When people spend money quickly, it stimulates economic growth. When they save or hoard money, economic activity slows down.`,
          activity: "Consider: What would happen if everyone lost faith in their country's currency overnight? Research historical examples like hyperinflation in Germany (1920s) or Zimbabwe (2000s)."
        },
        {
          title: "Physical Currency",
          content: `Physical currency consists of coins and banknotes issued by central banks. In the United States, the Federal Reserve is responsible for currency issuance and monetary policy.

**Coins**: Made from various metal alloys, coins are designed to last for decades. The penny (1¢), nickel (5¢), dime (10¢), and quarter (25¢) are the most common denominations. Interestingly, it costs more to produce a penny than its face value, leading to ongoing debates about its elimination.

**Banknotes**: Modern bills contain sophisticated security features including watermarks, security threads, color-changing ink, and microprinting to prevent counterfeiting. The Bureau of Engraving and Printing produces approximately 7.4 billion banknotes annually.

**Currency Design**: The design of currency often reflects national identity, featuring historical figures, landmarks, and symbols. The choice of who appears on currency can be politically significant and may change over time to reflect evolving societal values.

**International Perspective**: Different countries have different physical currency designs and denominations. Some countries have eliminated small denominations entirely, while others continue to use them for cultural or practical reasons.`,
          activity: "Examine a bill closely. Identify at least 5 security features. Research why the $2 bill is so rare in circulation despite being legal tender."
        },
        {
          title: "Digital Money Revolution",
          content: `Digital money has transformed how we handle financial transactions. According to the Federal Reserve, cash transactions now represent less than 20% of all payments in the United States, down from over 50% just two decades ago.

**Electronic Payments**: Credit and debit cards process transactions through complex networks involving banks, payment processors, and merchants. Each transaction typically includes multiple fees that are ultimately passed on to consumers through higher prices.

**Mobile Payments**: Services like Apple Pay, Google Pay, and Samsung Pay use Near Field Communication (NFC) technology to process payments. These systems often provide better security than traditional card payments through tokenization - replacing actual card numbers with encrypted tokens.

**Central Bank Digital Currencies (CBDCs)**: Many countries are exploring digital versions of their national currencies. China's digital yuan is already being tested in major cities, while the Federal Reserve is researching a digital dollar. CBDCs could provide more direct monetary policy tools and reduce the role of commercial banks in money creation.

**Cryptocurrencies**: Bitcoin, Ethereum, and other cryptocurrencies represent a decentralized approach to digital money. While volatile and energy-intensive, they demonstrate how technology can create new forms of money independent of government control.

**Privacy vs. Convenience**: Digital payments offer convenience but create detailed records of all transactions. This trade-off between privacy and efficiency is an ongoing social and political issue.`,
          activity: "Track your family's payment methods for one week. What percentage are cash vs. digital? Research how payment preferences vary by age group and country."
        },
        {
          title: "Money in the Global Economy",
          content: `Money operates within a complex global financial system where currencies compete and interact. Understanding these dynamics is crucial for financial literacy in our interconnected world.

**Exchange Rates**: The value of one currency relative to another fluctuates based on economic conditions, political stability, trade relationships, and market speculation. These fluctuations can significantly impact international trade, travel costs, and investment returns.

**Reserve Currencies**: The U.S. dollar serves as the world's primary reserve currency, meaning many countries hold dollars in their foreign exchange reserves and conduct international trade in dollars. This gives the United States significant economic advantages but also responsibilities.

**Inflation and Purchasing Power**: Money's value isn't just about exchange rates - it's about what you can buy with it. Inflation erodes purchasing power over time. Since 1913, the dollar has lost about 96% of its purchasing power due to inflation.

**Financial Inclusion**: According to the World Bank, about 1.7 billion adults worldwide lack access to basic financial services. Digital money and mobile banking are helping to bridge this gap, particularly in developing countries where traditional banking infrastructure is limited.

**Future of Money**: Emerging technologies like blockchain, artificial intelligence, and quantum computing will likely reshape how we think about and use money. Understanding these trends can help in making informed financial decisions.`,
          activity: "Using online inflation calculators, determine what $100 in 1970 would be worth today. Research how different countries are addressing financial inclusion through technology."
        }
      ]
    },
    {
      id: 2,
      title: "Income and Employment Economics",
      description: "Understanding how people earn money in modern economies",
      duration: "30 min",
      icon: PiggyBank,
      difficulty: "Easy",
      steps: [
        {
          title: "The Labor Market",
          content: `The labor market is where workers sell their time, skills, and effort to employers in exchange for wages or salaries. Understanding this market is crucial for career planning and financial success.

**Types of Income:**
- **Wages**: Hourly pay, common in retail, food service, and manual labor
- **Salary**: Fixed annual amount, typical for professional and management positions
- **Commission**: Pay based on sales performance, common in real estate and sales
- **Tips**: Additional income in service industries
- **Freelance**: Project-based income for independent contractors

**Factors Affecting Income:**
- **Education Level**: College graduates earn on average $1.2 million more over their careers than high school graduates
- **Geographic Location**: Cost of living and local job markets significantly impact wages
- **Industry**: Technology, finance, and healthcare typically offer higher compensation
- **Experience**: Each additional year of experience generally increases earning potential
- **Skills**: Both hard skills (technical abilities) and soft skills (communication, leadership) matter

**Labor Supply and Demand**: When there's high demand for certain skills but low supply of qualified workers, wages increase. This is why specialized fields like software engineering and healthcare often have higher pay.`,
          activity: "Research the median income in your area for three different career paths that interest you. Compare the education requirements and job outlook for each."
        },
        {
          title: "Alternative Income Streams",
          content: `Traditional employment isn't the only way to earn money. Understanding multiple income streams can provide financial security and opportunities for wealth building.

**Passive Income Sources:**
- **Investment Dividends**: Regular payments from stock ownership
- **Rental Property**: Income from real estate investments
- **Royalties**: Ongoing payments from creative works, patents, or mineral rights
- **Interest**: Earnings from savings accounts, bonds, or loans

**Active Side Income:**
- **Gig Economy**: Uber, DoorDash, TaskRabbit, and freelance platforms
- **E-commerce**: Selling products online through Amazon, Etsy, or independent websites
- **Content Creation**: YouTube, blogging, podcasting with monetization
- **Tutoring/Teaching**: Sharing knowledge in academic subjects or skills

**Entrepreneurship for Young People:**
- **Service Businesses**: Lawn care, pet sitting, house cleaning
- **Digital Services**: Social media management, graphic design, web development
- **Product Sales**: Crafts, baked goods, or reselling items
- **Skills-Based Income**: Music lessons, sports coaching, academic tutoring

**Tax Implications**: Different types of income are taxed differently. Employment income is subject to payroll taxes, while investment income may qualify for lower capital gains rates.`,
          activity: "Identify three potential income streams you could start within the next year. Calculate the potential monthly income from each and the time investment required."
        },
        {
          title: "Building Human Capital",
          content: `Human capital refers to the skills, knowledge, and experience that make workers valuable in the job market. Investing in human capital is one of the best ways to increase earning potential.

**Education and Training:**
- **Formal Education**: High school diplomas, college degrees, and graduate degrees typically correlate with higher earnings
- **Vocational Training**: Trade schools and certification programs can lead to well-paying careers without traditional college debt
- **Professional Certifications**: Industry-specific credentials can significantly boost earning potential
- **Continuous Learning**: Technology and industry changes require ongoing skill development

**Soft Skills Development:**
- **Communication**: Essential for almost every career path
- **Leadership**: Valuable for advancement into management roles
- **Problem-Solving**: Critical thinking skills are increasingly important
- **Adaptability**: The ability to learn and change with evolving job markets

**Networking and Relationships:**
- **Professional Networks**: Many jobs are filled through personal connections
- **Mentorship**: Learning from experienced professionals can accelerate career growth
- **Industry Involvement**: Participating in professional organizations and conferences

**Financial Literacy as Human Capital**: Understanding money management, investing, and personal finance can significantly impact lifetime wealth accumulation, regardless of income level.`,
          activity: "Create a personal development plan: identify three skills you want to develop over the next two years and research how each could impact your earning potential."
        },
        {
          title: "Economic Trends and Future Careers",
          content: `The job market is constantly evolving due to technological advancement, demographic changes, and economic shifts. Understanding these trends can help in career planning.

**Growing Industries:**
- **Technology**: Artificial intelligence, cybersecurity, data science
- **Healthcare**: Aging populations drive demand for medical services
- **Green Energy**: Solar, wind, and battery technology careers
- **Elder Care**: Services for aging baby boomer generation
- **STEM Education**: Teaching science, technology, engineering, and math

**Declining Industries:**
- **Traditional Manufacturing**: Automation reduces need for manual labor
- **Print Media**: Digital transformation affects newspapers and magazines
- **Retail**: Online shopping impacts traditional retail jobs
- **Some Transportation**: Autonomous vehicles may affect driving jobs

**Skills for the Future:**
- **Digital Literacy**: Comfort with technology across all industries
- **Emotional Intelligence**: Human skills become more valuable as AI handles routine tasks
- **Creative Problem-Solving**: Uniquely human abilities that complement technology
- **Cross-Cultural Communication**: Globalization requires cultural competence

**Economic Cycles**: Understanding that economies go through periods of growth and recession helps in career planning. Some industries are more recession-resistant than others.`,
          activity: "Choose a career that interests you and research how automation and technological change might affect it over the next 20 years. What skills could you develop to stay relevant?"
        }
      ]
    },
    {
      id: 3,
      title: "Personal Budgeting and Financial Planning",
      description: "Master the fundamentals of budgeting and expense management",
      duration: "35 min",
      icon: Calculator,
      difficulty: "Medium",
      steps: [
        {
          title: "Understanding Budgets",
          content: `A budget is a financial plan that allocates income across various expenses and savings goals. Effective budgeting is the foundation of financial stability and wealth building.

**The 50/30/20 Rule:**
- **50% Needs**: Essential expenses like housing, food, utilities, transportation, minimum debt payments
- **30% Wants**: Entertainment, dining out, hobbies, non-essential shopping
- **20% Savings and Debt Repayment**: Emergency funds, retirement, extra debt payments

**Zero-Based Budgeting**: Every dollar of income is assigned a purpose, ensuring no money is "left over" without a plan. This method forces intentional decision-making about every expense.

**Envelope Method**: Allocating specific amounts to spending categories and stopping when the money is gone. This can be done with physical cash or digital "envelopes."

**Why Budgets Fail:**
- Unrealistic expectations (too restrictive)
- Not tracking actual spending
- Failing to plan for irregular expenses
- Not adjusting for life changes
- Focusing only on cutting expenses rather than increasing income

**Behavioral Economics in Budgeting**: Understanding psychological factors like impulse buying, lifestyle inflation, and social pressure helps create more effective budgets.`,
          activity: "Create a basic budget using your current or expected income. Apply the 50/30/20 rule and identify potential areas for adjustment."
        },
        {
          title: "Expense Categories and Tracking",
          content: `Effective budgeting requires understanding different types of expenses and implementing systems to track them accurately.

**Fixed Expenses** (same amount each month):
- Rent or mortgage payments
- Insurance premiums
- Loan payments
- Subscription services
- Phone and internet bills

**Variable Expenses** (fluctuate month to month):
- Utilities (electricity, gas, water)
- Groceries
- Gasoline
- Clothing
- Entertainment

**Periodic Expenses** (occur irregularly):
- Car maintenance and repairs
- Medical expenses
- Holiday gifts
- Vacation costs
- Annual subscriptions

**Tracking Methods:**
- **Apps**: Mint, YNAB (You Need A Budget), Personal Capital
- **Spreadsheets**: Custom tracking with categories and formulas
- **Bank Software**: Many banks offer categorization features
- **Receipt Tracking**: Manual or photo-based systems

**The Importance of Accuracy**: Small daily expenses can add up significantly. A $5 coffee daily costs $1,825 annually. Understanding these patterns helps identify areas for improvement.`,
          activity: "Track every expense for one week, categorizing each as fixed, variable, or periodic. Calculate your daily average spending and project annual costs."
        },
        {
          title: "Advanced Budgeting Strategies",
          content: `Once basic budgeting is mastered, advanced techniques can optimize financial outcomes and accommodate complex financial situations.

**Cash Flow Management**: Timing income and expenses to avoid overdrafts and maximize interest earnings. This is especially important for irregular income earners.

**Sinking Funds**: Setting aside money monthly for known future expenses. Examples include:
- Car maintenance: $100/month for eventual repairs
- Vacation fund: $200/month for annual trips
- Holiday gifts: $50/month year-round

**Percentage-Based Budgeting**: Instead of fixed dollar amounts, using percentages allows for easy scaling with income changes:
- Housing: 25-30% of gross income
- Transportation: 10-15% of gross income
- Food: 10-12% of gross income

**Geographic Cost Considerations**: Housing costs vary dramatically by location. A $50,000 salary in rural Iowa has different purchasing power than in San Francisco.

**Income Smoothing**: For irregular income (freelancers, commissioned sales), calculating average monthly income over 12 months and budgeting based on that figure, with surplus months building reserves for lean months.

**Lifestyle Inflation Prevention**: As income increases, consciously deciding how much of the increase to save versus spend prevents the common trap of increasing expenses to match income.`,
          activity: "Design a budget for someone with irregular income. Include sinking funds for three major annual expenses and calculate the required monthly savings for each."
        },
        {
          title: "Technology and Behavioral Tools",
          content: `Modern budgeting leverages technology and behavioral psychology to improve financial outcomes and make money management easier.

**Automation Benefits:**
- **Direct Deposit**: Automatically splits paychecks between checking, savings, and investment accounts
- **Automatic Bill Pay**: Prevents late fees and ensures consistent payment history
- **Recurring Transfers**: Moves money to savings before it can be spent
- **Investment Contributions**: Dollar-cost averaging into retirement and investment accounts

**Behavioral Nudges:**
- **Waiting Periods**: 24-48 hour delays before large purchases
- **Visual Aids**: Charts and graphs showing progress toward goals
- **Account Separation**: Different accounts for different purposes reduce temptation
- **Social Accountability**: Sharing goals with family or friends for motivation

**Technology Tools:**
- **Robo-Advisors**: Automated investment management with low fees
- **Expense Tracking Apps**: Real-time categorization and alerts
- **Banking Alerts**: Notifications for low balances or unusual spending
- **Investment Apps**: Micro-investing and goal-based savings

**Emergency Fund Strategy**: Most financial experts recommend 3-6 months of expenses in an easily accessible savings account. This prevents debt accumulation during job loss or major life events.

**Regular Review Process**: Monthly budget reviews to assess performance, adjust categories, and align with changing life circumstances.`,
          activity: "Set up one automated financial process (savings transfer, bill payment, or investment contribution) and identify three behavioral changes that could improve your financial habits."
        }
      ]
    },
    {
      id: 4,
      title: "Consumer Psychology and Smart Spending",
      description: "Understanding marketing tactics and making informed purchase decisions",
      duration: "28 min",
      icon: ShoppingCart,
      difficulty: "Medium",
      steps: [
        {
          title: "Needs vs Wants Analysis",
          content: `Understanding the difference between needs and wants is fundamental to financial health, but it's more complex than it initially appears. Our consumer culture constantly blurs these lines through sophisticated marketing.

**Basic Needs (Maslow's Hierarchy):**
- **Physiological**: Food, water, shelter, sleep, clothing appropriate for climate
- **Safety**: Personal security, employment, health, property
- **Basic Transportation**: Getting to work or school
- **Healthcare**: Medical care and insurance

**Wants Disguised as Needs:**
- **Brand Preferences**: Designer clothes vs. adequate clothing
- **Convenience Upgrades**: Restaurant meals vs. home cooking
- **Status Symbols**: Luxury cars vs. reliable transportation
- **Latest Technology**: Newest phone vs. functional communication device

**Cultural and Social Factors**: What society considers a "need" varies by location, profession, and social group. A car might be essential in rural areas but optional in cities with good public transit.

**The Gray Area**: Some items fall between needs and wants:
- **Quality vs. Cheap**: Sometimes paying more upfront saves money long-term
- **Professional Requirements**: Certain jobs require specific clothing or tools
- **Health and Safety**: Better quality items that improve wellbeing

**Emotional vs. Rational Decision Making**: Marketing often targets emotions (fear, desire, social acceptance) rather than rational needs. Recognizing these tactics is crucial for smart spending.`,
          activity: "Create three lists: clear needs, clear wants, and gray area items. For each gray area item, write criteria for deciding if it's worth purchasing."
        },
        {
          title: "Marketing Psychology and Consumer Manipulation",
          content: `Companies spend billions studying consumer psychology to influence purchasing decisions. Understanding these tactics helps you maintain control over your spending.

**Common Marketing Tactics:**
- **Artificial Scarcity**: "Limited time offer," "Only 3 left in stock"
- **Social Proof**: "Most popular item," customer testimonials, celebrity endorsements
- **Anchoring**: Showing expensive items first to make everything else seem reasonable
- **Loss Aversion**: "Don't miss out," emphasizing what you'll lose rather than gain
- **Subscription Creep**: Starting with low prices that gradually increase

**Psychological Triggers:**
- **Dopamine Hits**: The excitement of buying something new
- **Status Signaling**: Purchases that communicate wealth or taste
- **Retail Therapy**: Shopping to improve mood or self-esteem
- **FOMO (Fear of Missing Out)**: Pressure to buy before opportunities disappear
- **Cognitive Dissonance**: Justifying purchases after the fact

**Store Design Psychology:**
- **Layout**: Essential items in back, impulse items at checkout
- **Music and Lighting**: Creating atmosphere that encourages longer stays
- **Product Placement**: Eye-level shelf space for premium items
- **Sampling**: Creating obligation through free samples

**Digital Marketing Evolution**: Online retailers use browsing history, purchase patterns, and demographic data to personalize marketing messages and optimize conversion rates.`,
          activity: "For one week, document every marketing message you encounter that's trying to influence a purchase decision. Identify the psychological tactic being used."
        },
        {
          title: "Practical Decision-Making Frameworks",
          content: `Developing systematic approaches to spending decisions helps overcome impulsive purchases and ensures money is spent on things that truly add value to your life.

**The 24-48 Hour Rule**: For non-essential purchases over a certain amount, wait at least 24-48 hours before buying. This cooling-off period often reveals that the desire was temporary.

**Cost Per Use Analysis**: Divide the price by expected number of uses. A $200 coat worn 100 times costs $2 per wear, while a $50 dress worn once costs $50 per wear.

**Opportunity Cost Evaluation**: Every purchase represents giving up something else. Ask: "What else could I do with this money?" Consider:
- **Investment potential**: How much could this money grow if invested?
- **Debt reduction**: Would paying down debt provide better financial benefit?
- **Experience vs. Things**: Research shows experiences generally provide more lasting happiness

**The 10-10-10 Rule**: How will you feel about this purchase in 10 minutes, 10 months, and 10 years?

**Quality vs. Quantity Assessment**:
- **Buy It For Life**: Sometimes paying more upfront for quality saves money long-term
- **Fast Fashion Trap**: Cheap items that need frequent replacement
- **Maintenance Costs**: Consider ongoing costs, not just purchase price

**Values Alignment**: Does this purchase align with your personal values and long-term goals? Money spent in alignment with values typically provides more satisfaction.`,
          activity: "Practice the decision-making framework on three recent purchases or potential purchases. Calculate cost per use and opportunity cost for each."
        },
        {
          title: "Building Sustainable Spending Habits",
          content: `Creating systems and habits that support smart spending is more effective than relying on willpower alone. Sustainable approaches work with human psychology rather than against it.

**Environmental Design**: Change your environment to make good decisions easier:
- **Remove Temptations**: Unsubscribe from promotional emails, avoid browsing shopping websites
- **Create Friction**: Remove saved payment methods, use separate accounts for discretionary spending
- **Visual Reminders**: Pictures of financial goals where you'll see them before spending

**The Envelope System**: Allocate specific amounts for different spending categories. When the money is gone, you're done spending in that category until next month.

**Mindful Spending Practices**:
- **Gratitude for Current Possessions**: Regularly appreciate what you already own
- **Delayed Gratification Training**: Practice waiting for things to build self-control
- **Quality Time Over Purchases**: Focus on experiences and relationships rather than material goods

**Social Spending Strategies**:
- **Communicate Boundaries**: Be honest with friends about budget constraints
- **Suggest Alternatives**: Propose free or low-cost activities
- **Avoid Competitive Spending**: Don't try to keep up with others' lifestyle inflation

**Regular Review Process**: Monthly spending reviews to identify patterns, celebrate successes, and adjust strategies. Track which purchases brought satisfaction and which you regret.

**Long-term Perspective**: Focus on how today's spending decisions impact tomorrow's opportunities. Small daily choices compound into significant financial outcomes over time.`,
          activity: "Design a personal spending system that includes environmental changes, decision-making tools, and review processes. Implement one change immediately."
        }
      ]
    },
    {
      id: 5,
      title: "Savings Strategies and Goal Setting",
      description: "Building emergency funds and achieving financial goals through systematic saving",
      duration: "32 min",
      icon: Target,
      difficulty: "Medium",
      steps: [
        {
          title: "The Psychology and Purpose of Saving",
          content: `Saving money serves multiple crucial purposes beyond just accumulating wealth. Understanding these purposes helps maintain motivation during challenging times.

**Emergency Preparedness**: The primary purpose of savings is creating a financial buffer against unexpected events:
- **Job Loss**: Average unemployment duration is 3-6 months
- **Medical Emergencies**: Even with insurance, out-of-pocket costs can be substantial
- **Car Repairs**: Major repairs can cost $1,000-$5,000
- **Home Maintenance**: HVAC, plumbing, and roofing emergencies

**Opportunity Readiness**: Savings provide the ability to take advantage of opportunities:
- **Investment Opportunities**: Having cash available during market downturns
- **Career Changes**: Financial cushion allows for career pivots or additional education
- **Real Estate**: Down payments for property purchases
- **Business Ventures**: Starting a business or investing in others

**Psychological Benefits of Saving**:
- **Reduced Financial Stress**: Money in the bank provides peace of mind
- **Increased Confidence**: Financial security enables better decision-making
- **Delayed Gratification Skills**: Saving builds self-control that benefits all areas of life
- **Sense of Accomplishment**: Reaching savings goals provides significant satisfaction

**The Paradox of Choice**: Having too many financial options can be overwhelming. Clear savings goals provide direction and simplify financial decisions.`,
          activity: "Identify three specific situations where having savings would reduce stress in your life. Calculate how much you'd need for each scenario."
        },
        {
          title: "Types of Savings and Account Strategies",
          content: `Different savings goals require different strategies and account types. Understanding these options helps optimize your savings approach.

**Emergency Fund Characteristics**:
- **Amount**: 3-6 months of essential expenses (not income)
- **Accessibility**: Available within 24-48 hours
- **Location**: High-yield savings account, money market account, or short-term CDs
- **Stability**: Principal protection is more important than growth

**Short-term Savings (1-3 years)**:
- **Vacation Funds**: Specific amount for planned trips
- **Vehicle Replacement**: Saving for car down payment or full purchase
- **Home Improvements**: Renovations, appliances, or maintenance
- **Account Types**: High-yield savings, CDs, or money market accounts

**Medium-term Savings (3-10 years)**:
- **House Down Payment**: Typically 10-20% of home value
- **Wedding or Major Life Events**: Often $20,000-$50,000
- **Children's Education**: Starting early for college costs
- **Account Types**: Conservative investment accounts, CDs, or high-yield savings

**Long-term Wealth Building (10+ years)**:
- **Retirement**: 401(k), IRA, and taxable investment accounts
- **Financial Independence**: Building wealth for optional work
- **Legacy Building**: Assets to pass to family or charities
- **Account Types**: Diversified investment portfolios

**Account Optimization Strategy**: Use different accounts for different purposes to avoid mixing funds and to optimize interest earnings.`,
          activity: "List your current savings goals and categorize them by time horizon. Research appropriate account types for each category."
        },
        {
          title: "Goal Setting and Behavioral Economics",
          content: `Effective savings goals leverage behavioral psychology to increase success rates. Research shows that specific, measurable goals with emotional connections are most likely to be achieved.

**SMART Goals Framework for Savings**:
- **Specific**: "Save $5,000 for emergency fund" vs. "Save money"
- **Measurable**: Clear dollar amount and tracking method
- **Achievable**: Realistic given income and expenses
- **Relevant**: Personally meaningful and aligned with values
- **Time-bound**: Specific deadline creates urgency

**Behavioral Techniques for Success**:
- **Automatic Transfers**: Remove decision-making from the process
- **Visual Progress Tracking**: Charts, apps, or physical visual aids
- **Milestone Celebrations**: Reward progress at 25%, 50%, 75% completion
- **Social Accountability**: Share goals with family or friends
- **Environmental Design**: Make saving easier than spending

**The Power of Small Amounts**: Saving $5 per day equals $1,825 per year. Small, consistent amounts can accumulate surprisingly quickly through the power of compound interest.

**Competing Goals Management**: Multiple savings goals can conflict with each other. Prioritize by:
- **Importance**: Emergency fund typically comes first
- **Urgency**: Time-sensitive needs get priority
- **Interest Rates**: Consider debt payoff vs. savings rates

**Overcoming Savings Obstacles**:
- **Low Income**: Start with any amount, even $1 per week builds the habit
- **Irregular Income**: Save a percentage rather than fixed amount
- **High Expenses**: Focus on increasing income rather than just cutting costs
- **Lack of Motivation**: Connect savings to meaningful life goals`,
          activity: "Set three specific savings goals using the SMART framework. Create a visual tracking system for your most important goal."
        },
        {
          title: "Advanced Savings Strategies and Compound Interest",
          content: `Understanding compound interest and implementing advanced savings strategies can dramatically accelerate wealth accumulation over time.

**Compound Interest Fundamentals**: Einstein allegedly called compound interest "the eighth wonder of the world." Money earns returns, and those returns earn returns, creating exponential growth over time.

**The Rule of 72**: Divide 72 by your interest rate to find how long it takes money to double:
- **6% interest**: Money doubles every 12 years
- **8% interest**: Money doubles every 9 years
- **10% interest**: Money doubles every 7.2 years

**Time Value of Money Examples**:
- **$1,000 invested at age 25** at 7% annually becomes $21,002 at age 65
- **$1,000 invested at age 35** at 7% annually becomes $10,677 at age 65
- **Starting 10 years earlier nearly doubles the result**

**Advanced Savings Techniques**:
- **Pay Yourself First**: Save before paying bills to ensure savings happen
- **Percentage-Based Saving**: Save a percentage of income rather than fixed amounts
- **Lifestyle Inflation Prevention**: Save raises and bonuses rather than spending them
- **Tax-Advantaged Accounts**: Maximize 401(k), IRA, and HSA contributions

**High-Yield Account Optimization**:
- **Online Banks**: Often offer 2-5% vs. 0.01% at traditional banks
- **Credit Union Accounts**: Member-owned institutions often have better rates
- **Certificate of Deposits (CDs)**: Higher rates for committing money for specific periods
- **Money Market Accounts**: Combination of checking and savings features

**Savings Rate Benchmarks**: Financial independence typically requires saving 20-50% of income, depending on desired retirement timeline and lifestyle.`,
          activity: "Calculate how much $100 per month would grow over 30 years at different interest rates (3%, 6%, 9%). Research high-yield savings account options in your area."
        }
      ]
    },
    {
      id: 6,
      title: "Investment Fundamentals and Portfolio Theory",
      description: "Understanding risk, return, and building investment portfolios",
      duration: "40 min",
      icon: TrendingUp,
      difficulty: "Hard",
      steps: [
        {
          title: "Investment Basics and Risk-Return Relationship",
          content: `Investing involves purchasing assets with the expectation that they will generate income or appreciate in value over time. Understanding the fundamental risk-return relationship is crucial for all investment decisions.

**Core Investment Principle**: Higher potential returns generally require accepting higher risk. There are no guaranteed high returns without corresponding risk.

**Types of Investment Risk**:
- **Market Risk**: Overall market movements affecting all investments
- **Inflation Risk**: Purchasing power erosion over time
- **Interest Rate Risk**: Bond prices moving opposite to interest rate changes
- **Liquidity Risk**: Difficulty selling an investment quickly
- **Company-Specific Risk**: Individual business performance affecting stock prices
- **Currency Risk**: Exchange rate fluctuations for international investments

**Historical Returns (1926-2021 averages)**:
- **Large Company Stocks**: ~10% annually
- **Small Company Stocks**: ~12% annually
- **Long-term Government Bonds**: ~6% annually
- **Treasury Bills**: ~3.3% annually
- **Inflation**: ~3% annually

**Real vs. Nominal Returns**: Nominal returns don't account for inflation. Real returns (nominal minus inflation) represent actual purchasing power growth.

**Risk Tolerance Assessment**: Your ability and willingness to accept investment losses depends on:
- **Time Horizon**: Longer periods allow for more risk
- **Financial Situation**: Emergency funds and stable income enable more risk
- **Emotional Comfort**: Some people sleep better with conservative investments
- **Investment Goals**: Retirement vs. house down payment have different risk profiles`,
          activity: "Assess your personal risk tolerance by considering your time horizon, financial situation, and emotional comfort with potential losses."
        },
        {
          title: "Asset Classes and Investment Vehicles",
          content: `Different asset classes have distinct risk and return characteristics. Understanding these differences is essential for building effective investment portfolios.

**Stocks (Equities)**:
- **Ownership**: Shares represent partial ownership in companies
- **Returns**: Dividends and capital appreciation
- **Risk**: Can lose significant value quickly, especially individual stocks
- **Time Horizon**: Best for long-term investors (5+ years)
- **Types**: Large-cap, mid-cap, small-cap, growth, value, international

**Bonds (Fixed Income)**:
- **Nature**: Loans to governments or corporations
- **Returns**: Regular interest payments plus principal repayment
- **Risk**: Lower than stocks, but interest rate and credit risks exist
- **Types**: Government, corporate, municipal, international, high-yield

**Real Estate Investment Trusts (REITs)**:
- **Nature**: Companies that own income-producing real estate
- **Returns**: High dividend yields plus potential appreciation
- **Benefits**: Real estate exposure without direct property ownership
- **Risks**: Interest rate sensitivity and property market fluctuations

**Commodities and Alternative Investments**:
- **Gold and Precious Metals**: Inflation hedge, but no income production
- **Oil and Energy**: Economic growth correlation, high volatility
- **Cryptocurrencies**: High risk, high potential return, regulatory uncertainty

**Investment Accounts and Tax Considerations**:
- **Taxable Accounts**: Flexible but subject to capital gains taxes
- **401(k)/403(b)**: Employer-sponsored, tax-deferred growth
- **Traditional IRA**: Tax-deductible contributions, taxed in retirement
- **Roth IRA**: After-tax contributions, tax-free growth and withdrawals`,
          activity: "Research the performance of different asset classes over the past 10 years. Compare stocks, bonds, and REITs during this period."
        },
        {
          title: "Portfolio Construction and Diversification",
          content: `"Don't put all your eggs in one basket" is more than just folk wisdom - it's a fundamental principle of modern portfolio theory that can significantly reduce investment risk.

**Diversification Benefits**:
- **Risk Reduction**: Spreading investments reduces overall portfolio volatility
- **Correlation**: Assets that don't move together provide better diversification
- **Global Diversification**: International investments add another layer of protection
- **Sector Diversification**: Different industries perform well at different times

**Asset Allocation Strategies**:
- **Age-Based**: 100 minus your age in stocks (e.g., 30 years old = 70% stocks)
- **Target-Date Funds**: Automatically adjust allocation as you age
- **Risk-Based**: Aggressive, moderate, or conservative based on risk tolerance
- **Goals-Based**: Different allocations for different objectives

**Sample Portfolio Allocations**:
- **Conservative (Age 60+)**: 30% stocks, 60% bonds, 10% cash
- **Moderate (Age 40-60)**: 60% stocks, 35% bonds, 5% cash
- **Aggressive (Age 20-40)**: 90% stocks, 10% bonds

**Rebalancing Strategy**: Periodically selling outperforming assets and buying underperforming ones to maintain target allocation. This forces "buy low, sell high" behavior.

**Index Funds vs. Active Management**:
- **Index Funds**: Low fees, broad diversification, match market returns
- **Active Funds**: Higher fees, attempt to beat market, most fail long-term
- **Evidence**: Over 15 years, about 90% of active funds underperform their benchmarks

**Dollar-Cost Averaging**: Investing fixed amounts regularly regardless of market conditions reduces the impact of market timing and volatility.`,
          activity: "Design a sample portfolio for someone your age. Include specific percentages for stocks, bonds, and other assets, with justification for your choices."
        },
        {
          title: "Investment Psychology and Common Mistakes",
          content: `Successful investing requires understanding and overcoming behavioral biases that can lead to poor investment decisions. Most investment mistakes are psychological rather than analytical.

**Common Behavioral Biases**:
- **Loss Aversion**: People feel losses twice as strongly as equivalent gains
- **Confirmation Bias**: Seeking information that confirms existing beliefs
- **Overconfidence**: Believing you can time the market or pick winning stocks
- **Herding**: Following crowd behavior during market booms and busts
- **Anchoring**: Fixating on purchase prices when making sell decisions

**Market Timing Mistakes**:
- **Buying High**: FOMO during market peaks
- **Selling Low**: Panic during market downturns
- **Missing Recovery**: Staying out of markets after crashes
- **Statistical Reality**: Missing just the 10 best days over 20 years can cut returns in half

**Investment Account Mistakes**:
- **Not Maximizing Employer Match**: Free money in 401(k) plans
- **Inappropriate Asset Location**: Tax-inefficient investments in taxable accounts
- **Excessive Fees**: High expense ratios compound negatively over time
- **Lack of Diversification**: Overconcentration in employer stock or single assets

**Emotional Discipline Strategies**:
- **Automatic Investing**: Remove emotions from investment decisions
- **Long-term Focus**: Don't check balances daily during volatile periods
- **Education**: Understanding market history builds confidence during downturns
- **Professional Help**: Financial advisors can provide emotional coaching

**The Power of Starting Early**: Due to compound interest, starting to invest at age 22 vs. 32 can result in hundreds of thousands of dollars more at retirement, even with the same total contributions.

**Investment Timeline Expectations**: Stock markets can be volatile short-term but have never had a negative 20-year period in U.S. history. Long-term perspective is crucial for investment success.`,
          activity: "Identify three behavioral biases that might affect your investment decisions. Develop specific strategies to counteract each bias."
        }
      ]
    },
    {
      id: 7,
      title: "Money Counter Master",
      description: "Practice counting coins and making change",
      duration: "15 min",
      icon: Coins,
      difficulty: "Easy",
      steps: [
        {
          title: "Coin Values",
          content: "Learn the value of each coin: penny (1¢), nickel (5¢), dime (10¢), quarter (25¢).",
          activity: "Practice identifying coins."
        },
        {
          title: "Counting Practice",
          content: "Count different combinations of coins to find the total value.",
          activity: "Solve coin counting puzzles!"
        },
        {
          title: "Making Change",
          content: "Learn how to make change when buying something.",
          activity: "Practice the change-making game."
        }
      ]
    },
    {
      id: 8,
      title: "Credit Card Basics",
      description: "Understand how credit cards work",
      duration: "20 min",
      icon: CreditCard,
      difficulty: "Hard",
      steps: [
        {
          title: "What is Credit?",
          content: "Credit is borrowed money that you promise to pay back later.",
          activity: "Learn about responsible credit use."
        },
        {
          title: "Credit Card Simulation",
          content: "See what happens when you use credit cards responsibly vs. irresponsibly.",
          activity: "Play the credit card game."
        }
      ]
    },
    {
      id: 9,
      title: "Banking Basics",
      description: "Learn about banks and how they work",
      duration: "18 min",
      icon: Building,
      difficulty: "Medium",
      steps: [
        {
          title: "What Do Banks Do?",
          content: "Banks keep your money safe and help it grow through interest.",
          activity: "Explore different bank services."
        },
        {
          title: "Opening Your First Account",
          content: "Learn what you need to open a bank account.",
          activity: "Bank account simulation game."
        }
      ]
    },
    {
      id: 10,
      title: "Entrepreneurship for Kids",
      description: "Start your own mini business",
      duration: "30 min",
      icon: Building,
      difficulty: "Hard",
      steps: [
        {
          title: "Business Ideas for Kids",
          content: "Explore fun business ideas like lemonade stands, pet sitting, or tutoring.",
          activity: "Choose your business idea."
        },
        {
          title: "Business Planning",
          content: "Learn how to plan your business and calculate costs and profits.",
          activity: "Create your business plan."
        }
      ]
    },
    {
      id: 11,
      title: "Money Around the World",
      description: "Discover different currencies globally",
      duration: "16 min",
      icon: DollarSign,
      difficulty: "Medium",
      steps: [
        {
          title: "Global Currencies",
          content: "Different countries use different money called currencies.",
          activity: "Match countries with their currencies."
        },
        {
          title: "Exchange Rates",
          content: "Learn how money from one country compares to money from another.",
          activity: "Currency conversion game."
        }
      ]
    },
    {
      id: 12,
      title: "Digital Money & Apps",
      description: "Understanding digital payments",
      duration: "22 min",
      icon: Gamepad2,
      difficulty: "Medium",
      steps: [
        {
          title: "Digital Wallets",
          content: "Learn about apps that hold digital money safely.",
          activity: "Explore digital payment safety."
        },
        {
          title: "Online Shopping Safety",
          content: "Stay safe when buying things online.",
          activity: "Online safety quiz."
        }
      ]
    },
    {
      id: 13,
      title: "Taxes for Beginners",
      description: "Understanding what taxes are",
      duration: "14 min",
      icon: Calculator,
      difficulty: "Hard",
      steps: [
        {
          title: "What Are Taxes?",
          content: "Taxes are money we pay to the government to fund public services.",
          activity: "Learn about what taxes pay for."
        },
        {
          title: "Simple Tax Calculation",
          content: "Practice calculating basic sales tax.",
          activity: "Tax calculation game."
        }
      ]
    },
    {
      id: 14,
      title: "Money and Friends",
      description: "Handling money in social situations",
      duration: "17 min",
      icon: Users,
      difficulty: "Medium",
      steps: [
        {
          title: "Lending Money to Friends",
          content: "Learn when and how to lend money to friends safely.",
          activity: "Social money scenarios."
        },
        {
          title: "Group Expenses",
          content: "How to fairly split costs when doing activities with friends.",
          activity: "Bill splitting practice."
        }
      ]
    },
    {
      id: 15,
      title: "Money Mastery Quiz",
      description: "Test everything you've learned",
      duration: "25 min",
      icon: Trophy,
      difficulty: "Hard",
      steps: [
        {
          title: "Final Challenge",
          content: "Put all your money knowledge to the test in this comprehensive quiz!",
          activity: "Complete the Money Mastery Challenge."
        },
        {
          title: "Graduation Ceremony",
          content: "Congratulations! You're now a certified Money Hero!",
          activity: "Claim your Money Hero certificate."
        }
      ]
    }
  ];

  const currentLesson = lessons.find(lesson => lesson.id === parseInt(lessonId || "1"));
  
  useEffect(() => {
    // Load lesson progress from localStorage
    const saved = localStorage.getItem('lessonProgress');
    if (saved) {
      setLessonProgress(JSON.parse(saved));
    }
  }, []);

  const markLessonComplete = (lessonId: number) => {
    const updated = { ...lessonProgress, [lessonId]: true };
    setLessonProgress(updated);
    localStorage.setItem('lessonProgress', JSON.stringify(updated));
    setIsCompleted(true);
  };

  const nextStep = () => {
    if (currentLesson && currentStep < currentLesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentLesson) {
      markLessonComplete(currentLesson.id);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const nextLesson = () => {
    if (currentLesson && currentLesson.id < 15) {
      navigate(`/lesson/${currentLesson.id + 1}`);
      setCurrentStep(0);
      setIsCompleted(false);
    }
  };

  if (!currentLesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  const LessonIcon = currentLesson.icon;
  const progress = ((currentStep + 1) / currentLesson.steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation Header */}
      <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className={`
                ${currentLesson.difficulty === 'Easy' ? 'border-green-400 text-green-600' :
                  currentLesson.difficulty === 'Medium' ? 'border-yellow-400 text-yellow-600' :
                  'border-red-400 text-red-600'}
              `}>
                {currentLesson.difficulty}
              </Badge>
              <span className="text-sm text-muted-foreground">{currentLesson.duration}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Lesson Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center">
              <LessonIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-kids-primary">
                Lesson {currentLesson.id}: {currentLesson.title}
              </h1>
              <p className="text-muted-foreground">{currentLesson.description}</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Step {currentStep + 1} of {currentLesson.steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </div>

        {/* Lesson Content */}
        {!isCompleted ? (
          <Card className="max-w-4xl mx-auto border-2 border-kids-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-kids-primary">
                {currentLesson.steps[currentStep]?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  {currentLesson.steps[currentStep]?.content}
                </p>
                
                {/* Interactive Activity Area */}
                <div className="bg-kids-primary/10 rounded-xl p-8 mb-6">
                  <h3 className="text-xl font-semibold text-kids-primary mb-4">
                    🎯 Activity Time!
                  </h3>
                  <p className="text-muted-foreground">
                    {currentLesson.steps[currentStep]?.activity}
                  </p>
                  
                  {/* Activity Placeholder */}
                  <div className="mt-6 p-6 bg-white/50 rounded-lg border-2 border-dashed border-kids-accent/30">
                    <Play className="h-12 w-12 text-kids-accent mx-auto mb-4" />
                    <p className="text-kids-primary font-semibold">Interactive Activity Coming Soon!</p>
                    <p className="text-sm text-muted-foreground">
                      This is where the interactive lesson content will be displayed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-6">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <div className="text-center">
                  <Badge variant="secondary">
                    {currentStep + 1} / {currentLesson.steps.length}
                  </Badge>
                </div>

                <Button 
                  variant="kids" 
                  onClick={nextStep}
                  className="flex items-center gap-2"
                >
                  {currentStep === currentLesson.steps.length - 1 ? 'Complete Lesson' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Lesson Complete */
          <Card className="max-w-2xl mx-auto border-2 border-green-400/50 bg-green-50/50">
            <CardContent className="text-center p-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Lesson Complete! 🎉
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Great job completing "{currentLesson.title}"! You've earned 150 XP.
              </p>
              
              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <Star className="h-6 w-6 text-yellow-500 fill-current" />
                <span className="ml-2 text-lg font-semibold">+150 XP</span>
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={() => navigate('/')}>
                  Back to Curriculum
                </Button>
                {currentLesson.id < 15 && (
                  <Button variant="kids" onClick={nextLesson} className="flex items-center gap-2">
                    Next Lesson
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Lesson;