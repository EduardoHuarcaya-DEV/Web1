import React from 'react';
import { Heart, Brain, Music, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const FeatureSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Heart className="w-12 h-12" />,
      title: t('feature.feature1_title'),
      description: t('feature.feature1_desc'),
      color: "text-[#E91E63]",
      bgColor: "bg-[#E91E63]"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: t('feature.feature2_title'),
      description: t('feature.feature2_desc'),
      color: "text-[#1FB6FF]",
      bgColor: "bg-[#1FB6FF]"
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: t('feature.feature3_title'),
      description: t('feature.feature3_desc'),
      color: "text-[#FFD700]",
      bgColor: "bg-[#FFD700]"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: t('feature.feature4_title'),
      description: t('feature.feature4_desc'),
      color: "text-[#00D4AA]",
      bgColor: "bg-[#00D4AA]"
    }
  ];

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('feature.title1')}
            <span className="text-[#00D4AA]"> {t('feature.title2')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('feature.subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-xl p-8 group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05, backgroundColor: '#2d2d2d' }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className={`text-xl font-bold ${feature.color} mb-4`}>
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};