import { Button } from "@/components/ui/button";
import { ArrowDown, Vote, Users, Scale } from "lucide-react";
import heroImage from "@/assets/hero-youth-voting.jpg";

export const HeroSection = () => {
  const scrollToOverview = () => {
    document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10">
          <Vote className="w-24 h-24 text-rights-blue" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Users className="w-24 h-24 text-rites-green" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-10">
          <Scale className="w-20 h-20 text-wrights-amber" />
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 text-center space-y-8 py-20">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold flex items-center justify-center gap-3">
            Raising 
            <span className="relative inline-block min-w-[200px] md:min-w-[280px]">
              <span className="hero-word-rights absolute left-0 top-0">Rights</span>
              <span className="hero-word-rites absolute left-0 top-0">Rites</span>
              <span className="hero-word-wrights absolute left-0 top-0">Wrights</span>
              <span className="invisible">Rights</span>
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-serif text-muted-foreground">
            Youth Suffrage: Designing the Future Together
          </p>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground">
              <span className="text-civic-blue font-semibold">Rights</span> to vote.{" "}
              <span className="text-civic-green font-semibold">Rites</span> of civic passage.{" "}
              <span className="text-civic-amber font-semibold">Wrights</span> who build democracy.
            </p>
            
            <p className="text-xl md:text-2xl font-semibold text-primary mb-2">
              Suffering demands suffrage.
            </p>
            
            <p className="text-base md:text-lg text-foreground/80 italic border-l-4 border-primary pl-4 py-2">
              Those who bear the long-term consequences deserve a voice in shaping them.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button 
            size="lg" 
            onClick={scrollToOverview}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
          >
            Learn the Case
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = '/take-action'}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all"
          >
            Join the Movement
          </Button>
        </div>
      </div>
    </section>
  );
};
