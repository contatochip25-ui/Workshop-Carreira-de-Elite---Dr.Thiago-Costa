
import React from 'react';
import { Users, AlertTriangle, TrendingUp } from 'lucide-react';

const MarketChange: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-32 reveal opacity-0 translate-y-10 transition-all duration-700">
          <span className="text-gold-text uppercase tracking-[0.4em] text-xs md:text-sm font-bold mb-8 block">A Nova Engenharia Médica</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-10 text-white leading-tight relative pb-6 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#F4C542] after:to-transparent">A <span className="gold-text">escassez médica acabou.</span><br/>Você está preparado?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="premium-card p-10 md:p-12 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700">
            <div className="mb-10 w-16 h-16 bg-[#F4C542]/5 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 gold-text" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white font-bold">Inflação de Profissionais</h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
              Com 38 mil novos médicos por ano, ter um CRM não te torna mais especial. Hoje, o mercado escolhe quem resolve problemas, não quem apenas porta um título.
            </p>
          </div>
          
          <div className="premium-card p-10 md:p-12 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <div className="mb-10 w-16 h-16 bg-[#F4C542]/5 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 gold-text" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white font-bold">O Fim do 'Amadorismo'</h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
              Plantões de grupo de WhatsApp são o resto da escala. Quem não tem estratégia de entrada nas unidades de elite viverá das sobras de quem já entendeu o jogo.
            </p>
          </div>

          <div className="premium-card p-10 md:p-12 rounded-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="mb-10 w-16 h-16 bg-[#F4C542]/5 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 gold-text" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-6 text-white font-bold">Escalas de Elite</h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
              As escalas fixas e seguras são blindadas. Só entra quem domina os critérios invisíveis de confiança da coordenação. É isso que eu vou te ensinar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketChange;
