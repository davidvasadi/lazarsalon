import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import useStrapi from '../hooks/useStrapi';

// ---------------------------------------------------------------------------
// Típusdefiníciók a Strapi válasz szerkezete alapján
// ---------------------------------------------------------------------------
interface AboutServiceItem {
  id: number;
  Title: string;
  Description: string;
}

interface OpeningHour {
  id: number;
  day: string;
  hours: string | null;
}

interface AboutData {
  id: number;
  Title: string;
  Description: string;
  Introdution: string;
  Image: Array<{ url: string }> | null;
  AboutService: AboutServiceItem[];
  openingHours: OpeningHour[];
}

interface AboutResponse {
  data: AboutData;
  meta: any;
}

// ---------------------------------------------------------------------------
// AboutSection komponens – Dinamikus "Rólunk" tartalom megjelenítése
// ---------------------------------------------------------------------------
export const AboutSection: React.FC = () => {
  const { data, loading, error } = useStrapi<AboutResponse>('/api/about?populate=*');
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  // Számlálás indítása 0-tól 10-ig 2s alatt
  const animateCount = () => {
    if (started) return;
    setStarted(true);
    const target = 10;
    let current = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / target), 50);
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, stepTime);
  };

  if (loading) return <div>Rólunk betöltése...</div>;
  if (error) return <div>Hiba történt: {error.message}</div>;

  const about = data?.data;
  if (!about) return <div>Nincs elérhető tartalom.</div>;

  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';
  const imageUrl = about.Image && about.Image[0]?.url ? `${baseUrl}${about.Image[0].url}` : '';
  // const intro = about.Introdution || about.Description;

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Fejléc */}
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
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">{about.Title}</h2>
          <p className="text-[#38363C]/60 text-lg font-light">{about.Description}</p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Bal oldal: kép és számláló */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onViewportEnter={animateCount}
            >
              <div className="relative rounded-2xl overflow-hidden mb-8">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={about.Title}
                    className="w-full aspect-[16/9] object-cover transition-all duration-500 grayscale hover:grayscale-0"
                  />
                )}
                <div className="absolute -bottom-6 -right-6 bg-[#1D1D1E]/80 text-white p-[14px] pr-[40px] pb-[30px] rounded-2xl shadow-xl backdrop-blur-sm z-10">                  <p className="text-3xl font-bold text-[#B4943E]">{count}+</p>
                  <p className="text-sm font-light">éve a szépségiparban</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="prose prose-lg">
                  <h3 className="text-2xl font-light text-[#1D1D1E] mb-4">Rólunk</h3>
                  <p className="text-[#38363C] leading-relaxed">{about.Introdution}</p>
                </div>
                <Link
                  to="booking"
                  smooth={true}
                  duration={800}
                  className="inline-flex items-center gap-2 bg-[#1D1D1E] text-white px-6 py-3 rounded-lg hover:bg-black transition-colors duration-300 cursor-pointer group"
                >
                  <span>Időpontfoglalás</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Jobb oldal: szolgáltatások és nyitvatartás */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {about.AboutService.length > 0 && (
                <div className="grid gap-4">
                  <h3 className="text-2xl font-light text-[#1D1D1E]">Szolgáltatásaink</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {about.AboutService.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        className="flex flex-col gap-1 bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
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

              {about.openingHours.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <ClockIcon size={24} className="text-[#B4943E]" />
                    <h3 className="text-xl font-light">Nyitvatartás</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {about.openingHours.slice(0, Math.ceil(about.openingHours.length / 2)).map((item, index) => (
                        <motion.div
                          key={item.id}
                          className="flex flex-col p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <span className="font-medium text-[#1D1D1E]">{item.day}</span>
                          <span className={`text-[#B4943E] text-sm`}>{item.hours}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {about.openingHours.slice(Math.ceil(about.openingHours.length / 2)).map((item, index) => (
                        <motion.div
                          key={item.id}
                          className="flex flex-col p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: (index + Math.ceil(about.openingHours.length / 2)) * 0.1 }}
                        >
                          <span className="font-medium text-[#1D1D1E]">{item.day}</span>
                          <span className={`${item.hours === 'Zárva' ? 'text-red-500' : 'text-[#B4943E]'} text-sm`}>{item.hours}</span>
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

export default AboutSection;
