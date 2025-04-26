import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Clock, ArrowRight } from 'lucide-react';
import useStrapi from '../hooks/useStrapi';

// ---------------------------------------------------------------------------
// Típusdefiníciók
// ---------------------------------------------------------------------------
interface ServiceItem {
  Name: string;
  Duration: string;
  Price: string;
}

interface ServiceGroup {
  subtitle: string;
  items: ServiceItem[];
}

interface ServiceContent {
  id: number;
  Title: string;
  Image: { [key: string]: any }[];
  ServiceCard?: ServiceItem[];
  groups?: ServiceGroup[];
}

interface ServiceResponse {
  data: ServiceContent[];
  meta: any;
}

// ---------------------------------------------------------------------------
// ServiceCards komponens – Kétoszlopos grid, elemek tetején igazítva
// ---------------------------------------------------------------------------
export const ServiceCards: React.FC = () => {
  const { data: servicesData, loading, error } = useStrapi<ServiceResponse>(
    '/api/service-cards?populate=*'
  );

  if (loading) return <div>Szolgáltatások betöltése...</div>;
  if (error)   return <div>Hiba történt: {error.message}</div>;

  const services = servicesData?.data || [];
  const baseUrl  = import.meta.env.VITE_API_URL || 'http://localhost:1337';

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section fejléc */}
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
            <span className="h-[1px] w-8 bg-[#B4943E]" />
            <span className="text-sm font-light tracking-wider uppercase">
              Szolgáltatások
            </span>
            <span className="h-[1px] w-8 bg-[#B4943E]" />
          </motion.div>
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">
            Prémium szolgáltatásaink
          </h2>
          <p className="text-[#38363C]/60 text-lg font-light">
            Fedezze fel szalonunk exkluzív szolgáltatásait, és engedje meg magának a luxus élményt
          </p>
        </motion.div>

        {/* Kétoszlopos grid elemek tetején igazítva */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {services.map((service, idx) => {
            const items    = service.ServiceCard || service.groups?.flatMap(g => g.items) || [];
            const imageUrl =
              service.Image?.[0]?.url
                ? `${baseUrl}${service.Image[0].url}`
                : '';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Kép */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={service.Title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
                  <h3 className="absolute bottom-4 left-4 text-2xl text-white font-light">
                    {service.Title}
                  </h3>
                </div>

                {/* Tartalom és gomb */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="space-y-4 mb-8">
                    {items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between gap-4 py-2 border-b border-gray-100 last:border-0"
                      >
                        {/* Bal oszlop: zsugorodhat és tördelhető */}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-[#1D1D1E] break-words">
                            {item.Name}
                          </p>
                          <div className="flex items-center gap-1 text-sm text-[#38363C]/60">
                            <Clock size={14} />
                            <span>{item.Duration}</span>
                          </div>
                        </div>
                        {/* Ár: mindig egy sorban marad */}
                        <p className="flex-shrink-0 whitespace-nowrap text-[#B4943E] font-medium">
                          {item.Price}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="booking"
                    smooth={true}
                    duration={800}
                    className="mt-auto flex items-center justify-center gap-2 w-full bg-[#1D1D1E] text-white py-4 rounded-lg hover:bg-black transition-colors group/button cursor-pointer"
                  >
                    <span>Időpontfoglalás</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
