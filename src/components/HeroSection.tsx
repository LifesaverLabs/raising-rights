import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToOverview = () => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Content */}
      <div className="container relative z-10 text-center space-y-8 py-20">
        <div className="space-y-6">
          <div className="relative h-32 flex items-center justify-center">
            <h1 className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl font-serif font-bold">
              Raising <span className="hero-word-rights ml-3">Rights</span>
              <span className="hero-word-rites ml-3 absolute">Rites</span>
              <span className="hero-word-wrights ml-3 absolute">Wrights</span>
            </h1>
          </div>
          
          <p className="text-2xl md:text-3xl font-serif text-muted-foreground">
            Designing the Future Together
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            <span className="text-civic-blue font-semibold">Rights</span> to vote.{" "}
            <span className="text-civic-green font-semibold">Rites</span> of civic passage.{" "}
            <span className="text-civic-amber font-semibold">Wrights</span> who build democracy.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            onClick={scrollToOverview}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Learn the Case
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = '/take-action'}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Join the Movement
          </Button>
        </div>
      </div>
    </section>
  );
};
