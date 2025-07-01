import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Building, ShoppingCart } from "lucide-react";

export default function PricingSection() {
  const { t } = useLanguage();

  const packages = [
    {
      name: t("smallWebsite"),
      price: "KES 15,000",
      icon: <Zap className="w-8 h-8" />,
      description: t("smallWebsiteDesc"),
      features: [
        t("feature1"),
        t("feature2"),
        t("feature3"),
        t("feature4")
      ],
      popular: false
    },
    {
      name: t("businessSite"),
      price: "KES 30,000",
      icon: <Building className="w-8 h-8" />,
      description: t("businessSiteDesc"),
      features: [
        t("feature5"),
        t("feature6"),
        t("feature7"),
        t("feature8"),
        t("feature9")
      ],
      popular: true
    },
    {
      name: t("ecommerceSite"),
      price: "KES 60,000",
      icon: <ShoppingCart className="w-8 h-8" />,
      description: t("ecommerceSiteDesc"),
      features: [
        t("feature10"),
        t("feature11"),
        t("feature12"),
        t("feature13"),
        t("feature14"),
        t("feature15")
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t("pricingTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("pricingSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative bg-card border-border hover:shadow-lg transition-all duration-300 ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  {t("mostPopular")}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary">
                  {pkg.icon}
                </div>
                <CardTitle className="text-2xl text-foreground">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mt-2">{pkg.price}</div>
                <p className="text-muted-foreground mt-2">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t("getStarted")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t("customSolutions")}
          </p>
          <Button variant="outline" onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            {t("discussProject")}
          </Button>
        </div>
      </div>
    </section>
  );
}