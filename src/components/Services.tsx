import React, { useState } from 'react';
import { Users, ShoppingBag, Target, BarChart, Rocket, Phone, MessageCircle, ArrowRight, Layout, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

export default function Services() {
  const { t } = useLanguage();
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services = [
    {
      title: t('services.sections.leadGeneration.title'),
      description: t('services.sections.leadGeneration.description'),
      icon: Users,
      features: t('services.sections.leadGeneration.features'),
      path: '/services/lead-generation'
    },
    {
      title: t('services.sections.ecommerce.title'),
      description: t('services.sections.ecommerce.description'),
      icon: ShoppingBag,
      features: t('services.sections.ecommerce.features'),
      path: '/services/ecommerce'
    },
    {
      title: t('services.sections.ads.title'),
      description: t('services.sections.ads.description'),
      icon: Target,
      features: t('services.sections.ads.features'),
      path: '/services/ads'
    },
    {
      title: t('services.sections.analytics.title'),
      description: t('services.sections.analytics.description'),
      icon: BarChart,
      features: t('services.sections.analytics.features'),
      path: '/services/analytics'
    },
    {
      title: t('services.sections.instantWebsites.title'),
      description: t('services.sections.instantWebsites.description'),
      icon: Rocket,
      features: t('services.sections.instantWebsites.features'),
      path: '/instant-websites'
    },
    {
      title: t('services.sections.whatsapp.title'),
      description: t('services.sections.whatsapp.description'),
      icon: MessageCircle,
      features: t('services.sections.whatsapp.features'),
      whatsapp: true
    },
    {
      title: t('services.sections.landingPageProfessionali.title'),
      description: t('services.sections.landingPageProfessionali.description'),
      icon: Layout,
      features: t('services.sections.landingPageProfessionali.features'),
      path: '/landing-page-professionali',
      whatsapp: false
    },
    {
      title: t('services.sections.rispondiSubito.title'),
      description: t('services.sections.rispondiSubito.description'),
      icon: PhoneCall,
      features: t('services.sections.rispondiSubito.features'),
      path: '/rispondi-subito',
      whatsapp: false
    }
  ];

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent("Ciao! Vorrei avere maggiori informazioni sui vostri servizi.");
    window.open(`https://wa.me/393475012682?text=${message}`, '_blank');
  };

  return (
    <div className="py-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-base text-blue-600 font-semibold tracking-wide uppercase"
          >
            {t('services.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            {t('services.subtitle')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
          >
            {t('services.description')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="mt-10"
        >
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="pt-6 perspective-1000"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative transition-transform duration-700 transform-style-3d cursor-pointer ${flippedCards[index] ? 'rotate-y-180' : ''
                    }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of card */}
                  <div
                    className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="-mt-6">
                      <div>
                        <motion.span
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg"
                        >
                          <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </motion.span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{service.title}</h3>
                      <p className="mt-5 text-base text-gray-500">{service.description}</p>
                      {!service.whatsapp && (
                        <ul className="mt-4 space-y-2">
                          {service.features.map((feature: string) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <p className="ml-3 text-sm text-gray-500">{feature}</p>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                      {service.whatsapp && (
                        <motion.button
                          onClick={handleWhatsAppClick}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
                        >
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Invia messaggio
                        </motion.button>
                      )}
                    </div>
                  </div>

                  {/* Back of card */}
                  <div
                    className="absolute inset-0 h-full w-full bg-white rounded-lg px-6 py-8 shadow-lg flex flex-col items-center justify-center rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{service.title}</h3>
                    {service.whatsapp ? (
                      <motion.button
                        onClick={handleWhatsAppClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 mb-6"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Invia messaggio o vocale
                      </motion.button>
                    ) : (
                      <>
                        <motion.a
                          href="tel:800931785"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 mb-6"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone className="h-5 w-5 mr-2" />
                          {t('nav.call')}
                        </motion.a>
                        <Link
                          to={service.path}
                          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Scopri di più <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </>
                    )}
                    <p className="text-center text-gray-600 mt-4">
                      {t('services.available247')}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
