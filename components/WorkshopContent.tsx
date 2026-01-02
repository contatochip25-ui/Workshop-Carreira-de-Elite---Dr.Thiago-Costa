
import React from 'react';
import { Target, UserCheck, Shield, Clock, TrendingUp } from 'lucide-react';

const WorkshopContent: React.FC = () => {
  const items = [
    {
      title: "Posicionamento Estratégico na Unidade",
      desc: "Como se comportar para ser a primeira opção da coordenação sem precisar bajular ninguém.",
      icon: <Target className="w-7 h-7 gold-text" />
    },
    {
      title: "Engenharia de Autoridade Clínica",
      desc: "Ações práticas que aumentam a segurança da equipe no seu trabalho e blindam seu lugar na escala.",
      icon: <UserCheck className="w-7 h-7 gold-text" />
    },
    {
      title: "Networking de Trincheira",
      desc: "Como identificar os tomadores de decisão reais de cada unidade e se tornar indispensável para eles.",
      icon: <Shield className="w-7 h-7 gold-text" />
    },
    {
      title: "Transição para o 'Time de Dentro'",
      desc: "O passo a passo para sair de um plantão avulso e garantir sua entrada oficial na escala fixa.",
      icon: <Clock className="w-7 h-7 gold-text" />
    },
    {
      title: "Liberdade e Previsibilidade",
      desc: "Como estabilizar sua agenda para focar no que importa: sua residência e seu futuro como especialista.",
      icon: <TrendingUp className="w-7 h-7 gold-text" />
    }
  ];

  return (
    <section className="py-28 md:py-56 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-40">
          <h2 className="font-serif text-[2.35rem] md:text-7xl mb-10 text-white reveal opacity-0 translate-y-10 transition-all duration-1000 relative pb-10 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[1px] after:bg-gold-bg/30 leading-[1.15]">
            A Rota da <span className="gold-text">Maestria de Escala</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-1000 delay-150 font-light italic leading-relaxed px-4">
            Um roteiro técnico, direto e aplicável no seu próximo plantão. Sem teorias vazias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="premium-card p-10 md:p-14 rounded-3xl group reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="mb-10 w-16 h-16 bg-zinc-900/80 flex items-center justify-center rounded-2xl group-hover:bg-[#F4C542]/10 transition-all duration-500 shadow-xl">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl md:text-4xl mb-6 text-white group-hover:gold-text transition-colors font-bold tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light group-hover:text-zinc-200 transition-colors duration-500">
                {item.desc}
              </p>
            </div>
          ))}
          
          <div className="p-10 md:p-14 rounded-3xl border-2 border-dashed border-zinc-900 flex flex-col justify-center items-center text-center reveal opacity-0 translate-y-10 bg-transparent hover:border-[#F4C542]/20 transition-all duration-700 min-h-[280px]">
            <p className="text-zinc-500 italic text-lg md:text-2xl font-medium leading-relaxed px-4">
              Sessão exclusiva de Q&A ao vivo para resolver os gargalos da sua carreira agora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopContent;
