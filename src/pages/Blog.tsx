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
      excerpt: "Discover fun online games and simulations where kids can practice investing with virtual money before using real cash.",
      author: "Arvind Vivekanandan",
      date: "February 28, 2024",
      readTime: "11 min read",
      category: "Practice Tools",
      trending: false,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Why Do Stock Prices Go Up and Down? Market Forces Explained",
      excerpt: "Simple explanations of supply and demand, news events, and other factors that make stock prices change every day.",
      author: "Robert Johnson",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Market Forces",
      trending: false,
      image: "https://images.unsplash.com/photo-1554224154-26032fbc4d72?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "Building Your First Portfolio: A Step-by-Step Guide for Kids",
      excerpt: "Learn how to create a balanced portfolio with different types of stocks and investments that grow over time.",
      author: "Sarah Mitchell",
      date: "February 22, 2024",
      readTime: "6 min read",
      category: "Portfolio Building",
      trending: false,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      title: "Stock Market History: Famous Crashes and Booms Kids Should Know",
      excerpt: "Learn about important events in stock market history and what they teach us about investing for the long term.",
      author: "Michael Davis",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Market History",
      trending: false,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      title: "How to Research Stocks Like a Pro: Kid-Friendly Analysis Tips",
      excerpt: "Simple methods for researching companies and stocks that even young investors can use to make smart decisions.",
      author: "Dr. Elena Rodriguez",
      date: "February 18, 2024",
      readTime: "7 min read",
      category: "Research Methods",
      trending: false,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    }
  ];

  const trendingArticles = allArticles.filter(article => article.trending);

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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article) => (
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;