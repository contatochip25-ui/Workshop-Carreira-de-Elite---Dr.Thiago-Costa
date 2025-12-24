
import React from 'react';
import { ShieldCheck, Mail, Headphones, ChevronRight, Ticket, Clock } from 'lucide-react';

const FinalCta: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-6 bg-[#0a0a0a] text-center relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F4C542]/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <img 
            src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg" 
            alt="Dr. Thiago Costa" 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto border-2 border-[#F4C542]/50 grayscale hover:grayscale-0 transition-all object-cover shadow-2xl"
          />
        </div>

        <h2 className="font-serif text-3xl md:text-7xl mb-10 md:mb-14 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700 font-bold">
          O mercado médico não perdoa a inércia.<br />
          <span className="gold-text">Sua escala fixa começa aqui.</span>
        </h2>
        
        <p className="text-zinc-200 text-base md:text-xl mb-12 md:mb-16 max-w-2xl mx-auto px-2 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 font-light leading-relaxed">
          Você pode continuar dependendo da velocidade do seu dedo nos grupos de plantão ou pode aprender a dominar sua própria agenda. A decisão é o que separa o médico exausto do médico estratégico.
        </p>

        <div className="flex flex-col items-center reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <button className="premium-led-btn w-full sm:w-auto sm:min-w-[320px] main-cta-button shadow-2xl shadow-[#F4C542]/10">
            <div className="premium-led-btn-inner px-10 py-5 text-[13px] md:text-base flex items-center justify-center space-x-3">
              <span className="text-[#F4C542] font-black tracking-[0.2em]">GARANTIR MEU ACESSO | LOTE 01</span>
              <ChevronRight className="w-5 h-5 text-[#F4C542]" />
            </div>
          </button>

          {/* Progress Bar below last button as requested */}
          <div className="w-full sm:w-[320px] mt-10">
            <div className="w-full h-1.5 bg-zinc-800 mb-4 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[13%]"></div>
            </div>
            <div className="flex items-center justify-center text-[11px] md:text-sm font-black uppercase tracking-widest px-1 space-x-2">
              <Ticket className="w-4 h-4 gold-text" />
              <span className="text-zinc-100">13% das vagas preenchidas a R$27,00</span>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-3xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <div className="flex items-center space-x-3 text-zinc-100 font-bold">
            <ShieldCheck className="w-4 h-4 text-[#F4C542]" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Pagamento Seguro</span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-100 font-bold">
            <Mail className="w-4 h-4 text-[#F4C542]" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Acesso Imediato</span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-100 font-bold">
            <Headphones className="w-4 h-4 text-[#F4C542]" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Suporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
