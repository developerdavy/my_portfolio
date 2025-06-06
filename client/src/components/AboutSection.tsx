import { CheckCircle, Brain, Rocket, Target } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-muted/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="skill-card">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-3 text-github-blue" />
              {t('about.journey.title')}
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                {t('about.journey.p1')}
              </p>
              <p className="leading-relaxed">
                {t('about.journey.p2')}
              </p>
              <p className="leading-relaxed">
                {t('about.journey.p3')}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card/70 backdrop-blur-sm rounded-xl p-6 skill-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Target className="w-5 h-5 mr-3 text-github-blue" />
                {t('about.expertise.title')}
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-github-green mr-3" />
                  {t('about.expertise.fullstack')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-github-green mr-3" />
                  {t('about.expertise.ai')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-github-green mr-3" />
                  {t('about.expertise.api')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-github-green mr-3" />
                  {t('about.expertise.mobile')}
                </li>
              </ul>
            </div>
            
            <div className="bg-card/70 backdrop-blur-sm rounded-xl p-6 skill-card border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Rocket className="w-5 h-5 mr-3 text-accent" />
                {t('about.values.title')}
              </h4>
              <div className="text-muted-foreground space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-github-blue rounded-full mr-3"></div>
                  <span className="text-sm">{t('about.values.problem')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-github-green rounded-full mr-3"></div>
                  <span className="text-sm">{t('about.values.team')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-sm">{t('about.values.innovation')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-sm">{t('about.values.learning')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
