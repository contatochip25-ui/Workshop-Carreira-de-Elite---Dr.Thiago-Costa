
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-black border-y border-[#d4af37]/10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 uppercase tracking-[0.3em] text-[10px] md:text-xs mb-8 font-semibold opacity-70">
          Adesão em tempo real • Workshop Exclusivo
        </p>
        
        <div className="relative w-full h-2 md:h-3 bg-zinc-900 rounded-full overflow-hidden mb-6 reveal opacity-0 transition-all duration-1000 shadow-inner">
          <div 
            className="absolute top-0 left-0 h-full gradient-gold transition-all duration-[2500ms] ease-in-out w-[3%] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
          ></div>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-2">
          <span className="text-sm md:text-base gold-text font-bold tracking-widest uppercase animate-pulse">
            Vagas Preenchidas: 3%
          </span>
        </div>
        
        <p className="mt-10 text-[10px] md:text-xs text-zinc-600 uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed">
          As vagas são rigorosamente limitadas para garantir a profundidade técnica e a interação direta durante o workshop ao vivo.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
