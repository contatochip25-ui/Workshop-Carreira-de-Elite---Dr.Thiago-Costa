
import React from 'react';
import { Smartphone, CalendarX, Wallet } from 'lucide-react';

const InvisibleCycle: React.FC = () => {
  return (
    <section className="py-20 bg-black px-6 border-y border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 leading-tight reveal opacity-0 translate-y-10 transition-all duration-700">
          O ciclo invisível que prende o médico recém-formado.
        </h2>

        <div className="space-y-8">
          <div className="flex items-start gap-6 p-6 rounded-sm bg-zinc-900/30 reveal opacity-0 translate-y-10 transition-all duration-700">
            <Smartphone className="w-8 h-8 shrink-0 text-zinc-600" />
            <div>
              <h3 className="text-xl font-bold mb-2">A Escravidão do WhatsApp</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Você vive com o celular na mão, disputando plantões avulsos em grupos sem nenhuma garantia se terá trabalho na semana que vem.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 rounded-sm bg-zinc-900/30 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <CalendarX className="w-8 h-8 shrink-0 text-zinc-600" />
            <div>
              <h3 className="text-xl font-bold mb-2">Mendicância de Datas</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                Disputar fins de semana, aniversários e feriados apenas para conseguir fechar o mês. Sem rotina, sem previsão, sem vida.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-6 rounded-sm bg-zinc-900/30 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <Wallet className="w-8 h-8 shrink-0 text-zinc-600" />
            <div>
              <h3 className="text-xl font-bold mb-2">Insegurança Financeira</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                O faturamento depende da sorte e da velocidade do seu dedo no chat. Se você adoecer ou quiser viajar, sua renda simplesmente desaparece.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 border border-gold-text/20 bg-gold-text/5 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <p className="italic text-gray-300">
            "Esse ciclo, se não for quebrado nos primeiros 12 meses, torna-se uma prisão de exaustão difícil de escapar."
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvisibleCycle;
