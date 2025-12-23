
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-black border-y border-zinc-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-zinc-300 uppercase tracking-[0.4em] text-[9px] md:text-xs mb-8 font-black">
          Adesão em tempo real • Workshop Exclusivo
        </p>
        
        <div className="relative w-full h-1.5 md:h-2.5 bg-zinc-800 rounded-full overflow-hidden mb-6 reveal opacity-0 transition-all duration-1000 shadow-inner">
          <div 
            className="absolute top-0 left-0 h-full gradient-gold transition-all duration-[2500ms] ease-in-out w-[13%] shadow-[0_0_20px_rgba(244,197,66,0.5)]"
          ></div>
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-1">
          <span className="text-xs md:text-base gold-text font-black tracking-[0.3em] uppercase drop-shadow-sm">
            Vagas Preenchidas: 13%
          </span>
          <span className="text-[10px] md:text-sm text-zinc-100 font-bold uppercase tracking-widest mt-1">
            Lote 01 encerrando em breve
          </span>
        </div>
        
        <p className="mt-10 text-[10px] md:text-[12px] text-zinc-400 uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed font-semibold">
          As vagas são rigorosamente limitadas para garantir a profundidade técnica e a interação direta durante o workshop ao vivo.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
