
import React from 'react';

const MentalShift: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="font-serif text-3xl md:text-5xl mb-10 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700 relative pl-6 border-l-4 border-[#F4C542]">
            O <span className="gold-text">código invisível</span> das escalas fixas: por que alguns médicos são sempre a prioridade?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 border-l-2 border-gold-text pl-6">
              <h3 className="gold-text font-serif text-xl mb-3 font-bold uppercase tracking-wide">Radar de Confiabilidade</h3>
              <p className="text-zinc-200 text-sm leading-relaxed">
                A coordenação e a equipe de enfermagem sentem quem resolve o plantão e quem é um peso. Quem facilita o fluxo da unidade garante o convite vitalício para a escala.
              </p>
            </div>
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-150 border-l-2 border-gold-text pl-6">
              <h3 className="gold-text font-serif text-xl mb-3 font-bold uppercase tracking-wide">Estratégia Relacional</h3>
              <p className="text-zinc-200 text-sm leading-relaxed">
                Técnica é o mínimo esperado de qualquer médico. O diferencial que te tira da insegurança é sua postura de liderança silenciosa e sua leitura de ambiente.
              </p>
            </div>
          </div>
          
          <p className="mt-12 text-zinc-100 font-light leading-relaxed reveal opacity-0 translate-y-10 transition-all duration-700 text-lg">
            Existe um padrão exato de quem é preferido pela gestão. No workshop, eu vou te entregar as chaves para você entrar nesse time.
          </p>
        </div>

        <div className="w-full lg:w-2/5 reveal opacity-0 translate-x-[20px] transition-all duration-1000">
           <div className="relative group rounded-sm overflow-hidden border border-zinc-800 aspect-square">
              <img 
                src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg" 
                alt="Estratégia Médica" 
                className="w-full h-full object-cover object-center grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MentalShift;
