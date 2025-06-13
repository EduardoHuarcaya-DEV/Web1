import React from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ProgressCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 rounded-xl p-6 text-white">
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp className="w-6 h-6 text-[#00D4AA]" />
        <h3 className="text-xl font-bold">{t('progressCard.title')}</h3>
      </div>
      
      <div className="space-y-4">
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">{t('progressCard.subject_math')}</span>
            <span className="text-sm font-semibold text-[#1FB6FF]">85%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="bg-[#1FB6FF] h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">{t('progressCard.subject_language')}</span>
            <span className="text-sm font-semibold text-[#E91E63]">70%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="bg-[#E91E63] h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-300">{t('progressCard.subject_creativity')}</span>
            <span className="text-sm font-semibold text-[#FFD700]">92%</span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div className="bg-[#FFD700] h-2 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-[#00D4AA]/20 to-[#1FB6FF]/20 rounded-lg border border-[#00D4AA]/30">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-[#FFD700]" />
          <span className="font-semibold text-[#FFD700]">{t('progressCard.achievement_unlocked')}</span>
        </div>
        <p className="text-sm text-gray-300">
          {t('progressCard.achievement_desc')}
        </p>
      </div>
      
      <div className="mt-4 p-4 bg-[#E91E63]/20 rounded-lg border border-[#E91E63]/30">
        <div className="flex items-center gap-2 mb-2">
          <Target className="w-5 h-5 text-[#E91E63]" />
          <span className="font-semibold text-[#E91E63]">{t('progressCard.weekly_goal')}</span>
        </div>
        <p className="text-sm text-gray-300">
          {t('progressCard.weekly_goal_desc')}
        </p>
      </div>
    </div>
  );
};