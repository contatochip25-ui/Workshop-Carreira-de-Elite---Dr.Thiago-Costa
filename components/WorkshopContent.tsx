
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
    <section className="py-20 md:py-40 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <h2 className="font-serif text-3xl md:text-6xl mb-6 md:mb-8 text-white reveal opacity-0 translate-y-10 transition-all duration-700 relative pb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#F4C542] after:to-transparent">
            A Rota da <span className="gold-text">Maestria de Escala</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 font-light italic leading-relaxed">
            Um roteiro técnico, direto e aplicável no seu próximo plantão. Sem teorias vazias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="premium-card p-8 md:p-12 rounded-2xl md:rounded-3xl group reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-8 w-12 h-12 md:w-14 md:h-14 bg-zinc-900 flex items-center justify-center rounded-xl md:rounded-2xl group-hover:bg-[#F4C542]/10 transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl md:text-3xl mb-4 md:mb-6 text-white group-hover:gold-text transition-colors font-bold tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm md:text-lg leading-relaxed font-light group-hover:text-zinc-200 transition-colors duration-500">
                {item.desc}
              </p>
            </div>
          ))}
          
          <div className="p-8 md:p-12 rounded-2xl md:rounded-3xl border-2 border-dashed border-zinc-900 flex flex-col justify-center items-center text-center reveal opacity-0 translate-y-10 bg-transparent hover:border-[#F4C542]/20 transition-all duration-500">
            <p className="text-zinc-400 italic text-base md:text-lg font-medium leading-relaxed">
              Sessão exclusiva de Q&A ao vivo para resolver os gargalos da sua carreira agora.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopContent;
