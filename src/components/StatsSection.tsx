import React from 'react';
import { TrendingUp, Award, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const StatsSection: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <TrendingUp className="w-16 h-16 text-[#FFD700] mx-auto mb-4" />,
      value: '92%',
      titleKey: 'stats.item1_title',
      descKey: 'stats.item1_desc',
    },
    {
      icon: <Award className="w-16 h-16 text-[#E91E63] mx-auto mb-4" />,
      value: 'Cognia',
      titleKey: 'stats.item2_title',
      descKey: 'stats.item2_desc',
    },
    {
      icon: <Clock className="w-16 h-16 text-[#FF5722] mx-auto mb-4" />,
      value: '1:7',
      titleKey: 'stats.item3_title',
      descKey: 'stats.item3_desc',
    },
  ];

  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants} 
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:bg-gray-800/80 hover:-translate-y-2"
            >
              {stat.icon}
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-200 text-lg">{t(stat.titleKey)}</p>
              <p className="text-gray-300 mt-2">{t(stat.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};