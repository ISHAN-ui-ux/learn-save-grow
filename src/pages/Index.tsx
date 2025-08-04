import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LearningSection from "@/components/LearningSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LearningSection />
      <ToolsSection />
      <Footer />
    </div>
  );
};

export default Index;
