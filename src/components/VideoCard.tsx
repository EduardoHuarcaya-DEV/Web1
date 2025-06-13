import React from 'react';
import { Play, Clock, BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    description: string;
    category: string;
    duration: string;
    color: string;
  };
  onPlay: () => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group">
      <div className="relative">
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={onPlay}
            className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110"
          >
            <Play className="w-8 h-8 text-gray-900 ml-1" />
          </button>
        </div>
        
        <div className={`absolute top-3 left-3 ${video.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          {video.category}
        </div>
        
        <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {video.duration}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00D4AA] transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {video.description}
        </p>
        
        <button
          onClick={onPlay}
          className="w-full bg-gradient-to-r from-[#00D4AA] to-[#1FB6FF] text-white py-3 rounded-lg font-semibold hover:from-[#44D4AA] hover:to-[#00BFFF] transition-all duration-300 flex items-center justify-center gap-2"
        >
          <BookOpen className="w-5 h-5" />
          {t('videoCard.watchClass')}
        </button>
      </div>
    </div>
  );
};