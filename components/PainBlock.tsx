
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
    <section className="py-24 md:py-32 bg-[#050505] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
           <div className="h-px flex-1 bg-zinc-900"></div>
           <span className="font-serif italic text-xl md:text-2xl text-zinc-500">O Confronto</span>
           <div className="h-px flex-1 bg-zinc-900"></div>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mb-12 md:mb-20 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700 relative pb-8 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#F4C542] after:to-transparent">
          O CRM <span className="gold-text">deixou de ser um passaporte.</span> Agora, ele é apenas o <span className="gold-text">começo da disputa.</span>
        </h2>

        <div className="space-y-5 md:space-y-6">
          {pains.map((pain, idx) => (
            <div 
              key={idx} 
              className="premium-card group flex items-start space-x-4 md:space-x-6 p-6 md:p-8 rounded-xl reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mt-1 shrink-0">
                <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-zinc-600 group-hover:gold-text transition-colors duration-500" />
              </div>
              <p className="text-base md:text-xl text-zinc-300 font-light leading-relaxed group-hover:text-zinc-100 transition-colors">
                {pain}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 p-8 md:p-12 border border-zinc-900 bg-zinc-900/10 rounded-2xl text-center reveal opacity-0 translate-y-10 transition-all duration-700">
           <p className="text-zinc-400 italic text-base md:text-lg px-4 leading-relaxed font-light">
             "Continuar aceitando qualquer plantão não é esforço, é falta de direção. O mercado não perdoa médicos sem posicionamento."
           </p>
        </div>
      </div>
    </section>
  );
};

export default PainBlock;
