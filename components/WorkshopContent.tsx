
import React from 'react';
import { Target, UserCheck, Shield, Clock, TrendingUp } from 'lucide-react';

const WorkshopContent: React.FC = () => {
  const items = [
    {
      title: "Posicionamento Dentro das Unidades",
      desc: "Como se comportar para ser notado positivamente pela coordenação sem parecer arrogante ou bajulador.",
      icon: <Target className="w-8 h-8 gold-text" />
    },
    {
      title: "Construção de Confiança e Autoridade",
      desc: "Atitudes práticas que aumentam a segurança da equipe no seu trabalho e garantem seu convite para a escala.",
      icon: <UserCheck className="w-8 h-8 gold-text" />
    },
    {
      title: "Como se Destacar sem Desgaste",
      desc: "Dicas de postura relacional para se tornar indispensável nas unidades de saúde mais disputadas.",
      icon: <Shield className="w-8 h-8 gold-text" />
    },
    {
      title: "O Prazo de Entrada e Saída",
      desc: "Como planejar sua passagem por unidades de alta demanda sem se queimar e garantindo sua transição de carreira.",
      icon: <Clock className="w-8 h-8 gold-text" />
    },
    {
      title: "Rotina e Previsibilidade Real",
      desc: "Como conquistar a escala fixa para finalmente ter tempo de estudar para a residência e planejar sua vida pessoal.",
      icon: <TrendingUp className="w-8 h-8 gold-text" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 reveal opacity-0 translate-y-10 transition-all duration-700">
            O que você vai aprender no Workshop
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Um roteiro prático e aplicável imediatamente no seu próximo plantão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="p-10 border border-zinc-800 bg-zinc-900/50 rounded-sm hover:bg-zinc-900 transition-all group reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="font-serif text-2xl mb-4 text-white group-hover:gold-text transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
          
          <div className="p-10 border-2 border-dashed border-zinc-800 flex flex-col justify-center items-center text-center reveal opacity-0 translate-y-10">
            <p className="text-zinc-600 italic">Interação ao vivo e Q&A direto com o Dr. Thiago para tirar suas dúvidas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopContent;
