
import React from 'react';
import { Calendar, Video, Ticket, ChevronRight, Presentation, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-20 md:pt-0 overflow-hidden bg-black">
      {/* Top Bar Info */}
      <div className="absolute top-0 left-0 w-full z-30 px-4 py-4 md:px-6 md:py-6 border-b border-white/5 bg-black/40 backdrop-blur-md md:bg-transparent md:border-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-gold-text/50 flex items-center justify-center">
              <Presentation className="gold-text w-3.5 h-3.5 md:w-4 md:h-4" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <span className="text-white font-medium text-xs md:text-base">Workshop Carreira Médica</span>
              <span className="hidden md:inline text-white/30">|</span>
              <span className="text-white/60 text-[9px] md:text-sm uppercase tracking-widest font-light italic">Maestria da Carreira de Elite</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-2">
              <Calendar className="gold-text w-3.5 h-3.5 md:w-4 md:h-4" />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-medium text-xs md:text-sm">18 de Janeiro</span>
                <span className="text-zinc-500 text-[9px] md:text-xs uppercase tracking-tighter font-semibold">20h - 23h</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Video className="gold-text w-3.5 h-3.5 md:w-4 md:h-4" />
              <span className="text-white font-medium text-xs md:text-sm">Ao Vivo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg" 
            alt="Dr. Thiago Costa" 
            className="w-full h-full object-cover opacity-40 lg:opacity-65 scale-125 lg:scale-100 object-top md:object-center grayscale brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent lg:via-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-5xl">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <div className="flex items-center space-x-3 mb-6">
              <span className="gold-text text-[9px] md:text-xs uppercase tracking-[0.3em] font-bold bg-gold-text/5 px-2 py-1 rounded-sm border border-gold-text/10">
                O FIM DA ESCASSEZ MÉDICA
              </span>
            </div>
          </div>
          
          <h1 className="font-serif text-[1.85rem] sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            O médico deixou de ser raro.<br className="hidden md:block" />
            <span className="italic text-[#d4af37] opacity-95">
              Agora é ele quem implora por espaço no mercado.
            </span>
          </h1>
          
          <div className="flex items-start mb-8 md:mb-12 max-w-2xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
             <div className="w-1 md:w-2 h-16 md:h-24 bg-gold-text mr-4 md:mr-8 opacity-40 shrink-0"></div>
             <p className="text-sm sm:text-base md:text-xl text-gray-300 leading-relaxed font-light">
               O problema não é falta de estudo ou esforço, é não entender o <span className="text-white font-bold">jogo comportamental</span> que define quem fica com as escalas fixas e quem é descartado. Aprenda a sair da disputa por plantões avulsos.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <button className="premium-led-btn w-full sm:w-auto sm:min-w-[320px] main-cta-button">
              <div className="premium-led-btn-inner px-6 py-4 md:px-8 md:py-5 text-xs md:text-base flex items-center justify-center space-x-2">
                <span>COMPRAR INGRESSO | LOTE 01</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </button>
            <div className="flex flex-col items-center sm:items-start gap-1">
              <div className="flex items-center space-x-2 text-zinc-500 text-[9px] md:text-xs uppercase tracking-widest font-bold">
                <Ticket className="w-3.5 h-3.5 gold-text" />
                <span>Apenas 36 vagas restantes</span>
              </div>
              <div className="flex items-center space-x-2 text-zinc-600 text-[8px] md:text-[9px] uppercase tracking-widest sm:ml-6">
                <Clock className="w-3 h-3" />
                <span>Início pontual às 20h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
