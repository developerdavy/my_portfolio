import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Target, Lightbulb, TrendingUp } from "lucide-react";

export default function CaseStudySection() {
  const { t } = useLanguage();

  const caseStudy = {
    title: t("caseStudyTitle"),
    client: t("caseStudyClient"),
    industry: t("caseStudyIndustry"),
    timeline: t("caseStudyTimeline"),
    challenge: t("caseStudyChallenge"),
    solution: t("caseStudySolution"),
    results: [
      t("caseStudyResult1"),
      t("caseStudyResult2"),
      t("caseStudyResult3")
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe API"]
  };

  const stats = [
    { number: "300%", label: t("increaseInLeads") },
    { number: "5 days", label: t("deliveryTime") },
    { number: "24/7", label: t("uptimeAchieved") }
  ];

  return (
    <section id="case-study" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t("caseStudySectionTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("caseStudySectionSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Case Study Details */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-2xl text-foreground">{caseStudy.title}</CardTitle>
                  <Badge variant="secondary">{caseStudy.industry}</Badge>
                </div>
                <p className="text-muted-foreground">{caseStudy.client} • {caseStudy.timeline}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center mb-3">
                    <Target className="w-5 h-5 text-primary mr-2" />
                    <h3 className="font-semibold text-foreground">{t("challenge")}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                </div>

                <div>
                  <div className="flex items-center mb-3">
                    <Lightbulb className="w-5 h-5 text-primary mr-2" />
                    <h3 className="font-semibold text-foreground">{t("solution")}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">{t("technologiesUsed")}</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full" onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t("startYourProject")}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Results */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-6 h-6 text-primary mr-2" />
                  <CardTitle className="text-xl text-foreground">{t("results")}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}