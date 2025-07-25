import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface CookieBannerProps {
  onAccept: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentLocal = localStorage.getItem('cookie_consent');
    const consentCookie = document.cookie.includes('cookie_consent=true');

    if (!consentLocal && !consentCookie) {
      setVisible(true);
    }
  }, []);

  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
  };

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setCookie('cookie_consent', 'true', 365);
    setVisible(false);
    onAccept(); // App szintjén GtagLoader aktiválás
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false');
    setCookie('cookie_consent', 'false', 365);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-50 bg-white shadow-lg rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-[#1D1D1E] border border-gray-200">
      <button
        onClick={() => setVisible(false)}
        aria-label="Bezárás"
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        <X size={18} />
      </button>
      <div>
        Ez a weboldal sütiket használ statisztikai célokra.{' '}
        <a href="/privacy" className="text-[#B4943E] underline">További információ</a>
      </div>
      <div className="flex gap-2 mr-4">
        <button onClick={handleDecline} className="px-4 py-2 border border-gray-300 rounded-md">Elutasítom</button>
        <button onClick={handleAccept} className="bg-[#B4943E] text-white px-4 py-2 rounded-md">Elfogadom</button>
      </div>
    </div>
  );
};

export default CookieBanner;
