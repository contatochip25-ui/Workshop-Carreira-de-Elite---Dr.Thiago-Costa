
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-black border-y border-zinc-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#F4C542] uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 font-black">
          ADESÃO EM TEMPO REAL • WORKSHOP EXCLUSIVO
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-3">
          <span className="text-sm md:text-xl text-white font-black tracking-[0.3em] uppercase drop-shadow-sm">
            Vagas Preenchidas: 13%
          </span>
          <span className="text-[10px] md:text-sm text-zinc-300 font-bold uppercase tracking-widest mt-2">
            O Lote 01 está encerrando em breve
          </span>
        </div>
        
        <p className="mt-12 text-[10px] md:text-[12px] text-zinc-100 uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed font-bold">
          As vagas são rigorosamente limitadas para garantir a profundidade técnica e a interação direta durante o workshop ao vivo.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
