import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: '1',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_nffDaNc9dMnKywbNI9HWI7wpsJp5jhBsQ&s',
    questionKey: 'testimonials.video1_question',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1976&auto=format&fit=crop',
    questionKey: 'testimonials.video2_question',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop',
    questionKey: 'testimonials.video3_question',
  },
  {
    id: '4',
    imageUrl: 'https://colegiolospinos.ec/wp-content/uploads/2020/09/familia-estudiando-620x330-1.jpg',
    questionKey: 'testimonials.video4_question',
  },
];

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

export const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className="rounded-2xl overflow-hidden shadow-lg group h-80"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonial.imageUrl})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-all duration-300"></div>
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <p className="font-semibold">{t('testimonials.ask_parents')}</p>
                  <h3 className="font-bold text-xl">{t(testimonial.questionKey)}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};