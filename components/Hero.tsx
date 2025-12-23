
import React from 'react';
import { Calendar, Video, Ticket, ChevronRight, Presentation, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex flex-col pt-16 md:pt-0 overflow-hidden bg-black">
      {/* Top Bar Info - Updated with Zoom integration */}
      <div className="absolute top-0 left-0 w-full z-30 px-5 py-4 md:px-12 md:py-8 border-b border-white/5 bg-black/60 backdrop-blur-xl md:bg-transparent md:border-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold-text/40 flex items-center justify-center bg-black/20">
              <Presentation className="gold-text w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <span className="text-white font-bold text-xs md:text-lg tracking-tight uppercase">Workshop Carreira Médica</span>
              <span className="hidden md:inline text-white/20">|</span>
              <span className="text-white/40 text-[8px] md:text-xs uppercase tracking-[0.2em] font-light italic">Maestria da Carreira de Elite</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-5 md:space-x-10">
            {/* Date and Time Section */}
            <div className="flex items-center space-x-3">
              <Calendar className="gold-text w-4 h-4 md:w-5 md:h-5" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-[10px] md:text-base leading-none mb-0.5">24 e 25 de Janeiro</span>
                <span className="text-zinc-500 text-[8px] md:text-xs uppercase tracking-tighter font-black">20h - 23h</span>
              </div>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.6)]"></div>
              <span className="text-white font-black text-[10px] md:text-base uppercase tracking-widest">Ao Vivo</span>
            </div>

            {/* Zoom Integration - Perfectly fitted as requested */}
            <div className="flex items-center space-x-2 border-l border-white/10 pl-5 md:pl-10">
              <div className="bg-[#2D8CFF]/10 p-1 rounded-sm">
                <Video className="w-3 h-3 md:w-4 md:h-4 text-[#2D8CFF]" />
              </div>
              <span className="text-white font-black text-[10px] md:text-base uppercase tracking-widest">via Zoom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image - Darkened for Mobile / Adjusted for Desktop */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg" 
            alt="Dr. Thiago Costa" 
            className="w-full h-full object-cover opacity-30 lg:opacity-85 scale-110 lg:scale-110 object-top md:object-center grayscale brightness-[0.7] lg:brightness-[1.2] contrast-[1.1] lg:translate-x-10 transition-all duration-700"
          />
          {/* Refined gradient mask - Darker on mobile for maximum legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 lg:via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Main Content Area - Refined width for reading comfort on Desktop */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-16 md:py-0">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-[850px]">
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
              <div className="flex items-center space-x-3 mb-6 md:mb-10">
                <span className="gold-text text-[9px] md:text-sm uppercase tracking-[0.4em] font-black bg-gold-text/15 px-4 py-2 rounded-full border border-gold-text/30 backdrop-blur-md">
                  O FIM DA ESCASSEZ MÉDICA
                </span>
              </div>
            </div>
            
            <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-6 md:mb-12 leading-[1.1] md:leading-[1] text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 drop-shadow-2xl">
              O médico deixou de ser raro.<br className="hidden md:block" />
              <span className="italic text-[#d4af37] opacity-95 block mt-2">
                Agora é ele quem implora por espaço no mercado.
              </span>
            </h1>
            
            <div className="flex items-start mb-10 md:mb-16 max-w-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
               <div className="w-1.5 md:w-2.5 h-20 md:h-32 bg-gold-text mr-5 md:mr-12 opacity-70 shrink-0 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
               <p className="text-base sm:text-lg md:text-2xl text-gray-200 leading-relaxed font-light">
                 O problema não é falta de estudo ou esforço, é não entender o <span className="text-white font-bold border-b border-gold-text/40">jogo comportamental</span> que define quem fica com as escalas fixas e quem é descartado. Aprenda a sair da disputa por plantões avulsos.
               </p>
            </div>

            <div className="flex flex-col items-stretch sm:items-start reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <button className="premium-led-btn w-full sm:w-auto sm:min-w-[360px] main-cta-button shadow-2xl shadow-gold-text/20 hover:scale-105 transition-transform">
                <div className="premium-led-btn-inner px-8 py-5 md:px-14 md:py-8 text-xs md:text-xl flex items-center justify-center space-x-4">
                  <span className="font-black tracking-[0.2em]">COMPRAR INGRESSO | LOTE 01</span>
                  <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
                </div>
              </button>
              
              {/* Progress Bar below Button as requested */}
              <div className="w-full sm:w-[360px] mt-6">
                <div className="w-full h-1.5 bg-[#262626] mb-3">
                  <div className="h-full bg-white w-[13%]"></div>
                </div>
                <div className="flex items-center justify-between text-[10px] md:text-sm font-bold uppercase tracking-widest">
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <Ticket className="w-3.5 h-3.5 md:w-5 md:h-5 gold-text" />
                    <span>Vagas: 13%</span>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-600">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span>Lote 01</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
