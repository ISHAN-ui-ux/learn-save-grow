import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">$</span>
              </div>
              <span className="text-xl font-bold">MoneyMatrix</span>
            </div>
            <p className="text-background/70">
              Making financial education accessible and fun for everyone, from kids to adults.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* For Kids */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Kids</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Money Games</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Savings Tracker</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Goal Setting</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Fun Lessons</a></li>
            </ul>
          </div>

          {/* For Adults */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Adults</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Budget Planner</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Investment Tools</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Debt Management</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Financial Analytics</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70">
            © 2024 MoneyMatrix. All rights reserved. Building financial literacy one person at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;