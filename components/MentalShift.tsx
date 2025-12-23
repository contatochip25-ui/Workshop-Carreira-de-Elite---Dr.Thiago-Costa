
import React from 'react';

const MentalShift: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="font-serif text-3xl md:text-5xl mb-10 leading-tight text-white reveal opacity-0 translate-y-10 transition-all duration-700">
            Por que alguns médicos conseguem escala fixa e a maioria não?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 border-l-2 border-gold-text pl-6">
              <h3 className="gold-text font-serif text-xl mb-3 font-bold uppercase tracking-wide">O Olhar da Equipe</h3>
              <p className="text-zinc-200 text-sm leading-relaxed">
                A enfermagem, a coordenação e a equipe observam seu comportamento. Médicos confiáveis e organizados são os primeiros a serem convidados para o "time de dentro".
              </p>
            </div>
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-150 border-l-2 border-gold-text pl-6">
              <h3 className="gold-text font-serif text-xl mb-3 font-bold uppercase tracking-wide">Postura vs. Técnica</h3>
              <p className="text-zinc-200 text-sm leading-relaxed">
                Ser um excelente técnico é o básico. O que garante sua escala é sua postura relacional e como você resolve o problema da unidade sem gerar novos.
              </p>
            </div>
          </div>
          
          <p className="mt-12 text-zinc-100 font-light leading-relaxed reveal opacity-0 translate-y-10 transition-all duration-700 text-lg">
            Existe um padrão claro de quem é preferido pela coordenação. No workshop, eu vou te entregar os códigos desse jogo.
          </p>
        </div>

        <div className="w-full lg:w-2/5 reveal opacity-0 translate-x-[20px] transition-all duration-1000">
           <div className="relative group rounded-sm overflow-hidden border border-zinc-800">
              <img 
                src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg" 
                alt="Estratégia Médica" 
                className="w-full h-[300px] md:h-[450px] object-cover object-top grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MentalShift;
