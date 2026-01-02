
import React from 'react';
import { Smartphone, CalendarX, Wallet } from 'lucide-react';

const InvisibleCycle: React.FC = () => {
  return (
    <section className="py-28 md:py-48 bg-black px-6 border-y border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-6xl text-center mb-20 md:mb-28 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-1000 relative pb-8 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[1px] after:bg-gold-bg/30">
          O <span className="gold-text">ciclo de exaustão</span> que destrói a carreira de quem não tem estratégia.
        </h2>

        <div className="space-y-12 md:space-y-20">
          <div className="flex items-start gap-8 p-8 md:p-12 rounded-3xl bg-zinc-950/50 reveal opacity-0 translate-y-10 transition-all duration-1000 border border-zinc-800/40">
            <Smartphone className="w-10 h-10 shrink-0 text-[#F4C542]/70 mt-1" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Refém da Velocidade do Dedo</h3>
              <p className="text-zinc-300 leading-relaxed font-light text-lg md:text-xl">
                Sua renda mensal depende de ser o primeiro a responder "Eu" em um chat barulhento. Se você piscar, perde a chance de pagar os boletos da semana.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 p-8 md:p-12 rounded-3xl bg-zinc-950/50 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-150 border border-zinc-800/40">
            <CalendarX className="w-10 h-10 shrink-0 text-[#F4C542]/70 mt-1" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">A Escala dos Restos</h3>
              <p className="text-zinc-300 leading-relaxed font-light text-lg md:text-xl">
                Você só trabalha quando alguém desiste. Finais de semana, feriados e madrugadas são sua única moeda de troca para tentar entrar em algum lugar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 p-8 md:p-12 rounded-3xl bg-zinc-950/50 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 border border-zinc-800/40">
            <Wallet className="w-10 h-10 shrink-0 text-[#F4C542]/70 mt-1" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Paralisia Financeira</h3>
              <p className="text-zinc-300 leading-relaxed font-light text-lg md:text-xl">
                Trabalhar muito não significa crescer. Sem uma escala fixa, você gasta toda sua energia apenas sobrevivendo, sem tempo para estudar ou construir seu futuro.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32 p-10 md:p-16 border border-[#F4C542]/20 bg-[#F4C542]/5 text-center reveal opacity-0 translate-y-10 transition-all duration-1000">
          <p className="italic text-zinc-100 text-lg md:text-2xl leading-relaxed font-light">
            "Este ciclo não se quebra sozinho com o tempo. Ele se quebra com uma correção de rota técnica e comportamental."
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvisibleCycle;
