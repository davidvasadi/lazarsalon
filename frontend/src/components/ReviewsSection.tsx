import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
import { useGoogleMaps } from '../hooks/useGoogleMaps';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../index.css'; // globális stílusok, pl. saját paginációhoz

// Egyetlen vélemény adatszerkezete
interface ReviewData {
  authorAttribution: {
    displayName: string;
    uri: string;
  };
  photoUri: string;
  rating: number;
  text: string;
  relativePublishTimeDescription: string;
}

export const ReviewsSection: React.FC = () => {
  // Google Maps API betöltődésének figyelése
  const mapsLoaded = useGoogleMaps();

  // Komponens belső állapotai
  const [reviews, setReviews] = useState<ReviewData[]>([]);      // letöltött vélemények tömbje
  const [avgRating, setAvgRating] = useState<number>(0);         // átlagos értékelés
  const [totalReviews, setTotalReviews] = useState<number>(0);   // összes értékelésszám
  const [error, setError] = useState<string | null>(null);       // hibaüzenet, ha nem jönnek az adatok
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({}); // melyik véleményt bővítettük ki

  // ENV-ből olvasott place ID és a külső értékelő link
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID as string;
  const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  // Adatok lekérése, ha a Maps API már betöltődött
  useEffect(() => {
    if (!mapsLoaded) return;

    (async () => {
      try {
        // új Places API Place objektum
        const place = new (window as any).google.maps.places.Place({ id: placeId });
        // mezők lekérése: vélemények, átlag, összes értékelés
        await place.fetchFields({
          fields: ['reviews', 'rating', 'userRatingCount']
        });

        // állapotok beállítása
        setAvgRating(place.rating ?? 0);
        setTotalReviews(place.userRatingCount ?? 0);

        // API vélemények átalakítása saját formára
        const mapped: ReviewData[] = (place.reviews || []).map((rev: any) => ({
          authorAttribution: rev.authorAttribution,
          photoUri:
            rev.profilePhotoUri ||
            rev.profilePhotoUrl ||
            rev.authorAttribution.photoURI ||
            '/default-avatar.png',
          rating: rev.rating,
          text: rev.text,
          relativePublishTimeDescription: rev.relativePublishTimeDescription,
        }));
        setReviews(mapped);
      } catch (e) {
        console.error('Places API hiba:', e);
        setError('Nem sikerült lekérni a Google véleményeket.');
      }
    })();
  }, [mapsLoaded, placeId]);

  // "Tovább olvasom"/"Bezárom" váltógomb kezelése
  const toggleExpand = (idx: number) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Hiba esetén visszajelzés
  if (error) {
    return <p className="py-16 text-center text-red-600">{error}</p>;
  }
  // Betöltés alatti állapot
  if (!mapsLoaded || reviews.length === 0) {
    return <p className="py-16 text-center">Betöltés alatt…</p>;
  }

  return (
    <>
      {/* ===== FEJLÉC ===== */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* alcím dekorációval */}
            <motion.div
              className="inline-flex items-center justify-center gap-2 mb-6 text-[#B4943E]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="h-[1px] w-8 bg-[#B4943E]" />
              <span className="text-sm font-light tracking-wider uppercase">
                Vélemények
              </span>
              <span className="h-[1px] w-8 bg-[#B4943E]" />
            </motion.div>

            {/* főcím */}
            <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">
              Mit mondanak rólunk vendégeink
            </h2>

            {/* statikus 5 csillag */}
            <motion.div
              className="flex items-center justify-center gap-1 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 text-[#B4943E] fill-[#B4943E]"
                />
              ))}
            </motion.div>

            {/* átlag és össz. értékelés */}
            <p className="text-[#1D1D1E] text-lg font-light">
              {avgRating.toFixed(1)} / 5.0{' '}
              <span className="text-[#38363C]/60 text-base">
                több mint {totalReviews} értékelés alapján
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SLIDER ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={3}
            spaceBetween={24}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={800}
            pagination={{ el: '.custom-pagination', clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ '--swiper-theme-color': '#000' } as React.CSSProperties}
          >
            {reviews.map((r, idx) => {
              const isExpanded = expanded[idx];
              // ha hosszabb a szöveg 100 karakternél, előnézet...
              const previewText =
                r.text.length > 100 ? r.text.slice(0, 100) + '...' : r.text;

              return (
                <SwiperSlide key={idx}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col">
                    {/* szerző adat */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img
                          src={r.photoUri}
                          alt={r.authorAttribution.displayName}
                          className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute -bottom-0 right-0 bg-[#B4943E] text-white p-1 rounded-full">
                          <StarIcon className="w-3 h-3 fill-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1D1D1E]">
                          {r.authorAttribution.displayName}
                        </h4>
                        <p className="text-sm text-[#38363C]/60">
                          {r.relativePublishTimeDescription}
                        </p>
                      </div>
                    </div>

                    {/* vélemény szöveg */}
                    <div className="flex-grow">
                      <p className="text-[#38363C] leading-relaxed">
                        {isExpanded ? r.text : previewText}
                      </p>
                    </div>

                    {/* "Tovább olvasom" gomb */}
                    {r.text.length > 100 && (
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="mt-4 flex justify-start text-sm font-medium text-[#B4943E] hover:opacity-70 transition-opacity duration-300"
                      >
                        {isExpanded ? 'Bezárom' : 'Tovább olvasom'}
                      </button>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* saját paginációs konténer */}
          <div className="custom-pagination mt-6 flex justify-center"></div>
        </div>
      </section>

      {/* ===== TOVÁBBI VÉLEMÉNYEK LINK ===== */}
      <section className="bg-gradient-to-b from-white to-gray-50 pb-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href={reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1D1D1E] hover:text-[#B4943E] transition-colors"
            >
              <span className="text-sm tracking-wide">
                További vélemények megtekintése
              </span>
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};
