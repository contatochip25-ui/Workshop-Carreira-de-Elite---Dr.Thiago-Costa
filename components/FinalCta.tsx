
import React from 'react';
import { ShieldCheck, Mail, Headphones, ChevronRight, Ticket } from 'lucide-react';

const FinalCta: React.FC = () => {
  return (
    <section className="py-32 md:py-56 px-6 bg-[#030303] text-center relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#F4C542]/5 blur-[120px] md:blur-[200px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold-bg/20 blur-2xl rounded-full scale-110"></div>
            <img 
              src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg" 
              alt="Dr. Thiago Costa" 
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#F4C542] grayscale-0 transition-all object-cover shadow-2xl"
            />
          </div>
        </div>

        <h2 className="font-serif text-4xl md:text-7xl mb-10 md:mb-14 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700 font-bold">
          O mercado médico não perdoa a inércia.<br />
          <span className="gold-text">Sua escala fixa começa aqui.</span>
        </h2>
        
        <p className="text-zinc-400 text-base md:text-xl mb-16 md:mb-20 max-w-2xl mx-auto px-2 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 font-light leading-relaxed">
          Você pode continuar dependendo da velocidade do seu dedo nos grupos de plantão ou pode aprender a dominar sua própria agenda. A decisão é o que separa o médico exausto do médico estratégico.
        </p>

        {/* High Conversion Price Anchoring Block */}
        <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 mb-12 flex flex-col items-center">
            <span className="text-zinc-500 line-through text-lg md:text-2xl font-light tracking-widest mb-2">De R$ 997</span>
            <div className="flex flex-col items-center mb-10">
                <span className="gold-text text-sm uppercase tracking-[0.4em] font-black mb-4">Por apenas</span>
                <span className="text-white text-6xl md:text-[9rem] font-black leading-none tracking-tighter drop-shadow-[0_0_30px_rgba(244,197,66,0.15)]">
                  R$ 27,00
                </span>
            </div>
            
            <button className="premium-led-btn w-full sm:w-auto sm:min-w-[400px] main-cta-button shadow-[0_20px_50px_rgba(244,197,66,0.1)] hover:scale-105 transition-transform duration-500">
              <div className="premium-led-btn-inner px-12 py-6 md:py-8 text-[14px] md:text-lg flex items-center justify-center space-x-4">
                <span className="text-[#F4C542] font-black tracking-[0.3em]">COMPRAR INGRESSO | LOTE 01</span>
                <ChevronRight className="w-6 h-6 text-[#F4C542]" />
              </div>
            </button>

            {/* Progress Bar below final button */}
            <div className="w-full sm:w-[320px] mt-12">
              <div className="w-full h-1.5 bg-zinc-900 mb-4 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[13%]"></div>
              </div>
              <div className="flex items-center justify-center text-[11px] md:text-xs font-medium uppercase tracking-widest px-1 space-x-2 text-zinc-500">
                <Ticket className="w-4 h-4 text-zinc-600 opacity-50" />
                <span>16% dos ingressos vendidos a R$27,00</span>
              </div>
            </div>
        </div>

        <div className="mt-24 md:mt-32 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-4xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <div className="flex items-center space-x-3 text-zinc-400 group">
            <ShieldCheck className="w-5 h-5 gold-text group-hover:scale-110 transition-transform" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Pagamento Seguro</span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-400 group">
            <Mail className="w-5 h-5 gold-text group-hover:scale-110 transition-transform" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Acesso Imediato</span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-400 group">
            <Headphones className="w-5 h-5 gold-text group-hover:scale-110 transition-transform" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">Suporte Especializado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
