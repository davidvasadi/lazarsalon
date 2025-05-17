import React from 'react';
import { ScissorsIcon, Scissors, Phone } from 'lucide-react';
import useStrapi from '../hooks/useStrapi';
import { motion } from 'framer-motion';

// Egyedi ikon a körömszalonhoz
const NailIconCustom = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 2V5" />
    <path d="M8 2V5" />
    <path d="M12 2V5" />
    <path d="M16 14C16 15.1046 16.8954 16 18 16C19.1046 16 20 15.1046 20 14V11C20 9.89543 19.1046 9 18 9C16.8954 9 16 9.89543 16 11V14Z" />
    <path d="M12 14C12 15.1046 12.8954 16 14 16C15.1046 16 16 15.1046 16 14V11C16 9.89543 15.1046 9 14 9C12.8954 9 12 9.89543 12 11V14Z" />
    <path d="M8 14C8 15.1046 8.89543 16 10 16C11.1046 16 12 15.1046 12 14V11C12 9.89543 11.1046 9 10 9C8.89543 9 8 9.89543 8 11V14Z" />
    <path d="M4 14C4 15.1046 4.89543 16 6 16C7.10457 16 8 15.1046 8 14V11C8 9.89543 7.10457 9 6 9C4.89543 9 4 9.89543 4 11V14Z" />
    <path d="M18 16V22" />
    <path d="M14 16V22" />
    <path d="M10 16V22" />
    <path d="M6 16V22" />
  </svg>
);

// Fallback adatokat tartalmazó objektum: a szolgáltatás címétől függően
const fallbackData: Record<string, { image: string; icon: JSX.Element; features: string[] }> = {
  'Fodrászat': {
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    icon: <Scissors className="w-6 h-6" />,
    features: ['Hajvágás', 'Hajfestés', 'Melír', 'Hajkezelések']
  },
  'Körömszalon': {
    image: '/assets/images/mukorom-szolgaltasasok.jpg', // Győződj meg róla, hogy ez a kép elérhető a public mappából
    icon: <NailIconCustom />,
    features: ['Manikűr', 'Pedikűr', 'Géllakk', 'Műköröm építés']
  }
};

// Ha nincs dinamikus adat, a fallback "Fodrászat" értékeit használjuk
const defaultImage = fallbackData['Fodrászat'].image;
const defaultIcon = fallbackData['Fodrászat'].icon;
const defaultFeatures = fallbackData['Fodrászat'].features;

// Típusdefiníciók a Strapi Booking Card Collection Type válaszához
interface BookingFeature {
  id: number;
  BookingFeature: string;
}

interface BookingImageData {
  data?: {
    attributes?: {
      url?: string;
    };
  };
}

interface BookingCardItem {
  id: number;
  Title: string;
  Description: string;
  Link: string;
  Image?: BookingImageData;
  BookingCard?: BookingFeature[]; // A mező neve BookingCard, benne BookingFeature mezők
  ctaType: 'booking' | 'contact';
  phoneNumber?: string;
}

interface BookingCardResponse {
  data: BookingCardItem[];
  meta: any;
}

