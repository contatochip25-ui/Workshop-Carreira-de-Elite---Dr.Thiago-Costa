
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import PainBlock from './components/PainBlock';
import MentalShift from './components/MentalShift';
import Authority from './components/Authority';
import WorkshopContent from './components/WorkshopContent';
import SocialProof from './components/SocialProof';
import Eligibility from './components/Eligibility';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

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
