
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
          className="w-full h-full object-cover object-top md:object-center grayscale brightness-[0.35] lg:brightness-[0.45] contrast-[1.1]"
        />
        {/* Refined gradient overlay to clear the top area and focus on the bottom text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black"></div>
      </div>

      {/* Top Bar - Slimmer and more elegant */}
      <div className="relative z-30 w-full px-6 py-6 md:px-12">
        <div className="max-w-6xl mx-auto flex justify-between items-start md:items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full border border-[#F4C542]/40 flex items-center justify-center bg-black/60 backdrop-blur-md shrink-0">
              <Presentation className="gold-text w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">Workshop Carreira Médica</span>
              <span className="text-[#F4C542] text-[8px] uppercase tracking-widest leading-none mt-1 font-semibold">Maestria da Carreira de Elite</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
             <div className="flex flex-col items-end space-y-1">
               <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <Calendar className="gold-text w-3.5 h-3.5" />
                  <span className="text-white font-bold text-[9px] md:text-xs whitespace-nowrap">24 e 25 JAN às 20h</span>
               </div>
               <div className="flex items-center space-x-1.5 px-2">
                  <Video className="w-2.5 h-2.5 text-[#58a6ff]" />
                  <span className="text-zinc-400 text-[8px] uppercase tracking-widest font-bold">Transmissão via Zoom</span>
               </div>
             </div>
             <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white font-black text-[9px] md:text-xs uppercase tracking-widest">Ao Vivo</span>
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
              O FIM DA ESCASSEZ MÉDICA
            </span>
          </div>
          
          {/* Smaller, cleaner Headline */}
          <h1 className="font-serif text-[1.8rem] sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-8 md:mb-10 leading-[1.2] text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 drop-shadow-xl">
            O médico deixou de ser raro.<br />
            <span className="italic text-[#F4C542] block mt-1">
              Agora é ele quem implora por espaço no mercado.
            </span>
          </h1>
          
          {/* Subtext with balanced size - Contrast optimized for #E5E5E5 equivalent */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 max-w-2xl mx-auto mb-12 md:mb-16">
             <p className="text-sm sm:text-base md:text-xl text-zinc-100 leading-relaxed font-light">
               O problema não é falta de estudo ou esforço, é não entender o jogo comportamental que define quem fica com as <span className="text-white font-bold">escalas fixas</span> e quem é descartado. Aprenda a sair da disputa por <span className="text-white font-bold">plantões avulsos</span>.
             </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col items-center reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <button className="premium-led-btn w-full sm:w-auto sm:min-w-[320px] main-cta-button shadow-2xl shadow-[#F4C542]/10 hover:scale-105 transition-transform">
              <div className="premium-led-btn-inner px-8 py-5 md:px-12 md:py-6 text-[13px] md:text-base flex items-center justify-center space-x-3">
                <span className="font-black tracking-[0.2em] text-[#F4C542]">COMPRAR INGRESSO | LOTE 01</span>
                <ChevronRight className="w-5 h-5 text-[#F4C542]" />
              </div>
            </button>
            
            {/* Progress Bar - Moved immediately below button with 12px margin */}
            <div className="w-full sm:w-[320px] mt-3">
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-white w-[13%]"></div>
              </div>
              <div className="flex items-center justify-center text-[11px] md:text-sm font-black uppercase tracking-widest px-1 space-x-2">
                <Ticket className="w-4 h-4 gold-text" />
                <span className="text-zinc-100">13% dos ingressos vendidos a R$27,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
