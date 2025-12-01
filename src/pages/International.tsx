import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CountryRibbon } from "@/components/CountryRibbon";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Globe, ExternalLink } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Countries with voting ages below 18 (using world-atlas numeric country IDs)
const countriesData: Record<string, { votingAge: number; details: string }> = {
  // Voting age 16
  "032": { votingAge: 16, details: "Argentina allows optional voting at 16 and mandatory voting at 18." },
  "040": { votingAge: 16, details: "Austria lowered its voting age to 16 in 2007, one of the first European countries to do so." },
  "076": { votingAge: 16, details: "Brazil permits optional voting from age 16, with mandatory voting beginning at 18." },
  "192": { votingAge: 16, details: "Cuba allows citizens to vote at 16 in all elections." },
  "218": { votingAge: 16, details: "Ecuador allows optional voting from age 16." },
  "558": { votingAge: 16, details: "Nicaragua set its voting age at 16 in 1984." },
  "470": { votingAge: 16, details: "Malta allows voting at 16 for local council elections." },
  "833": { votingAge: 16, details: "Isle of Man allows voting at 16 for all elections." },
  "831": { votingAge: 16, details: "Guernsey allows voting at 16 for all elections." },
  "826": { votingAge: 16, details: "The UK allows 16-year-olds to vote in some regional elections (Scotland, Wales, and some local elections)." },
  
  // Voting age 17
  "360": { votingAge: 17, details: "Indonesia allows citizens to vote at 17 or if they are married." },
  "408": { votingAge: 17, details: "North Korea allows voting at 17 in all elections." },
  "626": { votingAge: 17, details: "Timor-Leste set its voting age at 17." },
};

const International = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <CountryRibbon />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Youth Suffrage Around the World
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Many countries have recognized that youth deserve a voice in decisions that shape their future. 
              Explore the global landscape of voting ages below 18.
            </p>
          </div>
        </section>

        {/* Interactive Map */}
        <section className="py-16">
          <div className="container">
            <div className="civic-card">
              <h2 className="text-2xl font-serif font-bold mb-6">Countries with Voting Ages Below 18</h2>
              
              <div className="relative bg-muted/20 rounded-lg overflow-hidden">
                <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    scale: 147,
                  }}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const countryCode = geo.id;
                        const countryInfo = countriesData[countryCode];
                        const isHighlighted = !!countryInfo;

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => {
                              if (countryInfo) {
                                setSelectedCountry(countryCode);
                              }
                            }}
                            onMouseEnter={() => {
                              if (countryInfo) {
                                setTooltipContent(`${geo.properties.name} (Age ${countryInfo.votingAge})`);
                              }
                            }}
                            onMouseLeave={() => {
                              setTooltipContent("");
                            }}
                            style={{
                              default: {
                                fill: isHighlighted 
                                  ? countryInfo.votingAge === 16 
                                    ? "hsl(var(--secondary))" 
                                    : "hsl(var(--accent))"
                                  : "hsl(var(--muted))",
                                stroke: "hsl(var(--border))",
                                strokeWidth: 0.5,
                                outline: "none",
                              },
                              hover: {
                                fill: isHighlighted 
                                  ? "hsl(var(--primary))" 
                                  : "hsl(var(--muted-foreground))",
                                stroke: "hsl(var(--border))",
                                strokeWidth: 0.5,
                                outline: "none",
                                cursor: isHighlighted ? "pointer" : "default",
                              },
                              pressed: {
                                fill: "hsl(var(--primary))",
                                stroke: "hsl(var(--border))",
                                strokeWidth: 0.5,
                                outline: "none",
                              },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ComposableMap>
                
                {tooltipContent && (
                  <div className="absolute top-4 left-4 bg-background border border-border rounded-md px-4 py-2 shadow-lg">
                    <p className="text-sm font-semibold">{tooltipContent}</p>
                  </div>
                )}
              </div>

              {selectedCountry && countriesData[selectedCountry] && (
                <div className={`mt-6 p-6 rounded-lg border ${
                  countriesData[selectedCountry].votingAge === 16 
                    ? 'bg-secondary/10 border-secondary/20' 
                    : 'bg-accent/10 border-accent/20'
                }`}>
                  <h3 className={`text-xl font-serif font-bold mb-2 ${
                    countriesData[selectedCountry].votingAge === 16 
                      ? 'text-secondary' 
                      : 'text-accent'
                  }`}>
                    Voting Age: {countriesData[selectedCountry].votingAge}
                  </h3>
                  <p className="text-muted-foreground">
                    {countriesData[selectedCountry].details}
                  </p>
                </div>
              )}

              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 rounded bg-secondary"></span>
                  Voting age 16 (click countries to learn more)
                </p>
                <p className="flex items-center gap-2">
                  <span className="inline-block w-4 h-4 rounded bg-accent"></span>
                  Voting age 17 (click countries to learn more)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Create Content for Your Country
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The movement for youth suffrage is global. If you're passionate about lowering the voting age 
                in your country, we'd love to help you create localized content and advocacy resources.
              </p>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2" asChild>
                    <a href="mailto:team@lifesaverlabs.org?subject=International Youth Suffrage Collaboration">
                      <Mail className="h-4 w-4" />
                      Contact Us to Collaborate
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <a href="mailto:team@lifesaverlabs.org?subject=Raising Rights Domain Sharing">
                      <Globe className="h-4 w-4" />
                      Share This Domain
                    </a>
                  </Button>
                </div>

                <div className="pt-6 border-t border-border mt-8">
                  <h3 className="text-xl font-serif font-semibold mb-4">What We Offer</h3>
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-primary" />
                        Link Exchange
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        We'll prominently link to your country-specific site from this map.
                      </p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Globe className="h-4 w-4 text-secondary" />
                        Domain Sharing
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Host your content on a subdomain like yourccountry.raisingrights.org
                      </p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border border-border">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Mail className="h-4 w-4 text-accent" />
                        Resource Sharing
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Access our templates, research, and advocacy frameworks adapted for your context.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default International;
