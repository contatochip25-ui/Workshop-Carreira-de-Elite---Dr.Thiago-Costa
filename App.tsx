
import React, { useEffect } from 'react';
import Hero from './components/Hero.tsx';
import PainBlock from './components/PainBlock.tsx';
import MarketChange from './components/MarketChange.tsx';
import InvisibleCycle from './components/InvisibleCycle.tsx';
import MentalShift from './components/MentalShift.tsx';
import WorkshopContent from './components/WorkshopContent.tsx';
import Eligibility from './components/Eligibility.tsx';
import Authority from './components/Authority.tsx';
import VideoTestimonials from './components/VideoTestimonials.tsx';
import FAQ from './components/FAQ.tsx';
import SocialProof from './components/SocialProof.tsx';
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
      {/* MANTIDO INTACTO - HERO */}
      <Hero />
      
      {/* 1️⃣ Sessão de aprofundamento da dor e identificação */}
      <PainBlock />
      
      {/* 2️⃣ Sessão de quebra de crença (por que esforço ≠ resultado) */}
      <MarketChange />
      
      {/* 3️⃣ Sessão de mecanismo / jogo comportamental */}
      <InvisibleCycle />
      <MentalShift />
      
      {/* 4️⃣ Sessão explicando o que o médico vai aprender no workshop */}
      <WorkshopContent />
      
      {/* 5️⃣ Sessão de estrutura do evento (como vai funcionar / elegibilidade) */}
      <Eligibility />
      
      {/* 6️⃣ Sessão sobre o Dr. Thiago (autoridade contextual) */}
      <Authority />
      
      {/* 7️⃣ Sessão de provas sociais (vídeos/depoimentos) */}
      <VideoTestimonials />
      
      {/* FAQ e Reforço de Adesão antes do CTA Final */}
      <FAQ />
      <SocialProof />
      
      {/* 8️⃣ Sessão de CTA final */}
      <FinalCta />
      
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
