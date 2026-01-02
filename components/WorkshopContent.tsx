
import React from 'react';
import { Target, UserCheck, Shield, Clock, Zap } from 'lucide-react';

const WorkshopContent: React.FC = () => {
  const items = [
    {
      title: "Posicionamento na Unidade",
      desc: "Como se comportar para ser a primeira opção sem bajular ninguém.",
      icon: <Target className="w-6 h-6 gold-text" />
    },
    {
      title: "Autoridade Clínica",
      desc: "Ações práticas que blindam seu lugar na escala definitiva.",
      icon: <UserCheck className="w-6 h-6 gold-text" />
    },
    {
      title: "Networking de Elite",
      desc: "Como se tornar indispensável para os tomadores de decisão.",
      icon: <Shield className="w-6 h-6 gold-text" />
    },
    {
      title: "Transição de Carreira",
      desc: "O passo a passo para sair do 'avulso' e entrar no 'fixo'.",
      icon: <Zap className="w-6 h-6 gold-text" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#030303]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] gold-text uppercase tracking-[0.5em] font-black mb-4 block">O Caminho das Pedras</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white reveal opacity-0 translate-y-10 leading-tight">
            A Engenharia da <span className="gold-text italic">Sua Nova Rotina.</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="premium-card p-10 rounded-3xl reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-6 w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl border border-white/10">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 border-2 border-dashed border-zinc-900 rounded-3xl text-center bg-black reveal opacity-0 translate-y-10">
          <p className="text-zinc-500 italic text-lg leading-relaxed font-light">
            + Sessão de Mentoria Coletiva ao Vivo para tirar dúvidas reais dos seus próximos plantões.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkshopContent;
