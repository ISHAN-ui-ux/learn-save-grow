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
      excerpt: "Learn the basics of the stock market in simple terms that kids can understand, from what stocks are to how companies raise money.",
      author: "Ishan Nallani",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Stock Market Basics",
      trending: true,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Famous Young Investors: Kids Who Started Early",
      excerpt: "Inspiring stories of young people who began investing as children and what we can learn from their journeys.",
      author: "Arvind Vivekanandan",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Inspiration",
      trending: true,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "How to Read Stock Charts: A Visual Guide for Kids",
      excerpt: "Simple explanations of stock charts, graphs, and what all those lines and numbers mean in kid-friendly language.",
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
      excerpt: "Understanding market cycles through fun animal analogies that help kids remember important investing concepts.",
      author: "Jennifer Smith",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Market Concepts",
      trending: false,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Dividend Stocks: How Companies Share Their Profits with Kids",
      excerpt: "Learn about dividend stocks and how some companies pay investors regular money, just like allowance for owning their stock.",
      author: "Priya Sharma",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Dividends",
      trending: false,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Stock Market Vocabulary: Essential Terms Every Kid Should Know",
      excerpt: "Build your stock market vocabulary with fun definitions of important terms like IPO, portfolio, and market cap.",
      author: "Lisa Wang",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Vocabulary",
      trending: false,
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Tech Stocks vs Traditional Stocks: What's the Difference?",
      excerpt: "Compare technology companies with traditional businesses and learn why some stocks grow faster than others.",
      author: "Ishan Nallani",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Stock Types",
      trending: false,
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Stock Market Games: Practice Investing Without Real Money",
      excerpt: "Before diving into real investing with actual money, it's crucial for young investors to practice and learn the ropes. Stock market simulation games provide the perfect environment for kids to experiment with different investment strategies, learn from mistakes, and build confidence without any financial risk. These platforms offer realistic market conditions, real-time data, and educational resources that mirror actual trading experiences. Popular games like Investopedia's Stock Market Game, MarketWatch Virtual Stock Exchange, and HowTheMarketWorks provide comprehensive learning environments where students can compete with friends, track their portfolio performance, and understand market volatility. Through these simulations, kids learn valuable lessons about research, timing, diversification, and emotional control that are essential for successful investing.",
      author: "Arvind Vivekanandan",
      date: "February 28, 2024",
      readTime: "15 min read",
      category: "Practice Tools",
      trending: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Why Do Stock Prices Go Up and Down? Market Forces Explained",
      excerpt: "Understanding what makes stock prices move is fundamental to becoming a successful investor. Stock prices fluctuate due to a complex interplay of factors including supply and demand, company performance, economic indicators, and investor sentiment. When more people want to buy a stock than sell it, the price goes up - and vice versa. Company earnings reports, new product launches, management changes, and industry trends all influence investor confidence and buying decisions. External factors like interest rate changes, political events, economic data releases, and global market conditions also impact stock prices. Additionally, investor psychology plays a huge role - fear can drive massive sell-offs during market downturns, while optimism can fuel buying frenzies during bull markets. Learning to recognize these patterns and understand market cycles helps young investors make informed decisions rather than emotional ones.",
      author: "Robert Johnson",
      date: "February 25, 2024",
      readTime: "12 min read",
      category: "Market Forces",
      trending: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1554224154-26032fbc4d72?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "Building Your First Portfolio: A Step-by-Step Guide for Kids",
      excerpt: "Creating a well-balanced investment portfolio is like building a strong foundation for your financial future. A portfolio is simply a collection of different investments that work together to help grow your money while managing risk. The key principle is diversification - spreading your investments across different companies, industries, and types of assets so that if one investment performs poorly, others can help balance it out. Young investors should start by understanding their risk tolerance, investment timeline, and financial goals. A typical beginner portfolio might include 60-70% stock investments for growth potential, 20-30% bonds for stability, and 10% in other assets like commodities or real estate investment trusts (REITs). Within the stock portion, consider investing in index funds that automatically diversify across hundreds of companies, blue-chip stocks from established companies, and perhaps a small allocation to growth stocks from emerging industries. Remember to regularly review and rebalance your portfolio as you grow older and your financial situation changes.",
      author: "Sarah Mitchell",
      date: "February 22, 2024",
      readTime: "18 min read",
      category: "Portfolio Building",
      trending: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      title: "Stock Market History: Famous Crashes and Booms Kids Should Know",
      excerpt: "Learning about major market events throughout history provides valuable context for understanding how markets behave and helps young investors prepare for future volatility. The stock market has experienced numerous dramatic ups and downs that have shaped modern investing. The Great Depression of 1929 taught us about the dangers of speculation and led to important regulatory changes. The dot-com bubble of the late 1990s showed how investor enthusiasm for new technology can create unsustainable price increases. The 2008 financial crisis demonstrated how interconnected global markets can amplify problems across the entire economy. More recently, the COVID-19 pandemic created both the fastest bear market in history and one of the strongest recoveries. Each of these events offers important lessons: markets are cyclical, diversification matters, emotional investing often leads to poor decisions, and staying invested for the long term generally rewards patient investors. Understanding these historical patterns helps young investors maintain perspective during market turbulence and make rational decisions based on evidence rather than fear or greed.",
      author: "Michael Davis",
      date: "February 20, 2024",
      readTime: "20 min read",
      category: "Market History",
      trending: false,
      featured: true,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      title: "How to Research Stocks Like a Pro: Kid-Friendly Analysis Tips",
      excerpt: "Successful investing requires thorough research and analysis before making any investment decisions. Learning to evaluate companies and stocks is a critical skill that separates successful investors from those who simply guess or follow trends. Start by understanding what the company does - their products, services, and how they make money. Look at financial statements to see if the company is profitable and growing. Key metrics to examine include revenue growth, profit margins, debt levels, and return on equity. Compare these numbers to other companies in the same industry to understand relative performance. Research the company's competitive advantages - what makes them special or different from competitors? Consider the quality of management, their track record, and strategic vision. Read annual reports, earnings call transcripts, and recent news about the company. Use free resources like Yahoo Finance, Google Finance, and company investor relations websites. Remember that good research takes time and patience, but it's the foundation of smart investing decisions. Always look for companies with strong fundamentals, competitive moats, and long-term growth potential rather than chasing short-term price movements.",
      author: "Dr. Elena Rodriguez",
      date: "February 18, 2024",
      readTime: "22 min read",
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
              Stock Market Learning Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn about the stock market, investing, and building wealth through kid-friendly articles and guides
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