
import React from 'react';
import { Calendar, Video, Ticket, ChevronRight, Presentation, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotosorrindo.jpg" 
          alt="Dr. Thiago Costa" 
          className="w-full h-full object-cover object-top md:object-center grayscale brightness-[0.35] lg:brightness-[0.45] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
      </div>

      {/* Top Bar */}
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
             <div className="flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Calendar className="gold-text w-3.5 h-3.5" />
                <span className="text-white font-bold text-[9px] md:text-xs whitespace-nowrap uppercase tracking-tighter">24 e 25 JAN • 20h</span>
             </div>
             <div className="flex items-center space-x-1.5">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white font-black text-[9px] md:text-xs uppercase tracking-widest">Ao Vivo</span>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto w-full text-center">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="gold-text text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-black bg-[#F4C542]/10 px-4 py-2 rounded-full border border-[#F4C542]/30 backdrop-blur-sm inline-block mb-10">
              O FIM DA ESCASSEZ MÉDICA • AO VIVO ÀS 20H
            </span>
          </div>
          
          <h1 className="font-serif text-[1.8rem] sm:text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-10 md:mb-12 leading-[1.2] text-white reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 drop-shadow-xl">
            O médico deixou de ser raro.<br />
            <span className="italic text-[#F4C542] block mt-1">
              Agora é ele quem implora por espaço no mercado.
            </span>
          </h1>
          
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 max-w-2xl mx-auto mb-16 md:mb-20">
             <p className="text-sm sm:text-base md:text-xl text-white leading-relaxed font-light">
               O problema não é falta de estudo ou esforço, é não entender o jogo comportamental que define quem fica com as <span className="text-[#F4C542] font-bold">escalas fixas</span> e quem é descartado. Aprenda a sair da disputa por <span className="text-white font-bold">plantões avulsos</span>.
             </p>
          </div>

          <div className="flex flex-col items-center reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <button className="premium-led-btn w-full sm:w-auto sm:min-w-[340px] main-cta-button shadow-2xl shadow-[#F4C542]/10 hover:scale-105 transition-transform">
              <div className="premium-led-btn-inner px-10 py-6 text-base md:text-xl flex items-center justify-center space-x-3">
                <span className="font-black tracking-[0.2em] text-[#F4C542]">COMPRAR INGRESSO | LOTE 01</span>
                <ChevronRight className="w-6 h-6 text-[#F4C542]" />
              </div>
            </button>
            
            <div className="flex items-center space-x-4 mt-10">
              <div className="flex items-center space-x-1.5 text-[10px] text-zinc-100 uppercase tracking-widest font-black">
                 <Video className="w-3.5 h-3.5 text-[#F4C542]" />
                 <span>Transmissão via Zoom • 20h</span>
              </div>
            </div>

            {/* Padronização da Barra de Progresso */}
            <div className="w-full sm:w-[340px] mt-12">
              <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-white w-[13%]"></div>
              </div>
              <div className="flex items-center justify-center text-xs md:text-base font-black uppercase tracking-widest px-1 space-x-2 text-white">
                <Ticket className="w-5 h-5 gold-text" />
                <span>13% dos ingressos vendidos a R$ 27,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
