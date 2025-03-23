import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaTags from '../../components/MetaTags';
import { metaContent } from '../../seo/metaContent';

export default function RispondiSubito() {
  const { language } = useLanguage();
  const meta = metaContent.rispondiSubito[language];

  const content = language === 'it' ? {
    title: 'RispondoSubito',
    subtitle: 'Centralino intelligente per rispondere H24',
    description: 'Centralino intelligente per rispondere H24, aumentare le vendite e migliorare l\'assistenza clienti.',
    features: [
      {
        title: 'Risponditore automatico H24',
        description: 'Disponibile 24 ore su 24, 7 giorni su 7 per non perdere mai una chiamata.'
      },
      {
        title: 'Smistamento intelligente delle chiamate',
        description: 'Trasferimento delle chiamate al reparto giusto, senza attese inutili.'
      },
      {
        title: 'Integrazione con CRM',
        description: 'Tutte le informazioni sui clienti a portata di mano, per un\'assistenza personalizzata.'
      },
      {
        title: 'Nessun costo per operatore',
        description: 'Risparmia sui costi del personale e aumenta l\'efficienza.'
      }
    ],
    process: {
      title: 'Come Funziona',
      steps: [
        {
          title: 'Configurazione',
          description: 'Definisci le regole di risposta e smistamento'
        },
        {
          title: 'Integrazione',
          description: 'Collega il centralino al tuo CRM e agli altri strumenti aziendali'
        },
        {
          title: 'Attivazione',
          description: 'Metti online il centralino e inizia a rispondere alle chiamate'
        },
        {
          title: 'Monitoraggio',
          description: 'Controlla le statistiche e ottimizza le performance'
        }
      ]
    },
    cta: {
      title: 'Pronto a migliorare il tuo servizio clienti?',
      description: 'Contattaci per una consulenza gratuita',
      button: 'Inizia Ora'
    }
  } : {
    title: 'RispondoSubito',
    subtitle: 'Intelligent call answering to respond 24/7',
    description: 'Intelligent call answering to respond 24/7, increase sales and improve customer support.',
    features: [
      {
        title: '24/7 automatic answering',
        description: 'Available 24 hours a day, 7 days a week to never miss a call.'
      },
      {
        title: 'Intelligent call routing',
        description: 'Transfer calls to the right department, without unnecessary waiting.'
      },
      {
        title: 'CRM integration',
        description: 'All customer information at your fingertips for personalized support.'
      },
      {
        title: 'No operator costs',
        description: 'Save on personnel costs and increase efficiency.'
      }
    ],
    process: {
      title: 'How it Works',
      steps: [
        {
          title: 'Configuration',
          description: 'Define the answering and routing rules'
        },
        {
          title: 'Integration',
          description: 'Connect the switchboard to your CRM and other business tools'
        },
        {
          title: 'Activation',
          description: 'Put the switchboard online and start answering calls'
        },
        {
          title: 'Monitoring',
          description: 'Check the statistics and optimize performance'
        }
      ]
    },
    cta: {
      title: 'Ready to improve your customer service?',
      description: 'Contact us for a free consultation',
      button: 'Start Now'
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/services/rispondi-subito"
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
