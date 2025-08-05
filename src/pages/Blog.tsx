import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  
  const allArticles = [
    {
      id: 1,
      title: "What is the Stock Market? A Kid's Guide to Understanding Stocks",
      excerpt: "Picture this: you walk into your favorite pizza place and notice it's packed every single day. The owner seems to be making tons of money, and you think, 'Wow, I wish I could own a piece of this successful business!' Well, guess what? If that pizza place was a public company, you actually could own a tiny slice of it through something called stocks. The stock market might sound like this mysterious, grown-up world full of confusing numbers and scary ups and downs, but it's really just a giant marketplace where people buy and sell pieces of companies. Think of it like a massive online store, except instead of buying video games or clothes, people are buying ownership shares in businesses they believe in. When you buy a stock, you're essentially saying, 'I think this company is going to do well, so I want to own a small piece of it.' And here's the cool part - if the company does well and makes more money, your little piece becomes more valuable! But just like that pizza place might have slow days, companies can have tough times too, which means your stock might lose value. That's why smart investors - even young ones - learn to research companies, understand what they do, and think long-term rather than getting scared by daily price changes. The stock market has been around for hundreds of years, helping people grow their money while supporting businesses that create jobs and innovative products we use every day.",
      author: "Ishan Nallani",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Stock Market Basics",
      trending: true,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Famous Young Investors: Kids Who Started Early",
      excerpt: "Meet Warren Buffett at age 11 - not the billionaire we know today, but a kid who bought his first stock with money he'd saved from delivering newspapers and selling Coca-Cola bottles. He purchased three shares of Cities Service for $38 each, watched them drop to $27, got nervous, and sold them at $40 for a small profit. Those same shares later climbed to $200 each, teaching young Warren a valuable lesson about patience that would shape his entire investing philosophy. Then there's Rachel Fox, who started investing at age 17 with money from her acting career and built a substantial portfolio by her early twenties through careful research and long-term thinking. Or consider Timothy Sykes, who turned his bar mitzvah money of $12,415 into over $1.6 million by age 21 through dedicated learning and disciplined trading strategies. These stories aren't just about luck - they're about young people who took time to understand how money works, learned from their mistakes, and developed habits that served them throughout their lives. What's fascinating is that many of these successful young investors share common traits: they read voraciously about business and economics, they start small and learn from every experience, they don't let emotions drive their decisions, and they understand that building wealth is a marathon, not a sprint. The key takeaway isn't that every kid should try to become the next Warren Buffett, but rather that starting early with even small amounts can lead to extraordinary results over time, thanks to the magic of compound interest and the valuable lessons learned along the way.",
      author: "Arvind Vivekanandan",
      date: "March 12, 2024",
      readTime: "10 min read",
      category: "Inspiration",
      trending: true,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "How to Read Stock Charts: A Visual Guide for Kids",
      excerpt: "Stock charts might look like crazy squiggly lines at first glance, but they're actually telling fascinating stories about how investors feel about different companies. Imagine if you could see a graph showing how popular your favorite video game was every single day - sometimes lots of people are playing it (high popularity), sometimes fewer people are interested (low popularity). Stock charts work similarly, showing us how much people are willing to pay for shares of a company over time. The most basic chart shows the stock price on the vertical line (y-axis) and time on the horizontal line (x-axis). When the line goes up, it means more people wanted to buy than sell, pushing the price higher. When it goes down, more people were selling than buying. But here's where it gets really interesting - charts can show different time periods, from minute-by-minute changes to decades of history. Young investors often benefit from looking at longer-term charts (months or years) rather than getting distracted by daily fluctuations. You'll also see volume bars at the bottom, which show how many shares were traded - think of it like measuring how many people were at a concert. High volume with rising prices suggests strong interest, while high volume with falling prices might indicate people are rushing for the exits. Moving averages smooth out the jagged lines to show overall trends, support and resistance levels indicate where prices tend to bounce, and patterns like 'head and shoulders' or 'cup and handle' can give clues about future direction. The secret sauce is learning to see the story behind the numbers rather than just focusing on whether today's price is higher or lower than yesterday's.",
      author: "Marcus Chen",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Chart Reading",
      trending: true,
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Bull vs Bear Markets: Animal Lessons for Young Investors",
      excerpt: "Ever wonder why Wall Street chose animals to describe market conditions? Picture a bull attacking - it thrusts its horns upward, symbolizing rising stock prices and optimistic investor sentiment. Now imagine a bear swiping down with its massive paws, representing falling prices and pessimistic attitudes. These aren't just cute animal nicknames; they represent fundamental cycles that have repeated throughout market history and will continue long into the future. Bull markets typically last much longer than bear markets - often several years of generally rising prices, growing company profits, low unemployment, and widespread economic confidence. During these periods, even mediocre investment decisions often work out well, leading some people to think investing is easy. But here's the thing about bull markets - they can make investors overconfident and careless, forgetting that markets don't go up forever. Bear markets, while scary and often lasting anywhere from a few months to a couple of years, actually serve important purposes: they clear out weak companies, reset overvalued prices to more reasonable levels, and remind everyone that risk is real. Smart young investors learn to prepare for both conditions rather than assuming current trends will continue indefinitely. During bull markets, they avoid getting caught up in the excitement and continue following disciplined strategies. During bear markets, they resist panic selling and often find opportunities to buy quality companies at discounted prices. History shows us that every bear market has eventually ended, followed by new bull markets that reach higher levels than before. Understanding these cycles helps young investors maintain perspective, make rational decisions, and avoid the emotional rollercoaster that destroys many people's financial plans.",
      author: "Jennifer Smith",
      date: "March 8, 2024",
      readTime: "9 min read",
      category: "Market Concepts",
      trending: false,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Dividend Stocks: How Companies Share Their Profits with Kids",
      excerpt: "Imagine owning a lemonade stand that not only becomes more valuable over time but also pays you cash every three months just for being an owner - that's essentially what dividend stocks offer investors. When profitable companies have more cash than they need for growth and operations, many choose to share some of those profits directly with shareholders through quarterly payments called dividends. It's like getting paid to own something that might also increase in value! Companies that consistently pay dividends are often well-established businesses with predictable income streams - think utilities that provide electricity, consumer goods companies that make everyday products, or telecommunications firms that provide essential services. These businesses have figured out how to generate steady profits year after year, and they reward loyal shareholders by sharing the wealth. For young investors, dividend stocks offer several advantages: they provide regular income that can be reinvested to buy more shares (compound growth), they tend to be less volatile than growth stocks, and they often represent companies with strong business models and experienced management teams. However, it's important to understand that dividend payments aren't guaranteed - companies can reduce or eliminate them during tough times. Also, some of the fastest-growing companies don't pay dividends because they prefer to reinvest all profits back into expanding their business. The key is finding the right balance based on your goals and timeline. Young investors with decades until retirement might prefer a mix of dividend-paying stocks for stability and growth stocks for higher potential returns. One strategy many financial advisors recommend is dividend reinvestment plans (DRIPs), where dividend payments automatically purchase additional shares, allowing the magic of compound growth to work its wonders over time.",
      author: "Priya Sharma",
      date: "March 5, 2024",
      readTime: "11 min read",
      category: "Dividends",
      trending: false,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Stock Market Vocabulary: Essential Terms Every Kid Should Know",
      excerpt: "Learning stock market terminology is like learning a new language - once you understand the basic words, everything else starts making sense. Let's start with 'market capitalization' or 'market cap,' which simply means the total value of all a company's shares. Calculate it by multiplying the stock price by the number of shares outstanding. A company with 1 million shares trading at $50 each has a $50 million market cap. Companies are often categorized as large-cap (over $10 billion), mid-cap ($2-10 billion), or small-cap (under $2 billion), with each category having different risk and growth characteristics. An 'IPO' (Initial Public Offering) is when a private company first sells shares to the public - imagine a bakery that's been family-owned deciding to let anyone buy ownership pieces. 'Volatility' measures how much a stock's price bounces around - high volatility means big price swings, while low volatility suggests steadier movement. Your 'portfolio' is simply the collection of all your investments, like a photo album but for stocks, bonds, and other assets. 'Diversification' means spreading investments across different companies, industries, and asset types to reduce risk - it's the 'don't put all your eggs in one basket' principle. 'P/E ratio' (Price-to-Earnings) compares a stock's price to the company's annual earnings per share, helping determine if a stock might be overpriced or undervalued. 'Yield' refers to the annual dividend payment divided by the stock price, showing how much income you're earning relative to your investment. Understanding these terms helps young investors communicate effectively, read financial news with confidence, and make more informed decisions about their money.",
      author: "Lisa Wang",
      date: "March 3, 2024",
      readTime: "7 min read",
      category: "Vocabulary",
      trending: false,
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Stock Market Games: Practice Investing Without Real Money",
      excerpt: "Before diving into real investing with actual money, smart young investors understand the importance of practice and preparation. Think about it - you wouldn't expect to become great at basketball without spending countless hours shooting hoops, and investing works the same way. Stock market simulation games provide the perfect training ground where kids can experiment with different investment strategies, learn from inevitable mistakes, and build genuine confidence without risking a single dollar of real money. These sophisticated platforms offer incredibly realistic market conditions, live real-time data feeds, and comprehensive educational resources that closely mirror actual trading experiences you'd find on Wall Street. Popular simulation platforms like Investopedia's Stock Market Game, MarketWatch Virtual Stock Exchange, and HowTheMarketWorks have created comprehensive learning environments where students can compete with classmates and friends, meticulously track their portfolio performance over time, and truly understand the wild swings of market volatility that can make or break real investors. Through these detailed simulations, young people absorb valuable lessons about thorough company research, market timing strategies, portfolio diversification techniques, and perhaps most importantly, the emotional control that separates successful long-term investors from those who panic and make costly mistakes. What makes these educational games particularly valuable is their unique ability to compress years of actual market experience into just weeks or months of intensive gameplay. Students can observe how their investment decisions play out across different market conditions - from bull market euphoria to bear market despair - while learning to interpret complex financial news, analyze quarterly earnings reports, and develop the mental discipline needed to stick with carefully planned long-term strategies even when short-term results are deeply disappointing. Many of these platforms also include comprehensive educational modules covering fundamental analysis techniques, technical indicator interpretation, and sophisticated portfolio management principles that professional money managers use daily. The competitive element adds genuine excitement and engagement while teaching crucial lessons about risk management - it's one thing to take big speculative gambles when you're trying to win a classroom competition, but quite another story when it's your actual college fund hanging in the balance.",
      author: "Arvind Vivekanandan",
      date: "February 28, 2024",
      readTime: "18 min read",
      category: "Practice Tools",
      trending: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Why Do Stock Prices Go Up and Down? Market Forces Explained",
      excerpt: "Understanding what actually makes stock prices move up and down is absolutely fundamental to becoming a successful investor, yet it's one of the most misunderstood aspects of the financial markets. Stock prices fluctuate due to an incredibly complex interplay of factors including basic supply and demand dynamics, detailed company performance metrics, broad economic indicators, and the often irrational swings of investor sentiment that can drive markets to extremes. At its most basic level, when significantly more people want to buy a particular stock than sell it, the price inevitably rises - and vice versa when selling pressure overwhelms buying interest. Company-specific factors like quarterly earnings reports, exciting new product launches, significant management changes, and evolving industry trends all dramatically influence investor confidence and subsequent buying decisions. External macroeconomic factors like Federal Reserve interest rate changes, major political events and policy announcements, crucial economic data releases, and global market conditions also create powerful ripple effects that impact individual stock prices. Additionally, investor psychology plays an enormous and often underestimated role in price movements - widespread fear can drive massive panic sell-offs during market downturns, while unbridled optimism and greed can fuel dangerous buying frenzies during bull market peaks. Learning to recognize these recurring patterns and understand natural market cycles helps young investors make informed, rational decisions rather than emotional ones that often lead to financial disaster. Economic indicators such as GDP growth rates, unemployment statistics, inflation data, and consumer confidence surveys provide valuable clues about the overall health and direction of the economy, which can influence broad market movements that affect virtually all stocks. Company-specific fundamental factors include quarterly earnings results, revenue growth trends, profit margin improvements or deterioration, debt level changes, competitive positioning shifts, and management quality assessments. Breaking news events, ranging from product recalls and safety concerns to breakthrough innovations and strategic partnerships, can cause dramatic short-term price movements that may or may not accurately reflect a company's long-term intrinsic value. Understanding these various influences and their relative importance helps investors separate temporary market noise from meaningful long-term trends, enabling better decisions about when to buy, confidently hold, or strategically sell their investments.",
      author: "Robert Johnson",
      date: "February 25, 2024",
      readTime: "20 min read",
      category: "Market Forces",
      trending: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1554224154-26032fbc4d72?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "Building Your First Portfolio: A Step-by-Step Guide for Kids",
      excerpt: "Creating a well-balanced investment portfolio is like carefully building a strong, durable foundation for your entire financial future - and just like constructing a house, every decision you make early on will impact everything that comes after. A portfolio is simply a thoughtfully curated collection of different investments that work together harmoniously to help grow your money over time while intelligently managing the inevitable risks that come with investing. The fundamental principle that guides all successful portfolio construction is diversification - strategically spreading your investments across different companies, various industries, and multiple types of assets so that if one particular investment performs poorly due to company-specific problems or industry challenges, other investments can help balance out those temporary losses and keep your overall returns on track. Young investors should begin this journey by honestly understanding their personal risk tolerance, realistic investment timeline, and specific financial goals for both the short and long term. A typical beginner portfolio designed for someone just starting their investment journey might include approximately 60-70% stock investments for substantial growth potential over decades, 20-30% bonds for stability and income during volatile periods, and about 10% in alternative assets like commodities, real estate investment trusts (REITs), or even cryptocurrency for additional diversification benefits. Within the crucial stock portion of your portfolio, seriously consider investing in broad-market index funds that automatically provide instant diversification across hundreds or even thousands of companies, established blue-chip stocks from well-known companies with long track records of success, and perhaps a smaller allocation to growth stocks from emerging industries that could deliver exceptional returns if they succeed. Remember that building a great portfolio isn't a one-time event but rather an ongoing process that requires regular review and periodic rebalancing as you grow older, your income changes, and your financial situation evolves over time. Asset allocation becomes absolutely crucial as you determine what specific percentage of your portfolio should be invested in stocks versus bonds versus other alternative investments. Your current age, personal risk tolerance, and time horizon until you need the money all factor heavily into these important allocation decisions. A common rule of thumb historically suggested subtracting your age from 100 to determine your appropriate stock allocation percentage, but many modern financial advisors now recommend more aggressive approaches for young investors who have decades to recover from any temporary setbacks. The incredible beauty of starting your investment journey young is that you can afford to take more calculated risks because you have literally decades ahead of you to recover from any short-term market downturns or individual investment mistakes.",
      author: "Sarah Mitchell",
      date: "February 22, 2024",
      readTime: "25 min read",
      category: "Portfolio Building",
      trending: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      title: "Stock Market History: Famous Crashes and Booms Kids Should Know",
      excerpt: "Learning about the major market events and dramatic turning points throughout financial history provides invaluable context for understanding how markets actually behave over long periods and helps young investors mentally prepare for the inevitable volatility that characterizes all financial markets. The stock market has experienced numerous dramatic ups and terrifying downs that have fundamentally shaped modern investing practices, regulatory frameworks, and investor psychology in ways that continue influencing markets today. The Great Depression starting in 1929 taught investors harsh lessons about the serious dangers of excessive speculation and buying stocks with borrowed money, ultimately leading to critically important regulatory changes like the Securities and Exchange Commission that still protect investors today. The dot-com bubble of the late 1990s provided a vivid demonstration of how investor enthusiasm for revolutionary new technology can create completely unsustainable price increases that inevitably crash back to reality when businesses fail to deliver promised profits. The devastating 2008 financial crisis showed how interconnected global financial markets can rapidly amplify relatively small problems across the entire world economy, creating widespread unemployment and economic hardship that lasted for years. More recently, the COVID-19 pandemic created both the fastest bear market decline in recorded history and one of the most surprising and strongest recoveries, demonstrating how quickly market sentiment can shift from extreme pessimism to renewed optimism. Each of these significant historical events offers crucial lessons that every investor should internalize: markets are naturally cyclical and what goes up will eventually come down, diversification across different asset classes and geographic regions really does matter during crisis periods, emotional investing based on fear or greed almost always leads to poor long-term results, and staying invested for extended periods generally rewards patient investors who can weather temporary storms. Understanding these recurring historical patterns helps young investors maintain proper perspective during inevitable market turbulence and make rational, evidence-based decisions rather than panicking like so many investors do when headlines turn scary. The 1929 crash happened after a dangerous period of excessive speculation, margin buying with borrowed money, and widespread belief that stock prices would continue rising forever, leading to a devastating collapse when reality finally set in and forced selling began. The dot-com bubble burst when investors gradually realized that many highly valued internet companies had no viable business models or realistic path to profitability despite their sky-high stock valuations. The 2008 crisis originated in the seemingly stable U.S. housing market but spread globally due to complex financial instruments that few people truly understood and interconnected banking systems that amplified problems worldwide. Each major crisis ultimately led to important reforms and new regulations specifically designed to prevent similar problems in the future, though new challenges and opportunities continue emerging as markets evolve with changing technology and economic conditions.",
      author: "Michael Davis",
      date: "February 20, 2024",
      readTime: "28 min read",
      category: "Market History",
      trending: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      title: "How to Research Stocks Like a Pro: Kid-Friendly Analysis Tips",
      excerpt: "Successful investing absolutely requires thorough, methodical research and careful analysis before making any significant investment decisions - this isn't gambling or guessing, but rather a learnable skill that separates consistently successful investors from those who simply follow trends, listen to hot tips, or make emotional decisions based on fear and greed. Learning to properly evaluate companies and their stocks is perhaps the most critical skill that distinguishes long-term winners from those who struggle to build wealth through investing. The research process should always start with thoroughly understanding exactly what the company does - their specific products and services, their target customers, how they actually make money, and what makes them different from competitors in their industry. Next, carefully examine the company's financial statements to determine if they're genuinely profitable, consistently growing their business, and managing their finances responsibly over multiple years rather than just one good quarter. Key financial metrics that young investors should learn to examine include revenue growth trends over several years, profit margin stability and improvement, total debt levels relative to company size, and return on equity which shows how effectively management uses shareholder money to generate profits. Always compare these important numbers to other companies in the same industry to understand relative performance and identify which companies are actually outperforming their competitors rather than just benefiting from industry-wide growth. Research the company's sustainable competitive advantages - often called 'economic moats' - which are the special characteristics that make them difficult for competitors to replicate or disrupt, such as strong brand recognition, proprietary technology, regulatory barriers, or network effects. Carefully consider the quality of management by examining their track record of delivering on promises, their strategic vision for future growth, their history of capital allocation decisions, and their communication style with shareholders. Read annual reports cover to cover, listen to quarterly earnings call transcripts to hear management discuss challenges and opportunities, and stay current with recent news about the company and its industry. Take advantage of excellent free resources like Yahoo Finance, Google Finance, Morningstar, and company investor relations websites that provide comprehensive financial data, analyst reports, and historical performance information. Remember that truly good research takes significant time, patience, and intellectual curiosity, but it forms the absolutely essential foundation of smart investing decisions that can compound into substantial wealth over decades. Always look for companies with demonstrably strong fundamental business metrics, durable competitive moats that protect against competition, and realistic long-term growth potential rather than chasing short-term price movements or following the latest investment fads. Financial ratios provide quantitative measures of company performance and relative valuation that help investors make objective comparisons. The price-to-earnings ratio compares current stock price to annual earnings per share, while the price-to-book ratio compares market value to accounting book value. Debt-to-equity ratios reveal how much the company relies on borrowed money versus shareholder equity, and return on equity measures how effectively the company converts shareholder investments into profits. Qualitative factors are equally important and include management quality and integrity, sustainable competitive positioning, brand strength and customer loyalty, and long-term industry trends that could help or hurt the business.",
      author: "Dr. Elena Rodriguez",
      date: "February 18, 2024",
      readTime: "30 min read",
      category: "Research Methods",
      trending: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    }
  ];

  const trendingArticles = allArticles.filter(article => article.trending);
  const regularArticles = allArticles.filter(article => !article.featured);
  const featuredArticles = allArticles.filter(article => article.featured);

  const categories = ["All", "Stock Market Basics", "Inspiration", "Chart Reading", "Market Concepts", "Dividends", "Vocabulary", "Stock Types", "Practice Tools", "Market Forces", "Portfolio Building", "Market History", "Research Methods"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Finance Learning Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master financial literacy and investment strategies through comprehensive guides and expert insights
            </p>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Trending Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {trendingArticles.map((article) => (
              <Link key={article.id} to={`/blog/${article.id}`}>
                <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      Trending
                    </Badge>
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {article.category}
                    </Badge>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

          {/* All Articles Section */}
          <section className="py-12 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-foreground mb-8">All Articles</h2>

              {/* Regular Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {regularArticles.map((article) => (
                  <Link key={article.id} to={`/blog/${article.id}`}>
                    <Card className="group hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div className="relative">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        {article.trending && (
                          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                            Trending
                          </Badge>
                        )}
                      </div>
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">
                          {article.category}
                        </Badge>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Featured In-Depth Articles */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Featured</Badge>
                  In-Depth Learning Articles
                </h3>
                {featuredArticles.map((article) => (
                  <Link key={article.id} to={`/blog/${article.id}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-background to-muted/30">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-64 md:h-full object-cover rounded-l-lg"
                          />
                        </div>
                        <div className="md:w-2/3 p-8">
                          <div className="flex items-center gap-2 mb-4">
                            <Badge variant="outline" className="border-primary text-primary">
                              {article.category}
                            </Badge>
                            <Badge className="bg-purple-100 text-purple-800">
                              Featured Article
                            </Badge>
                          </div>
                          <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                          <p className="text-muted-foreground mb-6 text-lg leading-relaxed line-clamp-4">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span className="font-medium">{article.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{article.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-primary font-medium">
                              <Clock className="h-4 w-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;