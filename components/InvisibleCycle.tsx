
import React from 'react';
import { Smartphone, CalendarX, Wallet } from 'lucide-react';

const InvisibleCycle: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-black px-6 border-y border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-20 md:mb-24 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700">
          O ciclo invisível que prende o médico recém-formado.
        </h2>

        <div className="space-y-10 md:space-y-14">
          <div className="flex items-start gap-6 p-6 md:p-8 rounded-sm bg-zinc-900/40 reveal opacity-0 translate-y-10 transition-all duration-700 border border-zinc-800/50">
            <Smartphone className="w-8 h-8 shrink-0 text-zinc-300 mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">A Escravidão do WhatsApp</h3>
              <p className="text-zinc-200 leading-relaxed font-light text-base md:text-lg">
                Você vive com o celular na mão, disputando plantões avulsos em grupos sem nenhuma garantia se terá trabalho na semana que vem.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 md:p-8 rounded-sm bg-zinc-900/40 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 border border-zinc-800/50">
            <CalendarX className="w-8 h-8 shrink-0 text-zinc-300 mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Mendicância de Datas</h3>
              <p className="text-zinc-200 leading-relaxed font-light text-base md:text-lg">
                Disputar fins de semana, aniversários e feriados apenas para conseguir fechar o mês. Sem rotina, sem previsão, sem vida.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 md:p-8 rounded-sm bg-zinc-900/40 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 border border-zinc-800/50">
            <Wallet className="w-8 h-8 shrink-0 text-zinc-300 mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">Insegurança Financeira</h3>
              <p className="text-zinc-200 leading-relaxed font-light text-base md:text-lg">
                O faturamento depende da sorte e da velocidade do seu dedo no chat. Se você adoecer ou quiser viajar, sua renda simplesmente desaparece.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 p-10 md:p-14 border border-[#F4C542]/30 bg-[#F4C542]/5 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <p className="italic text-zinc-100 text-lg md:text-xl leading-relaxed">
            "Esse ciclo, se não for quebrado nos primeiros 12 meses, torna-se uma prisão de exaustão difícil de escapar."
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvisibleCycle;
