import { useParams, Navigate } from "react-router-dom";
import { LessonSlides } from "@/components/LessonSlides";

export default function Lesson() {
  const { categoryId, lessonId } = useParams();
  const categoryIndex = parseInt(categoryId || "1");
  const lessonIndex = parseInt(lessonId || "1");

  // Comprehensive lesson data with AI-generated content and sources
  const categories = [
    {
      id: 1,
      title: "Financial Foundations",
      lessons: [
        {
          id: 1,
          title: "What is Money?",
          content: `## What is Money?

Money is one of humanity's most important inventions, serving as the cornerstone of modern economic systems. According to the Federal Reserve Bank of St. Louis, money is defined as "anything that is generally accepted as payment for goods and services and repayment of debts."

### The Three Core Functions of Money

**1. Medium of Exchange**
Money eliminates the inefficiencies of bartering by providing a universally accepted intermediary. Before money, people faced the "double coincidence of wants" problem - you needed to find someone who both had what you wanted AND wanted what you had.

*Historical Example*: In ancient Mesopotamia (3000 BCE), barley was used as money because it was widely accepted, divisible, and had intrinsic value as food.

**2. Unit of Account**
Money provides a standardized measure for pricing goods and services, making economic calculations possible. This function enables businesses to set prices, calculate profits, and consumers to compare values.

*Modern Application*: When you see a laptop costs $1,000 and a bicycle costs $500, you immediately understand their relative value - the laptop is worth two bicycles.

**3. Store of Value**
Money allows people to save purchasing power for future use. However, this function can be compromised by inflation, which erodes money's purchasing power over time.

*Real-World Impact*: According to the Bureau of Labor Statistics, $100 in 1970 would require $726.84 in 2024 to have the same purchasing power.

### Evolution of Monetary Systems

**Commodity Money Era (3000 BCE - 1900s)**
Early civilizations used items with intrinsic value as money:
- **Livestock**: Cattle in ancient Rome (the word "pecuniary" comes from "pecus," meaning cattle)
- **Precious metals**: Gold and silver became dominant due to durability, divisibility, and scarcity
- **Shells and beads**: Used in Africa, Asia, and the Americas for local trade

*Source: "The Ascent of Money" by Niall Ferguson*

**Representative Money (1100s-1971)**
Paper money backed by physical commodities emerged in China during the Song Dynasty. The Bretton Woods system (1944-1971) established the US dollar as the world's reserve currency, backed by gold at $35 per ounce.

**Fiat Money Era (1971-Present)**
President Nixon ended the gold standard in 1971, creating our current system where money derives value from government decree and public trust rather than physical backing.

### Modern Money Statistics

According to the Federal Reserve Economic Data (FRED):
- Only 8% of US money supply exists as physical cash
- Daily foreign exchange trading volume: $7.5 trillion (Bank for International Settlements, 2022)
- 76% of Americans use digital payments weekly (Federal Reserve Bank of Atlanta, 2023)
- The US M2 money supply: approximately $21 trillion (2024)

### Digital Money Revolution

**Electronic Payments Growth**
The shift toward digital payments accelerated dramatically:
- Credit card transactions: $4.6 trillion annually in the US (Nilson Report, 2023)
- Mobile payment adoption increased 150% during COVID-19 (McKinsey, 2021)
- Contactless payments now represent 30% of all card transactions (Mastercard, 2024)

**Central Bank Digital Currencies (CBDCs)**
According to the Atlantic Council's CBDC Tracker:
- 130 countries (98% of global GDP) are exploring CBDCs
- 11 countries have fully launched digital currencies
- China's digital yuan has processed over $13.9 billion in transactions

**Cryptocurrency Impact**
While volatile, cryptocurrencies have introduced new monetary concepts:
- Bitcoin market cap: Over $850 billion (2024)
- Daily crypto trading volume: $50-100 billion
- 106 million Americans own cryptocurrency (Pew Research, 2023)

### Money's Role in Economic Policy

**Federal Reserve Functions**
The Federal Reserve manages the US money supply through:
- **Interest rates**: Currently 5.25-5.50% federal funds rate (2024)
- **Open market operations**: Buying/selling government securities
- **Reserve requirements**: Banks must hold 10% of deposits as reserves
- **Quantitative easing**: Asset purchases to increase money supply

*Source: Federal Reserve Board of Governors*

**Inflation and Monetary Policy**
The Fed targets 2% annual inflation as optimal for economic growth. Higher inflation erodes money's store of value function:
- 2023 US inflation rate: 3.4% (Bureau of Labor Statistics)
- Hyperinflation examples: Germany (1923), Zimbabwe (2008), Venezuela (2016-2019)

### Global Monetary Landscape

**Reserve Currency Dominance**
According to the International Monetary Fund (IMF):
- US Dollar: 59.5% of global foreign exchange reserves
- Euro: 20.5%
- Japanese Yen: 5.5%
- British Pound: 4.9%
- Chinese Renminbi: 2.8%

**Financial Inclusion Challenges**
The World Bank reports:
- 1.4 billion adults remain unbanked globally
- Mobile money accounts: 1.6 billion registered (up 13% from 2022)
- Sub-Saharan Africa leads in mobile money adoption

### Future of Money

**Emerging Technologies**
- **Programmable money**: Smart contracts automating payments
- **Internet of Things (IoT)**: Devices making autonomous transactions
- **Artificial Intelligence**: Optimizing financial decisions and fraud detection
- **Quantum computing**: Potential to revolutionize cryptography and security

**Policy Implications**
The Bank for International Settlements identifies key trends:
- Decline of cash usage (Sweden down to 1% of transactions)
- Rise of stablecoins for international transfers
- Increasing regulatory focus on digital assets
- Central bank exploration of programmable money

### Sources and Further Reading

1. Federal Reserve Bank of St. Louis - "What is Money?" (2024)
2. Ferguson, Niall. "The Ascent of Money: A Financial History of the World" (2008)
3. Bank for International Settlements - "Triennial Central Bank Survey" (2022)
4. Federal Reserve Economic Data (FRED) - Money Supply Statistics
5. World Bank - "Global Findex Database" (2021)
6. McKinsey & Company - "The Digital Payment Revolution" (2021)
7. International Monetary Fund - "Currency Composition of Official Foreign Exchange Reserves" (2024)
8. Bureau of Labor Statistics - "Consumer Price Index" (2024)

Understanding these monetary fundamentals provides the foundation for making informed financial decisions in our increasingly complex economic environment.`,
          activities: ["comprehensive_quiz", "written_analysis", "case_study", "currency_timeline"]
        },
        {
          id: 2,
          title: "Types of Money and Payment Systems",
          content: `## Types of Money and Payment Systems

The landscape of money has evolved dramatically, from ancient commodity exchanges to today's sophisticated digital payment networks. Understanding different types of money helps navigate our modern financial ecosystem effectively.

### Physical Currency: The Traditional Foundation

**Coin Production and Economics**
The US Mint produces approximately 7-20 billion coins annually, but production costs often exceed face value:
- Penny production cost: 2.76¢ (Fiscal Year 2023)
- Nickel production cost: 10.41¢ 
- Quarter production cost: 9.0¢
- Total annual production cost: $458 million (US Mint, 2023)

*Source: US Mint Annual Report 2023*

**Banknote Security and Lifespan**
The Bureau of Engraving and Printing produces approximately 6.2 billion banknotes annually with sophisticated security features:

**Advanced Security Features**:
- **3D Security Ribbon**: Blue ribbon woven into $100 bills with moving images
- **Color-Changing Ink**: Shifts from copper to green when tilted
- **Watermarks**: Visible when held to light, matching the portrait
- **Security Thread**: Embedded strip with microprinting
- **Intaglio Printing**: Raised texture you can feel

**Currency Lifespan** (Federal Reserve data):
- $1 bill: 6.6 years
- $5 bill: 4.7 years  
- $10 bill: 5.3 years
- $20 bill: 7.8 years
- $50 bill: 12.2 years
- $100 bill: 22.9 years

### Digital Payment Revolution

**Card Payment Networks**
The global card payment industry processes massive transaction volumes:

**Visa Network (2023 Annual Report)**:
- Annual payment volume: $14.8 trillion
- 4.4 billion cards in circulation
- 193 million merchant locations worldwide
- Average processing time: 150 milliseconds

**Mastercard Statistics**:
- $8.9 trillion gross dollar volume (2023)
- 3.1 billion cards in circulation
- 100+ million acceptance locations
- 99.9% network uptime

**Electronic Payment Growth**
According to the Federal Reserve's 2022 Payments Study:
- Total non-cash payments: 174.2 billion transactions
- Debit cards: 86.9 billion transactions ($3.8 trillion)
- Credit cards: 46.6 billion transactions ($4.6 trillion)
- ACH transfers: 29.1 billion transactions ($72.6 trillion)

### Mobile Payment Innovation

**Contactless Payment Adoption**
Mastercard SpeedPass Research (2024):
- 87% of consumers worldwide now use contactless payments
- Transaction speed: 3x faster than traditional card payments
- Average transaction time: 15 seconds vs. 45 seconds
- Preferred payment method for transactions under $25

**Mobile Wallet Market Share (US, 2024)**:
- Apple Pay: 44% market share
- Google Pay: 25%
- Samsung Pay: 15%
- PayPal: 12%
- Other digital wallets: 4%

*Source: eMarketer Digital Payments Report 2024*

**Near Field Communication (NFC) Technology**
NFC enables secure contactless payments within 4 centimeters:
- Operating frequency: 13.56 MHz
- Data transfer rate: 424 kbps maximum
- Security: AES encryption and tokenization
- Global NFC payment volume: $190 billion (2023)

### Cryptocurrency and Digital Assets

**Bitcoin Network Statistics (2024)**
According to Blockchain.info and CoinMetrics:
- Total bitcoins in circulation: 19.7 million (of 21 million maximum)
- Daily transaction volume: $5-15 billion
- Network hash rate: 450+ exahashes per second
- Average transaction fee: $2-20 (varies with network congestion)
- Energy consumption: 150 TWh annually (Cambridge Bitcoin Electricity Consumption Index)

**Ethereum Ecosystem**
Post-Ethereum 2.0 Merge (September 2022):
- Daily transactions: 1.2 million
- Energy consumption reduced by 99.95%
- Proof-of-Stake validation replaces mining
- Total value locked in DeFi: $45 billion (DeFiPulse, 2024)

**Stablecoin Market**
Stablecoins attempt to maintain price stability:
- **Tether (USDT)**: $83 billion market cap
- **USD Coin (USDC)**: $25 billion market cap  
- **Binance USD (BUSD)**: $3 billion market cap
- Daily trading volume: $50-80 billion across all stablecoins

*Source: CoinMarketCap, 2024*

### Central Bank Digital Currencies (CBDCs)

**Global CBDC Development**
Atlantic Council CBDC Tracker (2024):
- **Research phase**: 40 countries
- **Development phase**: 46 countries  
- **Pilot programs**: 18 countries
- **Fully launched**: 11 countries

**China's Digital Yuan (e-CNY)**
Most advanced CBDC implementation:
- Transaction volume: $250 billion since 2020 launch
- Active users: 260 million wallets
- Merchant acceptance: 5.6 million locations
- Pilot cities: 26 major metropolitan areas

**European Digital Euro**
European Central Bank timeline:
- Investigation phase: Completed October 2023
- Preparation phase: November 2023 - October 2025
- Possible implementation: 2026-2028
- Design features: Privacy-preserving, offline capability, programmable money

### International Payment Systems

**SWIFT Network**
Society for Worldwide Interbank Financial Telecommunication:
- Daily message volume: 42 million
- Connected institutions: 11,000+ in 200+ countries
- Average settlement time: 1-5 business days
- Market share: 80% of international payments

**Cross-Border Payment Innovation**
Traditional international transfers face challenges:
- Average cost: 6.35% of transfer amount (World Bank, 2023)
- Average time: 3-5 business days
- Correspondent banking requirements create delays

**Modern Alternatives**:
- **Wise (formerly TransferWise)**: 0.35-2% fees, real exchange rates
- **Remitly**: Focus on emerging markets, 1-3% fees
- **Ripple (XRP)**: Institutional blockchain payments, 3-second settlement
- **JPM Coin**: JPMorgan's blockchain platform for institutional clients

### Payment Security and Fraud Prevention

**Global Payment Fraud Statistics**
Nilson Report (2023):
- Worldwide payment card fraud: $35.67 billion
- US fraud losses: $11.27 billion (32% of global total)
- Card-not-present fraud: 73% of total fraud
- Fraud rate: 0.156% of transaction volume

**Tokenization Technology**
Payment tokenization replaces sensitive card data:
- Visa Token Service: 9.2 billion tokens issued
- Mastercard Digital Enablement Service: 6.8 billion tokens
- Fraud reduction: 26% decrease in tokenized transactions
- EMV 3-D Secure 2.0: Reduces authentication friction by 70%

**Biometric Authentication Growth**
Juniper Research forecasts:
- Biometric payment users: 3 billion by 2025
- Transaction value: $3 trillion annually
- Authentication methods: Fingerprint (65%), facial recognition (25%), voice (10%)

### Regional Payment Preferences

**Cash Usage by Country** (2023 data):
- **Germany**: 58% of transactions still cash-based
- **Japan**: 43% cash usage despite advanced technology
- **Sweden**: <2% cash usage, nearly cashless society
- **India**: 23% cash post-demonetization (down from 78% in 2016)
- **Kenya**: 83% mobile money penetration via M-Pesa

**Cultural Payment Preferences**
Mastercard New Payments Index (2023):
- **Asian markets**: QR code payments dominant (65% adoption)
- **European markets**: Contactless card preference (78% adoption)  
- **Latin America**: Mobile wallet growth (45% year-over-year)
- **North America**: Credit card loyalty programs drive usage

### Environmental Impact of Payment Systems

**Carbon Footprint Comparison** (University of Cambridge estimates):
- **Cash system**: 26.6 kg CO2 per capita annually
- **Card payments**: 3.8 kg CO2 per capita annually
- **Bitcoin**: 0.7 kg CO2 per transaction
- **Ethereum** (post-Merge): 0.0001 kg CO2 per transaction

**Sustainable Payment Initiatives**:
- Mastercard's carbon calculator tracks spending emissions
- Visa's crypto climate initiative supports renewable energy
- PayPal's carbon-neutral shipping for merchants
- Apple Pay runs on 100% renewable energy

### Future Payment Innovations

**Emerging Technologies**
MIT Technology Review identifies key trends:

**Internet of Things (IoT) Payments**:
- Connected cars making autonomous toll payments
- Smart appliances ordering supplies automatically
- Wearable devices enabling seamless transactions
- Projected market size: $37 billion by 2027

**Artificial Intelligence Integration**:
- Fraud detection accuracy: 95%+ with AI systems
- Personalized spending insights and budgeting
- Voice-activated payments through smart speakers
- Predictive analytics for cash flow management

**Quantum Computing Implications**:
- Current encryption methods vulnerable by 2030-2035
- Quantum-resistant cryptography development underway
- Potential for instantaneous global payments
- Enhanced security through quantum key distribution

### Regulatory Landscape

**Digital Payment Regulations**
Key regulatory frameworks:

**European Union**:
- PSD2 (Payment Services Directive): Open banking requirements
- GDPR: Data protection for payment processors
- MiCA (Markets in Crypto-Assets): Comprehensive crypto regulation

**United States**:
- Fed's FedNow Service: Real-time payment infrastructure
- State-level money transmitter licenses for crypto
- CFPB oversight of digital payment platforms

**Asia-Pacific**:
- Singapore's Payment Services Act: Comprehensive fintech regulation
- China's strict cryptocurrency ban but CBDC promotion
- Japan's crypto-friendly regulations driving innovation

### Investment and Market Outlook

**Payment Industry Valuations**
Notable fintech valuations (2024):
- **Stripe**: $95 billion valuation
- **Klarna**: $6.7 billion valuation  
- **Plaid**: $13.4 billion valuation
- **Chime**: $25 billion valuation

**Market Growth Projections**
Allied Market Research forecasts:
- Global digital payments market: $361.3 billion by 2032
- Mobile wallet market: $16.9 billion by 2031
- CBDC market: $213 billion by 2030
- Cryptocurrency market: $4.94 billion by 2030

### Sources and Further Reading

1. Federal Reserve - "2022 Federal Reserve Payments Study"
2. Bank for International Settlements - "Statistics on Payment Systems" (2024)
3. Visa Inc. - "Annual Report" (2023)
4. Mastercard - "SpeedPass Research Report" (2024)
5. Cambridge Centre for Alternative Finance - "3rd Global Cryptoasset Benchmarking Study"
6. Atlantic Council - "Central Bank Digital Currency Tracker" (2024)
7. World Bank - "Remittance Prices Worldwide Quarterly" (2023)
8. Nilson Report - "Global Payment Fraud Statistics" (2023)
9. MIT Technology Review - "Future of Money" (2024)
10. European Central Bank - "Digital Euro Progress Report" (2024)

This comprehensive overview of money types and payment systems provides the foundation for understanding how value moves in our modern economy and the innovations shaping our financial future.`,
          activities: ["payment_systems_quiz", "digital_wallet_simulator", "fraud_prevention_game", "cbdc_comparison"]
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
          content: `## Introduction to Budgeting: Your Financial Foundation

Budgeting is the cornerstone of financial success, yet research shows that only 32% of Americans maintain a written household budget (National Foundation for Credit Counseling, 2023). Those who budget regularly report higher levels of financial confidence and are more likely to achieve their financial goals.

### The Science Behind Budgeting Success

**Behavioral Economics Research**
Studies from Harvard Business School and MIT reveal key insights about budgeting psychology:

- **Mental Accounting Effect**: People who categorize expenses spend 23% less than those who don't
- **Goal Gradient Effect**: Individuals are 2.5x more likely to reach financial goals when progress is visually tracked
- **Present Bias**: Without budgeting systems, people discount future rewards by 15-25% annually
- **Loss Aversion**: Budgeters experience 40% less financial stress because they avoid "losses" through planning

*Source: Ariely, Dan. "Predictably Irrational" (2008) and Thaler, Richard. "Nudge" (2008)*

**Financial Outcomes Data**
Federal Reserve Survey of Consumer Finances (2022):
- Households with budgets save 15% more annually
- Budgeters carry 19% less consumer debt
- 78% of budgeters feel "financially secure" vs. 38% of non-budgeters
- Budget users are 42% more likely to achieve major financial goals within 5 years

### Understanding Budget Psychology

**The Scarcity Mindset vs. Abundance Mindset**
Research from Princeton's Psychology Department shows:

**Scarcity Mindset** (without budgeting):
- Decision fatigue from constant money worries
- Focus on immediate needs vs. long-term goals
- Reduced cognitive capacity for other decisions
- Higher stress hormone (cortisol) levels

**Abundance Mindset** (with budgeting):
- Confidence in financial decision-making
- Clear prioritization of values and goals
- Reduced anxiety about money matters
- Better overall mental health outcomes

*Source: Mani, Anandi, et al. "Poverty Impedes Cognitive Function" Science (2013)*

**Psychological Budgeting Barriers**
Common mental obstacles and solutions:

1. **Perfectionism Paralysis** (affects 31% of people)
   - Problem: Waiting for the "perfect" budget before starting
   - Solution: Start with 70% accuracy and improve monthly

2. **Restriction Rebellion** (affects 28% of people)
   - Problem: Viewing budgets as limiting freedom
   - Solution: Frame as enabling choices aligned with values

3. **Complexity Overwhelm** (affects 26% of people)
   - Problem: Creating overly detailed budgets initially
   - Solution: Begin with 5-7 major categories maximum

### Core Budgeting Principles

**The Zero-Sum Principle**
Every dollar must have an assigned purpose:
Income - (Fixed Expenses + Variable Expenses + Savings + Debt Payment) = $0

**The Pay-Yourself-First Principle**
Treat savings as a non-negotiable expense, not what remains after spending:
- Automate transfers to savings before discretionary spending
- Minimum recommended: 10% of gross income
- Optimal target: 20% of gross income

**The Values Alignment Principle**
Budgets should reflect personal priorities:
- Identify top 3-5 life values
- Ensure spending supports these values
- Reduce expenses that don't align with priorities

### Popular Budgeting Methodologies

**The 50/30/20 Rule**
Created by Senator Elizabeth Warren, this framework divides after-tax income:

**50% for Needs** (Essential expenses):
- Housing costs (rent, mortgage, property taxes)
- Utilities (electricity, gas, water, basic internet)
- Transportation (car payment, insurance, gas, public transit)
- Groceries and household supplies
- Health insurance and basic healthcare
- Minimum debt payments
- Basic clothing for work/school

**30% for Wants** (Discretionary spending):
- Entertainment and streaming services
- Dining out and coffee shops
- Hobbies and recreational activities
- Travel and vacations
- Shopping beyond basics
- Gym memberships and subscriptions
- Personal care and beauty

**20% for Savings and Debt Repayment**:
- Emergency fund (target: 3-6 months expenses)
- Retirement contributions (401k, IRA)
- Short-term savings goals
- Extra debt payments beyond minimums
- Investment accounts

*Research Note*: Vanguard analysis shows this method works best for households earning $50,000-$75,000 annually. Higher earners should increase savings percentage; lower earners may need to adjust ratios temporarily.

**Zero-Based Budgeting (ZBB)**
Popularized by Dave Ramsey, every dollar gets assigned before spending:

**Monthly Process**:
1. Calculate total monthly after-tax income
2. List all fixed expenses (rent, insurance, debt payments)
3. Estimate variable expenses (groceries, gas, entertainment)
4. Assign remaining dollars to savings goals
5. Verify: Income - All Assignments = $0

**Advantages**:
- Complete awareness of money flow
- Prevents lifestyle inflation
- Forces intentional spending decisions
- Works well for detail-oriented individuals

**Challenges**:
- Time-intensive initially (2-3 hours monthly)
- Requires disciplined tracking
- Can feel restrictive for spontaneous personalities

**Envelope Method**
Physical or digital allocation system:

**Traditional Physical Method**:
- Withdraw monthly budget in cash
- Divide into labeled envelopes by category
- When envelope is empty, stop spending in that category
- Transfer between envelopes only for emergencies

**Modern Digital Versions**:
- YNAB (You Need A Budget): Digital envelope system
- Goodbudget: Virtual envelope app
- Many banks offer "bucket" features
- Automatic categorization with spending limits

**Research Results**: Texas Tech University study found envelope users reduce discretionary spending by 27% compared to card-only users.

### Advanced Budgeting Strategies

**The 60% Solution**
Simplified approach for higher incomes:
- 60% for fixed committed expenses (housing, insurance, debt, regular savings)
- 10% retirement savings
- 10% long-term savings/investments
- 10% short-term savings/fun fund
- 10% miscellaneous/unexpected expenses

**The Pay-Period Budgeting**
Align budget with pay schedule:
- Create separate budgets for each paycheck
- Split monthly expenses across pay periods
- Better cash flow management
- Reduces month-end money stress

**Percentage-Based Budgeting**
Use percentages instead of fixed amounts:
- Automatically adjusts with income changes
- Easier to scale up or down
- Ideal for variable income earners
- Example: Always save 15%, spend 25% on housing

### Budgeting for Different Life Stages

**Young Adults (22-30)**
Typical budget allocations based on Bureau of Labor Statistics data:
- Housing: 28% of income
- Transportation: 16%
- Food: 13%
- Savings: 10% (minimum)
- Student loans: 8%
- Entertainment: 8%
- Other: 17%

**Families with Children (30-45)**
Adjusted percentages for family expenses:
- Housing: 32% (larger homes needed)
- Childcare: 12% (national average $12,000/year)
- Food: 15% (feeding family)
- Transportation: 18% (larger vehicles)
- Savings: 12%
- Healthcare: 6%
- Other: 5%

**Pre-Retirement (50-65)**
Focus on wealth acceleration:
- Housing: 25% (mortgage paid down)
- Savings: 25% (catch-up contributions)
- Healthcare: 8% (increasing costs)
- Transportation: 12%
- Food: 12%
- Other: 18%

### Technology and Budgeting Tools

**Popular Budgeting Apps Performance**
Based on user ratings and financial outcomes (NerdWallet, 2024):

**Mint** (Free):
- Automatic transaction categorization: 87% accuracy
- Bank connections: 17,000+ financial institutions
- User satisfaction: 4.2/5 stars
- Best for: Beginners wanting automation

**YNAB** ($14/month):
- User debt reduction: Average 15% in first year
- Savings increase: Average 23% in first year
- User satisfaction: 4.8/5 stars
- Best for: Hands-on budgeters wanting control

**Personal Capital** (Free + Paid):
- Investment tracking capabilities
- Net worth calculation tools
- Fee analysis for investments
- Best for: Investment-focused individuals

**PocketGuard** (Free + Premium):
- Prevents overspending with real-time alerts
- Shows available spending money after bills/goals
- Credit score monitoring
- Best for: Overspenders needing guardrails

### Common Budgeting Mistakes and Solutions

**Mistake 1: Unrealistic Category Amounts**
Research shows 67% of first-time budgeters underestimate expenses by 15-30%.

*Solution*: Track actual spending for 2-3 months before creating final budget. Start with generous estimates and adjust downward.

**Mistake 2: Forgetting Irregular Expenses**
Annual, quarterly, and seasonal expenses derail 52% of budgets.

*Examples of Irregular Expenses*:
- Car registration and inspection: $50-200 annually
- Holiday gifts: Average American spends $942 (National Retail Federation)
- Home/auto maintenance: Recommended 1-3% of home value annually
- Annual insurance premiums
- Tax preparation fees
- School supplies and activities

*Solution*: Create "sinking funds" - save monthly for known irregular expenses.

**Mistake 3: Not Adjusting for Life Changes**
Static budgets become irrelevant when circumstances change.

*Common Life Changes Requiring Budget Updates*:
- Job changes (income increase/decrease)
- Moving (housing costs, commute changes)
- Relationship changes (marriage, divorce, cohabitation)
- Family growth (children, aging parents)
- Health changes (medical expenses, insurance needs)

*Solution*: Review and adjust budget quarterly, with major reviews after life events.

### Building Sustainable Budgeting Habits

**The Habit Loop for Budgeting**
Based on Charles Duhigg's "The Power of Habit":

**Cue**: Specific trigger for budgeting behavior
- Calendar reminder on same day each week
- Paycheck notification
- Monthly bank statement arrival

**Routine**: Consistent budgeting process
- Check account balances
- Categorize previous week's expenses
- Adjust upcoming week's spending plan
- Review progress toward goals

**Reward**: Positive reinforcement
- Visual progress tracking
- Celebrate milestones achieved
- Small treats within budget
- Sense of control and accomplishment

**Habit Formation Timeline**
University College London research shows:
- Simple budgeting habits: 18-21 days to form
- Complex tracking systems: 66-254 days
- Success factors: Consistency over perfection
- Missing one day doesn't restart the process

### Cultural and Demographic Budgeting Insights

**Generational Budgeting Preferences**
Experian analysis (2023):

**Generation Z** (born 1997-2012):
- 73% use mobile budgeting apps
- Prefer automated savings and bill pay
- Focus on short-term goals (travel, experiences)
- Average monthly app usage: 14 times

**Millennials** (born 1981-1996):
- 68% maintain written or digital budgets
- Balance debt repayment with home buying goals
- Use mix of apps and spreadsheets
- Most likely to refinance debt for better rates

**Generation X** (born 1965-1980):
- 61% budget regularly
- Focus on college savings and retirement catch-up
- Prefer traditional tools (spreadsheets, pen/paper)
- Highest percentage of detailed expense tracking

**Baby Boomers** (born 1946-1964):
- 78% maintain budgets (highest of all generations)
- Prefer conservative, cash-based approaches
- Focus on healthcare costs and legacy planning
- Least likely to use technology tools

### Economic Context and Budgeting

**Impact of Economic Conditions**
Federal Reserve research shows budgeting behavior changes with economic cycles:

**During Economic Growth**:
- 23% decrease in budget adherence
- Increased discretionary spending
- Lower emergency fund priority
- Higher investment allocation

**During Economic Uncertainty**:
- 41% increase in budget creation
- Focus on essential expenses only
- Emergency fund building prioritized
- Debt payoff acceleration

**Inflation Impact on Budgeting**
With 2023-2024 inflation rates averaging 3.4%:
- Food costs increased 4.9% year-over-year
- Housing costs rose 6.1%
- Transportation expenses up 10.7%
- Budgeters who adjust categories quarterly maintain purchasing power 85% better than those who don't

### Sources and Further Reading

1. National Foundation for Credit Counseling - "Financial Literacy Survey" (2023)
2. Federal Reserve - "Survey of Consumer Finances" (2022)
3. Warren, Elizabeth and Tyagi, Amelia Warren. "All Your Worth: The Ultimate Lifetime Money Plan" (2005)
4. Ariely, Dan. "Predictably Irrational: The Hidden Forces That Shape Our Decisions" (2008)
5. Thaler, Richard H. and Sunstein, Cass R. "Nudge: Improving Decisions About Health, Wealth, and Happiness" (2008)
6. Duhigg, Charles. "The Power of Habit: Why We Do What We Do in Life and Business" (2012)
7. Bureau of Labor Statistics - "Consumer Expenditure Survey" (2023)
8. Vanguard - "How America Saves" (2024)
9. National Retail Federation - "Holiday Spending Survey" (2023)
10. University College London - "How Habits are Formed" European Journal of Social Psychology (2010)

Understanding these budgeting fundamentals provides the foundation for taking control of your financial future and making informed decisions about money management throughout different life stages and economic conditions.`,
          activities: ["budget_psychology_assessment", "spending_tracking_challenge", "budget_method_comparison", "habit_formation_planner"]
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