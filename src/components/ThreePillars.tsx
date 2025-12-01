import { Link } from "react-router-dom";
import { BookOpen, Vote, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: BookOpen,
    title: "Learning Rites",
    description: "Civic education curriculum preparing 11-14 year olds for thoughtful participation",
    href: "/the-case#learning-rites",
    color: "text-civic-blue",
  },
  {
    icon: Vote,
    title: "Voting Rites",
    description: "The case for suffrage at 14 and meaningful choice through ranked voting",
    href: "/the-case",
    color: "text-civic-green",
  },
  {
    icon: Heart,
    title: "Service Rites",
    description: "Training in CPR, first aid, and civic service as rites of passage",
    href: "/the-case#service-rites",
    color: "text-civic-amber",
  },
];

export const ThreePillars = () => {
  return (
    <section className="py-20 bg-muted/30" id="overview">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
          The Three Pillars
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title}
              className="civic-card hover-lift flex flex-col"
            >
              <pillar.icon className={`h-12 w-12 mb-4 ${pillar.color}`} />
              <h3 className="text-2xl font-serif font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                {pillar.description}
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to={pillar.href}>
                  Explore →
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
