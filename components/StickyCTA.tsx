
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [nativeButtonsInView, setNativeButtonsInView] = useState(0);

  useEffect(() => {
    // 1. Observer to detect if main buttons are visible
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

    // 2. Scroll listener to check if we are past the hero headline
    const handleScroll = () => {
      // Show sticky if we are at least 500px down and no buttons are in view
      const isScrolledPastHero = window.scrollY > 500;
      setShowSticky(isScrolledPastHero);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Logical condition: scrolled past hero AND none of the main buttons are visible
  const shouldRender = showSticky && nativeButtonsInView === 0;

  return (
    <div 
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${
        shouldRender ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <button className="premium-led-btn min-w-[280px] shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
        <div className="premium-led-btn-inner px-6 py-3.5 text-xs md:text-sm flex items-center space-x-2">
          <span>Comprar Ingresso | Lote 01</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
};

export default StickyCTA;
