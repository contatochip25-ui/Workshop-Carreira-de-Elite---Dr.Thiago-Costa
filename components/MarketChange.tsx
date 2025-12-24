
import React from 'react';
import { Users, AlertTriangle, TrendingUp } from 'lucide-react';

const MarketChange: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-[#0d0d0d] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-32 reveal opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-gold-text uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-8 block">A Nova Engenharia Médica</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-10 text-white leading-tight relative pb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#F4C542] after:to-transparent">A <span className="gold-text">escassez médica acabou.</span><br/>Você está preparado?</h2>
          <div className="w-24 h-1 bg-gold-text/40 mx-auto rounded-full mt-4 hidden"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="p-10 border border-zinc-800 bg-black rounded-sm reveal opacity-0 translate-y-10 transition-all duration-700 hover:border-gold-text/50 transition-colors">
            <div className="mb-10 flex items-center space-x-4">
              <Users className="w-12 h-12 gold-text" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white">Inflação de Profissionais</h3>
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed font-light">
              Com 38 mil novos médicos por ano, ter um CRM não te torna mais especial. Hoje, o mercado escolhe quem resolve problemas, não quem apenas porta um título.
            </p>
          </div>
          
          <div className="p-10 border border-zinc-800 bg-black rounded-sm reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 hover:border-gold-text/50 transition-colors">
            <div className="mb-10 flex items-center space-x-4">
              <AlertTriangle className="w-12 h-12 gold-text" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white">O Fim do 'Amadorismo'</h3>
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed font-light">
              Plantões de grupo de WhatsApp são o resto da escala. Quem não tem estratégia de entrada nas unidades de elite viverá das sobras de quem já entendeu o jogo.
            </p>
          </div>

          <div className="p-10 border border-zinc-800 bg-black rounded-sm reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 hover:border-gold-text/50 transition-colors">
            <div className="mb-10 flex items-center space-x-4">
              <TrendingUp className="w-12 h-12 gold-text" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white">Escalas de Elite</h3>
            <p className="text-zinc-200 text-base md:text-lg leading-relaxed font-light">
              As escalas fixas e seguras são blindadas. Só entra quem domina os critérios invisíveis de confiança da coordenação. É isso que eu vou te ensinar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketChange;
