import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50 glow-effect">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-github-blue">{t('hero.name')}</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              <a 
                href="#home" 
                className="hover:text-github-blue transition-colors duration-200"
              >
                {t('nav.home')}
              </a>
              <a 
                href="#about" 
                className="hover:text-github-blue transition-colors duration-200"
              >
                {t('nav.about')}
              </a>
              <a 
                href="#skills" 
                className="hover:text-github-blue transition-colors duration-200"
              >
                {t('nav.skills')}
              </a>
              <a 
                href="#contact" 
                className="hover:text-github-blue transition-colors duration-200"
              >
                {t('nav.contact')}
              </a>
            </div>
            <LanguageSwitcher />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-github-text hover:text-github-blue"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-github-text hover:text-github-blue transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-github-text hover:text-github-blue transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-github-text hover:text-github-blue transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.skills')}
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-github-text hover:text-github-blue transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
