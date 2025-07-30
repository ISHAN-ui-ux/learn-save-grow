import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import KidsSection from "@/components/KidsSection";
import AdultsSection from "@/components/AdultsSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <KidsSection />
      <AdultsSection />
      <ToolsSection />
      <Footer />
    </div>
  );
};

export default Index;
