import React from 'react';
import { Users, Target, BarChart2, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';

export default function LeadGeneration() {
  const { language } = useLanguage();
  const meta = metaContent.leadGeneration[language];

  const content = language === 'it' ? {
    title: 'Lead Generation',
    subtitle: 'Acquisiamo contatti qualificati per il tuo business',
    description: 'Strategie avanzate di lead generation per aumentare le conversioni e far crescere il tuo business',
    features: [
      {
        title: 'Automazione Completa',
        description: 'Processi automatizzati per la gestione dei lead dall\'acquisizione alla conversione'
      },
      {
        title: 'Integrazione WhatsApp',
        description: 'Comunicazione diretta e immediata attraverso WhatsApp Business'
      },
      {
        title: 'Assistente Virtuale 24/7',
        description: 'Leonardo, il nostro assistente virtuale, sempre disponibile per i tuoi clienti'
      },
      {
        title: 'Ottimizzazione Continua',
        description: 'Monitoraggio e miglioramento costante delle performance'
      }
    ],
    process: {
      title: 'Il Nostro Processo',
      steps: [
        {
          title: 'Analisi del Target',
          description: 'Identifichiamo il tuo pubblico ideale'
        },
        {
          title: 'Strategia Personalizzata',
          description: 'Sviluppiamo una strategia su misura'
        },
        {
          title: 'Implementazione',
          description: 'Attiviamo i canali di acquisizione'
        },
        {
          title: 'Ottimizzazione',
          description: 'Monitoriamo e miglioriamo i risultati'
        }
      ]
    },
    cta: {
      title: 'Pronto a generare più lead?',
      description: 'Contattaci per una consulenza gratuita',
      button: 'Inizia Ora'
    }
  } : {
    title: 'Lead Generation',
    subtitle: 'We acquire qualified contacts for your business',
    description: 'Advanced lead generation strategies to increase conversions and grow your business',
    features: [
      {
        title: 'Complete Automation',
        description: 'Automated processes for lead management from acquisition to conversion'
      },
      {
        title: 'WhatsApp Integration',
        description: 'Direct and immediate communication through WhatsApp Business'
      },
      {
        title: 'Virtual Assistant 24/7',
        description: 'Leonardo, our virtual assistant, always available for your customers'
      },
      {
        title: 'Continuous Optimization',
        description: 'Constant monitoring and performance improvement'
      }
    ],
    process: {
      title: 'Our Process',
      steps: [
        {
          title: 'Target Analysis',
          description: 'We identify your ideal audience'
        },
        {
          title: 'Custom Strategy',
          description: 'We develop a tailored strategy'
        },
        {
          title: 'Implementation',
          description: 'We activate acquisition channels'
        },
        {
          title: 'Optimization',
          description: 'We monitor and improve results'
        }
      ]
    },
    cta: {
      title: 'Ready to generate more leads?',
      description: 'Contact us for a free consultation',
      button: 'Start Now'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/services/lead-generation"
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
                        {index === 0 && <Users className="h-6 w-6" />}
                        {index === 1 && <Target className="h-6 w-6" />}
                        {index === 2 && <Phone className="h-6 w-6" />}
                        {index === 3 && <BarChart2 className="h-6 w-6" />}
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
