
import React from 'react';

const Authority: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-[45%] reveal opacity-0 translate-x-[-20px] transition-all duration-1000">
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#F4C542]/30 rounded-sm group-hover:border-[#F4C542]/50 transition-all"></div>
            <img 
              src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg" 
              alt="Dr. Thiago Costa" 
              className="w-full grayscale brightness-90 hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/90 backdrop-blur-md p-6 border-l-4 border-[#F4C542] shadow-2xl">
                <p className="font-serif text-2xl text-[#F4C542] font-bold">Dr. Thiago Costa</p>
                <p className="text-xs text-zinc-100 uppercase tracking-widest mt-1 font-bold">Mentor de Carreira Médica</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-[55%] reveal opacity-0 translate-x-[20px] transition-all duration-1000">
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-300 mb-8 block font-black">A Experiência nas Trincheiras</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-12 md:mb-14 leading-tight text-white relative pl-6 border-l-4 border-[#F4C542]">
            Quem conhece o <span className="gold-text">jogo de dentro</span> não depende da sorte.
          </h2>
          
          <div className="space-y-10 text-zinc-200 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
            <p>
              O Dr. Thiago Costa não é um acadêmico falando de teorias. Ele é um médico que viveu o caos das UPAs, a pressão das UBSs e a política dos grandes hospitais. Ele entende o que os coordenadores buscam quando decidem quem fica na escala.
            </p>
            <p>
              Ao longo de anos, he decodificou os comportamentos que fazem um médico recém-formado ser visto como uma autoridade absoluta em pouco tempo, garantindo convites para as melhores escalas da cidade.
            </p>
            <p>
              Este workshop é a entrega direta dessa 'leitura de jogo', focada em dar clareza estratégica para quem cansou de ser apenas mais um nome em uma lista de espera de plantões avulsos.
            </p>
          </div>
          
          <div className="mt-16 md:mt-20 flex flex-wrap gap-5">
             <div className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-xs md:text-sm text-white rounded-full tracking-wider font-bold">Estratégia de Escala</div>
             <div className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-xs md:text-sm text-white rounded-full tracking-wider font-bold">Leitura de Ambiente</div>
             <div className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-xs md:text-sm text-white rounded-full tracking-wider font-bold">Posicionamento Real</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
