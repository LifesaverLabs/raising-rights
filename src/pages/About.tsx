import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              About Us
            </h1>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="civic-card">
              <h2 className="text-3xl font-serif font-bold mb-6">Mission Statement</h2>
              <p className="text-lg leading-relaxed">
                Raising Rights advocates for extending the franchise to young Americans at age 14, paired with 
                ranked choice voting and civic education that prepares them for thoughtful participation. We 
                believe democracy is strengthened when those who bear the consequences of decisions have a voice 
                in making them.
              </p>
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">Our Principles</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="civic-card">
                <h3 className="text-xl font-serif font-bold mb-3 text-civic-green">
                  Preparation, not gatekeeping
                </h3>
                <p className="text-muted-foreground">
                  Education to build capacity, not tests to restrict access
                </p>
              </div>

              <div className="civic-card">
                <h3 className="text-xl font-serif font-bold mb-3 text-civic-amber">
                  True preference expression
                </h3>
                <p className="text-muted-foreground">
                  Voting systems that let citizens express what they actually want
                </p>
              </div>

              <div className="civic-card">
                <h3 className="text-xl font-serif font-bold mb-3 text-primary">
                  Service as citizenship
                </h3>
                <p className="text-muted-foreground">
                  Active contribution as a complement to electoral participation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Organizations */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">
              Connection to Partner Organizations
            </h2>
            
            <div className="civic-card">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">StudentVote.us</h3>
                  <p className="text-muted-foreground mb-3">
                    Student-led voting engagement and civic participation platform.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href="https://studentvote.us" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      Visit StudentVote.us
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">Contact</h2>
            <div className="civic-card max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                For press inquiries, speaking requests, or general questions:
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:contact@raisingrights.org">
                  contact@raisingrights.org
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
