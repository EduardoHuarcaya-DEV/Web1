import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const stepsData = [
  {
    titleKey: 'steps.step1_title',
    descriptionKey: 'steps.step1_desc',
    imageUrl: 'https://img.freepik.com/vector-gratis/plantilla-pegatina-personaje-dibujos-animados-miembros-familia_1308-67111.jpg?semt=ais_hybrid&w=740',
    borderColor: 'border-green-500',
  },
  {
    titleKey: 'steps.step2_title',
    descriptionKey: 'steps.step2_desc',
    imageUrl: 'https://img.freepik.com/foto-gratis/dos-lindos-ninos-caminando-bosque_53876-97135.jpg?semt=ais_items_boosted&w=740',
    borderColor: 'border-pink-500',
  },
  {
    titleKey: 'steps.step3_title',
    descriptionKey: 'steps.step3_desc',
    imageUrl: 'https://montessoristoppani.com/wp-content/uploads/2024/09/pexels-kamaji-ogino-5094676.jpg',
    borderColor: 'border-blue-500',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const StepsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1a1a1a] py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {t('steps.main_title')}
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-400 mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('steps.upcoming_dates')}
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stepsData.map((step, index) => (
            <motion.div key={index} className="flex flex-col items-center" variants={itemVariants}>
              <div className={`relative w-48 h-48 mb-6`}>
                <div className={`absolute inset-0 rounded-full border-4 ${step.borderColor} animate-pulse-slow`}></div>
                <img
                  src={step.imageUrl}
                  alt={t(step.titleKey)}
                  className="w-full h-full rounded-full object-cover border-4 border-transparent transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-sm font-semibold text-gray-400 mb-2">{t('steps.step', { count: index + 1 })}</p>
              <h3 className="text-2xl font-bold mb-4">{t(step.titleKey)}</h3>
              <p className="text-gray-400 leading-relaxed">{t(step.descriptionKey)}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
            {t('steps.cta_button')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};
