
import React from 'react';
import { AlertCircle } from 'lucide-react';

const PainBlock: React.FC = () => {
  const pains = [
    "Plantões longos, cansativos e repetitivos que sugam sua energia.",
    "A sensação constante de estar sempre correndo atrás de algo que não alcança.",
    "Insegurança silenciosa nas decisões clínicas fora do ambiente acadêmico.",
    "Falta de clareza absoluta sobre qual especialização seguir e por quê.",
    "O medo paralisante de escolher o caminho errado e pagar caro depois."
  ];

  return (
    <section className="py-24 md:py-40 bg-[#0d0d0d] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
           <div className="h-px flex-1 bg-zinc-800"></div>
           <span className="font-serif italic text-xl md:text-2xl text-[#F4C542]">Identificação</span>
           <div className="h-px flex-1 bg-zinc-800"></div>
        </div>

        <h2 className="font-serif text-3xl md:text-6xl text-center mb-16 md:mb-24 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700 font-bold">
          Você sente que o diploma foi o começo, mas a direção sumiu.
        </h2>

        <div className="space-y-6 md:space-y-8">
          {pains.map((pain, idx) => (
            <div 
              key={idx} 
              className="group flex items-start space-x-4 md:space-x-8 p-6 md:p-10 border border-zinc-800 bg-black rounded-sm hover:border-zinc-500 transition-all reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mt-1 shrink-0">
                <AlertCircle className="w-6 h-6 text-[#F4C542] drop-shadow-[0_0_8px_rgba(244,197,66,0.2)]" />
              </div>
              <p className="text-base md:text-2xl text-white font-light leading-relaxed">
                {pain}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-16 md:mt-24 text-center text-zinc-300 italic text-lg md:text-xl reveal opacity-0 translate-y-10 transition-all duration-700 px-4 leading-relaxed">
          "O tom aqui não é de reclamação, é de realidade. O mercado não perdoa a falta de clareza estratégica."
        </p>
      </div>
    </section>
  );
};

export default PainBlock;
