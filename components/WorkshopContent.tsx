
import React from 'react';
import { Target, UserCheck, Shield, Clock, TrendingUp } from 'lucide-react';

const WorkshopContent: React.FC = () => {
  const items = [
    {
      title: "Posicionamento Estratégico na Unidade",
      desc: "Como se comportar para ser a primeira opção da coordenação sem precisar bajular ninguém.",
      icon: <Target className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    },
    {
      title: "Engenharia de Autoridade Clínica",
      desc: "Ações práticas que aumentam a segurança da equipe no seu trabalho e blindam seu lugar na escala.",
      icon: <UserCheck className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    },
    {
      title: "Networking de Trincheira",
      desc: "Como identificar os tomadores de decisão reais de cada unidade e se tornar indispensável para eles.",
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    },
    {
      title: "Transição para o 'Time de Dentro'",
      desc: "O passo a passo para sair de um plantão avulso e garantir sua entrada oficial na escala fixa.",
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    },
    {
      title: "Liberdade e Previsibilidade",
      desc: "Como estabilizar sua agenda para focar no que importa: sua residência e seu futuro como especialista.",
      icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 gold-text" />
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 text-white reveal opacity-0 translate-y-10 transition-all duration-700 relative pb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#F4C542] after:to-transparent">
            A Rota da <span className="gold-text">Maestria de Escala</span>
          </h2>
          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 font-light italic">
            Um roteiro técnico, direto e aplicável no seu próximo plantão. Sem teorias vazias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="p-12 border border-zinc-800 bg-zinc-900/60 rounded-sm hover:bg-zinc-900 transition-all group reveal opacity-0 translate-y-10 hover:border-gold-text/40 shadow-xl"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-10 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white group-hover:gold-text transition-colors font-bold tracking-tight">{item.title}</h3>
              <p className="text-zinc-200 text-base md:text-lg leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
          
          <div className="p-12 border-2 border-dashed border-zinc-700 flex flex-col justify-center items-center text-center reveal opacity-0 translate-y-10 bg-zinc-900/20">
            <p className="text-zinc-200 italic text-lg font-medium leading-relaxed">Sessão exclusiva de Q&A ao vivo para resolver os gargalos da sua carreira agora.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopContent;