export const BookingSection: React.FC = () => {
  // Lekérjük a Booking Card-okat a Strapi-ból
  const { data, loading, error } = useStrapi<BookingCardResponse>(
    '/api/booking-cards?populate=*'
  );
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';
  if (loading) return <div>Időpontfoglalás betöltése...</div>;
  if (error) return <div>Hiba történt: {error.message}</div>;

  // Dinamikus adat
  const bookingCards = data?.data || [];
  // Statikus fallback (ha nincs dinamikus adat)
  const fallbackServices: BookingCardItem[] = [
    {
      id: 1,
      Title: 'Fodrászat',
      Description: 'Szolgáltatás leírása',
      Link: '/booking/fodraszat',
      Image: { data: { attributes: { url: defaultImage } } },
      BookingCard: [],
      ctaType: 'booking',
      phoneNumber: '123456789'
    },
    {
      id: 2,
      Title: 'Körömszalon',
      Description: 'Szolgáltatás leírása',
      Link: '/booking/kormok',
      Image: { data: { attributes: { url: defaultImage } } },
      BookingCard: [],
      ctaType: 'booking',
      phoneNumber: '987654321'
    }
  ];

  const services = bookingCards.length > 0 ? bookingCards : fallbackServices;

  // Függvény a kép URL összeállításához – ha a "Image" mező nem nested, akkor a getImageUrl az alábbiakat próbálja meg:
  const getImageUrl = (item: BookingCardItem): string => {
    // Próbáljuk először a nested struktúrát:
    if (item.Image && item.Image.data && item.Image.data.attributes && item.Image.data.attributes.url) {
      const url = item.Image.data.attributes.url;
      return url.startsWith('http') ? url : `${baseUrl}${url}`;
    }
    // Ha a nested struktúra nem található, akkor nézzük meg, hogy van-e közvetlenül "url" mező
    if (item.Image && (item.Image as any).url) {
      const url = (item.Image as any).url;
      return url.startsWith('http') ? url : `${baseUrl}${url}`;
    }
    return defaultImage;
  };

  // Függvény a features listához (a JSONban a mező neve "BookingCard", belül a "BookingFeature")
  const getFeatures = (item: BookingCardItem): string[] => {
    if (item.BookingCard && item.BookingCard.length > 0) {
      return item.BookingCard.map(f => f.BookingFeature);
    }
    return defaultFeatures;
  };

  // Függvény az ikon kiválasztásához az adott Title alapján
  const getIcon = (title: string): JSX.Element => {
    if (title.toLowerCase().includes('köröm')) {
      return <NailIconCustom />;
    }
    return <Scissors className="w-6 h-6" />;
  };

  return (
    <section id="booking" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
        <motion.div className="inline-flex items-center justify-center gap-2 mb-6 text-[#B4943E]" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
            <span className="text-sm font-light tracking-wider uppercase">
              Időpontfoglalás
            </span>
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
          </motion.div>
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">Foglaljon Időpontot</h2>
          <p className="text-[#38363C]/60 text-lg font-light max-w-2xl mx-auto">
            Válassza ki a kívánt szolgáltatást és foglaljon időpontot online rendszerünkben
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const isContact = service.ctaType === 'contact' && !!service.phoneNumber;
            const imageUrl = getImageUrl(service);
            const features = getFeatures(service);
            const icon = getIcon(service.Title);
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img
                    src={imageUrl}
                    alt={service.Title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>
                <div className="relative p-8 h-full flex flex-col justify-end">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                      {icon}
                    </div>
                    <h3 className="text-2xl font-light text-white mb-2">{service.Title}</h3>
                    <p className="text-white/80 mb-4">{service.Description}</p>
                    <ul className="space-y-2 mb-6">
                      {features.length > 0 &&
                        features.map((feat, idx) => (
                          <li key={idx} className="text-white/70 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B4943E] rounded-full"></span>
                            {feat}
                          </li>
                        ))}
                    </ul>
                  </div>
                  {/* <a
                    href={service.Link}
                    
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-light inline-flex items-center justify-center gap-2 hover:bg-white hover:text-[#1D1D1E] transition-all duration-300 group-hover:scale-[1.02]"
                  >
                    <span>Időpontfoglalás</span>
                    <span className="w-0 group-hover:w-6 overflow-hidden transition-all duration-300 ease-in-out">
                      →
                    </span>
                  </a> */}
                  {isContact ? (
                    <a
                    href={`tel:${service.phoneNumber}`}
                    className="group mt-4 flex items-center justify-center gap-2 w-full bg-[#1D1D1E] text-white py-4 rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                       >
                        <span>Kapcsolatfelvétel</span>
                        <Phone size={18} className="transform transition-transform duration-300 group-hover:rotate-12" />
                  </a>
                  ) : (
                    <a
                      href={service.Link}
                      className="mt-4 flex items-center justify-center gap-2 w-full bg-[#1D1D1E] text-white py-4 rounded-lg hover:bg-black transition-colors cursor-pointer"
                      >
                       <span>Időpontfoglalás</span>
                       <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </a> 
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
