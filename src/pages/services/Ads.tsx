import React from 'react';
import { Target, TrendingUp, BarChart2, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';

export default function Ads() {
  const { language } = useLanguage();
  const meta = metaContent.ads[language];

  const content = language === 'it' ? {
    title: 'Gestione Ads',
    subtitle: 'Campagne pubblicitarie che generano risultati',
    description: 'Gestiamo le tue campagne pubblicitarie con focus sul ROI e risultati misurabili',
    features: [
      {
        title: 'Ottimizzazione ROI',
        description: 'Massimizziamo il ritorno sull\'investimento pubblicitario'
      },
      {
        title: 'Test A/B Sistematici',
        description: 'Ottimizzazione continua degli annunci attraverso test scientifici'
      },
      {
        title: 'Report Dettagliati',
        description: 'Report settimanali completi sulle performance delle campagne'
      },
      {
        title: 'Targeting Demografico',
        description: 'Raggiungimento preciso del tuo pubblico target ideale'
      }
    ],
    process: {
      title: 'Il Nostro Metodo',
      steps: [
        {
          title: 'Analisi di Mercato',
          description: 'Studio del mercato e della concorrenza'
        },
        {
          title: 'Strategia Ads',
          description: 'Pianificazione delle campagne pubblicitarie'
        },
        {
          title: 'Implementazione',
          description: 'Creazione e lancio delle campagne'
        },
        {
          title: 'Ottimizzazione',
          description: 'Monitoraggio e miglioramento continuo'
        }
      ]
    },
    cta: {
      title: 'Pronto a migliorare le tue campagne?',
      description: 'Contattaci per una consulenza gratuita',
      button: 'Inizia Ora'
    }
  } : {
    title: 'Ads Management',
    subtitle: 'Advertising campaigns that generate results',
    description: 'We manage your advertising campaigns with a focus on ROI and measurable results',
    features: [
      {
        title: 'ROI Optimization',
        description: 'We maximize return on advertising investment'
      },
      {
        title: 'Systematic A/B Testing',
        description: 'Continuous ad optimization through scientific testing'
      },
      {
        title: 'Detailed Reports',
        description: 'Complete weekly reports on campaign performance'
      },
      {
        title: 'Demographic Targeting',
        description: 'Precise reaching of your ideal target audience'
      }
    ],
    process: {
      title: 'Our Method',
      steps: [
        {
          title: 'Market Analysis',
          description: 'Study of the market and competition'
        },
        {
          title: 'Ads Strategy',
          description: 'Planning of advertising campaigns'
        },
        {
          title: 'Implementation',
          description: 'Creation and launch of campaigns'
        },
        {
          title: 'Optimization',
          description: 'Continuous monitoring and improvement'
        }
      ]
    },
    cta: {
      title: 'Ready to improve your campaigns?',
      description: 'Contact us for a free consultation',
      button: 'Start Now'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/services/ads"
        priceRange="$200 - $800"
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
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        {index === 0 && <Target className="h-6 w-6" />}
                        {index === 1 && <TrendingUp className="h-6 w-6" />}
                        {index === 2 && <BarChart2 className="h-6 w-6" />}
                        {index === 3 && <Search className="h-6 w-6" />}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h2 className="text-lg font-medium text-gray-900">{feature.title}</h2>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

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
