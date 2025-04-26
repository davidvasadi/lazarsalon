import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ChevronDownIcon } from 'lucide-react';
import { Link } from 'react-scroll';
import useStrapi from '../hooks/useStrapi';

// Típusdefiníció a Strapi-ból kapott hero tartalomhoz.
// Az API válaszod a hero adatokat közvetlenül a data objektumban adja vissza.
interface HeroContent {
  id: number;
  Title: string;               // A hero főcíme (nagy betűkkel jelenik meg)
  Subtitle: string;            // Az alcím, ami a főcím alatt látható
  Description: string;         // Rövid leírás a hero részben
  PrimaryButton: string;       // A gomb felirata (pl. "Foglalj időpontot")
  PrimaryButtonLink: string;   // A gomb által vezetett link (pl. "booking" vagy egy url)
  // A heroImage mező, ami a hátteret tartalmazza.
  // Ha a media mező nem a data.attributes struktúrát használja, akkor közvetlenül tartalmazza a "url"-t.
  heroImage?: {
    url: string;
    // További mezők opcionálisan, például alternativeText, name stb.
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  documentId: string;
}

export const HeroSection: React.FC = () => {
  // useRef-et használunk a parallax effektushoz, itt tartjuk a háttér réteget.
  const parallaxRef = useRef<HTMLDivElement>(null);

  // useEffect: Scroll eseményfigyelő, amely módosítja a parallax réteg transform értékét.
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        // A kép lassabban mozog a scroll hatására, itt 0.5-szeres skálán.
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Az eseményfigyelőt töröljük a komponens unmountolásakor.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useStrapi hook segítségével lekérjük a hero tartalmat a Strapi API-ból.
  // A végpont populálja a heroImage mezőt, így az tartalmazza a kép URL-jét.
  const { data: heroData, loading, error } = useStrapi<{ data: HeroContent }>('/api/hero-section?populate=heroImage');

  // Ha a tartalom még betölt, egy "Hero betöltés..." üzenet jelenik meg.
  // if (loading) return <div>Hero betöltés...</div>;
  // Ha hiba történik a lekérés során, azt jelenítjük meg.
  // if (error) return <div>Hero hiba: {error.message}</div>;

  // Kinyerjük a hero tartalmat a lekéréstől (heroData?.data tartalmazza az összes adatot).
  const heroContent = heroData?.data;

  // Ha a Strapi media mezője relatív URL-t ad, a baseUrl-el prefixeljük.
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';
  const backgroundImage = heroContent?.heroImage?.url 
    ? `${baseUrl}${heroContent.heroImage.url}` // Ha van kép, a teljes URL-t adja vissza.
    : 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'; // Fallback kép

  // Kinyerjük a dinamikus tartalmat, fallback értékekkel, ha nincs kitöltve.
  const title = heroContent?.Title || 'Szépség és stílus';
  const subtitle = heroContent?.Subtitle || 'professzionális kezekben';
  const description = heroContent?.Description ||
    'Fedezd fel szalonunk egyedi szolgáltatásait és engedd, hogy szakértőink kihozzák belőled a legjobbat.';
  const primaryButtonText = heroContent?.PrimaryButton || 'Foglalj időpontot';
  const primaryButtonLink = heroContent?.PrimaryButtonLink || 'booking';

  return (
    // A hero section kitölti a teljes képernyőt (h-screen), relatív pozícionálással.
    <section className="relative w-full h-screen overflow-hidden">

      {/* Parallax háttérréteg: abszolút pozícionált, kitölti a teljes területet */}
      <div ref={parallaxRef} className="absolute inset-0">
        {/* Háttérkép réteg: a dinamikus backgroundImage URL-t használja */}
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Gradient rétegek a kép fölött, hogy a szöveg jól olvasható legyen */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1E]/95 via-[#1D1D1E]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[#1D1D1E]/20"></div>
          {/* Egy animált, bal oldali vonal, framer-motion komponenssel */}
          <motion.div
            className="absolute left-0 top-1/2 w-1/4 h-[1px] bg-gradient-to-r from-[#B4943E] to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '25%', opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
      </div>

      {/* Tartalom konténer: középre igazított, a hero szövegek és gombok itt jelennek meg */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div className="max-w-2xl">
          {/* A dinamikus Title megjelenítése */}
          <motion.span
            className="text-[#B4943E] uppercase tracking-[0.2em] text-sm font-light mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {title}
          </motion.span>
          {/* A nagy címsor, amely tartalmazza a Subtitle-t is */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 leading-tight">
            <motion.span
              className="block font-normal text-[#FEFEFE] relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {subtitle}
              {/* Egy animált vonal a cím mellett */}
              <motion.span
                className="absolute -right-12 top-1/2 w-24 h-[1px] bg-[#B4943E]"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 96, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.span>
          </h1>
          {/* A hero leírása */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {description}
          </motion.p>
          {/* Gombok: dinamikus gomb szöveg/link, valamint egy fix "Szolgáltatások" gomb */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link
              to="booking"
              smooth={true}
              duration={800}
              className="group bg-white bg-opacity-10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-light flex items-center justify-center gap-2 hover:bg-white hover:text-[#1D1D1E] transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
            >
              <CalendarIcon size={20} />
              <span>{primaryButtonText}</span>
              <span className="w-0 group-hover:w-6 overflow-hidden transition-all duration-300 ease-in-out">
                →
              </span>
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={800}
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-light flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              Szolgáltatások
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Görgess lejjebb hivatkozás: egy animált nyíl a képernyő alján */}
      <Link
        to="services"
        smooth={true}
        duration={800}
        className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <motion.div
          className="absolute bottom-16 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <span className="text-white/60 text-sm font-light tracking-wider text-center whitespace-nowrap cursor-pointer">
            Görgess lejjebb
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <ChevronDownIcon className="text-white/60" size={20} />
          </motion.div>
        </motion.div>
      </Link>
    </section>
  );
};
