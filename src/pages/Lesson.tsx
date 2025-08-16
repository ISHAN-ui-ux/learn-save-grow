import { useParams, Navigate } from "react-router-dom";
import { LessonSlides } from "@/components/LessonSlides";

export default function Lesson() {
  const { categoryId, lessonId } = useParams();
  const categoryIndex = parseInt(categoryId || "1");
  const lessonIndex = parseInt(lessonId || "1");

  // Three comprehensive learning paths with 10 slides each and quizzes
  const categories = [
    {
      id: 1,
      title: "Foundations of Financial Literacy",
      lessons: [
        {
          id: 1,
          title: "Foundations of Financial Literacy (Beginner)",
          content: `## Slide 1: What is Financial Literacy?

Financial literacy is the set of skills needed to handle money wisely, invest effectively, and plan for a comfortable future. It's the essential foundation for a smart relationship with money and the start of a lifelong journey of managing the financial aspects of your life.

**Key Components:**
- **Budgeting**: Planning how to spend your money
- **Saving**: Setting aside money for future needs
- **Investing**: Growing your money over time
- **Borrowing**: Understanding credit and debt
- **Protection**: Managing financial risks

Financial literacy empowers individuals to make smarter decisions about their finances and avoid devastating financial mistakes.

## Slide 2: Why Financial Literacy Matters

Financial literacy supports your overall well-being in multiple ways:

**Day-to-Day Benefits:**
- Managing living expenses within your means
- Making informed spending decisions
- Avoiding high levels of debt
- Building emergency funds

**Long-Term Benefits:**
- Planning and saving for retirement
- Achieving major life goals
- Building wealth over time
- Protecting against financial fraud

**Shocking Statistics:**
- 28% of Americans have no retirement savings
- 37% can't cover a $400 emergency expense
- Only 57% of Americans are financially literate
- 44% of millennials say they have too much debt

The earlier you start to become financially literate, the better off you'll be.

## Slide 3: The Scope of Financial Literacy

Financial literacy encompasses a wide range of skills and knowledge:

**Core Skills Include:**
- **Household budgeting**: Planning income and expenses
- **Managing debt**: Understanding credit and loans
- **Evaluating financial products**: Comparing options wisely
- **Choosing investments**: Building wealth for the future
- **Understanding compound interest**: The power of time
- **Time value of money**: Money today vs. money tomorrow

**Modern Financial Challenges:**
- Credit cards with 23% average interest rates
- Digital payments and e-wallets
- Investment accounts and retirement planning
- Electronic banking and online security
- Cryptocurrency and new financial technologies

Financial literacy helps you navigate both traditional and emerging financial tools safely and effectively.

## Slide 4: Building Financial Confidence

Financial literacy fosters confidence by providing the knowledge needed to make informed decisions:

**How Knowledge Builds Confidence:**
- **Understanding options**: Knowing what choices you have
- **Avoiding mistakes**: Preventing costly financial errors
- **Planning ahead**: Preparing for emergencies and goals
- **Making informed decisions**: Choosing the best path forward

**Real-World Applications:**
- Choosing the right bank account
- Understanding loan terms and interest rates
- Selecting appropriate insurance coverage
- Making investment decisions
- Planning for major purchases

**The Confidence Cycle:**
Knowledge → Better Decisions → Better Outcomes → More Confidence → Willingness to Learn More

Financial confidence allows you to approach major life choices with greater certainty and less stress.

## Quiz: Test Your Knowledge (5 Questions)

Let's test what you've learned so far about financial literacy fundamentals.

## Slide 6: Creating Your First Budget

A budget is simply tracking how much money you receive each month and how much you spend. It's your financial GPS system that helps you reach your destination.

**Budget Components:**
- **Income**: Paychecks, investments, other money coming in
- **Fixed expenses**: Rent, insurance, loan payments
- **Variable expenses**: Food, gas, utilities
- **Discretionary spending**: Entertainment, shopping, travel
- **Savings**: Money set aside for future goals

**Popular Budgeting Rules:**
- **50/20/30 Rule**: 50% needs, 20% savings, 30% wants
- **70/20/10 Rule**: 70% expenses, 20% savings, 10% investments
- **Pay Yourself First**: Save before spending on anything else

**Tools to Help:**
- Excel spreadsheets or budgeting apps
- Expense tracking apps
- Bank account categorization
- Automatic savings transfers

## Slide 7: Paying Yourself First Strategy

This reverse budgeting strategy prioritizes saving before spending:

**How It Works:**
1. Choose a savings goal (emergency fund, vacation, etc.)
2. Decide how much to save each month
3. Set aside savings money immediately when paid
4. Live on what remains for other expenses

**Why It's Effective:**
- Ensures you save before money disappears
- Treats savings like a required bill
- Prevents end-of-month saving disappointment
- Builds wealth automatically

**Implementation Tips:**
- Set up automatic transfers to savings
- Use separate savings accounts for different goals
- Start small and increase over time
- Make it as automatic as possible

**Example:**
If you earn $3,000/month and want to save $300:
- Transfer $300 to savings immediately
- Budget remaining $2,700 for all other expenses
- Adjust spending to fit within $2,700 limit

## Slide 8: Managing Your Credit Rating

Your credit rating directly determines interest rates for mortgages, loans, and credit cards. Understanding and protecting your credit is crucial for financial success.

**What Affects Your Credit Score:**
- **Payment history (35%)**: Pay all bills on time
- **Credit utilization (30%)**: Keep balances low
- **Length of credit history (15%)**: Keep old accounts open
- **Types of credit (10%)**: Mix of cards and loans
- **New credit (10%)**: Don't apply for too much at once

**Monitoring Your Credit:**
- Request free credit report annually from each bureau
- Use free credit monitoring services
- Check for errors and dispute inaccuracies
- Set up account alerts for suspicious activity

**Building Good Credit:**
- Pay bills on time, every time
- Keep credit card balances below 30% of limits
- Don't close old credit accounts
- Only apply for credit when needed

## Slide 9: Investing in Your Future

If your employer offers a 401(k) retirement savings account, this is often your first and best investment opportunity:

**401(k) Benefits:**
- **Employer matching**: Free money from your company
- **Tax advantages**: Reduces current taxable income
- **Automatic investing**: Money deducted from paycheck
- **Long-term growth**: Decades to compound returns

**Getting Started:**
- Sign up for your employer's 401(k) plan
- Contribute at least enough to get full employer match
- Choose diversified investment options
- Increase contributions over time

**If No 401(k) Available:**
- Open an Individual Retirement Account (IRA)
- Consider Roth IRA for tax-free withdrawals later
- Start with low-cost index funds
- Automate monthly contributions

**The Power of Starting Early:**
- $100/month from age 25-65 = $525,000 (7% return)
- $200/month from age 35-65 = $524,000 (7% return)
- Starting 10 years earlier with half the amount yields similar results!

## Final Quiz: Comprehensive Test (10 Questions)

Time to test your complete understanding of financial literacy fundamentals. This comprehensive quiz covers all the key concepts we've discussed.`,
          quizzes: [
            {
              position: 5,
              questions: [
                {
                  question: "What percentage of Americans cannot cover a $400 emergency expense without borrowing?",
                  options: ["28%", "37%", "44%", "57%"],
                  correct: 1,
                  explanation: "According to the Federal Reserve, 37% of Americans cannot cover a $400 emergency expense without borrowing, highlighting the importance of emergency funds."
                },
                {
                  question: "Which budgeting rule allocates 50% to needs, 30% to wants, and 20% to savings?",
                  options: ["70/20/10 rule", "50/30/20 rule", "Pay yourself first", "Zero-based budgeting"],
                  correct: 1,
                  explanation: "The 50/30/20 rule divides income into 50% for needs, 30% for wants, and 20% for savings and debt repayment."
                },
                {
                  question: "What is the most important factor affecting your credit score?",
                  options: ["Credit utilization", "Payment history", "Length of credit history", "Types of credit"],
                  correct: 1,
                  explanation: "Payment history accounts for 35% of your credit score and is the most important factor. Paying all bills on time is crucial."
                },
                {
                  question: "Financial literacy helps protect people from which type of crime?",
                  options: ["Identity theft", "Financial fraud", "Credit card theft", "All of the above"],
                  correct: 1,
                  explanation: "Financial literacy specifically helps protect people from becoming victims of financial fraud, which is becoming more commonplace."
                },
                {
                  question: "What does 'pay yourself first' mean in budgeting?",
                  options: ["Pay your salary first", "Pay savings before other expenses", "Pay bills in order of importance", "Pay off debt before saving"],
                  correct: 1,
                  explanation: "'Pay yourself first' means setting aside savings immediately when you receive income, before spending on other expenses."
                }
              ]
            },
            {
              position: 10,
              questions: [
                {
                  question: "What percentage of millennials reported having too much debt?",
                  options: ["28%", "37%", "44%", "57%"],
                  correct: 2,
                  explanation: "According to research, 44% of millennials said they have too much debt, showing the challenges this generation faces."
                },
                {
                  question: "How often should you check your credit report from each major credit bureau?",
                  options: ["Monthly", "Quarterly", "Annually", "Every two years"],
                  correct: 2,
                  explanation: "You can request a free credit report once a year from each of the three major credit bureaus through AnnualCreditReport.com."
                },
                {
                  question: "What is the main benefit of employer 401(k) matching?",
                  options: ["Lower taxes", "Free money", "Higher returns", "Better investment options"],
                  correct: 1,
                  explanation: "Employer 401(k) matching is essentially free money - your employer contributes additional funds to your retirement account."
                },
                {
                  question: "What percentage should you keep your credit card balances below?",
                  options: ["10%", "20%", "30%", "50%"],
                  correct: 2,
                  explanation: "It's recommended to keep credit card balances below 30% of your credit limits to maintain a good credit score."
                },
                {
                  question: "Which generation relied primarily on cash for transactions?",
                  options: ["Millennials", "Gen X", "Baby Boomers", "Earlier generations"],
                  correct: 3,
                  explanation: "Earlier generations relied on cash, while today's consumers face a world of credit cards, electronic transfers, and digital payments."
                },
                {
                  question: "What is the average interest rate on credit cards?",
                  options: ["18%", "20%", "23%", "25%"],
                  correct: 2,
                  explanation: "The average interest rate on credit cards is just under 23%, making it expensive to carry credit card debt."
                },
                {
                  question: "Financial literacy encompasses all EXCEPT which skill?",
                  options: ["Household budgeting", "Managing debt", "Evaluating financial products", "Graphic design"],
                  correct: 3,
                  explanation: "Financial literacy includes budgeting, debt management, evaluating financial products, and investing, but not graphic design."
                },
                {
                  question: "What should you do immediately when you receive your paycheck if following 'pay yourself first'?",
                  options: ["Pay all bills", "Transfer money to savings", "Plan your spending", "Check your account balance"],
                  correct: 1,
                  explanation: "With 'pay yourself first,' you should immediately transfer your predetermined savings amount before allocating money to other expenses."
                },
                {
                  question: "Which factor does NOT affect your credit score?",
                  options: ["Payment history", "Your income level", "Credit utilization", "Length of credit history"],
                  correct: 1,
                  explanation: "Your income level does not directly affect your credit score. Credit scores are based on your borrowing and repayment history."
                },
                {
                  question: "What is the recommended first step before investing?",
                  options: ["Open a brokerage account", "Research stocks", "Build an emergency fund", "Consult a financial advisor"],
                  correct: 2,
                  explanation: "Before investing, you should build an emergency fund to cover unexpected expenses so you don't have to withdraw investments early."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Building Wealth and Budgeting",
      lessons: [
        {
          id: 1,
          title: "Building Wealth and Budgeting (Intermediate)",
          content: `## Slide 1: Advanced Budgeting Strategies

Building wealth requires moving beyond basic budgeting to strategic money management. Effective budgeting is the foundation that allows you to maximize saving and investing opportunities.

**Zero-Based Budgeting:**
- Assign every dollar a specific purpose
- Income minus expenses equals zero
- More intentional than traditional budgeting
- Eliminates money "leaks"

**Envelope Method:**
- Allocate cash for specific categories
- When envelope is empty, spending stops
- Forces awareness of spending habits
- Particularly effective for variable expenses

**Automated Budgeting:**
- Set up automatic transfers for savings and investments
- Use separate accounts for different goals
- Reduce decision fatigue
- Make saving effortless

**The 1% Rule:**
- Increase savings rate by 1% every six months
- Gradual improvement feels manageable
- Compound effect over time is significant
- Builds long-term wealth habits

## Slide 2: Understanding Your Money Psychology

Your relationship with money significantly impacts your ability to build wealth. Understanding behavioral patterns helps you make better financial decisions.

**Common Money Personalities:**
- **Spenders**: Enjoy purchasing and lifestyle experiences
- **Savers**: Focus on security and accumulating money
- **Avoiders**: Tend to ignore or avoid financial decisions
- **Money worriers**: Constantly stress about financial security

**Behavioral Biases That Hurt Wealth Building:**
- **Present bias**: Overvaluing immediate rewards vs. future benefits
- **Loss aversion**: Fear of losing money prevents taking necessary risks
- **Lifestyle inflation**: Increasing spending as income grows
- **Emotional spending**: Using purchases to manage feelings

**Strategies to Overcome Biases:**
- Automate investing to remove emotions
- Set up "cooling off" periods for large purchases
- Regularly review and adjust financial goals
- Focus on net worth growth, not just income

## Slide 3: The Wealth Building Formula

Building substantial wealth follows a predictable formula that anyone can implement:

**Wealth = (Income - Expenses) × Time × Investment Returns**

**Optimizing Each Component:**

**Increase Income:**
- Develop valuable skills through education and training
- Negotiate salary increases and promotions
- Build multiple income streams
- Start a side business or freelance work

**Decrease Expenses:**
- Track spending to identify waste
- Negotiate bills (insurance, utilities, subscriptions)
- Choose value over brand names
- Avoid lifestyle inflation

**Maximize Time:**
- Start investing as early as possible
- Stay invested during market downturns
- Don't try to time the market
- Let compound interest work

**Optimize Investment Returns:**
- Diversify across asset classes
- Keep investment fees low
- Rebalance periodically
- Focus on long-term growth

## Slide 4: Emergency Fund Strategy

A robust emergency fund is the foundation of wealth building, providing security and preventing debt accumulation during unexpected events.

**Emergency Fund Sizing:**
- **Stable employment**: 3-6 months of expenses
- **Variable income**: 6-12 months of expenses
- **Single income household**: 6-9 months of expenses
- **Dual income household**: 3-6 months of expenses

**Where to Keep Emergency Funds:**
- High-yield savings accounts (currently 4-5% APY)
- Money market accounts
- Short-term CDs (1-6 months)
- Treasury bills

**Building Your Emergency Fund:**
- Start with $1,000 as initial goal
- Save $50-100 per month consistently
- Use windfalls (tax refunds, bonuses)
- Automate transfers to separate account

**Emergency Fund Rules:**
- Only use for true emergencies
- Replenish immediately after use
- Keep separate from other savings
- Review and adjust size annually

## Quiz: Test Your Knowledge (5 Questions)

Let's test your understanding of wealth building and advanced budgeting concepts.

## Slide 6: Investment Account Types and Tax Strategy

Understanding different investment accounts and their tax implications is crucial for maximizing wealth building:

**Tax-Advantaged Retirement Accounts:**

**Traditional 401(k)/IRA:**
- Contributions reduce current taxable income
- Employer matching in 401(k)s
- Required minimum distributions at 73
- Withdrawals taxed as ordinary income

**Roth 401(k)/IRA:**
- Contributions made with after-tax dollars
- Tax-free growth and withdrawals in retirement
- No required minimum distributions for Roth IRAs
- Better for young earners expecting higher future tax rates

**Taxable Investment Accounts:**
- No contribution limits
- More flexibility for early retirement
- Capital gains tax rates (often lower than income tax)
- Tax-loss harvesting opportunities

**Health Savings Account (HSA):**
- Triple tax advantage: deductible, growth, and withdrawals
- Can be used as retirement account after age 65
- High-deductible health plan required
- Often called the "ultimate retirement account"

## Slide 7: Asset Allocation and Diversification

Proper asset allocation is key to managing risk while building wealth over time:

**Age-Based Asset Allocation Rules:**
- **Rule of 100**: 100 minus your age = stock percentage
- **Rule of 110**: 110 minus your age = stock percentage (more aggressive)
- **Target Date Funds**: Automatically adjust allocation as you age

**Asset Classes:**
- **Stocks (Equities)**: Higher growth potential, higher volatility
- **Bonds (Fixed Income)**: Steady income, lower volatility
- **Real Estate**: Inflation hedge, rental income potential
- **International**: Geographic diversification
- **Commodities**: Inflation protection, portfolio diversifier

**Diversification Within Asset Classes:**
- **Stock diversification**: Large, mid, small-cap across industries
- **Bond diversification**: Government, corporate, international
- **Geographic diversification**: Domestic and international exposure
- **Time diversification**: Dollar-cost averaging

**Rebalancing Strategy:**
- Review allocation quarterly
- Rebalance when allocation drifts 5-10% from target
- Use new contributions to rebalance when possible
- Consider tax implications in taxable accounts

## Slide 8: Debt Management and Wealth Building

Strategic debt management accelerates wealth building by freeing up money for investing:

**Good Debt vs. Bad Debt:**

**Good Debt** (Can help build wealth):
- Mortgages (real estate appreciation)
- Student loans (increased earning potential)
- Business loans (income generation)
- Generally low interest rates and tax benefits

**Bad Debt** (Destroys wealth):
- Credit card debt (high interest rates)
- Auto loans (depreciating assets)
- Personal loans for consumption
- Payday loans and other predatory lending

**Debt Payoff Strategies:**
- **Debt Avalanche**: Pay minimums on all debts, extra payments to highest interest rate
- **Debt Snowball**: Pay minimums on all debts, extra payments to smallest balance
- **Debt Consolidation**: Combine multiple debts into single, lower-rate payment

**Investing While Paying Debt:**
- Always get full employer 401(k) match first
- Pay off high-interest debt (>6-8%) before investing
- Consider investing while paying low-interest debt (<4%)
- Maintain emergency fund even while paying debt

## Slide 9: Multiple Income Streams

Building multiple income streams provides security and accelerates wealth building:

**Types of Income Streams:**

**Active Income:**
- Primary job salary/wages
- Side hustle or freelancing
- Consulting work
- Part-time employment

**Portfolio Income:**
- Dividend-paying stocks
- Bond interest
- Capital gains from investments
- Real estate investment trusts (REITs)

**Passive Income:**
- Rental property income
- Business ownership (limited involvement)
- Royalties from intellectual property
- Peer-to-peer lending

**Building Income Streams:**
- Start with skills you already have
- Invest time upfront for future passive income
- Reinvest early earnings to compound growth
- Focus on scalable opportunities

**Millionaire Statistics:**
- Average millionaire has 7 income streams
- Most started with earned income from jobs
- Gradually built investment and business income
- Diversified income provides stability and growth

## Final Quiz: Comprehensive Test (10 Questions)

Test your complete understanding of wealth building and advanced budgeting strategies. This comprehensive quiz covers all concepts from this intermediate lesson.`,
          quizzes: [
            {
              position: 5,
              questions: [
                {
                  question: "In zero-based budgeting, what should your income minus expenses equal?",
                  options: ["A positive number", "Zero", "Your savings goal", "10% of income"],
                  correct: 1,
                  explanation: "In zero-based budgeting, you assign every dollar a specific purpose, so income minus expenses should equal zero."
                },
                {
                  question: "What is the wealth building formula?",
                  options: ["Income + Expenses × Time", "(Income - Expenses) × Time × Investment Returns", "Income × Investment Returns", "Savings × Time"],
                  correct: 1,
                  explanation: "The wealth building formula is (Income - Expenses) × Time × Investment Returns, showing how saving and investing over time builds wealth."
                },
                {
                  question: "How large should an emergency fund be for someone with variable income?",
                  options: ["3-6 months of expenses", "6-12 months of expenses", "1 year of expenses", "$10,000"],
                  correct: 1,
                  explanation: "People with variable income should have 6-12 months of expenses in their emergency fund due to income uncertainty."
                },
                {
                  question: "What is the 'Rule of 100' for asset allocation?",
                  options: ["Invest $100 per month", "100 minus your age = stock percentage", "Keep 100% in stocks", "Save 100% of income"],
                  correct: 1,
                  explanation: "The Rule of 100 suggests that 100 minus your age should be the percentage of your portfolio in stocks."
                },
                {
                  question: "Which type of debt is generally considered 'good debt'?",
                  options: ["Credit card debt", "Auto loans", "Mortgages", "Payday loans"],
                  correct: 2,
                  explanation: "Mortgages are considered good debt because real estate can appreciate in value and mortgage interest may be tax-deductible."
                }
              ]
            },
            {
              position: 10,
              questions: [
                {
                  question: "What bias causes people to overvalue immediate rewards versus future benefits?",
                  options: ["Loss aversion", "Present bias", "Confirmation bias", "Anchoring bias"],
                  correct: 1,
                  explanation: "Present bias causes people to overvalue immediate rewards versus future benefits, making saving and investing more difficult."
                },
                {
                  question: "What is the main advantage of a Roth IRA over a Traditional IRA?",
                  options: ["Higher contribution limits", "Tax-free withdrawals in retirement", "Employer matching", "No income restrictions"],
                  correct: 1,
                  explanation: "Roth IRAs offer tax-free growth and withdrawals in retirement, unlike Traditional IRAs where withdrawals are taxed."
                },
                {
                  question: "When should you rebalance your investment portfolio?",
                  options: ["Monthly", "When allocation drifts 5-10% from target", "Only during market crashes", "Never"],
                  correct: 1,
                  explanation: "Portfolios should be rebalanced when the allocation drifts 5-10% from your target allocation."
                },
                {
                  question: "What should you prioritize first when you have both debt and investment opportunities?",
                  options: ["Always invest first", "Always pay debt first", "Get full employer 401(k) match first", "It doesn't matter"],
                  correct: 2,
                  explanation: "You should always get the full employer 401(k) match first since it's free money, then evaluate debt vs. investing based on interest rates."
                },
                {
                  question: "How many income streams does the average millionaire have?",
                  options: ["3", "5", "7", "10"],
                  correct: 2,
                  explanation: "Research shows that the average millionaire has 7 different income streams, providing diversification and wealth building opportunities."
                },
                {
                  question: "What is the triple tax advantage of an HSA?",
                  options: ["Three times the contribution limit", "Tax-deductible, tax-free growth, tax-free withdrawals", "Three different investment options", "Available for three years"],
                  correct: 1,
                  explanation: "HSAs offer a triple tax advantage: contributions are tax-deductible, growth is tax-free, and withdrawals for medical expenses are tax-free."
                },
                {
                  question: "In the debt avalanche method, which debt do you pay off first?",
                  options: ["Smallest balance", "Largest balance", "Highest interest rate", "Most recent debt"],
                  correct: 2,
                  explanation: "The debt avalanche method focuses on paying off the debt with the highest interest rate first to minimize total interest paid."
                },
                {
                  question: "What type of income typically comes from rental properties?",
                  options: ["Active income", "Portfolio income", "Passive income", "Emergency income"],
                  correct: 2,
                  explanation: "Rental properties typically generate passive income, as they can produce money with limited ongoing effort from the owner."
                },
                {
                  question: "According to the 1% rule, how often should you increase your savings rate?",
                  options: ["Monthly", "Quarterly", "Every six months", "Annually"],
                  correct: 2,
                  explanation: "The 1% rule suggests increasing your savings rate by 1% every six months to gradually build wealth without feeling overwhelmed."
                },
                {
                  question: "Which behavioral bias involves the fear of losing money preventing necessary investment risks?",
                  options: ["Present bias", "Loss aversion", "Confirmation bias", "Lifestyle inflation"],
                  correct: 1,
                  explanation: "Loss aversion is the behavioral bias where people feel losses more strongly than gains, often preventing them from taking necessary investment risks."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Investing and Advanced Financial Planning",
      lessons: [
        {
          id: 1,
          title: "Investing and Advanced Financial Planning (Advanced)",
          content: `## Slide 1: Investment Fundamentals and Goal Setting

Before asking "What should I invest in?", start by asking "What am I investing for?" Clear investment goals drive all other decisions and help you choose appropriate strategies.

**Common Investment Goals:**
- **Retirement**: Long-term wealth building (20-40 year horizon)
- **Home down payment**: Medium-term goal (2-10 years)
- **Children's education**: Medium to long-term (5-18 years)
- **Financial independence**: Long-term wealth accumulation
- **Legacy building**: Wealth transfer to next generation

**Goal-Based Investment Strategy:**
- **Time horizon** determines risk tolerance
- **Liquidity needs** affect account type selection
- **Tax considerations** influence investment choices
- **Risk capacity** vs. risk tolerance assessment

**SMART Investment Goals:**
- **Specific**: "Save $1 million for retirement"
- **Measurable**: Track progress regularly
- **Achievable**: Realistic given income and timeline
- **Relevant**: Aligned with life priorities
- **Time-bound**: Clear deadline for achievement

Investment success starts with knowing exactly what you're trying to accomplish and when you need the money.

## Slide 2: Investment Account Types and Tax Strategy

Choosing the right account type is crucial for tax-efficient investing and maximizing long-term returns:

**Brokerage Accounts:**
- **Maximum flexibility** for any investment goal
- **No contribution limits** or withdrawal restrictions
- **Taxable** investment gains and income
- **Capital gains rates** often lower than income tax rates
- **Tax-loss harvesting** opportunities available

**401(k) Plans:**
- **Employer-sponsored** retirement savings
- **Tax-advantaged growth** (traditional) or tax-free withdrawals (Roth)
- **Potential employer matching** (free money!)
- **Higher contribution limits** than IRAs
- **Limited investment options** chosen by employer

**Individual Retirement Accounts (IRAs):**
- **Personal retirement** savings vehicle
- **More investment control** than 401(k)s
- **Traditional IRA**: Tax deduction now, pay taxes on withdrawals
- **Roth IRA**: Pay taxes now, tax-free withdrawals in retirement
- **Income limits** may restrict eligibility

**Account Selection Strategy:**
1. Maximize employer 401(k) match first
2. Consider Roth IRA for young investors
3. Use taxable accounts for non-retirement goals
4. Advanced strategies: backdoor Roth, mega backdoor Roth

## Slide 3: Investment Vehicles and Portfolio Construction

Understanding different investment options helps you build a diversified portfolio aligned with your goals:

**Individual Stocks:**
- **Ownership shares** in specific companies
- **Highest potential returns** but also highest risk
- **Requires significant research** and monitoring
- **Concentration risk** if not diversified

**Bonds:**
- **Loans to corporations or governments**
- **Steady income** through interest payments
- **Lower volatility** than stocks
- **Interest rate sensitivity** affects bond prices

**Mutual Funds:**
- **Professional management** of diversified holdings
- **Instant diversification** across many securities
- **Higher fees** than index funds
- **Active management** attempts to beat market returns

**Exchange-Traded Funds (ETFs):**
- **Passive index tracking** with low fees
- **Trade like stocks** during market hours
- **Tax efficiency** compared to mutual funds
- **Broad diversification** available

**Target-Date Funds:**
- **Automatically adjusts** allocation as you age
- **Simple "set and forget"** approach
- **Becoming more conservative** as target date approaches
- **Good default option** for retirement accounts

## Slide 4: Modern Portfolio Theory and Asset Allocation

Strategic asset allocation is the primary driver of investment returns over time:

**Asset Allocation Principles:**
- **Diversification reduces risk** without sacrificing returns
- **Correlation matters**: Choose assets that don't move together
- **Rebalancing** maintains target allocation over time
- **Time horizon** determines appropriate risk level

**Major Asset Classes:**
- **Domestic Stocks**: US company ownership
- **International Stocks**: Global diversification
- **Bonds**: Steady income and stability
- **Real Estate (REITs)**: Inflation hedge and income
- **Commodities**: Portfolio diversifier

**Age-Based Allocation Models:**
- **Conservative (Age 60+)**: 30% stocks, 70% bonds
- **Moderate (Age 40-60)**: 60% stocks, 40% bonds
- **Aggressive (Age 20-40)**: 80-90% stocks, 10-20% bonds

**Three-Fund Portfolio Example:**
- 60% Total Stock Market Index
- 30% International Stock Index
- 10% Bond Index

Simple, low-cost, and effective for most investors.

## Quiz: Test Your Knowledge (5 Questions)

Let's test your understanding of investment fundamentals and portfolio construction.

## Slide 6: Advanced Investment Strategies

Sophisticated investors use additional strategies to optimize returns and manage risk:

**Dollar-Cost Averaging:**
- **Invest fixed amounts** regularly regardless of market conditions
- **Reduces timing risk** by spreading purchases over time
- **Automatic discipline** removes emotion from investing
- **Particularly effective** in volatile markets

**Tax-Loss Harvesting:**
- **Sell losing investments** to offset gains for tax purposes
- **Reduce current year** tax liability
- **Reinvest proceeds** in similar (but not identical) assets
- **Be aware of wash sale rules** (30-day restriction)

**Rebalancing Strategies:**
- **Calendar rebalancing**: Fixed schedule (quarterly, annually)
- **Threshold rebalancing**: When allocation drifts 5-10%
- **Tax-efficient rebalancing**: Use new contributions when possible
- **Asset location**: Place investments in most tax-efficient accounts

**International Diversification:**
- **Geographic risk reduction**
- **Currency diversification**
- **Access to different economic cycles**
- **Emerging markets exposure** for higher growth potential

**Alternative Investments:**
- **Real Estate Investment Trusts (REITs)**
- **Commodities and commodity funds**
- **Private equity and hedge funds** (for accredited investors)
- **Cryptocurrency** (small allocation for high-risk tolerance)

## Slide 7: Risk Management and Behavioral Finance

Understanding and managing investment risks, including behavioral biases, is crucial for long-term success:

**Types of Investment Risk:**
- **Market risk**: Overall market decline
- **Company-specific risk**: Individual stock problems
- **Interest rate risk**: Bond price sensitivity
- **Inflation risk**: Purchasing power erosion
- **Currency risk**: International investment fluctuations

**Behavioral Biases in Investing:**
- **Overconfidence**: Believing you can predict markets
- **Herding**: Following the crowd
- **Loss aversion**: Holding losers too long
- **Recency bias**: Extrapolating recent performance

**Risk Management Strategies:**
- **Diversification**: Don't put all eggs in one basket
- **Position sizing**: Limit individual investment exposure
- **Stop-loss orders**: Automatic selling at predetermined price
- **Emergency fund**: Avoid forced investment sales

**Staying Disciplined:**
- **Write an investment policy statement**
- **Automate investing** to remove emotions
- **Regular reviews** but avoid overtrading
- **Focus on long-term goals** during market volatility

## Slide 8: Retirement Planning and Withdrawal Strategies

Advanced retirement planning involves optimizing savings strategies and managing withdrawals efficiently:

**Retirement Savings Optimization:**
- **Maximize tax-advantaged accounts** first
- **Understand contribution limits** and catch-up contributions
- **Consider Roth conversions** during low-income years
- **Plan for required minimum distributions** (RMDs)

**The 4% Rule:**
- **Withdraw 4% of portfolio** in first year of retirement
- **Adjust for inflation** in subsequent years
- **Historically sustainable** for 30-year retirement
- **May need adjustment** based on market conditions

**Advanced Withdrawal Strategies:**
- **Bucket strategy**: Divide portfolio by time horizon
- **Bond ladder**: Systematic bond maturity schedule
- **Tax-efficient withdrawal order**: Optimize tax impact
- **Dynamic withdrawal**: Adjust based on market performance

**Social Security Optimization:**
- **Understand benefit calculation** based on highest 35 years
- **Delayed retirement credits** increase benefits until age 70
- **Spousal claiming strategies** for married couples
- **Tax implications** of Social Security benefits

**Healthcare in Retirement:**
- **Medicare planning** and supplemental insurance
- **Long-term care insurance** considerations
- **Health Savings Account** as retirement vehicle
- **Budget for increasing healthcare costs**

## Slide 9: Estate Planning and Legacy Building

Comprehensive financial planning includes preparing for wealth transfer and legacy creation:

**Essential Estate Planning Documents:**
- **Will**: Directs asset distribution after death
- **Trust**: Manages assets during life and after death
- **Power of attorney**: Financial decisions if incapacitated
- **Healthcare directive**: Medical decisions and preferences

**Trust Strategies:**
- **Revocable living trust**: Avoid probate, maintain control
- **Irrevocable trust**: Remove assets from estate, tax benefits
- **Charitable trust**: Philanthropic goals with tax advantages
- **Special needs trust**: Protect disabled beneficiaries

**Tax-Efficient Wealth Transfer:**
- **Annual gift tax exclusion**: $17,000 per recipient (2023)
- **Lifetime gift and estate tax exemption**: $12.92 million (2023)
- **529 education plans**: Tax-free growth for education
- **Charitable giving**: Income tax deductions and estate reduction

**Legacy Planning Considerations:**
- **Family financial education**: Teaching next generation
- **Business succession planning**: Transferring family businesses
- **Charitable legacy**: Supporting causes you care about
- **Regular plan updates**: Adjust for life changes and law changes

**Advanced Strategies:**
- **Grantor retained annuity trusts (GRATs)**
- **Charitable remainder trusts (CRTs)**
- **Family limited partnerships (FLPs)**
- **Private placement life insurance**

## Final Quiz: Comprehensive Test (10 Questions)

Test your complete understanding of advanced investing and financial planning concepts. This comprehensive quiz covers all the sophisticated strategies and concepts from this advanced lesson.`,
          quizzes: [
            {
              position: 5,
              questions: [
                {
                  question: "According to Fidelity's investment philosophy, what question should you ask before 'What should I invest in?'",
                  options: ["How much should I invest?", "What am I investing for?", "When should I start?", "Which broker should I use?"],
                  correct: 1,
                  explanation: "Fidelity emphasizes that you should start by asking 'What am I investing for?' rather than 'What should I invest in?' to align investments with goals."
                },
                {
                  question: "Which investment account offers the most flexibility with no contribution limits?",
                  options: ["401(k)", "Traditional IRA", "Roth IRA", "Brokerage account"],
                  correct: 3,
                  explanation: "Brokerage accounts offer maximum flexibility with no contribution limits or withdrawal restrictions, though gains are taxable."
                },
                {
                  question: "What is the primary benefit of dollar-cost averaging?",
                  options: ["Guarantees higher returns", "Reduces timing risk", "Eliminates all risk", "Provides immediate profits"],
                  correct: 1,
                  explanation: "Dollar-cost averaging reduces timing risk by spreading purchases over time, removing the need to time market entry perfectly."
                },
                {
                  question: "What percentage can you typically withdraw from your retirement portfolio annually according to the 4% rule?",
                  options: ["2%", "4%", "6%", "8%"],
                  correct: 1,
                  explanation: "The 4% rule suggests withdrawing 4% of your portfolio in the first year of retirement, then adjusting for inflation annually."
                },
                {
                  question: "Which document directs how your assets are distributed after death?",
                  options: ["Trust", "Power of attorney", "Will", "Healthcare directive"],
                  correct: 2,
                  explanation: "A will directs how your assets are distributed after death and is an essential estate planning document."
                }
              ]
            },
            {
              position: 10,
              questions: [
                {
                  question: "What is the main advantage of ETFs over mutual funds?",
                  options: ["Professional management", "Higher returns", "Lower fees and tax efficiency", "Guaranteed profits"],
                  correct: 2,
                  explanation: "ETFs typically have lower fees than actively managed mutual funds and are more tax-efficient due to their structure."
                },
                {
                  question: "In a three-fund portfolio, what percentage is typically allocated to international stocks?",
                  options: ["10%", "20%", "30%", "40%"],
                  correct: 2,
                  explanation: "A typical three-fund portfolio allocates about 30% to international stocks for geographic diversification."
                },
                {
                  question: "What behavioral bias involves following the crowd in investment decisions?",
                  options: ["Overconfidence", "Herding", "Loss aversion", "Recency bias"],
                  correct: 1,
                  explanation: "Herding bias involves following the crowd in investment decisions, often leading to buying high and selling low."
                },
                {
                  question: "At what age do Social Security delayed retirement credits stop increasing benefits?",
                  options: ["65", "67", "70", "72"],
                  correct: 2,
                  explanation: "Social Security delayed retirement credits stop increasing benefits at age 70, making it the optimal claiming age for maximum benefits."
                },
                {
                  question: "What is the annual gift tax exclusion amount for 2023?",
                  options: ["$15,000", "$16,000", "$17,000", "$18,000"],
                  correct: 2,
                  explanation: "The annual gift tax exclusion for 2023 is $17,000 per recipient, allowing tax-free wealth transfer."
                },
                {
                  question: "Which type of trust removes assets from your estate for tax purposes?",
                  options: ["Revocable trust", "Irrevocable trust", "Living trust", "Testamentary trust"],
                  correct: 1,
                  explanation: "Irrevocable trusts remove assets from your estate for tax purposes, unlike revocable trusts where you maintain control."
                },
                {
                  question: "What investment strategy involves selling losing investments to offset gains for tax purposes?",
                  options: ["Dollar-cost averaging", "Rebalancing", "Tax-loss harvesting", "Asset allocation"],
                  correct: 2,
                  explanation: "Tax-loss harvesting involves selling losing investments to offset gains for tax purposes, reducing current year tax liability."
                },
                {
                  question: "Which account type offers a 'triple tax advantage'?",
                  options: ["401(k)", "Roth IRA", "HSA", "Brokerage account"],
                  correct: 2,
                  explanation: "HSAs offer a triple tax advantage: tax-deductible contributions, tax-free growth, and tax-free withdrawals for medical expenses."
                },
                {
                  question: "What is the wash sale rule time restriction?",
                  options: ["15 days", "30 days", "45 days", "60 days"],
                  correct: 1,
                  explanation: "The wash sale rule prevents claiming a tax loss if you buy the same or substantially identical security within 30 days."
                },
                {
                  question: "According to modern portfolio theory, what is the primary driver of investment returns over time?",
                  options: ["Stock picking", "Market timing", "Asset allocation", "Investment fees"],
                  correct: 2,
                  explanation: "Modern portfolio theory shows that asset allocation is the primary driver of investment returns over time, more than stock picking or timing."
                }
              ]
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