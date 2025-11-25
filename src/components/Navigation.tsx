import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Small delay to ensure page loads before scrolling
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary border border-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">$</span>
            </div>
            <span className="text-xl font-bold text-foreground">FinWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleHomeNavigation('learning')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Learning
            </button>
            <button 
              onClick={() => handleHomeNavigation('tools')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Tools
            </button>
            <Link to="/chat" className="text-foreground hover:text-primary transition-colors">
              Chat
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/chat')}>Sign In</Button>
            <Button variant="default" onClick={() => handleHomeNavigation('learning')}>Get Started</Button>
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
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleHomeNavigation('learning');
                }}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Learning
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  handleHomeNavigation('tools');
                }}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Tools
              </button>
              <Link 
                to="/chat" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Chat
              </Link>
              <Link 
                to="/blog" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start" onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/chat');
                }}>Sign In</Button>
                <Button variant="default" className="justify-start" onClick={() => {
                  setIsMenuOpen(false);
                  handleHomeNavigation('learning');
                }}>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;