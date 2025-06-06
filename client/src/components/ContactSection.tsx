import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 bg-muted/30 backdrop-blur-sm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-github-blue/10 rounded-full blur-2xl floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-accent/10 rounded-full blur-xl floating-animation" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
            <MessageSquare className="w-8 h-8 mr-3 text-github-blue" />
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Email Contact */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 text-center skill-card border border-border glow-effect">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-github-blue to-blue-600 rounded-full flex items-center justify-center shadow-lg pulse-glow">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('contact.email.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('contact.email.desc')}</p>
            <a 
              href="mailto:kamaudavid1803@gmail.com" 
              className="inline-flex items-center text-github-blue hover:text-accent font-medium transition-all duration-300 hover:scale-105"
            >
              kamaudavid1803@gmail.com
              <Send className="ml-2 w-4 h-4" />
            </a>
          </div>
          
          {/* Phone Contact */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 text-center skill-card border border-border glow-effect">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-github-green to-green-600 rounded-full flex items-center justify-center shadow-lg pulse-glow">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">{t('contact.phone.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('contact.phone.desc')}</p>
            <a 
              href="tel:+254740133390" 
              className="inline-flex items-center text-github-blue hover:text-accent font-medium transition-all duration-300 hover:scale-105"
            >
              +254 740 133 390
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 text-muted-foreground bg-card/50 backdrop-blur-sm rounded-lg px-6 py-4 border border-border">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-github-blue" />
              <span>{t('contact.location')}</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-accent" />
              <span>{t('contact.availability')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
