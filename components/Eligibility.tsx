
import React from 'react';
import { Check, X } from 'lucide-react';

const Eligibility: React.FC = () => {
  const isFor = [
    "Médicos recém-formados (até 3 anos de formado)",
    "Acadêmicos de medicina no último ano/meses",
    "Quem busca direção, não atalhos milagrosos",
    "Quem quer evitar erros que custam anos de carreira",
    "Médicos que desejam construir autoridade clínica"
  ];

  const isNotFor = [
    "Quem espera fórmulas mágicas de enriquecimento",
    "Quem não quer assumir responsabilidade pela carreira",
    "Buscadores de soluções rápidas e superficiais",
    "Médicos satisfeitos com a média do mercado"
  ];

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="reveal opacity-0 translate-x-[-20px] transition-all duration-700">
          <h2 className="font-serif text-3xl mb-12 border-b border-zinc-800 pb-4">É para você se:</h2>
          <ul className="space-y-6">
            {isFor.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-4">
                <Check className="w-5 h-5 text-green-700 mt-1 shrink-0" />
                <span className="text-gray-300 text-lg font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="reveal opacity-0 translate-x-[20px] transition-all duration-700">
          <h2 className="font-serif text-3xl mb-12 border-b border-zinc-800 pb-4">Não é para você se:</h2>
          <ul className="space-y-6">
            {isNotFor.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-4">
                <X className="w-5 h-5 text-red-900 mt-1 shrink-0" />
                <span className="text-gray-500 text-lg font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
