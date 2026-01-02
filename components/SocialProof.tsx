
import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-black border-y border-zinc-900 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] md:text-xs mb-12 font-black opacity-80">
          Adesão em tempo real • Workshop Exclusivo
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="text-3xl md:text-4xl gold-text font-black tracking-[0.2em] uppercase drop-shadow-xl">
            Vagas Preenchidas: 13%
          </span>
          <span className="text-lg md:text-lg text-white font-bold uppercase tracking-[0.3em] mt-2 opacity-90">
            Lote 01 encerrando em breve
          </span>
        </div>
        
        <p className="mt-16 text-[11px] md:text-sm text-zinc-500 uppercase tracking-[0.25em] max-w-lg mx-auto leading-relaxed font-semibold px-6">
          As vagas são rigorosamente limitadas para garantir a profundidade técnica e a interação direta durante o workshop ao vivo.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
