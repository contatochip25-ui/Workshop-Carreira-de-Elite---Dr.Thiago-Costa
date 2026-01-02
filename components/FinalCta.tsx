
import React from 'react';
import { ShieldCheck, Mail, Headphones, ChevronRight, Ticket } from 'lucide-react';

const FinalCta: React.FC = () => {
  return (
    <section className="py-28 md:py-64 px-6 bg-[#020202] text-center relative overflow-hidden">
       {/* Ambient Glow - Ajuste de intensidade */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-[#F4C542]/5 blur-[150px] md:blur-[250px] rounded-full pointer-events-none opacity-60"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12 md:mb-20 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <div className="relative inline-block p-1 rounded-full bg-gradient-to-tr from-[#F4C542]/40 to-transparent">
            <img 
              src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg" 
              alt="Dr. Thiago Costa" 
              className="relative w-24 h-24 md:w-36 md:h-36 rounded-full grayscale-0 transition-all object-cover shadow-3xl"
            />
          </div>
        </div>

        <h2 className="font-serif text-[2.5rem] md:text-[5.5rem] mb-12 md:mb-20 leading-[1.1] text-white reveal opacity-0 translate-y-10 transition-all duration-1000 font-bold tracking-tight">
          O mercado não perdoa a inércia.<br />
          <span className="gold-text">Sua escala fixa começa aqui.</span>
        </h2>
        
        <p className="text-zinc-400 text-lg md:text-2xl mb-20 md:mb-28 max-w-3xl mx-auto px-4 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-150 font-light leading-relaxed">
          Você pode continuar dependendo da velocidade do seu dedo nos grupos de plantão ou pode aprender a dominar sua própria agenda. A decisão é o que separa o médico exausto do médico estratégico.
        </p>

        {/* High Conversion Price Block - Dimensões Mobile-First */}
        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300 mb-16 flex flex-col items-center w-full">
            <span className="text-zinc-600 line-through text-2xl md:text-3xl font-light tracking-widest mb-6 opacity-40">De R$ 997</span>
            
            <div className="flex flex-col items-center mb-16 w-full">
                <span className="gold-text text-xs md:text-sm uppercase tracking-[0.5em] font-black mb-6 opacity-80">Por apenas</span>
                <span className="text-white text-6xl sm:text-7xl md:text-[10rem] font-black leading-none tracking-tighter drop-shadow-[0_0_40px_rgba(244,197,66,0.2)]">
                  R$ 27,00
                </span>
            </div>
            
            <button className="premium-led-btn w-full sm:w-auto sm:min-w-[420px] main-cta-button group mb-10">
              <div className="premium-led-btn-inner px-12 py-7 md:px-16 md:py-8 text-[14px] md:text-lg flex items-center justify-center space-x-5">
                <span className="font-black">QUERO GARANTIR MINHA VAGA</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </button>

            <p className="text-zinc-500 text-[11px] md:text-xs uppercase tracking-[0.25em] font-medium opacity-50 leading-relaxed px-6 max-w-lg mb-14">
              Garantia de reembolso integral disponível até 3 dias após a realização do workshop.
            </p>

            <div className="w-full sm:w-[380px] max-w-full px-4">
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden mb-5">
                <div className="h-full bg-white w-[13%]"></div>
              </div>
              <div className="flex items-center justify-center text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                <Ticket className="w-4.5 h-4.5 text-zinc-700 mr-2.5" />
                <span>16% dos ingressos vendidos a <span className="text-white font-black ml-1.5">R$ 27,00</span></span>
              </div>
            </div>
        </div>

        <div className="mt-24 md:mt-40 flex flex-wrap items-center justify-center gap-10 md:gap-20 max-w-5xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-1000 delay-500 border-t border-white/5 pt-16">
          <div className="flex items-center space-x-4 text-zinc-500">
            <ShieldCheck className="w-6 h-6 gold-text opacity-70" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">Pagamento Seguro</span>
          </div>
          <div className="flex items-center space-x-4 text-zinc-500">
            <Mail className="w-6 h-6 gold-text opacity-70" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">Acesso Imediato</span>
          </div>
          <div className="flex items-center space-x-4 text-zinc-500">
            <Headphones className="w-6 h-6 gold-text opacity-70" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">Suporte Premium</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
