
import React from 'react';
import { Target, UserCheck, Shield, Clock, TrendingUp } from 'lucide-react';

const WorkshopContent: React.FC = () => {
  const items = [
    {
      title: "Posicionamento Dentro das Unidades",
      desc: "Como se comportar para ser notado positivamente pela coordenação sem parecer arrogante ou bajulador.",
      icon: <Target className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    },
    {
      title: "Construção de Confiança e Autoridade",
      desc: "Atitudes práticas que aumentam a segurança da equipe no seu trabalho e garantem seu convite para a escala.",
      icon: <UserCheck className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    },
    {
      title: "Como se Destacar sem Desgaste",
      desc: "Dicas de postura relacional para se tornar indispensável nas unidades de saúde mais disputadas.",
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    },
    {
      title: "O Prazo de Entrada e Saída",
      desc: "Como planejar sua passagem por unidades de alta demanda sem se queimar e garantindo sua transição de carreira.",
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    },
    {
      title: "Rotina e Previsibilidade Real",
      desc: "Como conquistar a escala fixa para finalmente ter tempo de estudar para a residência e planejar sua vida pessoal.",
      icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 reveal opacity-0 translate-y-10 transition-all duration-700">
            O que você vai aprender no Workshop
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 font-light italic">
            Um roteiro prático e aplicável imediatamente no seu próximo plantão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="p-12 border border-zinc-800 bg-zinc-900/40 rounded-sm hover:bg-zinc-900 transition-all group reveal opacity-0 translate-y-10 hover:border-gold-text/20"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-10 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white group-hover:gold-text transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
          
          <div className="p-12 border-2 border-dashed border-zinc-800 flex flex-col justify-center items-center text-center reveal opacity-0 translate-y-10 bg-zinc-900/10">
            <p className="text-zinc-500 italic text-lg">Interação ao vivo e Q&A direto com o Dr. Thiago para tirar suas dúvidas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopContent;
