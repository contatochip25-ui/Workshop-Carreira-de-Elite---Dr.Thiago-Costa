
import React from 'react';
import { Target, UserCheck, Shield, Clock, TrendingUp } from 'lucide-react';

const WorkshopContent: React.FC = () => {
  const items = [
    {
      title: "Posicionamento Dentro das Unidades",
      desc: "Como se comportar para ser notado positivamente pela coordenação sem parecer arrogante ou bajulador.",
      icon: <Target className="w-10 h-10 md:w-14 md:h-14 gold-text" />
    },
    {
      title: "Construção de Confiança e Autoridade",
      desc: "Atitudes práticas que aumentam a segurança da equipe no seu trabalho e garantem seu convite para a escala.",
      icon: <UserCheck className="w-10 h-10 md:w-14 md:h-14 gold-text" />
    },
    {
      title: "Como se Destacar sem Desgaste",
      desc: "Dicas de postura relacional para se tornar indispensável nas unidades de saúde mais disputadas.",
      icon: <Shield className="w-10 h-10 md:w-14 md:h-14 gold-text" />
    },
    {
      title: "O Prazo de Entrada e Saída",
      desc: "Como planejar sua passagem por unidades de alta demanda sem se queimar e garantindo sua transição de carreira.",
      icon: <Clock className="w-10 h-10 md:w-14 md:h-14 gold-text" />
    },
    {
      title: "Rotina e Previsibilidade Real",
      desc: "Como conquistar a escala fixa para finalmente ter tempo de estudar para a residência e planejar sua vida pessoal.",
      icon: <TrendingUp className="w-10 h-10 md:w-14 md:h-14 gold-text" />
    }
  ];

  return (
    <section className="py-32 md:py-56 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-32">
          <h2 className="font-serif text-4xl md:text-7xl mb-10 text-white reveal opacity-0 translate-y-10 transition-all duration-700 font-bold leading-tight">
            O que você vai aprender no Workshop
          </h2>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 font-light italic">
            Um roteiro prático, técnico e aplicável imediatamente no seu próximo plantão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="p-12 md:p-16 border border-zinc-800 bg-zinc-900/40 rounded-sm hover:bg-zinc-900 transition-all group reveal opacity-0 translate-y-10 hover:border-[#F4C542]/40 shadow-xl"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-12 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="font-serif text-2xl md:text-4xl mb-8 text-white group-hover:gold-text transition-colors font-bold tracking-tight">{item.title}</h3>
              <p className="text-white text-base md:text-xl leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
          
          <div className="p-12 md:p-16 border-2 border-dashed border-zinc-700 flex flex-col justify-center items-center text-center reveal opacity-0 translate-y-10 bg-zinc-900/10">
            <p className="text-[#F4C542] italic text-xl md:text-2xl font-black leading-relaxed">AO VIVO • Q&A DIRETO COM O DR. THIAGO PARA TIRAR SUAS DÚVIDAS.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopContent;
