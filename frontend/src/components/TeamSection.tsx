import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, FacebookIcon, CalendarIcon, Globe as GlobeIcon, ArrowRight } from 'lucide-react';
import useStrapi from '../hooks/useStrapi';

// ---------------------------------------------------------------------------
// Típusdefiníciók a Strapi Team Member válaszához
// ---------------------------------------------------------------------------
interface TeamMember {
  id: number;
  Booking: string | null;
  Experience: string;
  Facebook: string | null;
  Image: Array<{ url: string }>;
  Instagram: string | null;
  Website: string | null;
  Name: string;
  Role: string;
  Specialty: string;
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
// Animációs variánsok
// ---------------------------------------------------------------------------
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

// ---------------------------------------------------------------------------
// TeamSection komponens
// ---------------------------------------------------------------------------
export const TeamSection: React.FC = () => {
  const { data, loading, error } = useStrapi<TeamResponse>('/api/team-members?populate=*');

  if (loading) return <div>Csapat betöltése...</div>;
  if (error) return <div>Hiba történt: {error.message}</div>;

  const team = data?.data || [];
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';

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
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="h-[1px] w-8 bg-[#B4943E]" />
            <span className="text-sm font-light tracking-wider uppercase">Csapatunk</span>
            <span className="h-[1px] w-8 bg-[#B4943E]" />
          </motion.div>
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">Szakértő csapatunk</h2>
          <p className="text-[#38363C]/60 text-lg font-light">
            Ismerje meg professzionális csapatunkat, akik szenvedéllyel és szakértelemmel várják Önt.
          </p>
        </motion.div>

        {/* Csapattagok grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => {
            const imageUrl = member.Image?.[0]?.url ? `${baseUrl}${member.Image[0].url}` : 'https://via.placeholder.com/400';

            return (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="group w-full min-w-[280px]"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] w-full">
                  <img
                    src={imageUrl}
                    alt={member.Name}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="space-y-1.5">
                      <h3 className="text-white text-lg font-medium leading-tight">{member.Name}</h3>
                      <p className="text-[#B4943E] font-light text-base">{member.Role}</p>
                      <p className="text-white/90 text-sm">{member.Specialty}</p>
                      <p className="text-white/80 text-sm mb-3">{member.Experience}</p>
                    </div>
                    <div className="flex items-center gap-3 pt-3 border-t border-white/20">
                      {member.Instagram && (
                        <a href={member.Instagram} target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/90 hover:text-white transition-colors">
                          <InstagramIcon size={18} />
                        </a>
                      )}
                      {member.Facebook && (
                        <a href={member.Facebook} target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/90 hover:text-white transition-colors">
                          <FacebookIcon size={18} />
                        </a>
                      )}
                      {member.Website && (
                        <a href={member.Website} target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/90 hover:text-white transition-colors">
                          <GlobeIcon size={18} />
                        </a>
                      )}
                      {member.Booking && (
                        <a
                          href={member.Booking}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md text-sm text-white hover:bg-white/20 transition-transform duration-300"
                        >
                          <CalendarIcon size={16} />
                          <span>Időpont</span>
                          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
