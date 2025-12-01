import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const objections = [
  {
    id: "video-games",
    question: "14-year-olds are too busy playing video games to vote responsibly.",
    contrary: "Many 14-year-olds demonstrate sophisticated reasoning about politics, economics, and ethics daily—in debate clubs, Model UN, student government, and family discussions. Meanwhile, many adult voters cast ballots based on party loyalty, name recognition, or single issues without deeper analysis.",
    response: "The question is not whether the average 14-year-old is a policy expert—the average 40-year-old isn't either. The question is whether they have legitimate interests that deserve representation. They do. The Learning Rites curriculum ensures preparation that exceeds current adult baselines. And we do not propose giving them more voting power than anyone else—just the same one vote that every adult has.",
  },
  {
    id: "brain-development",
    question: "Their brains aren't fully developed—the prefrontal cortex doesn't mature until 25.",
    contrary: "If full prefrontal cortex development were the standard, we would need to raise the voting age to 25, not lower it. We do not require neurological perfection for suffrage—we require legitimate stake and basic reasoning capacity.",
    response: "The prefrontal cortex argument proves too much. It would argue against 18-year-olds voting, serving in the military, signing contracts, or being tried as adults. Society already trusts people under 25 with many high-stakes decisions. Voting is less individually dangerous than any of them—one vote has marginal direct impact, while the collective benefits of inclusion are substantial. Furthermore, civic engagement during adolescence improves civic reasoning development; exercise builds the muscle.",
  },
  {
    id: "parental-influence",
    question: "They'll just vote however their parents tell them to.",
    contrary: "Many adults vote as their parents did, their spouses prefer, or their social circles expect. Political conformity is not unique to youth, and we do not disenfranchise adults for it.",
    response: "The secret ballot protects voter independence regardless of age. More importantly, the Learning Rites curriculum explicitly teaches freedom of conscience, resistance to undue influence, and independent evaluation. If parental influence concerns us, the solution is education—which we propose—not continued disenfranchisement.",
  },
  {
    id: "taxation",
    question: "They don't pay taxes, so they shouldn't vote.",
    contrary: "Many 14-year-olds do pay taxes—income tax on employment, sales tax on purchases. More importantly, 'no taxation without representation' was a revolutionary slogan, not a constitutional requirement. We do not strip voting rights from the unemployed, retired, or those whose income falls below tax thresholds.",
    response: "The stakeholder principle is broader than taxation. Youth are subject to education policy, environmental policy, criminal law, and military conscription eligibility. Being subject to law is stake enough—and youth are subject to law.",
  },
  {
    id: "partisan-scheme",
    question: "This is just a scheme to benefit [political party].",
    contrary: "Youth political views are neither monolithic nor predictable. Young voters have supported candidates across the political spectrum depending on issue, year, and circumstance.",
    response: "Every suffrage expansion in history—for non-property owners, women, Black Americans, 18-year-olds—was accused of being a partisan power grab. The question is not which party benefits, but whether the exclusion is just. It isn't. Parties will adapt to new voters, as they always have.",
  },
  {
    id: "other-rights",
    question: "If they can vote at 14, should they also drink, drive, and sign contracts?",
    contrary: "Different rights and responsibilities have different risk profiles. Voting carries no physical danger to the voter or others. Driving, drinking, and contracts carry direct risks that justify different age thresholds.",
    response: "We already have different ages for different activities: work at 14, drive at 16, vote at 18, drink at 21, rent cars at 25. The question for each is: what are the stakes, what are the risks, and what preparation is appropriate? Voting has low individual risk, high collective benefit, and can be prepared for through curriculum. A vote poorly cast harms no one directly; a car poorly driven kills.",
  },
  {
    id: "why-14",
    question: "Why 14 specifically? Why not 12, or 16, or some other age?",
    contrary: "The current age of 18 is equally arbitrary—it was lowered from 21 in 1971 based on the 'old enough to fight, old enough to vote' argument for Vietnam-era draftees.",
    response: "We propose 14 based on the Commander-in-Chief mathematics (guaranteeing suffrage before military eligibility takes effect), cognitive development research showing sufficient abstract reasoning by early adolescence, and practical alignment with the transition to high school where civic education can be most effectively delivered. The Inauguration Day cutoff (14 by January 20) provides constitutional elegance.",
  },
  {
    id: "turnout",
    question: "Young people don't turn out to vote anyway—why bother?",
    contrary: "Youth turnout has been rising, and is highest when young people feel their vote matters and civic education is strong. Low turnout reflects alienation from a system that excluded them, not incapacity for participation.",
    response: "Research from places with lower voting ages (Austria at 16, some U.S. municipalities) shows that younger voters still in school and living at home have higher turnout than 18-21 year olds in transition. Starting earlier, with support and education, builds lifelong voting habits.",
  },
  {
    id: "constitutional-amendment",
    question: "This would require a constitutional amendment—it will never happen.",
    contrary: "The 26th Amendment lowered the voting age from 21 to 18 in just 100 days of ratification—the fastest amendment in American history.",
    response: "Constitutional amendments are difficult but not impossible when moral urgency is clear. The 26th Amendment succeeded because 'old enough to fight, old enough to vote' was unanswerable. 'Old enough to suffer the consequences, old enough to have a voice' may prove equally compelling. Meanwhile, states can lower their voting age for state and local elections without federal action.",
  },
  {
    id: "adults-know-better",
    question: "Adults know better—that's why we have age restrictions.",
    contrary: "History offers scant evidence that adults collectively 'know better.' Adults voted for policies that created climate crisis, unsustainable debt, financial collapses, and countless other harms. Age does not guarantee wisdom.",
    response: "The premise inverts the burden of proof. We do not require youth to demonstrate superior judgment—only legitimate interest and basic reasoning capacity. Both are present. The question is not 'are 14-year-olds wiser than 50-year-olds?' but 'do 14-year-olds have interests that deserve equal representation?' They do.",
  },
  {
    id: "rcv-complicated",
    question: "Ranked choice voting is too complicated.",
    contrary: "Ranked choice voting asks voters to do what they already do mentally—rank their preferences. It simply allows them to express that ranking on the ballot.",
    response: "RCV is used successfully in Australia (federally since 1918), Ireland, Maine, Alaska, New York City, and dozens of other jurisdictions. Voters adapt quickly. The Learning Rites curriculum includes RCV mastery, ensuring young voters understand the system before their first ballot. The alternative—forcing voters to strategically abandon their true preferences—is not 'simpler.' It's a different complexity imposed on voters' consciences rather than their ballots.",
  },
];

const Objections = () => {
  const [expandedAll, setExpandedAll] = useState(false);
  const [value, setValue] = useState<string[]>([]);

  const toggleAll = () => {
    if (expandedAll) {
      setValue([]);
    } else {
      setValue(objections.map((o) => o.id));
    }
    setExpandedAll(!expandedAll);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              Frequent Objections
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Extending the vote to 14-year-olds and reforming our electoral system provokes strong reactions. 
              Below are the objections we hear most often, addressed in the tradition of Aquinas: stating the 
              objection fairly, offering a contrary principle, and providing our response.
            </p>
            <Button onClick={toggleAll} variant="outline">
              {expandedAll ? "Collapse All" : "Expand All"}
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-4xl">
            <Accordion type="multiple" value={value} onValueChange={setValue}>
              {objections.map((objection, index) => (
                <AccordionItem key={objection.id} value={objection.id}>
                  <AccordionTrigger className="text-left text-lg font-serif font-semibold">
                    <span className="mr-2 text-muted-foreground">#{index + 1}</span>
                    {objection.question}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base pt-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="font-semibold text-secondary mb-2">On the Contrary:</p>
                      <p>{objection.contrary}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Response:</p>
                      <p className="leading-relaxed">{objection.response}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Objections;
