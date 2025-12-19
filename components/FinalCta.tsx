
import React from 'react';
import { ShieldCheck, Mail, Headphones, ChevronRight } from 'lucide-react';

const FinalCta: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#0a0a0a] text-center relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#d4af37]/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8 md:mb-10 reveal opacity-0 translate-y-10 transition-all duration-700">
          <img 
            src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago1.jpg" 
            alt="Dr. Thiago Costa" 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto border-2 border-[#d4af37]/30 grayscale hover:grayscale-0 transition-all object-cover"
          />
        </div>

        <h2 className="font-serif text-3xl md:text-7xl mb-8 md:mb-10 leading-tight reveal opacity-0 translate-y-10 transition-all duration-700">
          Os primeiros anos da carreira não voltam.<br />
          <span className="gold-text">Decidir cedo muda tudo.</span>
        </h2>
        
        <p className="text-gray-400 text-base md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto px-2 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
          O custo de adiar sua visão estratégica é infinitamente maior do que o valor do ingresso. Este é o seu ponto de virada.
        </p>

        <div className="px-4 reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <button className="premium-led-btn min-w-[320px] main-cta-button">
            <div className="premium-led-btn-inner px-10 py-5 text-sm md:text-lg flex items-center space-x-3">
              <span>Comprar Ingresso | Lote 01</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-3xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <div className="flex items-center space-x-3 text-zinc-500">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Pagamento Seguro</span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-500">
            <Mail className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Acesso por E-mail</span>
          </div>
          <div className="flex items-center space-x-3 text-zinc-500">
            <Headphones className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Suporte Especializado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
