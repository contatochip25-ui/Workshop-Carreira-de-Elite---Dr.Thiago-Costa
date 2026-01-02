
import React from 'react';
import { ShieldAlert, Trash2, Smartphone, AlertTriangle } from 'lucide-react';

const PainBlock: React.FC = () => {
  const pains = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      text: "Refém da velocidade do dedo em grupos caóticos de WhatsApp."
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      text: "Sendo tratado como 'tapa-buraco' por coordenações amadoras."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      text: "Viver na incerteza de não saber se terá plantão na próxima semana."
    }
  ];

  return (
    <section className="py-24 bg-[#050505] px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-red-500/80 mb-8 reveal opacity-0 translate-y-6 transition-all duration-700">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em]">O Cenário Real</span>
        </div>

        <h2 className="font-serif text-[2.2rem] leading-tight text-white mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          O mercado médico <span className="gold-text italic">não perdoa</span> quem não tem estratégia.
        </h2>

        <div className="space-y-4">
          {pains.map((pain, idx) => (
            <div 
              key={idx} 
              className="premium-card p-8 rounded-2xl flex items-start space-x-6 reveal opacity-0 translate-y-10 border-l-2 border-l-red-500/20"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="shrink-0 text-red-500/40 group-hover:text-red-500 transition-colors">
                {pain.icon}
              </div>
              <p className="text-lg text-zinc-300 font-light leading-relaxed">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-zinc-900 bg-white/[0.01] rounded-3xl reveal opacity-0 translate-y-10">
          <p className="text-zinc-500 italic text-lg leading-relaxed font-light text-center">
            "Enquanto você espera a sorte, 38 mil novos médicos entram no mercado todos os anos. A concorrência não vai diminuir. Sua estratégia precisa aumentar."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainBlock;
