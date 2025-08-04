import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const [visibleArticles, setVisibleArticles] = useState(6);
  
  const allArticles = [
    {
      id: 1,
      title: "10 Simple Ways Kids Can Start Saving Money Today",
      excerpt: "Discover easy and fun methods for children to begin their savings journey with practical tips that work.",
      author: "Ishan Nallani",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Kids Finance",
      trending: true,
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "The Psychology of Money: Teaching Kids About Spending Habits",
      excerpt: "Understanding the mental aspects of money management and how to instill healthy financial behaviors early.",
      author: "Arvind Vivekanandan",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Psychology",
      trending: true,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Cryptocurrency for Beginners: A Parent's Guide",
      excerpt: "Everything parents need to know about digital currencies and how to discuss them with their children.",
      author: "Marcus Chen",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Technology",
      trending: true,
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Building Credit: A Teen's Complete Guide",
      excerpt: "Step-by-step instructions for teenagers to start building a positive credit history responsibly.",
      author: "Jennifer Smith",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Credit",
      trending: false,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "The Gig Economy: Teaching Teens About Modern Work",
      excerpt: "How to prepare teenagers for the changing landscape of work and entrepreneurship opportunities.",
      author: "Priya Sharma",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Career",
      trending: false,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Emergency Funds for Families: Getting Started",
      excerpt: "Creating a financial safety net for your family and teaching kids about financial preparedness.",
      author: "Lisa Wang",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Emergency Planning",
      trending: false,
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      title: "Investment Basics: Teaching Kids About the Stock Market",
      excerpt: "Age-appropriate ways to introduce children to investing concepts and market fundamentals.",
      author: "Ishan Nallani",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Investing",
      trending: false,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      title: "Financial Planning for Single Parents",
      excerpt: "Strategies for managing finances and teaching money skills as a single parent household.",
      author: "Arvind Vivekanandan",
      date: "February 28, 2024",
      readTime: "11 min read",
      category: "Family Finance",
      trending: false,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      title: "Teaching Teenagers About Taxes and Income",
      excerpt: "Help your teen understand tax basics, filing requirements, and income management.",
      author: "Robert Johnson",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Taxes",
      trending: false,
      image: "https://images.unsplash.com/photo-1554224154-26032fbc4d72?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      title: "Digital Banking Safety for Kids and Teens",
      excerpt: "Essential cybersecurity practices for young people using online banking and financial apps.",
      author: "Sarah Mitchell",
      date: "February 22, 2024",
      readTime: "6 min read",
      category: "Digital Safety",
      trending: false,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      title: "College Savings Plans: 529 vs Other Options",
      excerpt: "Compare different college savings strategies and help your child understand education funding.",
      author: "Michael Davis",
      date: "February 20, 2024",
      readTime: "10 min read",
      category: "Education Finance",
      trending: false,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      title: "Teaching Kids About Global Economics",
      excerpt: "Help children understand how world events affect personal finances and local economies.",
      author: "Dr. Elena Rodriguez",
      date: "February 18, 2024",
      readTime: "7 min read",
      category: "Economics",
      trending: false,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    }
  ];

  const trendingArticles = allArticles.filter(article => article.trending);
  const displayedArticles = allArticles.slice(0, visibleArticles);

  const loadMoreArticles = () => {
    setVisibleArticles(prev => Math.min(prev + 6, allArticles.length));
  };

  const categories = ["All", "Kids Finance", "Psychology", "Technology", "Credit", "Career", "Emergency Planning", "Investing", "Family Finance", "Taxes", "Digital Safety", "Education Finance", "Economics"];

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
              Stay updated with the latest trends, tips, and insights in financial education for families
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
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant="outline" 
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((article) => (
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

          {visibleArticles < allArticles.length && (
            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={loadMoreArticles}>
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;