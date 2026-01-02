
import React from 'react';
import { AlertCircle } from 'lucide-react';

const PainBlock: React.FC = () => {
  const pains = [
    "Viver na incerteza de plantões avulsos que podem sumir a qualquer momento.",
    "A sensação de ser apenas um 'tapa-buraco' de escala, facilmente substituível.",
    "A exaustão de escalas caóticas que impedem qualquer plano sério de residência.",
    "O medo silencioso de estar perdendo os melhores anos de construção de carreira.",
    "Mendigar datas em grupos de WhatsApp enquanto outros médicos garantem o 'time de dentro'."
  ];

  return (
    <section className="py-28 md:py-48 bg-[#050505] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-6 mb-12 md:mb-16 reveal opacity-0 translate-y-10 transition-all duration-1000">
           <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-zinc-800"></div>
           <span className="font-serif italic text-xl md:text-3xl text-zinc-500">O Confronto</span>
           <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-zinc-800"></div>
        </div>

        <h2 className="font-serif text-[2.35rem] md:text-6xl text-center mb-16 md:mb-24 leading-[1.2] text-white reveal opacity-0 translate-y-10 transition-all duration-1000 relative pb-10 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[1px] after:bg-gold-bg/40">
          O CRM <span className="gold-text">deixou de ser um passaporte.</span> Agora, ele é apenas o <span className="gold-text italic">começo da disputa.</span>
        </h2>

        <div className="space-y-6 md:space-y-8">
          {pains.map((pain, idx) => (
            <div 
              key={idx} 
              className="premium-card group flex items-start space-x-4 md:space-x-8 p-6 md:p-10 rounded-2xl reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="mt-1.5 shrink-0">
                <AlertCircle className="w-5 h-5 md:w-7 md:h-7 text-zinc-700 group-hover:gold-text transition-all duration-500" />
              </div>
              <p className="text-lg md:text-2xl text-zinc-300/90 font-light leading-relaxed group-hover:text-white transition-colors">
                {pain}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 p-8 md:p-16 border border-zinc-900 bg-white/[0.01] rounded-3xl text-center reveal opacity-0 translate-y-10 transition-all duration-1000">
           <p className="text-zinc-400 italic text-lg md:text-2xl px-2 md:px-8 leading-relaxed font-light">
             "Continuar aceitando qualquer plantão não é esforço, é falta de direção. O mercado não perdoa médicos sem posicionamento."
           </p>
        </div>
      </div>
    </section>
  );
};

export default PainBlock;
