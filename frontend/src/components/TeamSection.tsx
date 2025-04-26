import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon, CalendarIcon, Globe as GlobeIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import useStrapi from '../hooks/useStrapi';

// ---------------------------------------------------------------------------
// Típusdefiníciók a Strapi Team Member válaszához (közvetlen mezőkkel)
// ---------------------------------------------------------------------------
interface TeamMember {
  id: number;
  Booking: string | null;        // Időpontfoglaló link (opcionális)
  Experience: string;            // Tapasztalat leírása
  Facebook: string | null;       // Facebook profil URL (opcionális)
  Image: Array<{ url: string }>; // Kép URL tömb
  Instagram: string | null;      // Instagram profil URL (opcionális)
  Website: string | null;        // Személyes weboldal URL (opcionális)
  Name: string;                  // Név
  Role: string;                  // Pozíció / szerepkör
  Specialty: string;             // Szakterület
  createdAt: string;
  documentId: string;
  publishedAt: string;
  updatedAt: string;
}

interface TeamResponse {
  data: TeamMember[];
  meta: any;
}

// ---------------------------------------------------------------------------
// TeamSection komponens – Dinamikus "Csapatunk" szekció Strapi adatokkal
// ---------------------------------------------------------------------------
export const TeamSection: React.FC = () => {
  // Lekérjük a csapattagokat a Strapi API-ból a megfelelő végpontról
  const { data, loading, error } = useStrapi<TeamResponse>('/api/team-members?populate=*');

  // Betöltés és hibakezelés
  if (loading) return <div>Csapat betöltése...</div>;
  if (error) return <div>Hiba történt: {error.message}</div>;

  const team = data?.data || [];
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Szekció fejléc */}
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
            <span className="text-sm font-light tracking-wider uppercase">Csapatunk</span>
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
          </motion.div>
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">Szakértő csapatunk</h2>
          <p className="text-[#38363C]/60 text-lg font-light">
            Ismerje meg professzionális csapatunkat, akik szenvedéllyel és szakértelemmel várják Önt.
          </p>
        </motion.div>

        {/* Csapattagok grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-[1400px] mx-auto">
          {team.map((member) => {
            // Kép URL előállítása (vagy placeholder)
            const imageUrl =
              member.Image && member.Image.length > 0 && member.Image[0].url
                ? `${baseUrl}${member.Image[0].url}`
                : 'https://via.placeholder.com/400';

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: member.id * 0.2 }}
                className="group w-full"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] w-full max-h-[400px] lg:min-w-[300px]">
                  {/* Tag arckép */}
                  <img
                    src={imageUrl}
                    alt={member.Name}
                    className="w-full h-full object-cover object-center transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  {/* Gradient réteg */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  {/* Info panel */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end transform sm:translate-y-8 sm:group-hover:translate-y-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500">
                    <div className="space-y-1.5">
                      <h3 className="text-white text-lg font-medium leading-tight">{member.Name}</h3>
                      <p className="text-[#B4943E] font-light text-base leading-tight">{member.Role}</p>
                      <p className="text-white/90 text-sm leading-tight">{member.Specialty}</p>
                      <p className="text-white/80 text-sm leading-tight mb-3">{member.Experience}</p>
                    </div>
                    {/* Ikonok és linkek */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/20">
                      {/* Instagram, ha létezik */}
                      {member.Instagram && (
                        <a
                          href={member.Instagram}
                          className="text-white/90 hover:text-white transition-colors p-1.5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <InstagramIcon size={18} />
                        </a>
                      )}
                      {/* Facebook, ha létezik */}
                      {member.Facebook && (
                        <a
                          href={member.Facebook}
                          className="text-white/90 hover:text-white transition-colors p-1.5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FacebookIcon size={18} />
                        </a>
                      )}
                      {/* Weboldal, ha létezik */}
                      {member.Website && (
                        <a
                          href={member.Website}
                          className="text-white/90 hover:text-white transition-colors p-1.5"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GlobeIcon size={18} />
                        </a>
                      )}
                      {/* Időpontfoglaló, ha létezik */}
                      {member.Booking && (
                        <a
                          href={member.Booking}
                          className="ml-auto text-white flex items-center gap-2 group/button text-sm bg-white/10 px-3 py-1.5 rounded-md hover:bg-white/20 transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CalendarIcon size={16} />
                          <span>Időpont</span>
                          <ArrowRight size={14} className="transition-transform duration-300 group-hover/button:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
