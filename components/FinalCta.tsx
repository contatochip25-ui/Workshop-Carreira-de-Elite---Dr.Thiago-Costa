
import React from 'react';
import { ShieldCheck, Mail, Headphones, ChevronRight, Ticket } from 'lucide-react';

const FinalCta: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black text-center relative overflow-hidden">
      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#F4C542]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 reveal opacity-0 translate-y-10">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold-bg/20 blur-2xl rounded-full"></div>
            <img 
              src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagobraçocruzado.png" 
              alt="Dr. Thiago Costa Final" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 shadow-3xl"
            />
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-6xl mb-12 text-white reveal opacity-0 translate-y-10 font-bold leading-tight">
          O mercado não perdoa a inércia.<br />
          <span className="gold-text">Sua escala fixa começa aqui.</span>
        </h2>
        
        <div className="reveal opacity-0 translate-y-10 transition-all delay-200 mb-12 flex flex-col items-center">
            <span className="text-zinc-600 line-through text-xl font-light tracking-widest mb-2 opacity-50">De R$ 997</span>
            <div className="flex flex-col items-center">
                <span className="gold-text text-[10px] uppercase tracking-[0.4em] font-black mb-4">Acesso Liberado por</span>
                <span className="text-white text-7xl font-black leading-none tracking-tighter shadow-gold-text">
                  R$ 27,00
                </span>
            </div>
            
            <button className="premium-led-btn w-full mt-12 main-cta-button group">
              <div className="premium-led-btn-inner px-10 py-6 text-[13px] flex items-center justify-center space-x-4">
                <span className="font-black tracking-[0.15em]">COMPRAR INGRESSO | LOTE 01</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            <div className="flex items-center mt-10 justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 gold-text opacity-50" />
                <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Compra Segura</span>
              </div>
              <div className="flex items-center space-x-2">
                <Ticket className="w-4 h-4 gold-text opacity-50" />
                <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Lote Limitado</span>
              </div>
            </div>
        </div>

        <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-sm mx-auto opacity-40">
          Você receberá o link de acesso exclusivo e os materiais de apoio via e-mail imediatamente após a confirmação.
        </p>
      </div>
    </section>
  );
};

export default FinalCta;
