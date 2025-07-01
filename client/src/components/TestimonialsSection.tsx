import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "Small Business Owner",
      quote: t("testimonial1"),
      project: "E-commerce Website",
      rating: 5
    },
    {
      name: "Samuel Kiprotich",
      role: "Startup Founder",
      quote: t("testimonial2"),
      project: "Business Portfolio",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t("testimonialsTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:bg-accent/5 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.project}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}