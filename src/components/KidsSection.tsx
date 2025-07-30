import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Gift, PiggyBank, Star } from "lucide-react";

const KidsSection = () => {
  return (
    <section id="kids" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-kids bg-clip-text text-transparent">Fun Money Learning</span>
            <br />
            for Young Heroes! 🦸‍♀️
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn learning about money into an exciting adventure with games, rewards, and easy-to-understand lessons!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                <PiggyBank className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-kids-primary">Smart Saving</CardTitle>
              <CardDescription>Learn why saving money is like collecting superpowers!</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Set fun savings goals</li>
                <li>• Track your piggy bank</li>
                <li>• Earn reward badges</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-kids-primary">Smart Spending</CardTitle>
              <CardDescription>Discover the difference between wants and needs!</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fun spending games</li>
                <li>• Learn about choices</li>
                <li>• Budget like a pro</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                <Gamepad2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-kids-primary">Money Games</CardTitle>
              <CardDescription>Play your way to becoming a money master!</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Interactive money games</li>
                <li>• Challenge friends</li>
                <li>• Win awesome badges</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-kids-accent/20 hover:border-kids-accent/40 transition-all duration-300 hover:scale-105">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-kids rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-kids-primary">Goal Setting</CardTitle>
              <CardDescription>Dream big and make it happen with smart goals!</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Set dream goals</li>
                <li>• Track your progress</li>
                <li>• Celebrate victories</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="kids" size="xl" className="group">
            Start Your Money Adventure! 🚀
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KidsSection;