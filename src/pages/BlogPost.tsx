import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/components/ui/use-toast";

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();

  const blogPosts = {
    "1": {
      id: 1,
      title: "10 Simple Ways Kids Can Start Saving Money Today",
      content: `
        <h2>Why Teaching Kids to Save Early Matters</h2>
        <p>Financial literacy is one of the most valuable life skills we can teach our children. Starting early creates habits that will benefit them throughout their lives. Research shows that children who learn about money management before age 10 are more likely to be financially responsible adults.</p>
        
        <h2>1. The Classic Piggy Bank Method</h2>
        <p>Start with the basics - a traditional piggy bank. This tangible method helps young children understand the concept of accumulating money over time. Let them decorate their own piggy bank to make it personal and exciting.</p>
        
        <h2>2. Create Visual Savings Goals</h2>
        <p>Children respond well to visual cues. Create a chart or thermometer showing their progress toward a specific goal, like buying a new toy or game. This makes saving concrete and rewarding.</p>
        
        <h2>3. Implement the 50/30/20 Rule for Kids</h2>
        <p>Adapt the popular budgeting rule for children: 50% for spending, 30% for saving, and 20% for giving or sharing. This teaches balanced money management from an early age.</p>
        
        <h2>4. Start a Lemonade Stand Business</h2>
        <p>Encourage entrepreneurship with a simple business like a lemonade stand. This teaches kids about earning money, calculating profits, and the value of hard work.</p>
        
        <h2>5. Open a Real Savings Account</h2>
        <p>Many banks offer special savings accounts for children. Take your child to the bank, let them speak with the teller, and watch their excitement as they make their first deposit.</p>
        
        <h2>6. Use Technology Wisely</h2>
        <p>Kid-friendly apps like PiggyBot or Savings Spree can make saving fun and interactive. These tools teach digital money management while keeping children engaged.</p>
        
        <h2>7. Reward Systems and Matching</h2>
        <p>Create a system where you match their savings, similar to a 401(k) match. For every dollar they save, you add 25 cents. This incentivizes saving behavior.</p>
        
        <h2>8. Teach Through Real-Life Examples</h2>
        <p>Involve children in family financial decisions appropriate for their age. Explain why you save for vacations, emergency funds, or large purchases.</p>
        
        <h2>9. Make It a Family Activity</h2>
        <p>Have regular family meetings about money. Share age-appropriate financial goals and celebrate when savings milestones are reached together.</p>
        
        <h2>10. Lead by Example</h2>
        <p>Children learn more from what they see than what they hear. Demonstrate good saving habits in your own life, and explain your financial decisions when appropriate.</p>
        
        <h2>Conclusion</h2>
        <p>Starting these habits early sets the foundation for a lifetime of financial success. Remember, the goal isn't just to save money, but to understand the value of money and develop healthy financial habits that will serve them well into adulthood.</p>
      `,
      author: "Ishan Nallani",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Kids Finance",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop"
    },
    "2": {
      id: 2,
      title: "The Psychology of Money: Teaching Kids About Spending Habits",
      content: `
        <h2>Understanding the Mental Side of Money</h2>
        <p>Money management isn't just about math—it's deeply psychological. Our relationship with money is shaped by emotions, experiences, and learned behaviors. Teaching children about the psychology of money helps them develop healthier financial habits and avoid common psychological traps.</p>
        
        <h2>The Instant Gratification Challenge</h2>
        <p>In today's world of one-click purchases and immediate delivery, children are constantly exposed to instant gratification. The famous Stanford Marshmallow Experiment demonstrated that children who could delay gratification were more successful later in life. We can apply this principle to money management.</p>
        
        <h2>Emotional Spending Patterns</h2>
        <p>Help children identify when they want to buy something based on emotions rather than need. Common emotional triggers include:</p>
        <ul>
          <li>Boredom shopping</li>
          <li>Peer pressure purchases</li>
          <li>Reward spending after achievements</li>
          <li>Stress or comfort buying</li>
        </ul>
        
        <h2>The Scarcity vs. Abundance Mindset</h2>
        <p>Children who grow up with a scarcity mindset often develop unhealthy relationships with money, either becoming overly frugal or spending impulsively when they have money. Teaching an abundance mindset—that there are always opportunities to earn and save—creates healthier financial behaviors.</p>
        
        <h2>Social Influences on Spending</h2>
        <p>Peer pressure significantly impacts children's spending decisions. Teach them to:</p>
        <ul>
          <li>Recognize when they're being influenced by others</li>
          <li>Make independent financial decisions</li>
          <li>Understand that financial situations vary between families</li>
          <li>Value experiences over material possessions</li>
        </ul>
        
        <h2>Building Financial Confidence</h2>
        <p>Children need to feel confident about their financial decisions. This comes through practice, education, and positive reinforcement when they make good choices. Create opportunities for them to make money decisions in safe environments.</p>
        
        <h2>The Role of Marketing</h2>
        <p>Teach children to recognize marketing tactics designed to influence their spending. Help them understand how advertisements work and develop critical thinking skills about consumer messages.</p>
        
        <h2>Creating Positive Money Associations</h2>
        <p>Money should be associated with security, opportunity, and freedom—not stress or conflict. Maintain positive conversations about money in your household and avoid using money as a weapon in arguments or punishments.</p>
        
        <h2>Practical Applications</h2>
        <p>Implement these psychological principles through:</p>
        <ul>
          <li>Role-playing spending scenarios</li>
          <li>Discussing money decisions openly</li>
          <li>Celebrating wise financial choices</li>
          <li>Teaching meditation or reflection before purchases</li>
        </ul>
        
        <h2>Long-term Impact</h2>
        <p>Understanding the psychology of money helps children develop emotional intelligence around financial decisions. This foundation will serve them well as they navigate increasingly complex financial choices throughout their lives.</p>
      `,
      author: "Arvind Vivekanandan",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
    },
    "3": {
      id: 3,
      title: "Cryptocurrency for Beginners: A Parent's Guide",
      content: `
        <h2>Understanding Digital Currency in the Modern World</h2>
        <p>Cryptocurrency has become a significant part of the financial landscape, and children are increasingly curious about digital money. As parents, it's important to understand these technologies so we can guide our children appropriately.</p>
        
        <h2>What is Cryptocurrency?</h2>
        <p>Cryptocurrency is digital money that exists only electronically. Unlike traditional money, it's not controlled by any government or bank. Instead, it uses technology called blockchain to keep track of transactions and ensure security.</p>
        
        <h2>Key Concepts to Explain to Kids</h2>
        <h3>Digital Wallets</h3>
        <p>Think of a digital wallet like a virtual piggy bank. It stores cryptocurrency securely and allows you to send or receive digital money.</p>
        
        <h3>Blockchain Technology</h3>
        <p>Imagine a notebook that everyone can see but no one can erase or change. That's essentially how blockchain works—it keeps a permanent record of all transactions.</p>
        
        <h3>Mining</h3>
        <p>Cryptocurrency mining is like solving complex puzzles to verify transactions and earn new digital coins as a reward.</p>
        
        <h2>Popular Cryptocurrencies</h2>
        <ul>
          <li><strong>Bitcoin (BTC):</strong> The first and most well-known cryptocurrency</li>
          <li><strong>Ethereum (ETH):</strong> A platform that supports smart contracts and applications</li>
          <li><strong>Dogecoin (DOGE):</strong> Originally created as a joke but gained serious popularity</li>
        </ul>
        
        <h2>Benefits and Opportunities</h2>
        <h3>Financial Innovation</h3>
        <p>Cryptocurrency represents innovation in how we think about and use money. It can teach children about technology, economics, and global finance.</p>
        
        <h3>Accessibility</h3>
        <p>Digital currencies can provide financial services to people who don't have access to traditional banking.</p>
        
        <h3>Learning Opportunities</h3>
        <p>Understanding cryptocurrency helps children prepare for a future where digital finance will be even more prevalent.</p>
        
        <h2>Risks and Concerns</h2>
        <h3>Volatility</h3>
        <p>Cryptocurrency prices can change dramatically in short periods. What's worth $100 today might be worth $50 or $150 tomorrow.</p>
        
        <h3>Security Risks</h3>
        <p>Digital wallets can be hacked, and if you lose access to your wallet, your cryptocurrency is gone forever.</p>
        
        <h3>Regulatory Uncertainty</h3>
        <p>Governments are still figuring out how to regulate cryptocurrency, which creates uncertainty about its future.</p>
        
        <h2>Age-Appropriate Teaching Strategies</h2>
        <h3>Ages 8-12: Basic Concepts</h3>
        <ul>
          <li>Explain digital money as money that exists on computers</li>
          <li>Use analogies like virtual game currency</li>
          <li>Focus on the technology being innovative</li>
        </ul>
        
        <h3>Ages 13-17: Deeper Understanding</h3>
        <ul>
          <li>Discuss investment principles and risk</li>
          <li>Explore the technology behind blockchain</li>
          <li>Analyze real market examples</li>
        </ul>
        
        <h2>Practical Guidelines for Parents</h2>
        <ol>
          <li>Start with traditional financial literacy before introducing cryptocurrency</li>
          <li>Use small amounts for educational purposes only</li>
          <li>Emphasize that cryptocurrency is highly risky</li>
          <li>Focus on understanding the technology, not just potential profits</li>
          <li>Stay informed about developments and regulations</li>
        </ol>
        
        <h2>The Future of Digital Finance</h2>
        <p>As digital currencies continue to evolve, they'll likely become more integrated into everyday financial life. Preparing our children with knowledge and critical thinking skills will help them navigate this digital financial future responsibly.</p>
        
        <h2>Conclusion</h2>
        <p>Cryptocurrency education should be part of a comprehensive financial literacy program. While it's important to understand these technologies, they should never replace fundamental money management skills like budgeting, saving, and investing in diversified portfolios.</p>
      `,
      author: "Marcus Chen",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=800&h=400&fit=crop"
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-2xl font-bold">Article Not Found</h1>
          <Link to="/blog">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Article link has been copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <article className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Author and metadata */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-8">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <BookmarkPlus className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="mr-2 h-4 w-4" />
                  Save for Later
                </Button>
              </div>
              <Link to="/blog">
                <Button variant="default">
                  Read More Articles
                </Button>
              </Link>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;