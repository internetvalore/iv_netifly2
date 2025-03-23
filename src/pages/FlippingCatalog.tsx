import React from 'react';
import { Book, Smartphone, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function FlippingCatalog() {
  const { language } = useLanguage();
  const meta = metaContent.flippingCatalog[language];

  const content = language === 'it' ? {
    title: 'Flipping Catalog',
    description: 'Trasforma il tuo catalogo in un\'esperienza digitale interattiva',
    subtitle: 'Cataloghi sfogliabili che catturano l\'attenzione e aumentano le conversioni',
    advantages: {
      title: 'Vantaggi del Flipping Catalog',
      items: [
        {
          title: 'Esperienza Immersiva',
          description: 'Effetto di sfogliamento realistico che coinvolge i visitatori'
        },
        {
          title: 'Ottimizzato per Mobile',
          description: 'Perfetta visualizzazione su tutti i dispositivi'
        },
        {
          title: 'Conversioni Migliorate',
          description: 'Call-to-action integrate per aumentare le vendite'
        }
      ]
    },
    useCases: {
      title: 'Casi d\'uso',
      items: [
        {
          title: 'Cataloghi Prodotti',
          description: 'Presenta i tuoi prodotti in modo coinvolgente e interattivo'
        },
        {
          title: 'Brochure Aziendali',
          description: 'Racconta la tua storia aziendale in modo dinamico'
        },
        {
          title: 'Menu Ristoranti',
          description: 'Crea menu digitali interattivi con foto e descrizioni'
        }
      ]
    }
  } : {
    title: 'Flipping Catalog',
    description: 'Transform your catalog into an interactive digital experience',
    subtitle: 'Page-turning catalogs that capture attention and increase conversions',
    advantages: {
      title: 'Flipping Catalog Advantages',
      items: [
        {
          title: 'Immersive Experience',
          description: 'Realistic page-turning effect that engages visitors'
        },
        {
          title: 'Mobile Optimized',
          description: 'Perfect visualization on all devices'
        },
        {
          title: 'Improved Conversions',
          description: 'Integrated call-to-actions to increase sales'
        }
      ]
    },
    useCases: {
      title: 'Use Cases',
      items: [
        {
          title: 'Product Catalogs',
          description: 'Present your products in an engaging and interactive way'
        },
        {
          title: 'Company Brochures',
          description: 'Tell your company story dynamically'
        },
        {
          title: 'Restaurant Menus',
          description: 'Create interactive digital menus with photos and descriptions'
        }
      ]
    }
  };

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/flipping-catalog"
        priceRange="$50 - $200"
      />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-base text-blue-600 font-semibold tracking-wide uppercase"
              {...fadeInUp}
            >
              {content.title}
            </motion.h2>
            <motion.p
              className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.description}
            </motion.p>
            <motion.p
              className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="aspect-w-16 aspect-h-9"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="object-cover shadow-lg rounded-lg"
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Group of people looking at tablet content"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className="space-y-6"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  show: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {content.advantages.title}
                </h3>
                <div className="space-y-4">
                  {content.advantages.items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          {index === 0 && <Book className="h-6 w-6 text-blue-600" />}
                          {index === 1 && <Smartphone className="h-6 w-6 text-blue-600" />}
                          {index === 2 && <Zap className="h-6 w-6 text-blue-600" />}
                        </motion.div>
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                        <p className="mt-1 text-gray-500">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <div className="bg-blue-50 rounded-lg px-6 py-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{content.useCases.title}</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {content.useCases.items.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-lg font-medium text-gray-900">{item.title}</h4>
                    <p className="mt-2 text-gray-500">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
