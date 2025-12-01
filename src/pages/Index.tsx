import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ThreePillars } from "@/components/ThreePillars";
import { WhyThisMatters } from "@/components/WhyThisMatters";
import { OriginStory } from "@/components/OriginStory";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ThreePillars />
        <WhyThisMatters />
        <OriginStory />
        
        {/* Quick Links Section */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">
              Quick Links
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Button variant="outline" size="lg" asChild className="h-auto py-6">
                <Link to="/the-case#commander-in-chief" className="flex flex-col items-start">
                  <span className="font-semibold text-lg">The Commander-in-Chief Argument</span>
                  <span className="text-sm text-muted-foreground mt-1">Mathematical proof for voting at 14</span>
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="h-auto py-6">
                <Link to="/objections" className="flex flex-col items-start">
                  <span className="font-semibold text-lg">Frequently Raised Objections</span>
                  <span className="text-sm text-muted-foreground mt-1">Answers to common concerns</span>
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="h-auto py-6">
                <Link to="/the-case#ranked-choice" className="flex flex-col items-start">
                  <span className="font-semibold text-lg">The Case for Ranked Choice</span>
                  <span className="text-sm text-muted-foreground mt-1">Why voting systems matter</span>
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="h-auto py-6">
                <Link to="/take-action" className="flex flex-col items-start">
                  <span className="font-semibold text-lg">Take Action</span>
                  <span className="text-sm text-muted-foreground mt-1">Join the movement today</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
