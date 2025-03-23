import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from './contexts/LanguageContext';
import MetaTags from './components/MetaTags';
import { metaContent } from './seo/metaContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './pages/About';
import FlippingCatalog from './pages/FlippingCatalog';
import Specializations from './pages/Specializations';
import InstantWebsites from './pages/InstantWebsites';
import LeadGeneration from './pages/services/LeadGeneration';
import Ecommerce from './pages/services/Ecommerce';
import Ads from './pages/services/Ads';
import Analytics from './pages/services/Analytics';
import NavigationGuide from './components/NavigationGuide';
import LandingPageProfessionali from './pages/services/LandingPageProfessionali';
import RispondiSubito from './pages/services/RispondiSubito';
import Testimonials from './pages/Testimonials';
import TestimonialsSlider from './components/TestimonialsSlider';
import ErrorBoundary from './components/ErrorBoundary';
import LandingPage from './pages/landing_page/LandingPage';
import GoogleAdsLandingPage from './pages/landing_page/GoogleAdsLandingPage';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, document.title);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function App() {
  const location = useLocation();
  const { language } = useLanguage();
  const meta = metaContent.home[language];

  // Get language from URL
  const urlLang = location.pathname.split('/')[1];
  const isValidLang = urlLang === 'it' || urlLang === 'en';

  // If no valid language in URL, redirect to current language
  if (!isValidLang) {
    return <Navigate to={`/${language}${location.pathname}`} replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {location.pathname === `/${language}/` && (
        <MetaTags
          title={meta.title}
          description={meta.description}
          path="/"
        />
      )}
      <Navbar />
      <ScrollHandler />
      <div className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <ErrorBoundary>
            <Routes location={location} key={location.pathname}>
              <Route path="/:lang/" element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Hero />
                  <Services />
                  <TestimonialsSlider />
                  <Contact />
                </motion.div>
              } />
              {/* Add :lang parameter to all routes */}
              <Route path="/:lang/services/*" element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="exit"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Services />
                </motion.div>
              } />
              {/* Add similar routes for all other pages */}
              <Route path="/:lang/services/lead-generation" element={<LeadGeneration />} />
              <Route path="/:lang/services/ecommerce" element={<Ecommerce />} />
              <Route path="/:lang/services/ads" element={<Ads />} />
              <Route path="/:lang/services/analytics" element={<Analytics />} />
              <Route path="/:lang/services/rispondi-subito" element={<RispondiSubito />} />
              <Route path="/:lang/instant-websites" element={<InstantWebsites />} />
              <Route path="/:lang/flipping-catalog" element={<FlippingCatalog />} />
              <Route path="/:lang/specializations" element={<Specializations />} />
              <Route path="/:lang/about" element={<About />} />
              <Route path="/:lang/landing-page-professionali" element={<LandingPageProfessionali />} />
              <Route path="/:lang/testimonials" element={<Testimonials />} />
              <Route path="/:lang/landing" element={<LandingPage />} />
              <Route path="/:lang/google-ads" element={<GoogleAdsLandingPage />} />
              
              {/* Redirect old URLs to new language-prefixed URLs */}
              <Route path="/services/*" element={<Navigate to={`/${language}/services`} replace />} />
              <Route path="/instant-websites" element={<Navigate to={`/${language}/instant-websites`} replace />} />
              <Route path="/flipping-catalog" element={<Navigate to={`/${language}/flipping-catalog`} replace />} />
              <Route path="/specializations" element={<Navigate to={`/${language}/specializations`} replace />} />
              <Route path="/about" element={<Navigate to={`/${language}/about`} replace />} />
              <Route path="/landing-page-professionali" element={<Navigate to={`/${language}/landing-page-professionali`} replace />} />
              <Route path="/testimonials" element={<Navigate to={`/${language}/testimonials`} replace />} />
              <Route path="/landing" element={<Navigate to={`/${language}/landing/`} replace />} />
              <Route path="/google-ads" element={<Navigate to={`/${language}/google-ads/`} replace />} />

              {/* Catch all redirect */}
              <Route path="*" element={<Navigate to={`/${language}/`} replace />} />
            </Routes>
          </ErrorBoundary>
        </AnimatePresence>
      </div>
      <NavigationGuide />
      <Footer />
    </div>
  );
}

export default App;
