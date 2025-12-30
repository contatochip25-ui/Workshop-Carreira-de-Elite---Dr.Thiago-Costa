
import React from 'react';
import { Smartphone, CalendarX, Wallet } from 'lucide-react';

const InvisibleCycle: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-black px-6 border-y border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-20 md:mb-24 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700 relative pb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#F4C542] after:to-transparent">
          O <span className="gold-text">ciclo de exaustão</span> que destrói a carreira de quem não tem estratégia.
        </h2>

        <div className="space-y-10 md:space-y-14">
          <div className="flex items-start gap-6 p-6 md:p-8 rounded-sm bg-zinc-900/40 reveal opacity-0 translate-y-10 transition-all duration-700 border border-zinc-800/50">
            <Smartphone className="w-9 h-9 shrink-0 text-zinc-300 mt-1" />
            <div>
              <h3 className="text-2xl md:text-2xl font-bold mb-3 text-white">Refém da Velocidade do Dedo</h3>
              <p className="text-zinc-200 leading-relaxed font-light text-lg md:text-lg">
                Sua renda mensal depende de ser o primeiro a responder "Eu" em um chat barulhento. Se você piscar, perde a chance de pagar os boletos da semana.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 md:p-8 rounded-sm bg-zinc-900/40 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 border border-zinc-800/50">
            <CalendarX className="w-9 h-9 shrink-0 text-zinc-300 mt-1" />
            <div>
              <h3 className="text-2xl md:text-2xl font-bold mb-3 text-white">A Escala dos Restos</h3>
              <p className="text-zinc-200 leading-relaxed font-light text-lg md:text-lg">
                Você só trabalha quando alguém desiste. Finais de semana, feriados e madrugadas são sua única moeda de troca para tentar entrar em algum lugar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 md:p-8 rounded-sm bg-zinc-900/40 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 border border-zinc-800/50">
            <Wallet className="w-9 h-9 shrink-0 text-zinc-300 mt-1" />
            <div>
              <h3 className="text-2xl md:text-2xl font-bold mb-3 text-white">Paralisia Financeira</h3>
              <p className="text-zinc-200 leading-relaxed font-light text-lg md:text-lg">
                Trabalhar muito não significa crescer. Sem uma escala fixa, você gasta toda sua energia apenas sobrevivendo, sem tempo para estudar ou construir seu futuro.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 p-10 md:p-14 border border-[#F4C542]/30 bg-[#F4C542]/5 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <p className="italic text-zinc-100 text-xl md:text-xl leading-relaxed">
            "Este ciclo não se quebra sozinho com o tempo. Ele se quebra com uma correção de rota técnica e comportamental."
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvisibleCycle;
