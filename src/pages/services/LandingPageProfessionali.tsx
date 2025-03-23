import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';

// Example landing pages
const landingPageExamples = [
  {
    title: "Mister Occhiali",
    url: "https://misterocchiali.leprimescelte.com/",
    image: "https://leprimescelte.com/wp-content/uploads/2025/03/misterocchiali-twenty.jpg"
  },
  {
    title: "Noleggio Studio Fotografico",
    url: "https://noleggiostudiofotografico.leprimescelte.com/",
    image: "https://leprimescelte.com/wp-content/uploads/2024/06/872c25a5-fdec-48d6-8390-4aebec1364be.png"
  },
  {
    title: "Acentro Services",
    url: "https://acentroservices.leprimescelte.com/",
    image: "https://leprimescelte.com/wp-content/uploads/2024/06/burocrazia.png"
  },
  {
    title: "Traduttore Milano",
    url: "https://traduttoremilano.leprimescelte.com/",
    image: "https://leprimescelte.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-27-at-12.21.21-1024x1024.jpeg"
  },
  {
    title: "Restauro Mobili Antichi",
    url: "https://restauromobiliantichi.leprimescelte.com/",
    image: "https://leprimescelte.com/wp-content/uploads/2025/02/madonnaprimaedopo.png"
  },
  {
    title: "Fumagalli Letti",
    url: "https://fumagalliletti.leprimescelte.com/",
    image: "https://leprimescelte.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-27-at-18.29.25-5.jpeg"
  }
];

