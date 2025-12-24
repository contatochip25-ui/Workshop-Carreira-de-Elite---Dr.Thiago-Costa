
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
    <section className="py-20 md:py-24 bg-[#0d0d0d] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
           <div className="h-px flex-1 bg-zinc-800"></div>
           <span className="font-serif italic text-xl md:text-2xl text-zinc-400">O Confronto</span>
           <div className="h-px flex-1 bg-zinc-800"></div>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mb-12 md:mb-16 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700">
          O CRM deixou de ser um passaporte. Agora, ele é apenas o começo da disputa.
        </h2>

        <div className="space-y-4 md:space-y-6">
          {pains.map((pain, idx) => (
            <div 
              key={idx} 
              className="group flex items-start space-x-4 md:space-x-6 p-5 md:p-6 border border-zinc-800 bg-black rounded-lg hover:border-zinc-500 transition-all reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mt-1 shrink-0">
                <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:gold-text transition-colors" />
              </div>
              <p className="text-base md:text-xl text-zinc-100 font-light leading-relaxed">
                {pain}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 md:mt-16 text-center text-zinc-400 italic text-base md:text-lg reveal opacity-0 translate-y-10 transition-all duration-700 px-4 leading-relaxed">
          "Continuar aceitando qualquer plantão não é esforço, é falta de direção. O mercado não perdoa médicos sem posicionamento."
        </p>
      </div>
    </section>
  );
};

export default PainBlock;
