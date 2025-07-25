import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BackToTop } from './components/BackToTop';
import { Privacy } from './pages/Privacy';
import { CookieBanner } from './components/CookieBanner';
import { GtagLoader } from './components/GtagLoader';

export function App() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const localConsent = localStorage.getItem('cookie_consent') === 'true';
    const cookieConsent = document.cookie.includes('cookie_consent=true');

    if (localConsent || cookieConsent) {
      // console.log('[App] Hozzájárulás van, betöltjük a GtagLoader-t');
      setHasConsent(true);
    } else {
      // console.log('[App] Nincs hozzájárulás, NEM töltjük be a GtagLoader-t');
    }
  }, []);

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="w-full min-h-screen bg-[#FEFEFE] text-[#1D1D1E]">
        {hasConsent && <GtagLoader />}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <BackToTop />
        <Footer />
        {/* <CookieBanner /> */}
        <CookieBanner onAccept={() => setHasConsent(true)} />
      </div>
    </Router>
  );
}
