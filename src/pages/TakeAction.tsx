import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Mail, Users, BookOpen, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TakeAction = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for joining!",
      description: "We'll be in touch soon with ways to get involved.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Take Action
            </h1>
            <p className="text-2xl text-muted-foreground font-serif italic">
              Rights are won by those who demand them.
            </p>
          </div>
        </section>

        {/* Join the Movement */}
        <section className="py-20">
          <div className="container max-w-2xl">
            <div className="civic-card">
              <Mail className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-4">Join the Movement</h2>
              <p className="text-muted-foreground mb-6">
                Sign up to receive updates, advocacy materials, and opportunities to get involved.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Join Now
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Action Cards */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Download Toolkit */}
              <div className="civic-card hover-lift">
                <Download className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-3">Download the Toolkit</h3>
                <p className="text-muted-foreground mb-6">
                  Get advocacy materials, talking points, social media graphics, and letter templates.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </div>

              {/* Start a Chapter */}
              <div className="civic-card hover-lift">
                <Users className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-3">Start a Chapter</h3>
                <p className="text-muted-foreground mb-6">
                  Bring Raising Rights to your school or community with our chapter starter guide.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </div>

              {/* Host a Workshop */}
              <div className="civic-card hover-lift">
                <BookOpen className="h-10 w-10 text-civic-blue mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-3">Host a Learning Rites Workshop</h3>
                <p className="text-muted-foreground mb-6">
                  Use our facilitator guides and materials to run civic education workshops.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </div>

              {/* Request a Speaker */}
              <div className="civic-card hover-lift">
                <MessageSquare className="h-10 w-10 text-civic-green mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-3">Request a Speaker</h3>
                <p className="text-muted-foreground mb-6">
                  Invite Raising Rights advocates to speak at your school, organization, or event.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Representatives */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">Contact Your Representatives</h2>
              <p className="text-lg text-muted-foreground">
                Tell your elected officials why this matters to you.
              </p>
            </div>

            <div className="civic-card">
              <p className="text-lg mb-6">
                Representative lookup and pre-drafted email templates coming soon. In the meantime, you can 
                find your representatives at:
              </p>
              <div className="flex flex-col gap-3">
                <Button variant="outline" asChild>
                  <a 
                    href="https://www.house.gov/representatives/find-your-representative" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Find Your U.S. Representative
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://www.senate.gov/senators/senators-contact.htm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Find Your U.S. Senators
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TakeAction;
