import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const OriginStory = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8">
          The Origin Story
        </h2>
        
        <div className="civic-card">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              This movement crystallized after Parkland. In February 2018, students who survived a mass 
              shooting spoke with extraordinary clarity about gun policy. They were articulate, informed, 
              and passionate. They commanded media attention—temporarily.
            </p>
            
            {isExpanded && (
              <>
                <p>
                  But attention fades. What lasts is electoral power. Those students lacked the one thing 
                  that would have made politicians listen permanently: the vote.
                </p>
                
                <p className="text-xl font-semibold text-primary italic border-l-4 border-primary pl-4">
                  "They listened to us for a few weeks because cameras were there. They would listen to 
                  us forever if ballots were there."
                </p>
                
                <p>
                  We aim to change that—not just for future Parkland students, but for every young person 
                  subject to laws they cannot influence.
                </p>
              </>
            )}
          </div>
          
          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
