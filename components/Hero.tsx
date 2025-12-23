
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
            <div className="w-8 h-8 rounded-full border border-gold-text/30 flex items-center justify-center bg-black/40 backdrop-blur-md shrink-0">
              <Presentation className="gold-text w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase">Workshop Carreira Médica</span>
              <span className="text-gold-text/60 text-[8px] uppercase tracking-widest leading-none mt-1 font-medium">Maestria da Carreira de Elite</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                <Calendar className="gold-text w-3.5 h-3.5" />
                <span className="text-white font-bold text-[9px] md:text-xs">24 e 25 JAN</span>
             </div>
             <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
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
            <span className="gold-text text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black bg-gold-text/10 px-4 py-2 rounded-full border border-gold-text/20 backdrop-blur-sm inline-block mb-6">
              O FIM DA ESCASSEZ MÉDICA
            </span>
          </div>
          
          {/* Smaller, cleaner Headline */}
          <h1 className="font-serif text-[1.8rem] sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 md:mb-8 leading-[1.2] text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 drop-shadow-xl">
            O médico deixou de ser raro.<br />
            <span className="italic text-[#F4C542] block mt-1">
              Agora é ele quem implora por espaço no mercado.
            </span>
          </h1>
          
          {/* Subtext with balanced size - Updated with requested text and keywords highlighted */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 max-w-2xl mx-auto mb-10 md:mb-12">
             <p className="text-sm sm:text-base md:text-xl text-zinc-300 leading-relaxed font-light">
               O problema não é falta de estudo ou esforço, é não entender o jogo comportamental que define quem fica com as <span className="text-white font-bold">escalas fixas</span> e quem é descartado. Aprenda a sair da disputa por <span className="text-white font-bold">plantões avulsos</span>.
             </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-col items-center reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <button className="premium-led-btn w-full sm:w-auto sm:min-w-[320px] main-cta-button shadow-2xl shadow-gold-text/10 hover:scale-105 transition-transform">
              <div className="premium-led-btn-inner px-8 py-5 md:px-12 md:py-6 text-[10px] md:text-sm flex items-center justify-center space-x-3">
                <span className="font-black tracking-[0.2em]">COMPRAR INGRESSO | LOTE 01</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
            
            {/* Info Badge below Button */}
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center space-x-1.5 text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                 <Video className="w-3 h-3 text-[#2D8CFF]" />
                 <span>Transmissão via Zoom</span>
              </div>
            </div>

            {/* Progress Bar with cleaner styling */}
            <div className="w-full sm:w-[320px] mt-8">
              <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-white w-[13%]"></div>
              </div>
              <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                <div className="flex items-center space-x-1.5">
                  <Ticket className="w-3 h-3 gold-text" />
                  <span>Vagas: 13%</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="w-3 h-3" />
                  <span>Lote 01</span>
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
