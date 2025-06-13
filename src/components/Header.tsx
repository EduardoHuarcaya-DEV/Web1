import React from 'react';
import { Heart, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = () => {
    const newLanguage = currentLanguage.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-[#E91E63]" />
          <span className="text-2xl font-bold">
            <span className="text-[#1FB6FF]">A</span>
            <span className="text-[#00D4AA]">p</span>
            <span className="text-[#E91E63]">r</span>
            <span className="text-[#FFD700]">e</span>
            <span className="text-[#FF5722]">n</span>
            <span className="text-[#1FB6FF]">d</span>
            <span className="text-white">e</span>
            <span className="text-[#00D4AA]"> y </span>
            <span className="text-[#E91E63]">C</span>
            <span className="text-[#FFD700]">r</span>
            <span className="text-[#FF5722]">e</span>
            <span className="text-[#1FB6FF]">c</span>
            <span className="text-[#00D4AA]">e</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="hover:text-[#00D4AA] transition-colors duration-300">{t('header.nav.home')}</a>
          <a href="#nosotros" className="hover:text-[#1FB6FF] transition-colors duration-300">{t('header.nav.about')}</a>
          <a href="#metodologia" className="hover:text-[#E91E63] transition-colors duration-300">{t('header.nav.methodology')}</a>
          <a href="#programas" className="hover:text-[#FFD700] transition-colors duration-300">{t('header.nav.programs')}</a>
          <a href="#recursos" className="hover:text-[#FF5722] transition-colors duration-300">{t('header.nav.resources')}</a>
          <a href="#contacto" className="hover:text-[#00D4AA] transition-colors duration-300">{t('header.nav.contact')}</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={changeLanguage}
            className="flex items-center space-x-2 text-white hover:text-[#FFD700] transition-colors duration-300"
            aria-label={t('header.changeLanguage')}
          >
            <Globe className="h-5 w-5" />
            <span>{currentLanguage.split('-')[0].toUpperCase()}</span>
          </button>
          <button 
            onClick={onLoginClick}
            className="bg-[#FFD700] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-[#FFEB3B] transition-all duration-300 transform hover:scale-105"
          >
            {t('header.login')}
          </button>
        </div>
      </div>
    </header>
  );
};