import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: {
          header: {
            nav: {
              home: 'Inicio',
              about: 'Quiénes Somos',
              methodology: 'Metodología',
              programs: 'Programas',
              resources: 'Recursos',
              contact: 'Contacto'
            },
            login: 'Iniciar Sesión',
            changeLanguage: 'Cambiar idioma'
          },
          hero: {
            title1: 'Apoyo Educativo',
            title2: 'Especializado',
            subtitle: 'Para niños con habilidades únicas de 3 a 10 años. Un aprendizaje adaptado, inclusivo y lleno de amor.',
            buttonMore: 'Saber Más',
            buttonVideo: 'Ver Video',
            stat1: 'Familias Apoyadas',
            stat2: 'Satisfacción Familiar',
            stat3: 'Apoyo Disponible'
          },
          feature: {
            title1: 'Nuestro Enfoque',
            title2: 'Especializado',
            subtitle: 'Cada niño es único. Nuestro programa se adapta a las necesidades individuales para maximizar el potencial de cada pequeño.',
            feature1_title: 'Apoyo Emocional',
            feature1_desc: 'Desarrollamos habilidades socioemocionales en un ambiente seguro y cariñoso',
            feature2_title: 'Estimulación Cognitiva',
            feature2_desc: 'Ejercicios adaptados para desarrollar el pensamiento y la memoria',
            feature3_title: 'Musicoterapia',
            feature3_desc: 'La música como herramienta terapéutica para el desarrollo integral',
            feature4_title: 'Arte y Creatividad',
            feature4_desc: 'Expresión artística para comunicar emociones y desarrollar motricidad'
          },
          testimonials: {
            title: 'Escúchalo directamente de quienes han vivido nuestro programa:',
            subtitle: 'Descubre las historias de familias que han transformado el aprendizaje en una aventura emocionante.',
            ask_parents: 'Preguntamos a los padres',
            video1_question: '¿Qué te encanta de bina?',
            video2_question: '¿Por qué bina?',
            video3_question: '¿En qué se diferencia bina?',
            video4_question: '¿Qué aprenden sus hijos?'
          },
          logos_section: {
          },
          steps: {
            main_title: 'Comienza en 3 sencillos pasos',
            upcoming_dates: 'Próximas fechas de inicio 2025: 13 de agosto, 17 de septiembre',
            step: 'Paso {{count}}',
            step1_title: 'Un vistazo a la familia',
            step1_desc: 'Explora 8 biomas a través de la lente de bina y obtén un resumen a medida de nuestras ofertas para tu familia.',
            step2_title: 'La aventura de tu hijo en bina',
            step2_desc: 'Tu hijo se sumerge en el bina-verso con edu-juego, y recibes estrategias de crecimiento personalizadas.',
            step3_title: 'Navegación fluida hasta el primer día',
            step3_desc: 'Guiamos a tu familia a través de una fácil incorporación, preparándote para un primer día increíble.',
            cta_button: '¿Encajamos?'
          },
          footer: {
            title: 'Aprende y Crece',
            description: 'Educación especializada para niños con habilidades únicas. Construyendo futuros brillantes con amor y dedicación.',
            nav_title: 'Navegación',
            nav_home: 'Inicio',
            nav_about: 'Quiénes Somos',
            nav_methodology: 'Metodología',
            nav_programs: 'Programas',
            resources_title: 'Recursos',
            resources_guides: 'Guías para Padres',
            resources_activities: 'Actividades',
            resources_blog: 'Blog',
            resources_faq: 'FAQ',
            contact_title: 'Contacto',
            contact_address: 'Ciudad de México, México',
            copyright: ' 2024 Aprende y Crece. Todos los derechos reservados.',
            copyright_special: 'Construido con amor para nuestros niños especiales.'
          },
          stats: {
            item1_title: 'Mejora en Habilidades',
            item1_desc: 'Progreso medible en 6 meses',
            item2_title: 'Acreditación Internacional',
            item2_desc: 'Calidad educativa certificada',
            item3_title: 'Ratio Educador:Estudiante',
            item3_desc: 'Atención personalizada garantizada'
          },
          loginModal: {
            error: 'Por favor, introduce tu correo y contraseña',
            title: 'Bienvenido de vuelta',
            subtitle: 'Accede a tu panel de aprendizaje',
            emailLabel: 'Correo Electrónico',
            emailPlaceholder: 'ejemplo@correo.com',
            passwordLabel: 'Contraseña',
            passwordPlaceholder: 'Tu contraseña',
            loginButton: 'Iniciar Sesión',
            forgotPassword: '¿Olvidaste tu contraseña?',
            noAccount: '¿No tienes cuenta?',
            register: 'Regístrate aquí'
          },
          dashboardHeader: {
            title: 'Panel de Aprendizaje',
            nav_courses: 'Mis Cursos',
            nav_progress: 'Mi Progreso',
            nav_resources: 'Recursos',
            nav_help: 'Ayuda',
            user_name: 'Familia García'
          },
          progressCard: {
            title: 'Mi Progreso',
            subject_math: 'Matemáticas',
            subject_language: 'Lenguaje',
            subject_creativity: 'Creatividad',
            achievement_unlocked: '¡Logro Desbloqueado!',
            achievement_desc: 'Has completado 5 lecciones esta semana',
            weekly_goal: 'Meta Semanal',
            weekly_goal_desc: '3 de 5 lecciones completadas'
          },
          videoCard: {
            watchClass: 'Ver Clase'
          },
          welcomeCard: {
            greeting_morning: 'Buenos días',
            greeting_afternoon: 'Buenas tardes',
            greeting_evening: 'Buenas noches',
            welcome_message: '¡Qué emocionante verte aquí! Hoy tenemos nuevas aventuras de aprendizaje esperándote.',
            next_class: 'Próxima clase:',
            class_details: 'Matemáticas Divertidas - Hoy 3:00 PM'
          },
          dashboard: {
            title1: 'Mis',
            title2: 'Clases',
            videos: [
              { title: 'Aprende los Colores', description: 'Video educativo para aprender los colores de forma divertida', category: 'Básico' },
              { title: 'Formas Geométricas', description: 'Descubre las formas básicas con ejercicios interactivos', category: 'Matemáticas' },
              { title: 'Números del 1 al 10', description: 'Aprende a contar de manera sencilla y divertida', category: 'Matemáticas' },
              { title: 'Abecedario Musical', description: 'Canciones para aprender las letras fácilmente', category: 'Lenguaje' },
              { title: 'Emociones y Sentimientos', description: 'Identifica y expresa tus emociones de forma saludable', category: 'Emocional' },
              { title: 'Ejercicios de Coordinación', description: 'Movimientos divertidos para mejorar la motricidad', category: 'Físico' }
            ]
          }
        }
      },
      en: {
        translation: {
          header: {
            nav: {
              home: 'Home',
              about: 'About Us',
              methodology: 'Methodology',
              programs: 'Programs',
              resources: 'Resources',
              contact: 'Contact'
            },
            login: 'Login',
            changeLanguage: 'Change language'
          },
          hero: {
            title1: 'Educational Support',
            title2: 'Specialized',
            subtitle: 'For children with unique abilities from 3 to 10 years old. An adapted, inclusive, and love-filled learning experience.',
            buttonMore: 'Learn More',
            buttonVideo: 'Watch Video',
            stat1: 'Families Supported',
            stat2: 'Family Satisfaction',
            stat3: 'Support Available'
          },
          feature: {
            title1: 'Our Specialized',
            title2: 'Approach',
            subtitle: 'Every child is unique. Our program adapts to individual needs to maximize the potential of each little one.',
            feature1_title: 'Emotional Support',
            feature1_desc: 'We develop socio-emotional skills in a safe and caring environment.',
            feature2_title: 'Cognitive Stimulation',
            feature2_desc: 'Adapted exercises to develop thinking and memory.',
            feature3_title: 'Music Therapy',
            feature3_desc: 'Music as a therapeutic tool for integral development.',
            feature4_title: 'Art and Creativity',
            feature4_desc: 'Artistic expression to communicate emotions and develop motor skills.'
          },
          testimonials: {
            title: 'Hear it straight from those who have experienced our program:',
            subtitle: 'Discover the stories of families who have transformed learning into an exciting adventure.',
            ask_parents: 'We ask parents',
            video1_question: 'What do you love about bina?',
            video2_question: 'Why bina?',
            video3_question: 'How is bina different?',
            video4_question: 'What do their children learn?'
          },
          logos_section: {
          },
          steps: {
            main_title: 'Get started in 3 easy steps',
            upcoming_dates: '2025 upcoming start dates: August 13, September 17',
            step: 'Step {{count}}',
            step1_title: 'Family sneak peek',
            step1_desc: 'Explore 8 biomes through the bina lens and get a tailored overview of our offerings for your family.',
            step2_title: 'Your child’s bina quest',
            step2_desc: 'Your child dives into the bina-verse with edu-play, and you receive custom growth strategies.',
            step3_title: 'Smooth sailing to day one',
            step3_desc: 'We guide your family through easy onboarding, prepping you for an awesome first day.',
            cta_button: 'Do we fit?'
          },
          footer: {
            title: 'Learn and Grow',
            description: 'Specialized education for children with unique abilities. Building bright futures with love and dedication.',
            nav_title: 'Navigation',
            nav_home: 'Home',
            nav_about: 'About Us',
            nav_methodology: 'Methodology',
            nav_programs: 'Programs',
            resources_title: 'Resources',
            resources_guides: 'Parent Guides',
            resources_activities: 'Activities',
            resources_blog: 'Blog',
            resources_faq: 'FAQ',
            contact_title: 'Contact',
            contact_address: 'Mexico City, Mexico',
            copyright: '© 2024 Learn and Grow. All rights reserved.',
            copyright_special: 'Built with love for our special children.'
          },
          stats: {
            item1_title: 'Skill Improvement',
            item1_desc: 'Measurable progress in 6 months',
            item2_title: 'International Accreditation',
            item2_desc: 'Certified educational quality',
            item3_title: 'Educator:Student Ratio',
            item3_desc: 'Personalized attention guaranteed'
          },
          loginModal: {
            error: 'Please enter your email and password',
            title: 'Welcome back',
            subtitle: 'Access your learning dashboard',
            emailLabel: 'Email Address',
            emailPlaceholder: 'example@email.com',
            passwordLabel: 'Password',
            passwordPlaceholder: 'Your password',
            loginButton: 'Login',
            forgotPassword: 'Forgot your password?',
            noAccount: 'Don\'t have an account?',
            register: 'Sign up here'
          },
          dashboardHeader: {
            title: 'Learning Panel',
            nav_courses: 'My Courses',
            nav_progress: 'My Progress',
            nav_resources: 'Resources',
            nav_help: 'Help',
            user_name: 'Garcia Family'
          },
          progressCard: {
            title: 'My Progress',
            subject_math: 'Math',
            subject_language: 'Language',
            subject_creativity: 'Creativity',
            achievement_unlocked: 'Achievement Unlocked!',
            achievement_desc: 'You have completed 5 lessons this week',
            weekly_goal: 'Weekly Goal',
            weekly_goal_desc: '3 of 5 lessons completed'
          },
          videoCard: {
            watchClass: 'Watch Class'
          },
          welcomeCard: {
            greeting_morning: 'Good morning',
            greeting_afternoon: 'Good afternoon',
            greeting_evening: 'Good evening',
            welcome_message: 'How exciting to see you here! We have new learning adventures waiting for you today.',
            next_class: 'Next class:',
            class_details: 'Fun Math - Today 3:00 PM'
          },
          dashboard: {
            title1: 'My',
            title2: 'Classes',
            videos: [
              { title: 'Learn the Colors', description: 'Educational video to learn colors in a fun way', category: 'Basic' },
              { title: 'Geometric Shapes', description: 'Discover basic shapes with interactive exercises', category: 'Math' },
              { title: 'Numbers from 1 to 10', description: 'Learn to count in a simple and fun way', category: 'Math' },
              { title: 'Musical Alphabet', description: 'Songs to learn the letters easily', category: 'Language' },
              { title: 'Emotions and Feelings', description: 'Identify and express your emotions in a healthy way', category: 'Emotional' },
              { title: 'Coordination Exercises', description: 'Fun movements to improve motor skills', category: 'Physical' }
            ]
          }
        }
      }
    }
  });

export default i18n;
