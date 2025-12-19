
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
    <section className="py-20 md:py-24 bg-[#0d0d0d] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
           <div className="h-px flex-1 bg-zinc-800"></div>
           <span className="font-serif italic text-xl md:text-2xl text-gray-500">Identificação</span>
           <div className="h-px flex-1 bg-zinc-800"></div>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl text-center mb-12 md:mb-16 leading-tight reveal opacity-0 translate-y-10 transition-all duration-700">
          Você sente que o diploma foi o começo, mas a direção sumiu.
        </h2>

        <div className="space-y-4 md:space-y-6">
          {pains.map((pain, idx) => (
            <div 
              key={idx} 
              className="group flex items-start space-x-4 md:space-x-6 p-5 md:p-6 border border-zinc-800 bg-black/40 rounded-lg hover:border-zinc-600 transition-all reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mt-1 shrink-0">
                <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-zinc-600 group-hover:gold-text transition-colors" />
              </div>
              <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed">
                {pain}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 md:mt-16 text-center text-gray-500 italic text-base md:text-lg reveal opacity-0 translate-y-10 transition-all duration-700 px-4">
          "O tom aqui não é de reclamação, é de realidade. O mercado não perdoa a falta de clareza."
        </p>
      </div>
    </section>
  );
};

export default PainBlock;
