
import React from 'react';
import { Calendar, Video, Ticket, ChevronRight, Instagram } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 md:pt-0 overflow-hidden bg-black">
      {/* Top Bar Info (Inspired by Reference) */}
      <div className="absolute top-0 left-0 w-full z-30 px-6 py-6 border-b border-white/5 bg-black/20 backdrop-blur-sm md:bg-transparent md:border-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full border border-gold-text/50 flex items-center justify-center">
              <span className="gold-text text-xs">✨</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <span className="text-white font-medium text-sm md:text-base">Workshop Carreira Médica</span>
              <span className="hidden md:inline text-white/30">|</span>
              <span className="text-white/60 text-xs md:text-sm uppercase tracking-widest font-light italic">Maestria da Carreira de Elite</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://instagram.com/dr.thiago.costa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 group"
            >
              <Instagram className="gold-text w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-white/70 hover:text-white font-medium text-sm transition-colors tracking-tight">@dr.thiago.costa</span>
            </a>
            <div className="hidden md:flex items-center space-x-2">
              <Calendar className="gold-text w-4 h-4" />
              <span className="text-white font-medium text-sm">19 de Janeiro</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Video className="gold-text w-4 h-4" />
              <span className="text-white font-medium text-sm">100% Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stylized Background Image with Dr. Thiago */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full z-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          {/* The Image */}
          <img 
            src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago1.jpg" 
            alt="Dr. Thiago Costa" 
            className="w-full h-full object-cover opacity-40 lg:opacity-60 scale-110 lg:scale-100 object-top lg:object-center grayscale hover:grayscale-0 transition-all duration-1000"
          />
          
          {/* Radial Fade and Color Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:via-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[120px] rounded-full"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <span className="gold-text text-[10px] md:text-xs uppercase tracking-[0.4em] font-semibold mb-6 block">
              Inscrições Abertas • Lote 01
            </span>
          </div>
          
          <h1 className="font-serif text-[2.75rem] md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] md:leading-[1.1] text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Você saiu da faculdade…<br />
            <span className="italic text-[#d4af37] opacity-90 drop-shadow-2xl">
              mas ninguém te ensinou a construir sua carreira.
            </span>
          </h1>
          
          <div className="flex items-start mb-10 md:mb-12 max-w-xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
             <div className="w-1 md:w-2 h-12 md:h-20 bg-gold-text mr-6 md:mr-8 opacity-50 shrink-0"></div>
             <p className="text-base md:text-xl text-gray-300 leading-relaxed font-light">
               Testado por centenas de mentorados: um workshop estratégico para médicos recém-formados que não aceitam ser apenas mais um no mercado de plantões.
             </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <button className="premium-led-btn min-w-[300px]">
              <div className="premium-led-btn-inner px-8 py-4 text-sm md:text-base flex items-center space-x-2">
                <span>Comprar Ingresso | Lote 01</span>
                <ChevronRight className="w-5 h-5" />
              </div>
            </button>
            <div className="flex items-center space-x-2 text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest font-medium">
              <Ticket className="w-4 h-4 gold-text" />
              <span>Apenas 42 vagas restantes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Visual Element (Reference Indicators) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-2 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`h-px bg-white transition-all duration-500 ${i % 3 === 0 ? 'w-8' : 'w-4'}`}></div>
        ))}
      </div>
      
      {/* Accessibility Anchor */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30 hidden md:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
