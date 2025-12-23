
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black border-y border-zinc-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-zinc-300 uppercase tracking-[0.4em] text-[9px] md:text-xs mb-10 md:mb-12 font-black">
          Adesão em tempo real • Workshop Exclusivo
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-2">
          <span className="text-xs md:text-base gold-text font-black tracking-[0.3em] uppercase drop-shadow-sm">
            Vagas Preenchidas: 13%
          </span>
          <span className="text-[10px] md:text-sm text-zinc-100 font-bold uppercase tracking-widest mt-2">
            Lote 01 encerrando em breve
          </span>
        </div>
        
        <p className="mt-12 md:mt-16 text-[10px] md:text-[12px] text-zinc-400 uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed font-semibold">
          As vagas são rigorosamente limitadas para garantir a profundidade técnica e a interação direta durante o workshop ao vivo.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
