
import React from 'react';

const MentalShift: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 bg-[#000000] relative overflow-hidden">
      {/* Subtle off-white accent background */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#fdfbf7]/[0.02] -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="font-serif text-3xl md:text-5xl mb-12 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700 relative pl-8 border-l-4 border-[#F4C542]">
            O <span className="gold-text font-bold">código invisível</span> das escalas fixas: por que alguns médicos são sempre a prioridade?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 text-left">
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 premium-card p-6 md:p-8 rounded-2xl">
              <h3 className="gold-text font-serif text-xl mb-4 font-bold uppercase tracking-wide">Radar de Confiabilidade</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                A coordenação e a equipe de enfermagem sentem quem resolve o plantão e quem é um peso. Quem facilita o fluxo da unidade garante o convite vitalício para a escala.
              </p>
            </div>
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-150 premium-card p-6 md:p-8 rounded-2xl">
              <h3 className="gold-text font-serif text-xl mb-4 font-bold uppercase tracking-wide">Estratégia Relacional</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Técnica é o mínimo esperado de qualquer médico. O diferencial que te tira da insegurança é sua postura de liderança silenciosa e sua leitura de ambiente.
              </p>
            </div>
          </div>
          
          <p className="mt-14 text-zinc-300 font-light leading-relaxed reveal opacity-0 translate-y-10 transition-all duration-700 text-lg italic">
            "Existe um padrão exato de quem é preferido pela gestão. No workshop, eu vou te entregar as chaves para você entrar nesse time."
          </p>
        </div>

        <div className="w-full lg:w-2/5 reveal opacity-0 translate-x-[20px] transition-all duration-1000">
           <div className="relative group rounded-2xl overflow-hidden border border-zinc-800 aspect-[4/5] shadow-2xl">
              <img 
                src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg" 
                alt="Estratégia Médica e Liderança" 
                className="w-full h-full object-cover object-center grayscale opacity-70 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] gold-text uppercase tracking-widest font-black">Liderança & Autoridade</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MentalShift;
