
import React from 'react';
import { Check, X } from 'lucide-react';

const Eligibility: React.FC = () => {
  const isFor = [
    "Médicos recém-formados que vivem na instabilidade de plantões",
    "Quem cansou de mendigar datas em grupos de WhatsApp",
    "Médicos que buscam rotina para focar na prova de residência",
    "Quem entende que CRM sem estratégia não sustenta carreira",
    "Quem deseja ser convidado para as melhores escalas da cidade"
  ];

  const isNotFor = [
    "Quem acredita que o mercado voltará a ser escasso sozinho",
    "Quem aceita o amadorismo dos plantões avulsos para sempre",
    "Quem não aceita mudar sua postura e comportamento clínico",
    "Quem busca atalhos mágicos sem comprometimento com a excelência"
  ];

  return (
    <section className="py-28 md:py-48 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 md:gap-32">
        <div className="reveal opacity-0 translate-x-[-20px] transition-all duration-1000">
          <h2 className="font-serif text-[1.9rem] md:text-4xl mb-12 border-b border-zinc-800 pb-6 text-white font-bold uppercase tracking-tight leading-snug">
            O Workshop <span className="gold-text">é para você:</span>
          </h2>
          <ul className="space-y-8">
            {isFor.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-5">
                <Check className="w-6 h-6 text-green-500/80 mt-1 shrink-0" />
                <span className="text-zinc-200 text-xl font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="reveal opacity-0 translate-x-[20px] transition-all duration-1000">
          <h2 className="font-serif text-[1.9rem] md:text-4xl mb-12 border-b border-zinc-800 pb-6 text-zinc-400 font-bold uppercase tracking-tight leading-snug">
            <span className="gold-text">NÃO é para você:</span>
          </h2>
          <ul className="space-y-8">
            {isNotFor.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-5">
                <X className="w-6 h-6 text-red-700/80 mt-1 shrink-0" />
                <span className="text-zinc-400 text-xl font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
