
import React from 'react';
import { Users, AlertTriangle, TrendingUp } from 'lucide-react';

const MarketChange: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0d0d0d] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-gold-text uppercase tracking-widest text-xs font-bold mb-4 block">A Nova Realidade</span>
          <h2 className="font-serif text-3xl md:text-5xl mb-6">O que mudou no mercado médico?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-zinc-800 bg-black/40 rounded-sm reveal opacity-0 translate-y-10 transition-all duration-700">
            <Users className="w-10 h-10 gold-text mb-6" />
            <h3 className="font-serif text-2xl mb-4">Excesso de Profissionais</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hoje, mais de 38 mil médicos se formam por ano. A escassez acabou. Você não é mais disputado pelo simples fato de ter um CRM.
            </p>
          </div>
          
          <div className="p-8 border border-zinc-800 bg-black/40 rounded-sm reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <AlertTriangle className="w-10 h-10 gold-text mb-6" />
            <h3 className="font-serif text-2xl mb-4">Competição Intensa</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mesmo plantões mal pagos e escalas exaustivas agora são disputados em grupos de WhatsApp em segundos. A margem para erro sumiu.
            </p>
          </div>

          <div className="p-8 border border-zinc-800 bg-black/40 rounded-sm reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <TrendingUp className="w-10 h-10 gold-text mb-6" />
            <h3 className="font-serif text-2xl mb-4">Escalas Raras</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              As escalas fixas se tornaram "joias da coroa". Quem está dentro não sai, e quem quer entrar precisa entender o jogo invisível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketChange;
