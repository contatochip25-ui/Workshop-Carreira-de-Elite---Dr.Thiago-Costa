
import React from 'react';
import { ShieldCheck, Mail, Headphones, ChevronRight, Ticket, Clock } from 'lucide-react';

const FinalCta: React.FC = () => {
  return (
    <section className="py-32 md:py-64 px-6 bg-[#0a0a0a] text-center relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#F4C542]/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 md:mb-20 reveal opacity-0 translate-y-10 transition-all duration-700">
          <img 
            src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg" 
            alt="Dr. Thiago Costa" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-2 border-[#F4C542]/50 grayscale hover:grayscale-0 transition-all object-cover shadow-2xl"
          />
        </div>

        <h2 className="font-serif text-3xl md:text-7xl mb-12 md:mb-16 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700 font-bold">
          O mercado médico não perdoa a inércia.<br />
          <span className="gold-text">Sua escala fixa começa aqui.</span>
        </h2>
        
        <p className="text-white text-base md:text-2xl mb-16 md:mb-24 max-w-2xl mx-auto px-2 reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 font-light leading-relaxed">
          Pare de mendigar plantões e aprenda o jogo real das unidades de saúde. Todo o conteúdo será entregue integralmente no workshop ao vivo.
        </p>

        <div className="flex flex-col items-center reveal opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <button className="premium-led-btn w-full sm:w-auto sm:min-w-[340px] main-cta-button shadow-2xl shadow-[#F4C542]/10">
            <div className="premium-led-btn-inner px-10 py-6 text-base md:text-xl flex items-center justify-center space-x-3">
              <span className="text-[#F4C542] font-black tracking-[0.2em]">COMPRAR INGRESSO | LOTE 01</span>
              <ChevronRight className="w-6 h-6 text-[#F4C542]" />
            </div>
          </button>

          {/* Padronização da Barra de Progresso - Sincronizada com o Hero */}
          <div className="w-full sm:w-[340px] mt-12">
            <div className="w-full h-3 bg-zinc-800 mb-5 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[13%]"></div>
            </div>
            <div className="flex items-center justify-center text-xs md:text-base font-black uppercase tracking-widest px-1 space-x-2 text-white">
              <Ticket className="w-5 h-5 gold-text" />
              <span>13% dos ingressos vendidos a R$ 27,00</span>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-4xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <div className="flex items-center space-x-3 text-white font-black">
            <ShieldCheck className="w-5 h-5 text-[#F4C542]" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Pagamento Seguro</span>
          </div>
          <div className="flex items-center space-x-3 text-white font-black">
            <Mail className="w-5 h-5 text-[#F4C542]" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Acesso por E-mail</span>
          </div>
          <div className="flex items-center space-x-3 text-white font-black">
            <Headphones className="w-5 h-5 text-[#F4C542]" />
            <span className="text-[10px] uppercase tracking-[0.2em]">Suporte Especializado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
