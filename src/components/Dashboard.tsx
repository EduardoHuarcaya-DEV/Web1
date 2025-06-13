import React, { useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { VideoCard } from './VideoCard';
import { WelcomeCard } from './WelcomeCard';
import { ProgressCard } from './ProgressCard';
import { useTranslation } from 'react-i18next';

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const { t } = useTranslation();
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoData = [
    { id: 'jEJ-ozX2RfM', duration: '8 min', color: 'bg-[#E91E63]' },
    { id: 'GtrWxrsodQ0', duration: '12 min', color: 'bg-[#1FB6FF]' },
    { id: 'UnD5yOOHXK0', duration: '10 min', color: 'bg-[#00D4AA]' },
    { id: 'w8MD_Uto4NQ', duration: '15 min', color: 'bg-[#FFD700]' },
    { id: 'XZpB8227WSQ', duration: '14 min', color: 'bg-[#FF5722]' },
    { id: 'NmCyOkyFxR0', duration: '18 min', color: 'bg-[#E91E63]' }
  ];

  const videos = videoData.map((video, index) => ({
    ...video,
    title: t(`dashboard.videos.${index}.title`),
    description: t(`dashboard.videos.${index}.description`),
    category: t(`dashboard.videos.${index}.category`),
  }));

  return (
    <div className="min-h-screen bg-gray-900">
      <DashboardHeader onLogout={onLogout} />
      
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <WelcomeCard />
          </div>
          <div>
            <ProgressCard />
          </div>
        </div>
        
        <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-6">
            {t('dashboard.title1')} <span className="text-[#00D4AA]">{t('dashboard.title2')}</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={() => setSelectedVideo(video.id)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {videos.find(v => v.id === selectedVideo)?.title}
              </h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};