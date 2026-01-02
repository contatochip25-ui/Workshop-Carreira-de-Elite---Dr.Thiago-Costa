
import React from 'react';
import { Calendar, Video, Ticket, ChevronRight, Presentation, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Background Image - Further darkened for better focus and contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg" 
          alt="Dr. Thiago Costa" 
          className="w-full h-full object-cover object-top md:object-top grayscale brightness-[0.35] lg:brightness-[0.45] contrast-[1.1]"
        />
        {/* Refined gradient overlay to clear the top area and focus on the bottom text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"></div>
      </div>

      {/* Top Bar - Cleaned: Removed event details as requested */}
      <div className="relative z-30 w-full px-6 py-6 md:px-12">
        <div className="max-w-6xl mx-auto flex justify-between items-start md:items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full border border-[#F4C542]/40 flex items-center justify-center bg-black/60 backdrop-blur-md shrink-0">
              <Presentation className="gold-text w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">Estratégia de Carreira Médica</span>
              <span className="text-[#F4C542] text-[8px] uppercase tracking-widest leading-none mt-1 font-semibold">Workshop Maestria de Escala</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Positioned from middle to bottom */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* Tagline */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="gold-text text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black bg-[#F4C542]/10 px-4 py-2 rounded-full border border-[#F4C542]/30 backdrop-blur-sm inline-block mb-8">
              O FIM DA DEPENDÊNCIA DE PLANTÕES AVULSOS
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="font-serif text-[1.8rem] sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-8 md:mb-10 leading-[1.2] text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 drop-shadow-xl">
            O mercado médico mudou e você está ficando para trás.<br />
            <span className="italic text-[#F4C542] block mt-1">
              CRM não é mais garantia de escala. Estratégia é.
            </span>
          </h1>
          
          {/* Subtext */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 max-w-2xl mx-auto mb-12 md:mb-16">
             <p className="text-sm sm:text-base md:text-xl text-zinc-100 leading-relaxed font-light">
               Pare de mendigar oportunidades em grupos de WhatsApp. Entenda os <span className="text-white font-bold">códigos comportamentais</span> que garantem escalas fixas e previsibilidade financeira para médicos recém-formados.
             </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col items-center reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            
            {/* Repositioned Event Info Block - Horizontal side-by-side Layout */}
            <div className="flex flex-nowrap items-center justify-center space-x-3 md:space-x-6 mb-8 px-5 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl whitespace-nowrap overflow-x-auto no-scrollbar">
              <div className="flex items-center space-x-2">
                <Calendar className="w-3.5 md:w-4 h-3.5 md:h-4 gold-text" />
                <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-wider">24 e 25 JAN</span>
              </div>
              <div className="w-px h-3 bg-zinc-800"></div>
              <div className="flex items-center space-x-2">
                <Clock className="w-3.5 md:w-4 h-3.5 md:h-4 gold-text" />
                <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-wider">20h</span>
              </div>
              <div className="w-px h-3 bg-zinc-800"></div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-widest">Ao Vivo</span>
              </div>
              <div className="w-px h-3 bg-zinc-800"></div>
              <div className="flex items-center space-x-2">
                <Video className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#58a6ff]" />
                <span className="text-zinc-200 font-bold text-[10px] md:text-xs uppercase tracking-wider">Zoom</span>
              </div>
            </div>

            <button className="premium-led-btn w-full sm:w-auto sm:min-w-[320px] main-cta-button shadow-2xl shadow-[#F4C542]/10 hover:scale-105 transition-transform">
              <div className="premium-led-btn-inner px-8 py-5 md:px-12 md:py-6 text-[13px] md:text-base flex items-center justify-center space-x-3">
                <span className="font-black tracking-[0.2em] text-[#F4C542]">COMPRAR INGRESSO | LOTE 01</span>
                <ChevronRight className="w-5 h-5 text-[#F4C542]" />
              </div>
            </button>
            
            {/* Progress Bar - Price highlighted subtly as requested */}
            <div className="w-full sm:w-[320px] mt-4">
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-white w-[13%]"></div>
              </div>
              <div className="flex items-center justify-center text-[11px] md:text-sm font-medium uppercase tracking-widest px-1 space-x-2 text-zinc-400">
                <Ticket className="w-4 h-4 text-zinc-500 opacity-60" />
                <span>16% dos ingressos vendidos a <span className="text-white font-black text-xs md:text-base ml-1">R$ 27,00</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
