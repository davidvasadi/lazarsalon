import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import useStrapi from '../hooks/useStrapi';

interface SubMenuItem {
  id?: number;
  to: string;
  label: string;
}

interface MenuItem {
  id?: number;
  to: string;
  label: string;
  submenu?: SubMenuItem[];
}

interface HeaderData {
  id: number;
  logoText: string;
  tagline: string;
  menuItems?: MenuItem[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  documentId: string;
}

interface HeaderResponse {
  data: HeaderData | null;
  meta: any;
}

const defaultMenuGroups = {
  about: {
    label: 'Rólunk',
    items: [
      { to: 'about', label: 'Szalonunkról' },
      { to: 'team', label: 'Csapatunk' },
      { to: 'reviews', label: 'Vélemények' },
      { to: 'instagram', label: 'Instagram' }
    ]
  },
  services: {
    label: 'Szolgáltatások',
    items: [
      { to: 'services', label: 'Áraink' },
      { to: 'faq', label: 'Gyakori kérdések' }
    ]
  }
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lekérjük az adatokat, deep populate a submenu-nak:
  const { data, loading, error } = useStrapi<HeaderResponse>('/api/header-setting?populate[menuItems][populate]=submenu');

  // if (loading) return <div>Betöltés...</div>;
  // if (error) return <div>Header Hiba történt: {error.message}</div>;

  const headerData = data?.data;
  const logoText = headerData?.logoText || 'Lazars';
  const tagline = headerData?.tagline || 'Szépségszalon';
  const dynamicMenuItems: MenuItem[] = headerData?.menuItems || [];

  return (
    <>
      {/* Desktop nézet */}
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-white/[0.90] backdrop-blur-md shadow-sm' : 'bg-gradient-to-b from-black/20 to-transparent'
          }`}
      >
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logó és tagline */}
            <RouterLink
              to="/"
              className={`smooth duration={500} relative z-10 cursor-pointer transition-all duration-500 ${isScrolled || isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl font-semibold text-[#1D1D1E] relative">
                  {logoText}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#b0913d]" />
                </span>
                <span className="text-sm text-[#38363C]/80 mt-0.5">{tagline}</span>
              </div>
            </RouterLink>

            {/* Asztali navigáció */}
            <nav className="hidden lg:flex items-center space-x-8">
              {dynamicMenuItems.length > 0 ? (
                dynamicMenuItems.map((item, idx) =>
                  item.submenu && item.submenu.length > 0 ? (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={`flex items-center gap-1 cursor-pointer transition-colors ${isScrolled ? 'text-[#38363C]' : 'text-white'
                          } hover:text-[#B4943E]`}
                      >
                        {item.label} <ChevronDownIcon size={16} />
                      </button>
                      <div
                        className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-200 ${openDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                          }`}
                      >
                        {item.submenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            to={subItem.to}
                            smooth={true}
                            duration={500}
                            className="block px-4 py-2 text-[#38363C] hover:bg-gray-50 hover:text-[#B4943E] cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={idx}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className={`cursor-pointer transition-colors hover:text-[#B4943E] ${isScrolled ? 'text-[#38363C]' : 'text-white'
                        }`}
                    >
                      {item.label}
                    </Link>
                  )
                )
              ) : (
                /* Fallback: statikus default menük */
                // ... (ugyanaz a fallback, itt is érdemes feltételes színt alkalmazni, ha szükséges)
                <>
                  <div className="relative group">
                    <button
                      className={`flex items-center gap-1 cursor-pointer transition-colors ${isScrolled ? 'text-[#38363C]' : 'text-white'
                        } hover:text-[#B4943E]`}
                      onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                    >
                      {defaultMenuGroups.about.label}
                      <ChevronDownIcon size={16} />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 cursor-pointer">
                      {defaultMenuGroups.about.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          smooth={true}
                          duration={500}
                          className="block px-4 py-2 text-[#38363C] hover:bg-gray-50 hover:text-[#B4943E]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* ... és hasonló a services részhez */}
                </>
              )}
              <Link
                to="booking"
                smooth={true}
                duration={500}
                className="bg-[#38363C] text-white px-6 py-2 rounded-lg hover:bg-[#1D1D1E] transition-colors cursor-pointer"
              >
                Időpontfoglalás
              </Link>
            </nav>

            {/* Mobil menü gomb (hamburger ikon) */}
            <button
              className={`lg:hidden z-[70] w-6 h-6 relative focus:outline-none ${isScrolled || isMenuOpen ? 'text-[#38363C]' : 'text-white'
                }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`absolute w-full h-0.5 transition-all duration-300 transform ${isMenuOpen
                    ? 'top-3 rotate-45 bg-[#38363C]'
                    : `top-1 rotate-0 ${isScrolled ? 'bg-[#38363C]' : 'bg-white'}`
                  }`}
              />
              <span
                className={`absolute w-full h-0.5 transition-all duration-300 transform ${isMenuOpen
                    ? 'top-3 -rotate-45 bg-[#38363C]'
                    : `top-4 rotate-0 ${isScrolled ? 'bg-[#38363C]' : 'bg-white'}`
                  }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobil menü overlay (AnimatePresence) – Dinamikus tartalom, de a mobil stílus az eredeti marad */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-[59] bg-white/[0.90] backdrop-blur-lg"
          >
            <nav className="container mx-auto px-4 py-8 pt-20 flex flex-col space-y-12">
              {dynamicMenuItems.length > 0 ? (
                dynamicMenuItems.map((item, idx) => (
                  <div key={idx} className={`space-y-2 ${idx === 0 ? 'mt-12' : ''}`}>
                    {item.submenu && item.submenu.length > 0 ? (
                      <>
                        <h3 className="text-[#B4943E] font-medium text-lg">{item.label}</h3>
                        {item.submenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            to={subItem.to}
                            smooth={true}
                            duration={500}
                            className="block text-[#38363C] py-2 text-lg hover:text-[#B4943E] transition-colors cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className="block text-[#38363C] py-2 text-lg hover:text-[#B4943E] transition-colors cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))
              ) : (
                <>
                  <div className="space-y-2 mt-12">
                    <h3 className="text-[#B4943E] font-medium text-lg">{defaultMenuGroups.about.label}</h3>
                    {defaultMenuGroups.about.items.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className="block text-[#38363C] py-2 text-lg hover:text-[#B4943E] transition-colors cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[#B4943E] font-medium text-lg">{defaultMenuGroups.services.label}</h3>
                    {defaultMenuGroups.services.items.map(item => (
                      <Link
                        key={item.to}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className="block text-[#38363C] py-2 text-lg hover:text-[#B4943E] transition-colors cursor-pointer"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
              <Link
                to="booking"
                smooth={true}
                duration={500}
                className="bg-[#38363C] text-white px-6 py-4 rounded-lg text-center text-lg font-medium mt-8"
                onClick={() => setIsMenuOpen(false)}
              >
                Időpontfoglalás
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
