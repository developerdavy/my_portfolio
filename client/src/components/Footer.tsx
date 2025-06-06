import { Heart, Code2 } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Code2 className="w-6 h-6 text-github-blue mr-2" />
            <span className="text-lg font-semibold text-foreground">{t('hero.name')}</span>
          </div>
          
          <p className="text-muted-foreground mb-4 flex items-center justify-center">
            {t('footer.built')}
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
            {t('footer.tech')}
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span className="bg-muted/50 px-3 py-1 rounded-full">{t('footer.role.software')}</span>
            <span className="bg-muted/50 px-3 py-1 rounded-full">{t('footer.role.web')}</span>
            <span className="bg-muted/50 px-3 py-1 rounded-full">{t('footer.role.ai')}</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2024 {t('hero.name')}. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
