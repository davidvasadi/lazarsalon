import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Clock, ArrowRight } from 'lucide-react';
import useStrapi from '../hooks/useStrapi';

// ---------------------------------------------------------------------------
// Típusdefiníciók
// ---------------------------------------------------------------------------

// Egy szolgáltatás tétele – a Strapi-ban a ServiceCard mezőn belül érkeznek az adatok,
// és a mezők nevei "Name", "Duration", "Price".
interface ServiceItem {
  Name: string;
  Duration: string;
  Price: string;
}

// Egy szolgáltatás csoport, ha csoportosítva vannak a tételek (például: "Kézápolás").
interface ServiceGroup {
  subtitle: string;
  items: ServiceItem[];
}

// A teljes szolgáltatás kártya adatai.
// Feltételezzük, hogy a Strapi API válaszában ezek a mezők közvetlenül a bejegyzés objektumában érhetők el.
interface ServiceContent {
  id: number;
  Title: string; // A kártya címe, például "Hajszolgáltatások" vagy "Körömszolgáltatások"
  Image: {
    // A kép mező esetében feltételezzük, hogy az "Image" mező egy tömb,
    // amelynek első elemében a kép adatai találhatók, például a "url".
    // Ha több kép is lehet, ezt később bővítheted.
    [key: string]: any; // egyszerűbbé tesszük a típust
  };
  // Ezek közül az egyik tömb lesz kitöltve: vagy a ServiceCard tömb (közvetlen tételek),
  // vagy a groups tömb, mely csoportosított tételeket tartalmaz.
  ServiceCard?: ServiceItem[];
  groups?: ServiceGroup[];
}

// Az API válasz szerkezete: { data: ServiceContent[], meta: any }
interface ServiceResponse {
  data: ServiceContent[];
  meta: any;
}

// ---------------------------------------------------------------------------
// ServiceCards komponens – a dinamikus adatok alapján rendereli a szolgáltatás kártyákat
// ---------------------------------------------------------------------------
export const ServiceCards: React.FC = () => {
  // Lekérjük a szolgáltatás kártyákat a Strapi API-ból a populate=* paraméterrel,
  // hogy minden mezőt betöltsön (például Image, groups.items, ServiceCard)
  const { data: servicesData, loading, error } = useStrapi<ServiceResponse>(
    '/api/service-cards?populate=*'
  );

  // Ha betöltés folyamatban van, vagy hiba lépett fel, azt egyszerű üzenettel jelezzük.
  if (loading) return <div>Szolgáltatások betöltése...</div>;
  if (error) return <div>Hiba történt: {error.message}</div>;

  // A szolgáltatás kártyák adatai a servicesData.data tömbben vannak.
  const services = servicesData?.data || [];

  // Ha a Strapi relatív URL-t ad a képhez, hozzáfűzzük a baseUrl-t
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';


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
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
            <span className="text-sm font-light tracking-wider uppercase">
              Szolgáltatások
            </span>
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
          </motion.div>
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">
            Prémium szolgáltatásaink
          </h2>
          <p className="text-[#38363C]/60 text-lg font-light">
            Fedezze fel szalonunk exkluzív szolgáltatásait, és engedje meg magának a luxus élményt
          </p>
        </motion.div>

        {/* Kártyák grid elrendezése: desktopon 2 oszlop, mobilon 1 oszlop */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            // A Strapi bejegyzésben a mezők közvetlenül elérhetők,
            // így egyszerűen szedjük ki a Title, Image, ServiceCard, vagy groups mezőket.
            const cardTitle = service.Title;
            // A kép URL-je: ha az Image mező relatív, a baseUrl-t hozzáfűzzük.
            const imageUrl = service.Image?.[0]?.url ? `${baseUrl}${service.Image[0].url}` : '';
            // Tételek: először megpróbáljuk a ServiceCard mezőt, ha nincs, akkor csoportokból flatMap-pel gyűjtjük össze.
            const items: ServiceItem[] =
              service.ServiceCard || (service.groups ? service.groups.flatMap((group) => group.items) : []);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: service.id * 0.2 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Kártya képréteg */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={cardTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {/* Gradient réteg a kép fölött a szöveg olvashatóságáért */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0" />
                  {/* A kártya címe a bal alsó sarokban */}
                  <h3 className="absolute bottom-4 left-4 text-2xl text-white font-light">
                    {cardTitle}
                  </h3>
                </div>
                {/* Kártya tartalmi rész: itt listázzuk a szolgáltatás tételeket */}
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                      >
                        <div>
                          {/* Tételek neve */}
                          <p className="font-medium text-[#1D1D1E]">{item.Name}</p>
                          <div className="flex items-center gap-1 text-sm text-[#38363C]/60">
                            <Clock size={14} />
                            <span>{item.Duration}</span>
                          </div>
                        </div>
                        {/* Tételek ára */}
                        <p className="text-[#B4943E] font-medium">{item.Price}</p>
                      </div>
                    ))}
                  </div>
                  {/* Időpontfoglalás gomb, ami a "booking" szekcióra navigál */}
                  <Link
                    to="booking"
                    smooth={true}
                    duration={800}
                    className="flex items-center justify-center gap-2 w-full bg-[#1D1D1E] text-white py-4 rounded-lg hover:bg-black transition-colors group/button cursor-pointer"
                  >
                    <span>Időpontfoglalás</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover/button:translate-x-1" />
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
