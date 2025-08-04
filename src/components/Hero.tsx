import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Target, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-subtle flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-20 h-20 bg-growth-green rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-trust-blue rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-kids-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-kids-secondary rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Make Money
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart</span>
            <br />
            for Everyone
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Financial education and tools designed for both kids learning their first lessons and adults mastering their money.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group" onClick={() => document.getElementById('learning')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Tools
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">For All Ages</h3>
              <p className="text-muted-foreground">From 5 to 95, everyone can learn</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <Target className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Goal-Focused</h3>
              <p className="text-muted-foreground">Set and achieve financial milestones</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <DollarSign className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Real Results</h3>
              <p className="text-muted-foreground">Build lasting money habits</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;