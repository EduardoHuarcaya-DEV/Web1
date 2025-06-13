import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-[#E91E63]" />
              <span className="text-xl font-bold text-white">{t('footer.title')}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-[#1FB6FF] hover:text-[#44D4AA] transition-colors cursor-pointer" />
              <Instagram className="w-6 h-6 text-[#E91E63] hover:text-[#FFD700] transition-colors cursor-pointer" />
              <Youtube className="w-6 h-6 text-[#FF5722] hover:text-[#1FB6FF] transition-colors cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.nav_title')}</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-[#00D4AA] transition-colors">{t('footer.nav_home')}</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-[#1FB6FF] transition-colors">{t('footer.nav_about')}</a></li>
              <li><a href="#metodologia" className="text-gray-400 hover:text-[#E91E63] transition-colors">{t('footer.nav_methodology')}</a></li>
              <li><a href="#programas" className="text-gray-400 hover:text-[#FFD700] transition-colors">{t('footer.nav_programs')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.resources_title')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#00D4AA] transition-colors">{t('footer.resources_guides')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#1FB6FF] transition-colors">{t('footer.resources_activities')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E91E63] transition-colors">{t('footer.resources_blog')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">{t('footer.resources_faq')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t('footer.contact_title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#00D4AA] mr-3" />
                <span className="text-gray-400">info@aprendecrece.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#1FB6FF] mr-3" />
                <span className="text-gray-400">+51 912345678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#E91E63] mr-3" />
                <span className="text-gray-400">{t('footer.contact_address')}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {t('footer.copyright')}
            <span className="text-[#FFD700]"> {t('footer.copyright_special')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};