
import React from 'react';
import { Calendar, Video, Ticket, ChevronRight, Presentation, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Background Image - Otimizada para mobile-first perspective */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg" 
          alt="Dr. Thiago Costa" 
          className="w-full h-full object-cover object-center grayscale brightness-[0.35] lg:brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black"></div>
      </div>

      {/* Top Bar - Proporções refinadas e reduzidas no mobile */}
      <div className="relative z-30 w-full px-6 py-4 md:py-8 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-[#F4C542]/30 flex items-center justify-center bg-black/40 backdrop-blur-xl shrink-0">
              <Presentation className="gold-text w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-[10px] md:text-[11px] tracking-[0.25em] uppercase">Estratégia Médica</span>
              <span className="text-[#F4C542] text-[8px] uppercase tracking-widest leading-none mt-1 font-semibold opacity-90">Workshop Maestria</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Ajustada para visibilidade imediata do CTA no mobile */}
      <div className="relative z-10 flex-1 flex flex-col justify-center md:justify-end px-6 md:px-12 pb-8 md:pb-28">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* Tagline - Espaçamento reduzido no mobile */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-1000">
            <span className="gold-text text-[9px] md:text-[11px] uppercase tracking-[0.45em] font-black bg-[#F4C542]/10 px-4 py-2.5 md:px-5 md:py-2 rounded-full border border-[#F4C542]/20 backdrop-blur-md inline-block mb-4 md:mb-10">
              O FIM DA DEPENDÊNCIA DE PLANTÕES AVULSOS
            </span>
          </div>
          
          {/* Headline - Tamanho milimetricamente reduzido para caber na dobra do mobile */}
          <h1 className="font-serif text-[1.85rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-12 leading-[1.2] text-white reveal opacity-0 translate-y-10 transition-all duration-1000 delay-100 drop-shadow-2xl">
            O mercado médico mudou e você está ficando para trás.<br />
            <span className="italic text-[#F4C542] block mt-1 md:mt-2">
              CRM não é mais garantia de escala. Estratégia é.
            </span>
          </h1>
          
          {/* Subtext - Ajuste de margem e fonte para economia de espaço vertical */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200 max-w-2xl mx-auto mb-6 md:mb-16">
             <p className="text-[0.95rem] sm:text-lg md:text-2xl text-zinc-100/90 leading-relaxed font-light px-2">
               Pare de mendigar oportunidades em grupos de WhatsApp. Entenda os <span className="text-white font-bold underline underline-offset-8 decoration-[#F4C542]/40">códigos comportamentais</span> que garantem escalas fixas e previsibilidade financeira.
             </p>
          </div>

          {/* CTA Group - Visível acima da dobra (Above the fold) */}
          <div className="flex flex-col items-center reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            
            <div className="flex flex-nowrap items-center justify-center space-x-4 md:space-x-8 mb-6 md:mb-10 px-6 py-4 md:px-10 md:py-5 bg-white/[0.03] backdrop-blur-xl rounded-full border border-white/10 shadow-3xl whitespace-nowrap overflow-x-auto no-scrollbar max-w-full">
              <div className="flex items-center space-x-2.5">
                <Calendar className="w-4 h-4 gold-text" />
                <span className="text-white font-bold text-[11px] md:text-xs uppercase tracking-wider">24 e 25 JAN</span>
              </div>
              <div className="w-px h-4 bg-zinc-800"></div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 gold-text" />
                <span className="text-white font-bold text-[11px] md:text-xs uppercase tracking-wider">20h</span>
              </div>
              <div className="w-px h-4 bg-zinc-800"></div>
              <div className="flex items-center space-x-2.5">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white font-black text-[11px] md:text-xs uppercase tracking-widest">Ao Vivo</span>
              </div>
            </div>

            <button className="premium-led-btn w-full sm:w-auto sm:min-w-[360px] main-cta-button group">
              <div className="premium-led-btn-inner px-10 py-6 md:px-14 md:py-7 text-[13px] md:text-base flex items-center justify-center space-x-4">
                <span className="font-black tracking-[0.15em] sm:tracking-[0.2em] text-[#F4C542]">COMPRAR INGRESSO | LOTE 01</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-[#F4C542]" />
              </div>
            </button>
            
            <div className="w-full sm:w-[360px] mt-4 md:mt-8 max-w-[360px]">
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mb-3 md:mb-4">
                <div className="h-full bg-white w-[13%] shadow-[0_0_10px_white]"></div>
              </div>
              <div className="flex items-center justify-center text-[11px] md:text-sm font-medium uppercase tracking-[0.15em] text-zinc-400">
                <Ticket className="w-4 h-4 text-zinc-600 mr-2.5" />
                <span>16% vendidos a <span className="text-white font-black ml-1.5">R$ 27,00</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
