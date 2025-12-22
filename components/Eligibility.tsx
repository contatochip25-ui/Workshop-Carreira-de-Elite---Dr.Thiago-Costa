
import React from 'react';
import { Check, X } from 'lucide-react';

const Eligibility: React.FC = () => {
  const isFor = [
    "Médicos recém-formados que vivem de plantões instáveis",
    "Quem quer sair da disputa por escala em grupos de WhatsApp",
    "Médicos que buscam previsibilidade para estudar para residência",
    "Quem entende que o mercado mudou e quer se adaptar",
    "Quem deseja ser convidado para as melhores escalas fixas"
  ];

  const isNotFor = [
    "Quem acredita que o mercado vai voltar a ser escasso",
    "Quem aceita viver eternamente disputando plantões avulsos",
    "Quem não está disposto a mudar comportamento e postura profissional",
    "Quem busca fórmulas mágicas sem mudança de atitude clínica"
  ];

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div className="reveal opacity-0 translate-x-[-20px] transition-all duration-700">
          <h2 className="font-serif text-3xl mb-12 border-b border-zinc-800 pb-4">Este Workshop é para você se:</h2>
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
          <h2 className="font-serif text-3xl mb-12 border-b border-zinc-800 pb-4">NÃO é para você se:</h2>
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
