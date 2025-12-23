
import React, { useEffect } from 'react';
import Hero from './components/Hero.tsx';
import SocialProof from './components/SocialProof.tsx';
import PainBlock from './components/PainBlock.tsx';
import MarketChange from './components/MarketChange.tsx';
import InvisibleCycle from './components/InvisibleCycle.tsx';
import Authority from './components/Authority.tsx';
import WorkshopContent from './components/WorkshopContent.tsx';
import MentalShift from './components/MentalShift.tsx';
import VideoTestimonials from './components/VideoTestimonials.tsx';
import Eligibility from './components/Eligibility.tsx';
import FAQ from './components/FAQ.tsx';
import FinalCta from './components/FinalCta.tsx';
import Footer from './components/Footer.tsx';
import StickyCTA from './components/StickyCTA.tsx';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* 1. IMPACTO + POSICIONAMENTO */}
      <Hero />
      
      {/* 2. REFORÇO DE ADESÃO (Simplificado) */}
      <SocialProof />
      
      {/* 3. IDENTIFICAÇÃO COM A DOR (Subiu para conectar com público frio) */}
      <PainBlock />
      <MarketChange />
      <InvisibleCycle />
      
      {/* 4. AUTORIDADE E VISÃO */}
      <Authority />
      
      {/* 5. O QUE É O EVENTO + O QUE VAI APRENDER */}
      <WorkshopContent />
      <MentalShift />
      
      {/* 6. PROVA SOCIAL EM VÍDEO */}
      <VideoTestimonials />
      
      {/* 7. ESTRUTURA E REGRAS */}
      <Eligibility />
      
      {/* 8. CLAREZA FINAL */}
      <FAQ />
      
      {/* 9. FECHAMENTO FINAL */}
      <FinalCta />
      
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
