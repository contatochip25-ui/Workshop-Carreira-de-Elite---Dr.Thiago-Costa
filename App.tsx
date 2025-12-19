
import React, { useEffect } from 'react';
import Hero from './components/Hero.tsx';
import PainBlock from './components/PainBlock.tsx';
import MentalShift from './components/MentalShift.tsx';
import Authority from './components/Authority.tsx';
import WorkshopContent from './components/WorkshopContent.tsx';
import SocialProof from './components/SocialProof.tsx';
import Eligibility from './components/Eligibility.tsx';
import FinalCta from './components/FinalCta.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  useEffect(() => {
    // Simple intersection observer for reveal animations
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
      <Hero />
      <SocialProof />
      <PainBlock />
      <MentalShift />
      <Authority />
      <WorkshopContent />
      <SocialProof />
      <Eligibility />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default App;
