// --- Footer.tsx ---
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, FacebookIcon } from 'lucide-react';
import useStrapi from '../hooks/useStrapi';

// Típusdefiníciók a Strapi Footer Settings válaszához
interface SocialLink {
  id: number;
  Platform: string;
  URL: string;
}

interface FooterSettings {
  id: number;
  CompanyName: string;
  Tagline: string;
  Address: string;
  Phone: string;
  Email: string;
  Copyright: string;
  SocialLinks: SocialLink[];
}

interface FooterSettingsResponse {
  data: FooterSettings;
  meta: any;
}

export const Footer: React.FC = () => {
  const { data, loading, error } = useStrapi<FooterSettingsResponse>('/api/footer-setting?populate=*');
  

  // if (loading) return <div>Footer betöltése...</div>;
  // if (error) return <div>Hiba történt: {error.message}</div>;

  const footer = data?.data;

  const CompanyName = footer?.CompanyName || 'Lazars Szépségszalon';
  const Tagline = footer?.Tagline || 'Professzionális hajápolás és körömszolgáltatások egy helyen. Szépség és stílus, ahogy te szeretnéd.';
  const Address = footer?.Address || '1065 Budapest, Példa utca 123.';
  const Phone = footer?.Phone || '+36 1 234 5678';
  const Email = footer?.Email || 'info@lazarsszepsegszalon.hu';
  const SocialLinks = footer?.SocialLinks || [
    { id: 1, Platform: 'Facebook', URL: 'https://facebook.com' },
    { id: 2, Platform: 'Instagram', URL: 'https://instagram.com' }
  ];
  const Copyright = footer?.Copyright || `© ${new Date().getFullYear()} Lazars Szépségszalon. Minden jog fenntartva.`;

  return (
    <footer className="bg-[#1D1D1E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-white">{CompanyName.split(' ')[0]}</span> {CompanyName.split(' ').slice(1).join(' ')}
            </h2>
            <p className="text-gray-300 mb-6">{Tagline}</p>
            <div className="flex space-x-4">
              <a
                href={SocialLinks.find(link => link.Platform.toLowerCase() === 'facebook')?.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href={SocialLinks.find(link => link.Platform.toLowerCase() === 'instagram')?.URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Gyors linkek */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Gyors linkek</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink href='/fooldal' to="fooldal" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Főoldal
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/szolgaltatasok' to="szolgaltatasok" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Szolgáltatások
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/rolunk' to="rolunk" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Rólunk
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/csapatunk' to="csapatunk" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Csapatunk
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/ertekelesek' to="ertekelesek" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Értékelések
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/instagram' to="instagram" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Instagram
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/gyik' to="gyik" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  GYIK
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/idopontfoglalas' to="idopontfoglalas" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Időpontfoglalás
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Szolgáltatások */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Szolgáltatások</h3>
            <ul className="space-y-2">
              <li>
                <ScrollLink href='/szolgaltatasok' to="szolgaltatasok" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Hajvágás és styling
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/szolgaltatasok' to="szolgaltatasok" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Hajfestés
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/szolgaltatasok' to="szolgaltatasok" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Hajkezelések
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/szolgaltatasok' to="szolgaltatasok" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Manikűr és pedikűr
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/szolgaltatasok' to="szolgaltatasok" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Géllakk
                </ScrollLink>
              </li>
              <li>
                <ScrollLink href='/szolgaltatasok' to="szolgaltatasok" smooth={true} hashSpy={true} duration={500} className="cursor-pointer text-gray-300 hover:text-white transition-colors">
                  Műköröm
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Kapcsolat */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kapcsolat</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPinIcon size={20} className="text-white/70 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{Address}</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon size={20} className="text-white/70 flex-shrink-0" />
                <a href={`tel:${Phone}`} className="text-gray-300 hover:text-white transition-colors">{Phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon size={20} className="text-white/70 flex-shrink-0" />
                <a href={`mailto:${Email}`} className="text-gray-300 hover:text-white transition-colors">{Email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>{Copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
