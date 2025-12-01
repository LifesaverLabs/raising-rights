import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const TheCase = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Introduction */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">
              The Case for 14
            </h1>
            <div className="text-lg space-y-4 text-muted-foreground">
              <p>
                We propose extending voting rights to all persons who will reach age 14 by Inauguration Day 
                (January 20). This page explains why—through philosophical argument, mathematical proof, and 
                practical reasoning.
              </p>
              <p className="text-xl font-semibold text-foreground border-l-4 border-primary pl-4">
                A note on equal votes: We are not arguing that young people deserve more voting power than 
                older citizens. A 14-year-old's vote should count exactly the same as an 80-year-old's vote: 
                one person, one vote. What we seek is equal access to the franchise—the same right to participate 
                that every adult citizen enjoys.
              </p>
            </div>
          </div>
        </section>

        {/* The Suffering Principle */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-6" id="suffering-principle">
              The Suffering Principle
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                The word "suffrage" derives from Latin <em>suffragium</em>—a vote, a prayer, an expression of support. 
                But it resonates with "suffering" for good reason. Those who suffer the consequences of political 
                decisions have the strongest claim to voice in making them.
              </p>
              
              <p className="font-semibold">Youth bear the long-term consequences of:</p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex gap-3">
                  <span className="text-civic-blue font-bold">•</span>
                  <span><strong>Climate policy</strong> — They will live through decades of climate impacts that today's elderly voters will not see</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-civic-green font-bold">•</span>
                  <span><strong>Fiscal policy</strong> — National debt accumulated today will be repaid through their future taxes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-civic-amber font-bold">•</span>
                  <span><strong>Education policy</strong> — They experience its effects directly and immediately</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-civic-blue font-bold">•</span>
                  <span><strong>Gun policy</strong> — School shootings are their lived reality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-civic-green font-bold">•</span>
                  <span><strong>Military policy</strong> — They will be called to serve and potentially die for decisions made before they could vote</span>
                </li>
              </ul>

              <p className="text-xl bg-muted/50 p-6 rounded-lg">
                This is not an argument for weighted voting. It is an argument for inclusion. Those who bear 
                consequences deserve equal voice—not amplified voice, not privileged voice, but the same voice 
                currently denied to them.
              </p>
            </div>
          </div>
        </section>

        {/* The Parkland Catalyst */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-6" id="parkland">
              The Parkland Catalyst
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                In February 2018, a gunman killed 17 people at Marjory Stoneman Douglas High School in Parkland, 
                Florida. The surviving students became some of the most articulate advocates for gun policy reform 
                in American history.
              </p>
              
              <p>
                They organized. They spoke. They marched. They commanded national attention.
              </p>
              
              <p>
                And then... attention moved on. Because attention is not power. Politicians respond to electoral 
                consequences, and these students could deliver none. They had voices but not votes.
              </p>

              <p className="text-2xl font-serif italic text-primary border-l-4 border-primary pl-6 my-8">
                "They listened to us for a few weeks because cameras were there. They would listen to us forever 
                if ballots were there."
              </p>

              <p>
                Had every high school student in America wielded the vote, the political calculus would have been 
                different—not because their votes would count more, but because their votes would count at all.
              </p>
            </div>
          </div>
        </section>

        {/* Commander-in-Chief */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-6" id="commander-in-chief">
              The Commander-in-Chief Contract
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-xl font-semibold">
                For a soldier to meaningfully consent to serve under a Commander-in-Chief who holds lethal authority 
                over their life, they must have had the opportunity to vote for or against that Commander-in-Chief 
                before their service begins.
              </p>

              <div className="civic-card my-8">
                <h3 className="text-2xl font-serif font-bold mb-4">The Math</h3>
                <ul className="space-y-2">
                  <li>• Military enlistment is permitted at age 17 (with parental consent) or 18</li>
                  <li>• Presidential elections occur every 4 years</li>
                  <li>• Inauguration Day (when command authority transfers) is January 20</li>
                  <li>• The worst-case scenario: A person born November 4 in an election year</li>
                </ul>
              </div>

              <p className="font-semibold">This person:</p>
              <ul className="space-y-2 ml-6">
                <li>• Cannot vote at age 17 (too young)</li>
                <li>• Enlists at 17 years, 3 months</li>
                <li>• Begins serving under a Commander-in-Chief they never had the chance to vote for or against</li>
                <li>• Won't vote in a presidential election until age 20-21</li>
                <li>• Won't see their voted-for candidate inaugurated until age 21+</li>
              </ul>

              <p className="text-xl bg-secondary/10 p-6 rounded-lg my-8">
                For every potential soldier to have participated in at least one presidential election before their 
                service begins, the voting age must be approximately 13 years, 9 months (13.78 years).
              </p>

              <p className="text-xl font-bold text-primary">
                Practical Implementation: Extend voting eligibility to all persons who will reach age 14 by 
                Inauguration Day (January 20 following the election).
              </p>
            </div>
          </div>
        </section>

        {/* The Consent Gap */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-6" id="consent-gap">
              The Consent Gap
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                The social contract holds that government derives legitimacy from the consent of the governed. 
                But consent requires the opportunity to express it.
              </p>

              <p className="font-semibold">Currently, young people are:</p>
              <ul className="space-y-2 ml-6">
                <li>• Subject to criminal law (and can be tried as adults in many states)</li>
                <li>• Required to attend school under compulsory education laws</li>
                <li>• Subject to taxation on any employment income (beginning as young as 14)</li>
                <li>• Subject to parental and state custody decisions</li>
                <li>• Eligible for military service at 17</li>
                <li>• Bound by environmental, fiscal, and foreign policy decisions</li>
              </ul>

              <p className="text-xl font-semibold text-foreground border-l-4 border-destructive pl-4">
                Yet they have zero electoral voice in determining any of these laws. This is not consent—it is 
                subjection. Not governance with them, but over them.
              </p>

              <p>
                We do not argue young people should have outsized power. We argue they should have any power at all.
              </p>
            </div>
          </div>
        </section>

        {/* Ranked Choice Voting */}
        <section className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-6" id="ranked-choice">
              Why Ranked Choice Voting Is Essential to Consent
            </h2>
            
            <div className="space-y-8 text-lg leading-relaxed">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-destructive">
                  The Problem: Binary Consent Is Not Real Consent
                </h3>
                <p>
                  Securing the right to vote is necessary but not sufficient. The quality of that vote matters. 
                  A voting system that forces voters to choose between two pre-selected options—while punishing 
                  them for expressing their true preferences—does not enable meaningful consent.
                </p>
              </div>

              <div className="civic-card">
                <h3 className="text-2xl font-serif font-bold mb-4">How the Two-Party Trap Works</h3>
                <ol className="space-y-4">
                  <li>
                    <strong className="text-primary">Primary clustering:</strong> Before the general election, 
                    party primaries select nominees through low-turnout elections (often 15-25%) skewed toward 
                    older voters and ideological poles. Youth under 18 cannot participate. By November, the field 
                    has been narrowed by voters who don't represent them.
                  </li>
                  <li>
                    <strong className="text-secondary">Strategic voting coercion:</strong> In a plurality 
                    ("first past the post") system, voting for your true first choice is often irrational if that 
                    candidate is unlikely to win. Voters abandon their real preferences to block their most-feared outcome.
                  </li>
                  <li>
                    <strong className="text-accent">Preference destruction:</strong> The system records only final 
                    choices, not actual preferences. We never learn how many voters truly preferred candidates who 
                    received "unviable" vote shares.
                  </li>
                  <li>
                    <strong className="text-destructive">Manufactured consent:</strong> The winner claims a mandate, 
                    but their voters may have preferred someone else—they simply found the winner less objectionable 
                    than the alternative.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold mb-4">Ranked Choice Voting Restores Consent</h3>
                <p>
                  Under RCV, voters can rank candidates in order of preference. If no candidate receives a majority 
                  of first-choice votes, the candidate with the fewest votes is eliminated, and their supporters' 
                  ballots are transferred to their second choice. This continues until someone achieves a majority.
                </p>
                
                <div className="civic-card mt-6">
                  <p className="font-semibold mb-3">What RCV enables:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-destructive mb-2">Current System</p>
                      <ul className="space-y-1 text-base">
                        <li>• Binary choice</li>
                        <li>• Strategic voting coercion</li>
                        <li>• Preferences destroyed</li>
                        <li>• "Lesser evil" consent</li>
                        <li>• Spoiler dynamics</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-civic-green mb-2">With Ranked Choice</p>
                      <ul className="space-y-1 text-base">
                        <li>• Full preference expression</li>
                        <li>• Honest voting rewarded</li>
                        <li>• Preferences recorded and counted</li>
                        <li>• Graduated consent across options</li>
                        <li>• No vote is wasted</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold mb-4">The Complete Reform</h3>
                <p className="mb-4">
                  For youth suffrage to achieve its full purpose, it must be paired with ranked choice voting:
                </p>
                <ul className="space-y-2">
                  <li><strong>Suffrage by 14</strong> (Inauguration Day cutoff) — ensuring every potential soldier votes before command authority attaches</li>
                  <li><strong>Ranked choice voting</strong> — ensuring that vote expresses actual preferences</li>
                  <li><strong>Open or nonpartisan primaries</strong> — ensuring youth participate in candidate selection, not just final ratification</li>
                  <li><strong>Learning Rites curriculum</strong> — ensuring youth understand how to use these systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TheCase;
