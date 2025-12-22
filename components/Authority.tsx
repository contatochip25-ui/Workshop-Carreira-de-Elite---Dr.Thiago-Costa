
import React from 'react';

const Authority: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 reveal opacity-0 translate-x-[-20px] transition-all duration-1000">
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#d4af37]/20 rounded-sm group-hover:border-[#d4af37]/40 transition-all"></div>
            <img 
              src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/fotoperfil.jpg" 
              alt="Dr. Thiago Costa" 
              className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-700 rounded-sm shadow-2xl"
            />
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md p-4 border-l-4 border-[#d4af37]">
                <p className="font-serif text-xl gold-text">Dr. Thiago Costa</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Mentor de Carreira Médica</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 reveal opacity-0 translate-x-[20px] transition-all duration-1000">
          <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4 block">A Liderança por trás do Workshop</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Guiado por quem conhece as trincheiras do mercado.
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
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
          
          <div className="mt-12 flex flex-wrap gap-4">
             <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-xs text-gray-300 rounded-full">Vivência em Emergência</div>
             <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-xs text-gray-300 rounded-full">Gestão de Escalas</div>
             <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-xs text-gray-300 rounded-full">Estratégia de Carreira</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