export default function LandingPageProfessionali() {
  const { language } = useLanguage();
  const meta = metaContent.landingPageProfessionali[language];
  const [currentExampleIndex, setCurrentExampleIndex] = React.useState(0);
  const examplesPerView = 3;
  const maxExampleIndex = landingPageExamples.length - examplesPerView;

  const content = language === 'it' ? {
    title: 'Landing Page Professionali',
    subtitle: 'La Tua Landing Page Professionale in 5 Giorni Lavorativi',
    description: 'Non perdere tempo prezioso con sviluppatori che impiegano settimane. Il nostro processo ottimizzato ti garantisce una landing page professionale in tempi record.',
    features: [
      {
        title: 'Pronta in 5 giorni lavorativi',
        description: 'Ottieni la tua landing page operativa rapidamente.'
      },
      {
        title: 'Hosting incluso',
        description: 'Ci occupiamo noi dell\'hosting per te.'
      },
      {
        title: 'Ottimizzata per le conversioni',
        description: 'Progettata per massimizzare il tasso di conversione.'
      },
      {
        title: 'Contenuti creati per te',
        description: 'Creiamo contenuti coinvolgenti su misura per il tuo pubblico.'
      }
    ],
    process: {
      title: 'Il Nostro Metodo',
      steps: [
        {
          title: 'Giorno 1: Intervista e Briefing',
          description: 'Raccogliamo tutte le informazioni necessarie per comprendere le tue esigenze.'
        },
        {
          title: 'Giorno 2-3: Design e Sviluppo',
          description: 'Il nostro team progetta e sviluppa la tua landing page.'
        },
        {
          title: 'Giorno 4: Revisione e Modifiche',
          description: 'Rivedi la landing page e fornisci feedback.'
        },
        {
          title: 'Giorno 5: Pubblicazione',
          description: 'Pubblichiamo la tua landing page e ci assicuriamo che funzioni correttamente.'
        }
      ]
    },
    examples: {
      title: 'Esempi di Landing Page',
      subtitle: 'Dai un\'occhiata ad alcune delle landing page che abbiamo realizzato',
      viewButton: 'Visita il sito'
    },
    cta: {
      title: 'Pronto a lanciare la tua landing page?',
      description: 'Contattaci per una consulenza gratuita',
      button: 'Inizia Ora'
    }
  } : {
    title: 'Professional Landing Pages',
    subtitle: 'Your Professional Landing Page in 5 Business Days',
    description: 'Don\'t waste valuable time with developers who take weeks. Our optimized process guarantees you a professional landing page in record time.',
    features: [
      {
        title: 'Ready in 5 business days',
        description: 'Get your landing page up and running quickly.'
      },
      {
        title: 'Hosting included',
        description: 'We handle the hosting so you don\'t have to.'
      },
      {
        title: 'Optimized for conversions',
        description: 'Designed to maximize your conversion rates.'
      },
      {
        title: 'Content created for you',
        description: 'We create compelling content tailored to your audience.'
      }
    ],
    process: {
      title: 'Our Method',
      steps: [
        {
          title: 'Day 1: Interview and Briefing',
          description: 'We gather all the necessary information to understand your needs.'
        },
        {
          title: 'Day 2-3: Design and Development',
          description: 'Our team designs and develops your landing page.'
        },
        {
          title: 'Day 4: Review and Modifications',
          description: 'You review the landing page and provide feedback.'
        },
        {
          title: 'Day 5: Publication',
          description: 'We publish your landing page and ensure it\'s running smoothly.'
        }
      ]
    },
    examples: {
      title: 'Landing Page Examples',
      subtitle: 'Take a look at some of the landing pages we\'ve created',
      viewButton: 'Visit Site'
    },
    cta: {
      title: 'Ready to launch your landing page?',
      description: 'Contact us for a free consultation',
      button: 'Start Now'
    }
  };

  const nextExample = () => {
    setCurrentExampleIndex(prev => Math.min(prev + 1, maxExampleIndex));
  };

  const prevExample = () => {
    setCurrentExampleIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/landing-page-professionali"
      />
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{content.title}</span>
              <span className="block text-blue-600 text-3xl sm:text-4xl mt-3">
                {content.subtitle}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {content.description}
            </p>
          </motion.div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center">
                    <div className="ml-4">
                      <h2 className="text-lg font-medium text-gray-900">{feature.title}</h2>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Landing Page Examples Slider */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">{content.examples.title}</h2>
              <p className="mt-4 text-xl text-gray-500">{content.examples.subtitle}</p>
            </div>

            <div className="relative">
              {/* Previous button */}
              <button 
                onClick={prevExample} 
                disabled={currentExampleIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
                  currentExampleIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                }`}
                aria-label="Previous example"
              >
                <ChevronLeft className="h-6 w-6 text-blue-600" />
              </button>

              {/* Examples slider */}
              <div className="overflow-hidden mx-10">
                <motion.div 
                  className="flex gap-4"
                  animate={{
                    x: -currentExampleIndex * (100 / examplesPerView) + '%'
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  {landingPageExamples.map((example, index) => (
                    <div 
                      key={index} 
                      className="w-full md:w-1/3 flex-shrink-0 px-2"
                    >
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <a 
                          href={example.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <img 
                            src={example.image} 
                            alt={example.title} 
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">{example.title}</h3>
                            <div className="flex justify-between items-center">
                              <span className="text-blue-600 inline-flex items-center">
                                {content.examples.viewButton}
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Next button */}
              <button 
                onClick={nextExample} 
                disabled={currentExampleIndex >= maxExampleIndex}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md ${
                  currentExampleIndex >= maxExampleIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                }`}
                aria-label="Next example"
              >
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
              {content.process.title}
            </h2>
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-between">
                {content.process.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-white px-4"
                  >
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold">
                        {index + 1}
                      </div>
                      <div className="mt-4">
                        <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-sm text-gray-500">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
          >
            <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
              <div className="px-6 py-12 max-w-xl mx-auto sm:px-10 sm:py-16 lg:max-w-screen-xl lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    {content.cta.title}
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-blue-100">
                    {content.cta.description}
                  </p>
                  <Link
                    to="/"
                    state={{ scrollToContact: true }}
                    className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
                  >
                    {content.cta.button}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
