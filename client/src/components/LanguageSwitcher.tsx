import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const languages: Record<Language, { name: string; flag: string }> = {
  en: { name: 'English', flag: '🇺🇸' },
  es: { name: 'Español', flag: '🇪🇸' },
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  ja: { name: '日本語', flag: '🇯🇵' },
  zh: { name: '中文', flag: '🇨🇳' }
};

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-card/50 hover:bg-muted backdrop-blur-sm border border-border transition-all duration-300 hover:scale-105"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4 text-github-blue" />
        <span className="text-sm font-medium text-foreground">
          {languages[language].flag}
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg z-50 overflow-hidden">
            {Object.entries(languages).map(([code, { name, flag }]) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code as Language);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors duration-200 ${
                  language === code ? 'bg-github-blue/10 text-github-blue' : 'text-foreground'
                }`}
              >
                <span className="text-lg">{flag}</span>
                <span className="text-sm font-medium">{name}</span>
                {language === code && (
                  <div className="ml-auto w-2 h-2 bg-github-blue rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}