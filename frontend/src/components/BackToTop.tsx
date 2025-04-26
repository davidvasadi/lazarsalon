// src/components/BackToTop.tsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 500 })}
      className="
        fixed bottom-6 right-6 z-50
        bg-[#1D1D1E]/75 hover:bg-[#1D1D1E]/100
        text-white
        p-3 rounded-full
        shadow-lg
        opacity-97 hover:opacity-100
        transition-colors transition-opacity
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B4943E]
      "
      aria-label="Vissza a tetejére"
    >
      <ArrowUp size={20} />
    </button>
  );
};
