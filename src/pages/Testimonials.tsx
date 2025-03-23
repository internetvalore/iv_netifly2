import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import MetaTags from '../components/MetaTags';
import { metaContent } from '../seo/metaContent';

// Google reviews URL
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Internet%20Valore%20srl%20Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDG0NDAzMLc0NzAzsTA2MQESGxgZXzHKeeaVpBYlpZYohCXm5BelKhQX5SgEpSan5hVn5udlLmIloAAAalPXI10AAAA&rldimm=14190607970648344483&tbm=lcl&hl=it&sa=X&ved=0CCEQ9fQKKABqFwoTCLDmluTPnowDFQAAAAAdAAAAABAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews";

// Real Google reviews, filtered to remove replies and irrelevant content
const reviews = [
  {
    author: "Paradigma 900 S.r.l.",
    company: "",
    rating: 5,
    body: "Ottimo consulente, gentile e disponibile. Super consigliato!"
  },
  {
    author: "Simone Labianca",
    company: "",
    rating: 5,
    body: "Professionalità, competenza e gentilezza. Il tutto mixato con entusiasmo di chi ama quello che fa. Consigliatissimo"
  },
  {
    author: "Guido Avolio",
    company: "",
    rating: 5,
    body: "Un'agenzia di valore, di nome e di fatto, che utilizza gli strumenti più attuali per realizzare gli obiettivi del cliente. Eccellente!"
  },
  {
    author: "Camerette Web",
    company: "",
    rating: 5,
    body: "Gentilezza, competenza e disponibilità nell'accontentare il cliente in tutte le sue richieste. Andrea super Top!"
  },
  {
    author: "Nicola Testa",
    company: "",
    rating: 5,
    body: "Grande professionalità e competenza."
  },
  {
    author: "Emanuela Pasolini",
    company: "",
    rating: 5,
    body: "Andrea super professionista mi ha risolto un grande problema. Sempre grazie"
  },
  {
    author: "Raffaele Visconti",
    company: "",
    rating: 5,
    body: "Collaboro con Andrea da diversi anni! Specialista nel migliorare le vendite dei tuoi prodotto, servizi e le visite al tuo sito."
  },
  {
    author: "Leandro Diana",
    company: "",
    rating: 5,
    body: "Agenzia guidata dal bravissimo Andrea Falzin, talento del marketing e dell'ecommerce"
  },
  {
    author: "Dott. Loredana Leonforte",
    company: "",
    rating: 5,
    body: "Professionista preparato, disponibile nel comprendere le diverse esigenze. Consigliatissimo"
  },
  {
    author: "Vittorio Orefice",
    company: "",
    rating: 5,
    body: "Andrea è quel tipo di persona che vuoi aver vicino quando hai un problema tecnico. Ma va benissimo anche per dividere della buona cucina!"
  },
  {
    author: "Alessandro Tettamanti",
    company: "",
    rating: 5,
    body: "Ottimo servizio."
  },
  {
    author: "Matteo Cereda",
    company: "ortodacoltivare.it",
    rating: 5,
    body: "Ho trovato in Internet Valore e in Andrea Falzin un partner affidabile e competente per la gestione delle ads. Andrea ha la capacità di ottimizzare le campagne in modo davvero eccellente, per ottenere conversioni e per ridurre il CPC. Consigliatissimo."
  },
  {
    author: "Giovanni Lugli",
    company: "Immobiliare Milano",
    rating: 5,
    body: "Andrea Falzin è una persona molto gentile, molto preparato e molto paziente, infatti è riuscito a spiegarmi con calma alcuni aspetti del web che mi erano di difficile comprensione oltre a mettere in moto gli strumenti necessari per farmi vedere e farmi contattare dai clienti."
  },
  {
    author: "Francesco Acefnors",
    company: "",
    rating: 5,
    body: "Persona seria, disponibile e competente!! Consigliatissimo"
  },
  {
    author: "Stefano Cocconcelli",
    company: "",
    rating: 5,
    body: "Sono grandi professionisti al servizio della comunicazione. Preparati e professionali"
  },
  {
    author: "Andrea Vandoni",
    company: "",
    rating: 5,
    body: "Ho trovato in Internet Valore disponibilità e professionalità. I servizi proposti sono molto validi e permettono di stabilire un piano di marketing strategico che porta ogni cliente ad una crescita costante."
  },
  {
    author: "Hari-Om The Yoga Home",
    company: "",
    rating: 5,
    body: "Internet Valore nella persona di Andrea Falzin oltre a significare grande competenza tecnica è anche disponibilità e gentilezza. Il nostro sito, in particolare sul mercato estero, è passato dall'essere totalmente sconosciuto ad avere un visibilità mondiale negli ambiti per noi interessanti."
  }
];

export default function Testimonials() {
  const { language } = useLanguage();
  const meta = metaContent.testimonials[language];

  return (
    <>
      <MetaTags
        title={meta.title}
        description={meta.description}
        path="/testimonials"
      />
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {language === 'it' ? 'Cosa dicono i nostri clienti' : 'What our clients are saying'}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {language === 'it' 
                ? 'Ecco alcune delle recensioni che i nostri clienti hanno condiviso sulla loro esperienza con noi.' 
                : 'These are some of the reviews our clients have shared about their experience working with us.'}
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {reviews.map((review, index) => (
                <a 
                  key={index} 
                  href={GOOGLE_REVIEWS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        {/* Star icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{review.author}</p>
                      {review.company && (
                        <p className="ml-16 text-sm text-gray-500">{review.company}</p>
                      )}
                      <div className="ml-16 flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      "{review.body}"
                    </dd>
                  </div>
                </a>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
