
import React from 'react';
import { Users, AlertTriangle, TrendingUp } from 'lucide-react';

const MarketChange: React.FC = () => {
  return (
    <section className="py-28 md:py-56 bg-[#0a0a0a] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-36 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <span className="text-gold-text uppercase tracking-[0.5em] text-[10px] md:text-xs font-black mb-10 block opacity-80">A Nova Engenharia Médica</span>
          <h2 className="font-serif text-[2.35rem] md:text-7xl mb-12 text-white leading-[1.15] tracking-tight relative pb-8 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[1px] after:bg-gold-bg/30">A <span className="gold-text">escassez médica acabou.</span><br/><span className="italic font-light">Você está preparado?</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          <div className="premium-card p-10 md:p-14 rounded-3xl reveal opacity-0 translate-y-10 transition-all duration-1000">
            <div className="mb-12 w-16 h-16 bg-[#F4C542]/10 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 gold-text" />
            </div>
            <h3 className="font-serif text-2xl md:text-4xl mb-6 text-white font-bold tracking-tight">Inflação de Profissionais</h3>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
              Com 38 mil novos médicos por ano, ter um CRM não te torna mais especial. Hoje, o mercado escolhe quem resolve problemas, não quem apenas porta um título.
            </p>
          </div>
          
          <div className="premium-card p-10 md:p-14 rounded-3xl reveal opacity-0 translate-y-10 transition-all duration-1000 delay-150">
            <div className="mb-12 w-16 h-16 bg-[#F4C542]/10 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 gold-text" />
            </div>
            <h3 className="font-serif text-2xl md:text-4xl mb-6 text-white font-bold tracking-tight">O Fim do 'Amadorismo'</h3>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
              Plantões de grupo de WhatsApp são o resto da escala. Quem não tem estratégia de entrada nas unidades de elite viverá das sobras de quem já entendeu o jogo.
            </p>
          </div>

          <div className="premium-card p-10 md:p-14 rounded-3xl reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="mb-12 w-16 h-16 bg-[#F4C542]/10 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-8 h-8 gold-text" />
            </div>
            <h3 className="font-serif text-2xl md:text-4xl mb-6 text-white font-bold tracking-tight">Escalas de Elite</h3>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
              As escalas fixas e seguras são blindadas. Só entra quem domina os critérios invisíveis de confiança da coordenação. É isso que eu vou te ensinar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketChange;
