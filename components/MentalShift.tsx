
import React from 'react';

const MentalShift: React.FC = () => {
  return (
    <section className="py-28 md:py-48 px-6 bg-[#000000] relative overflow-hidden">
      {/* Subtle accent background */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#F4C542]/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 md:gap-32 relative z-10">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="font-serif text-[2.35rem] md:text-6xl mb-14 leading-[1.15] text-white reveal opacity-0 translate-y-10 transition-all duration-1000 relative lg:pl-10 lg:border-l-4 border-[#F4C542]">
            O <span className="gold-text font-bold">código invisível</span> das escalas fixas: por que alguns médicos são sempre a prioridade?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
            <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 premium-card p-8 md:p-10 rounded-3xl">
              <h3 className="gold-text font-serif text-2xl mb-5 font-bold uppercase tracking-wide">Radar de Confiabilidade</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                A coordenação e a equipe de enfermagem sentem quem resolve o plantão e quem é um peso. Quem facilita o fluxo da unidade garante o convite vitalício para a escala.
              </p>
            </div>
            <div className="reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200 premium-card p-8 md:p-10 rounded-3xl">
              <h3 className="gold-text font-serif text-2xl mb-5 font-bold uppercase tracking-wide">Estratégia Relacional</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                Técnica é o mínimo esperado de qualquer médico. O diferencial que te tira da insegurança é sua postura de liderança silenciosa e sua leitura de ambiente.
              </p>
            </div>
          </div>
          
          <p className="mt-16 text-zinc-300 font-light leading-relaxed reveal opacity-0 translate-y-10 transition-all duration-1000 text-xl md:text-2xl italic px-4 lg:px-0">
            "Existe um padrão exato de quem é preferido pela gestão. No workshop, eu vou te entregar as chaves para você entrar nesse time."
          </p>
        </div>

        <div className="w-full lg:w-2/5 reveal opacity-0 translate-x-[20px] transition-all duration-1000">
           <div className="relative group rounded-3xl overflow-hidden border border-zinc-800/50 aspect-[4/5] shadow-3xl">
              <img 
                src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg" 
                alt="Estratégia Médica e Liderança" 
                className="w-full h-full object-cover object-center grayscale opacity-60 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-5 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[10px] gold-text uppercase tracking-[0.3em] font-black">Liderança & Autoridade</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MentalShift;
