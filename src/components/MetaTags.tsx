import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface MetaTagsProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export default function MetaTags({ title, description, path, image = 'https://internetvalore.it/og-image.jpg' }: MetaTagsProps) {
  const { language } = useLanguage();
  const domain = 'https://internetvalore.it';
  const fullPath = `${domain}/${language}${path}`;
  const alternateIt = `${domain}/it${path}`;
  const alternateEn = `${domain}/en${path}`;

  useEffect(() => {
    // Basic meta tags
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);

    // Canonical and alternate links
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullPath);

    // Language alternates
    let alternateItLink = document.querySelector('link[hreflang="it"]');
    let alternateEnLink = document.querySelector('link[hreflang="en"]');
    let alternateXDefaultLink = document.querySelector('link[hreflang="x-default"]');

    if (!alternateItLink) {
      alternateItLink = document.createElement('link');
      alternateItLink.setAttribute('rel', 'alternate');
      alternateItLink.setAttribute('hreflang', 'it');
      document.head.appendChild(alternateItLink);
    }
    if (!alternateEnLink) {
      alternateEnLink = document.createElement('link');
      alternateEnLink.setAttribute('rel', 'alternate');
      alternateEnLink.setAttribute('hreflang', 'en');
      document.head.appendChild(alternateEnLink);
    }
    if (!alternateXDefaultLink) {
      alternateXDefaultLink = document.createElement('link');
      alternateXDefaultLink.setAttribute('rel', 'alternate');
      alternateXDefaultLink.setAttribute('hreflang', 'x-default');
      document.head.appendChild(alternateXDefaultLink);
    }

    alternateItLink.setAttribute('href', alternateIt);
    alternateEnLink.setAttribute('href', alternateEn);
    alternateXDefaultLink.setAttribute('href', domain);

    // Open Graph tags
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', fullPath);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', 'website');
    document.querySelector('meta[property="og:site_name"]')?.setAttribute('content', 'Internet Valore');
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'it' ? 'it_IT' : 'en_US');

    // Twitter Card tags
    document.querySelector('meta[name="twitter:card"]')?.setAttribute('content', 'summary_large_image');
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image);

    // Social media profiles
    const socialScriptId = 'social-media-profile';
    let socialScript = document.getElementById(socialScriptId);
    if (socialScript) {
      socialScript.remove();
    }
    socialScript = document.createElement('script');
    socialScript.type = 'application/ld+json';
    socialScript.id = socialScriptId;
    socialScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Internet Valore",
      "url": "https://internetvalore.it",
      "logo": "https://internetvalore.it/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/internet-valore-s.r.l./",
        "https://www.facebook.com/internetvalore/",
        "https://www.instagram.com/ecommerceleadgeneration/"
      ]
    });
    document.head.appendChild(socialScript);

    // Define serviceArea based on language
    let serviceArea;
    if (language === 'it') {
      serviceArea = ["Italia", "Lombardia", "Milano", "Monza-Lecco-Como", "Canton Ticino"];
    } else {
      serviceArea = ["Europe"];
    }

    // Service schema for each service page
    const serviceScriptId = 'service-schema';
    if (path.includes('/services/')) {
      let serviceScript = document.getElementById(serviceScriptId);
      if (serviceScript) {
        serviceScript.remove();
      }
      serviceScript = document.createElement('script');
      serviceScript.type = 'application/ld+json';
      serviceScript.id = serviceScriptId;
      serviceScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "Internet Valore",
          "url": "https://internetvalore.it"
        },
        "areaServed": serviceArea,
        "availableLanguage": [language === 'it' ? "Italian" : "English"],
        "serviceType": title, // Added serviceType to match the title
        "priceRange": "1000-30000 EUR annui"
      });
      document.head.appendChild(serviceScript);

      // Review schema
      const reviewScriptId = 'review-schema';
      let reviewScript = document.getElementById(reviewScriptId);
      if (serviceScript) {
        serviceScript.remove();
      }
      reviewScript = document.createElement('script');
      reviewScript.type = 'application/ld+json';
      reviewScript.id = reviewScriptId;
      reviewScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "reviewCount": "100",
        "itemReviewed": {
          "@type": "Service",
          "name": title
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Mario Rossi"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "reviewBody": "Servizio eccellente! Abbiamo visto un aumento significativo dei lead grazie alle loro strategie."
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Giulia Bianchi"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4"
            },
            "reviewBody": "Ottima agenzia, molto professionali e disponibili. Consigliati!"
          }
        ]
      });
      document.head.appendChild(reviewScript);
    } else {
      document.getElementById(serviceScriptId)?.remove();
      document.getElementById('review-schema')?.remove();
    }

    // Article schema for blog posts (if any)
    const articleScriptId = 'article-schema';
    if (path.includes('/blog/')) {
      let articleScript = document.getElementById(articleScriptId);
      if (articleScript) {
        articleScript.remove();
      }
      articleScript = document.createElement('script');
      articleScript.type = 'application/ld+json';
      articleScript.id = articleScriptId;
      articleScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image,
        "publisher": {
          "@type": "Organization",
          "name": "Internet Valore",
          "logo": {
            "@type": "ImageObject",
            "url": "https://internetvalore.it/logo.png"
          }
        }
      });
      document.head.appendChild(articleScript);
    } else {
      document.getElementById(articleScriptId)?.remove();
    }

    // Local business schema for contact page
    const localBusinessScriptId = 'local-business-schema';
    if (path === '/contact') {
      let localBusinessScript = document.getElementById(localBusinessScriptId);
      if (localBusinessScript) {
        localBusinessScript.remove();
      }
      localBusinessScript = document.createElement('script');
      localBusinessScript.type = 'application/ld+json';
      localBusinessScript.id = localBusinessScriptId;
      localBusinessScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Internet Valore",
        "image": "https://internetvalore.it/logo.png",
        "telephone": "+39 02 30316892",
        "email": "info@internetvalore.it",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Larga 31",
          "addressLocality": "Milano",
          "postalCode": "20122",
          "addressCountry": "IT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "45.460447",
          "longitude": "9.19191"
        },
        "url": "https://internetvalore.it",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      });
      document.head.appendChild(localBusinessScript);
    } else {
      document.getElementById(localBusinessScriptId)?.remove();
    }
  }, [title, description, fullPath, image, language, path]);

  return null;
}
