
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

const MarqueeTransition: React.FC = () => {
  const text = "INSCRIÇÕES ABERTAS • VAGAS LIMITADAS • INSCRIÇÕES ABERTAS • VAGAS LIMITADAS";
  return (
    <div className="w-full bg-zinc-950 border-y border-zinc-900 overflow-hidden py-5 md:py-6 relative z-20">
      <div className="animate-marquee-flow whitespace-nowrap flex">
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-zinc-500 px-6">
          {text} • {text} • {text}
        </span>
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-zinc-500 px-6">
          {text} • {text} • {text}
        </span>
      </div>
    </div>
  );
};

const AuthorityLeadershipImage: React.FC = () => {
  return (
    <section className="w-full bg-black py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-1000">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-3xl border border-white/5">
          <img 
            src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago3.jpg" 
            alt="Dr. Thiago Costa com equipe médica" 
            className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

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
      <Hero />
      <MarqueeTransition />
      <PainBlock />
      <MarketChange />
      <InvisibleCycle />
      <MentalShift />
      <AuthorityLeadershipImage />
      <WorkshopContent />
      <Eligibility />
      <Authority />
      <VideoTestimonials />
      <FAQ />
      <SocialProof />
      <FinalCta />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
