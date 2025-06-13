import React from 'react';
import { Sun, Calendar, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const WelcomeCard: React.FC = () => {
  const { t } = useTranslation();
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? t('welcomeCard.greeting_morning') : currentHour < 18 ? t('welcomeCard.greeting_afternoon') : t('welcomeCard.greeting_evening');
  
  return (
    <div className="bg-gradient-to-br from-[#00D4AA] via-[#1FB6FF] to-[#E91E63] rounded-xl p-8 text-white relative overflow-hidden">
      <div className="absolute top-4 right-4 animate-pulse">
        <Sun className="w-8 h-8 text-[#FFD700]" />
      </div>
      
      <div className="absolute bottom-4 left-4 opacity-20">
        <Star className="w-16 h-16" />
      </div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-2">
          {greeting}, {t('dashboardHeader.user_name')}! 👋
        </h2>
        
        <p className="text-lg mb-6 opacity-90">
          {t('welcomeCard.welcome_message')}
        </p>
        
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <Calendar className="w-6 h-6 text-[#FFD700]" />
          <div>
            <p className="font-semibold">{t('welcomeCard.next_class')}</p>
            <p className="text-sm opacity-90">{t('welcomeCard.class_details')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};