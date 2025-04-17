import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import useStrapi from '../hooks/useStrapi';

// ---------------------------------------------------------------------------
// Típusdefiníciók a Strapi válasz szerkezete alapján
// ---------------------------------------------------------------------------

// A szolgáltatás elemek (AboutService) típusa – a Strapi adminban ezeket hoztad létre
interface AboutServiceItem {
  id: number;
  Title: string;       // pl. "valami" vagy "Hétfő:" 
  Description: string; // pl. "valami következő sora" vagy "10:00 - 20:00"
}

// A nyitvatartási adatok típusa ("openingHours")
interface OpeningHour {
  id: number;
  day: string;   // pl. "Hétfő"
  hours: string | null; // pl. "10:00 - 20:00", vagy null, ha nincs megadva
}

// Az AboutSingleType adatai – ezek a mezők közvetlenül a JSON "data" objektumban vannak
interface AboutData {
  id: number;
  Title: string;
  Description: string;
  Introdution: string;
  // Az Image mezőt tömbként érjük el; ha nincs kép, null
  Image: Array<{ url: string }> | null;
  // A dinamikus szolgáltatás lista – a Strapi adminban az "AboutService" mezőben
  AboutService: AboutServiceItem[];
  // A nyitvatartási adatok, "openingHours" néven
  openingHours: OpeningHour[];
  // A "AboutServices" itt már nem használatos
}

// Az API válasz szerkezete
interface AboutResponse {
  data: AboutData;
  meta: any;
}

// ---------------------------------------------------------------------------
// AboutSection komponens – Dinamikus "Rólunk" tartalom megjelenítése
// ---------------------------------------------------------------------------
export const AboutSection: React.FC = () => {
  // Lekérjük a Strapi API-ból az About adatokat (Single Type), populálva az összes mezőt
  const { data, loading, error } = useStrapi<AboutResponse>('/api/about?populate=*');

  // Minden Hookot a komponens tetején hívunk meg.
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = 10;
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) {
          clearInterval(timer);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  if (loading) return <div>Rólunk betöltése...</div>;
  if (error) return <div>Hiba történt: {error.message}</div>;

  // Kinyerjük a Strapi által szolgáltatott About adatokat (a JSON szerint a mezők közvetlenül a data objektumban vannak)
  const about = data?.data;
  if (!about) return <div>Nincs elérhető tartalom.</div>;
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';
  const pageTitle = about.Title;
  const pageDesc = about.Description;
  // Az Introdution mezőt preferáljuk, ha van; különben a Description.
  const introduction = about.Introdution || pageDesc;

  // Kép URL: Ha az Image tömb nem üres, az első elem url-jét használjuk; különben fallback kép.
  const imageUrl =
    about.Image && about.Image.length > 0 && about.Image[0].url
      ? `${baseUrl}${about.Image[0].url}`
      : 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=2066&q=80';

  // Services lista: Ha a Strapi-ban van AboutService, azt használjuk, egyébként statikus fallback
  const services =
    about.AboutService && about.AboutService.length > 0
      ? about.AboutService
      : [
          { id: 1, Title: 'Professzionális hajápolás', Description: 'Modern technikák és prémium termékek' },
          { id: 2, Title: 'Személyre szabott konzultáció', Description: 'Egyedi igényekre szabott megoldások' },
          { id: 3, Title: 'Szakértő csapat', Description: 'Folyamatosan képzett szakembereink' },
          { id: 4, Title: 'Prémium környezet', Description: 'Modern és elegáns szalonunk' }
        ];

  // Nyitvatartás: Ha a Strapi-ból érkezik openingHours, azt használjuk, különben statikus fallback
  const hours =
    about.openingHours && about.openingHours.length > 0
      ? about.openingHours
      : [
          { id: 1, day: 'Hétfő', hours: '10:00 - 20:00' },
          { id: 2, day: 'Kedd', hours: '10:00 - 20:00' },
          { id: 3, day: 'Szerda', hours: '10:00 - 20:00' },
          { id: 4, day: 'Csütörtök', hours: '10:00 - 20:00' },
          { id: 5, day: 'Péntek', hours: '10:00 - 20:00' },
          { id: 6, day: 'Szombat', hours: '10:00 - 16:00' },
          { id: 7, day: 'Vasárnap', hours: 'Zárva' }
        ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Rólunk Section fejléce */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-6 text-[#B4943E]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
            <span className="text-sm font-light tracking-wider uppercase">Rólunk</span>
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
          </motion.div>
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">{pageTitle}</h2>
          <p className="text-[#38363C]/60 text-lg font-light">{pageDesc}</p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Bal oldal: Kép, dinamikus számláló, és Rólunk rész részletes leírás */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <img
                  src={imageUrl}
                  alt={pageTitle}
                  className="w-full aspect-[16/9] object-cover transition-all duration-500 grayscale hover:grayscale-0"
                />
                <div
                  ref={ref}
                  className="absolute -bottom-6 -right-6 bg-[#1D1D1E]/80 text-white p-6 rounded-2xl shadow-xl backdrop-blur-sm z-10"
                >
                  <p className="text-3xl font-bold text-[#B4943E]">{count}+</p>
                  <p className="text-sm font-light">éve a szépségiparban</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="prose prose-lg">
                  <h3 className="text-2xl font-light text-[#1D1D1E] mb-4">Rólunk</h3>
                  <p className="text-[#38363C] leading-relaxed">{introduction}</p>
                </div>
                <Link
                  to="booking"
                  smooth={true}
                  duration={800}
                  className="group inline-flex items-center gap-2 bg-[#1D1D1E] text-white px-6 py-3 rounded-lg hover:bg-black transition-all duration-300 cursor-pointer"
                >
                  <span>Időpontfoglalás</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Jobb oldal: Dinamikus Services és Nyitvatartási adatok */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Services – ha vannak dinamikus adatok a Strapi-ból */}
              {services.length > 0 && (
                <div className="grid gap-4">
                  <h3 className="text-2xl font-light text-[#1D1D1E]">Szolgáltatásaink</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((item, index) => (
                      <motion.div
                        key={item.id}
                        className="flex flex-col gap-1 bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircleIcon className="text-[#B4943E] w-5 h-5 flex-shrink-0" />
                          <span className="text-[#1D1D1E] font-medium">{item.Title}</span>
                        </div>
                        <p className="text-[#38363C]/70 text-sm pl-8">{item.Description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hours – nyitvatartási adatok */}
              {hours.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <ClockIcon size={24} className="text-[#B4943E]" />
                    <h3 className="text-xl font-light">Nyitvatartás</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {hours.slice(0, Math.ceil(hours.length / 2)).map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex flex-col p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                          <span className="font-medium text-[#1D1D1E]">{item.day}</span>
                          <span className="text-[#B4943E] text-sm">{item.hours}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {hours.slice(Math.ceil(hours.length / 2)).map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (index + Math.ceil(hours.length / 2)) * 0.1 }}
                          className="flex flex-col p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                          <span className="font-medium text-[#1D1D1E]">{item.day}</span>
                          <span className={`text-sm ${item.hours === 'Zárva' ? 'text-red-500' : 'text-[#B4943E]'}`}>
                            {item.hours}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
  