
import React from 'react';

const Authority: React.FC = () => {
  return (
    <section className="py-28 md:py-64 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 md:gap-32">
        <div className="w-full md:w-[45%] reveal opacity-0 translate-x-[-20px] transition-all duration-1000">
          <div className="relative group max-w-md mx-auto md:max-w-none">
            <div className="absolute -inset-4 border border-[#F4C542]/20 rounded-2xl group-hover:border-[#F4C542]/40 transition-all duration-700"></div>
            <img 
              src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg" 
              alt="Dr. Thiago Costa" 
              className="w-full grayscale brightness-90 hover:grayscale-0 transition-all duration-1000 rounded-xl shadow-3xl"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-black/90 backdrop-blur-xl p-6 border-l-4 border-[#F4C542] shadow-3xl rounded-r-2xl">
                <p className="font-serif text-3xl text-[#F4C542] font-bold tracking-tight">Dr. Thiago Costa</p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] mt-1.5 font-bold">Mentor de Carreira Médica</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-[55%] reveal opacity-0 translate-x-[20px] transition-all duration-1000">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-zinc-500 mb-8 block font-black">A Experiência nas Trincheiras</span>
          <h2 className="font-serif text-[2.35rem] md:text-7xl mb-12 md:mb-16 leading-[1.1] text-white relative lg:pl-10 lg:border-l-4 border-[#F4C542]">
            Quem conhece o <span className="gold-text">jogo de dentro</span> não depende da sorte.
          </h2>
          
          <div className="space-y-10 text-zinc-300 text-lg md:text-2xl leading-relaxed font-light max-w-3xl">
            <p>
              O Dr. Thiago Costa não é um acadêmico falando de teorias. Ele é um médico que viveu o caos das UPAs, a pressão das UBSs e a política dos grandes hospitais. Ele entende o que os coordenadores buscam quando decidem quem fica na escala.
            </p>
            <p>
              Ao longo de anos, he decodificou os comportamentos que fazem um médico recém-formado ser visto como uma autoridade absoluta em pouco tempo, garantindo convites para as melhores escalas da cidade.
            </p>
          </div>
          
          <div className="mt-16 md:mt-24 flex flex-wrap gap-4 md:gap-6">
             <div className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-[10px] md:text-xs text-white rounded-full tracking-[0.2em] font-black uppercase">Estratégia de Escala</div>
             <div className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-[10px] md:text-xs text-white rounded-full tracking-[0.2em] font-black uppercase">Leitura de Ambiente</div>
             <div className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-[10px] md:text-xs text-white rounded-full tracking-[0.2em] font-black uppercase">Posicionamento Real</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
