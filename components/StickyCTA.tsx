
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [nativeButtonsInView, setNativeButtonsInView] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setNativeButtonsInView((prev) => prev + 1);
          } else {
            setNativeButtonsInView((prev) => Math.max(0, prev - 1));
          }
        });
      },
      { threshold: 0.1 }
    );

    const buttons = document.querySelectorAll('.main-cta-button');
    buttons.forEach((btn) => observer.observe(btn));

    const handleScroll = () => {
      const isScrolledPastHero = window.scrollY > 800;
      setShowSticky(isScrolledPastHero);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const shouldRender = showSticky && nativeButtonsInView === 0;

  return (
    <div 
      className={`fixed bottom-10 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:w-auto z-[100] transition-all duration-700 transform ${
        shouldRender ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <button className="premium-led-btn w-full md:min-w-[340px] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div className="premium-led-btn-inner px-8 py-5 md:px-10 md:py-5 text-[11px] md:text-sm flex items-center justify-center space-x-3">
          <span className="font-black">COMPRAR INGRESSO | LOTE 01</span>
          <ChevronRight className="w-5 h-5 text-[#F4C542]" />
        </div>
      </button>
    </div>
  );
};

export default StickyCTA;
