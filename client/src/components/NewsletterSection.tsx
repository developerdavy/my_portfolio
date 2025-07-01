import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Gift } from "lucide-react";

export default function NewsletterSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate newsletter signup
    setTimeout(() => {
      toast({
        title: t("subscribeSuccess"),
        description: t("subscribeSuccessDesc"),
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/90 backdrop-blur border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Mail className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {t("newsletterTitle")}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t("newsletterDescription")}
            </p>

            <div className="flex items-center justify-center mb-4 text-sm text-muted-foreground">
              <Gift className="w-4 h-4 mr-2" />
              <span>{t("newsletterBonus")}</span>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("subscribing") : t("subscribe")}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-3">
              {t("noSpamPromise")}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}