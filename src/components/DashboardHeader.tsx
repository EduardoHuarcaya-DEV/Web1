import React from 'react';
import { Heart, User, Settings, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DashboardHeaderProps {
  onLogout: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onLogout }) => {
  const { t } = useTranslation();
  return (
    <header className="bg-gray-800 text-white py-4 px-6 sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-[#E91E63]" />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1FB6FF] via-[#00D4AA] to-[#E91E63]">
            {t('dashboardHeader.title')}
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#mis-cursos" className="hover:text-[#00D4AA] transition-colors duration-300">{t('dashboardHeader.nav_courses')}</a>
          <a href="#progreso" className="hover:text-[#1FB6FF] transition-colors duration-300">{t('dashboardHeader.nav_progress')}</a>
          <a href="#recursos" className="hover:text-[#E91E63] transition-colors duration-300">{t('dashboardHeader.nav_resources')}</a>
          <a href="#ayuda" className="hover:text-[#FFD700] transition-colors duration-300">{t('dashboardHeader.nav_help')}</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#00D4AA] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm">{t('dashboardHeader.user_name')}</span>
          </div>
          
          <button className="text-gray-400 hover:text-[#1FB6FF] transition-colors">
            <Settings className="w-5 h-5" />
          </button>
          
          <button
            onClick={onLogout}
            className="text-gray-400 hover:text-[#E91E63] transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};