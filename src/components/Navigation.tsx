import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">$</span>
            </div>
            <span className="text-xl font-bold text-foreground">FinanceKids</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#kids" className="text-foreground hover:text-primary transition-colors">
              For Kids
            </a>
            <a href="#adults" className="text-foreground hover:text-primary transition-colors">
              For Adults
            </a>
            <a href="#tools" className="text-foreground hover:text-primary transition-colors">
              Tools
            </a>
            <a href="/chat" className="text-foreground hover:text-primary transition-colors">
              Chat
            </a>
            <a href="#learn" className="text-foreground hover:text-primary transition-colors">
              Learn
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="default">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#kids" className="text-foreground hover:text-primary transition-colors">
                For Kids
              </a>
              <a href="#adults" className="text-foreground hover:text-primary transition-colors">
                For Adults
              </a>
              <a href="#tools" className="text-foreground hover:text-primary transition-colors">
                Tools
              </a>
              <a href="/chat" className="text-foreground hover:text-primary transition-colors">
                Chat
              </a>
              <a href="#learn" className="text-foreground hover:text-primary transition-colors">
                Learn
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button variant="default" className="justify-start">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;