
import React from 'react';
import { Calendar, Clock, ChevronRight, Presentation } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden pt-4">
      {/* Background Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>
        <img 
          src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagobraçocruzado.png" 
          alt="Dr. Thiago Costa" 
          className="w-full h-full object-cover object-top opacity-50 grayscale contrast-125 md:object-right"
        />
        {/* Amber light glow */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#F4C542]/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Top Branding */}
      <div className="relative z-30 w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full border border-[#F4C542]/30 flex items-center justify-center bg-black/60 backdrop-blur-md shrink-0">
            <Presentation className="gold-text w-4 h-4" />
          </div>
          <span className="text-white font-bold text-[10px] tracking-[0.3em] uppercase opacity-80">Maestria Médica</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-end px-6 pb-12 sm:pb-20">
        <div className="max-w-4xl mx-auto w-full">
          {/* Aggressive Tagline */}
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="gold-text text-[10px] uppercase tracking-[0.4em] font-black bg-[#F4C542]/10 px-4 py-2 rounded-full border border-[#F4C542]/20 backdrop-blur-md inline-block mb-6">
              EXCLUSIVO PARA MÉDICOS
            </span>
          </div>
          
          {/* Main Aggressive Headline */}
          <h1 className="font-serif text-[2.6rem] leading-[1.05] font-bold text-white mb-6 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            O CRM parou de ser sua <span className="gold-text italic block">garantia de futuro.</span>
          </h1>
          
          <p className="text-zinc-300 text-lg leading-relaxed font-light mb-10 max-w-xl reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
            Pare de mendigar plantões em grupos de WhatsApp. Assuma o controle da sua agenda e entre no <span className="text-white font-bold">time de elite</span> das escalas fixas.
          </p>

          {/* Event Info Bars */}
          <div className="grid grid-cols-2 gap-3 mb-8 reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center space-x-3">
              <Calendar className="w-5 h-5 gold-text" />
              <div>
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Data</p>
                <p className="text-sm text-white font-bold">24 e 25 JAN</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl flex items-center space-x-3">
              <Clock className="w-5 h-5 gold-text" />
              <div>
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-black">Horário</p>
                <p className="text-sm text-white font-bold">20h Ao Vivo</p>
              </div>
            </div>
          </div>

          {/* Premium CTA Button */}
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <button className="premium-led-btn w-full main-cta-button group shadow-[0_20px_40px_rgba(244,197,66,0.15)]">
              <div className="premium-led-btn-inner px-8 py-6 text-[13px] flex items-center justify-center space-x-4">
                <span className="font-black tracking-[0.15em]">COMPRAR INGRESSO | LOTE 01</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
            
            <p className="text-center mt-6 text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">
              Inscrições encerram em breve • <span className="text-zinc-300">R$ 27,00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
