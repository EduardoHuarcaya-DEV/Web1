import React from 'react';
import { Star, Users, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParallax } from 'react-scroll-parallax';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref } = useParallax<HTMLDivElement>({ speed: -1000 });

  // URL de la imagen de fondo. Puedes cambiarla por la que prefieras.
  // Te recomiendo usar imágenes de alta resolución de sitios como Unsplash, Pexels, etc.
  const backgroundImageUrl = '/images/image00002.jpg';

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div
        ref={ref}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center">
          <Star className="text-gray-900 w-8 h-8" />
        </div>
      </div>
      
      <div className="absolute bottom-20 right-10 animate-pulse">
        <div className="w-20 h-20 bg-[#FF5722] rounded-full flex items-center justify-center">
          <Users className="text-white w-10 h-10" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {t('hero.title1')}
          <span className="block text-[#FFD700]">{t('hero.title2')}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#00D4AA] text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#44D4AA] transition-all duration-300 transform hover:scale-105 shadow-lg">
            {t('hero.buttonMore')}
          </button>
          
          <button className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FFD700] hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <Play className="w-5 h-5" />
            {t('hero.buttonVideo')}
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-[#FFD700] font-bold text-2xl mb-2">500+</h3>
            <p className="text-gray-200">{t('hero.stat1')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-[#00D4AA] font-bold text-2xl mb-2">95%</h3>
            <p className="text-gray-200">{t('hero.stat2')}</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-[#E91E63] font-bold text-2xl mb-2">24/7</h3>
            <p className="text-gray-200">{t('hero.stat3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};