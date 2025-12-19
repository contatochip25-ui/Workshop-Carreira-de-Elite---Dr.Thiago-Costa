
import React from 'react';

const MentalShift: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#0a0a0a] border-y border-zinc-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16">
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="font-serif text-3xl md:text-6xl mb-10 leading-tight reveal opacity-0 translate-y-10 transition-all duration-700">
            “O problema não é falta de esforço.<br />
            <span className="gold-text">É falta de visão.</span>”
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-16 text-left">
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 border-l border-zinc-800 pl-6 md:border-l-0 md:pl-0">
              <h3 className="gold-text font-serif text-xl mb-3">Técnicos vs. Estrategistas</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A faculdade forma técnicos, mas o mercado exige estrategistas da própria carreira.
              </p>
            </div>
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-150 border-l border-zinc-800 pl-6 md:border-l-0 md:pl-0">
              <h3 className="gold-text font-serif text-xl mb-3">A Janela de Ouro</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Os primeiros 3 anos definem o teto financeiro e intelectual de toda a sua jornada.
              </p>
            </div>
            <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 border-l border-zinc-800 pl-6 md:border-l-0 md:pl-0">
              <h3 className="gold-text font-serif text-xl mb-3">Investimento</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trabalhar mais não resolve falta de rota. O workshop é o seu novo GPS.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 reveal opacity-0 translate-x-[20px] transition-all duration-1000">
           <div className="relative group">
              <img 
                src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg" 
                alt="Estratégia Médica" 
                className="w-full h-[300px] md:h-[400px] object-cover grayscale opacity-40 rounded-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MentalShift;
