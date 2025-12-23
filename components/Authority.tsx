
import React from 'react';

const Authority: React.FC = () => {
  return (
    <section className="py-32 md:py-56 px-6 bg-zinc-950">
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
                <p className="text-xs text-white uppercase tracking-widest mt-1 font-black">Mentor de Carreira Médica</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-[55%] reveal opacity-0 translate-x-[20px] transition-all duration-1000">
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#F4C542] mb-10 block font-black">A LIDERANÇA POR TRÁS DO WORKSHOP</span>
          <h2 className="font-serif text-4xl md:text-7xl mb-12 md:mb-16 leading-tight text-white font-bold">
            Guiado por quem conhece as trincheiras do mercado.
          </h2>
          
          <div className="space-y-10 text-white text-lg md:text-2xl leading-relaxed font-light max-w-2xl">
            <p>
              O Dr. Thiago Costa é médico com vivência real no dia a dia de UPAs, UBSs e grandes hospitais. Ele entende por dentro o funcionamento das escalas e os critérios invisíveis que as coordenações usam para escolher quem fica e quem sai.
            </p>
            <p>
              Cansado de ver médicos competentes perderem espaço para profissionais que apenas sabiam "se vender", ele decodificou as atitudes e comportamentos que transformam um recém-formado em uma autoridade confiável dentro de qualquer unidade.
            </p>
            <p>
              Este workshop é a entrega direta dessa engenharia, focada em dar clareza para quem deseja sair da inércia dos plantões e construir uma trajetória de respeito, sem depender da sorte nos grupos de mensagens.
            </p>
          </div>
          
          <div className="mt-20 md:mt-24 flex flex-wrap gap-6">
             <div className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-xs md:text-sm text-white rounded-sm tracking-widest font-black uppercase">Vivência em Emergência</div>
             <div className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-xs md:text-sm text-white rounded-sm tracking-widest font-black uppercase">Gestão de Escalas</div>
             <div className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-xs md:text-sm text-white rounded-sm tracking-widest font-black uppercase">Estratégia de Carreira</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
