
import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoTestimonials: React.FC = () => {
  const testimonials = [1, 2, 3]; 

  return (
    <section className="py-28 md:py-48 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 md:mb-32 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="font-serif text-[2.35rem] md:text-6xl mb-10 text-white font-bold leading-[1.15] tracking-tight relative pb-8 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[1px] after:bg-gold-bg/30">
            Quem entendeu o jogo <span className="gold-text italic">parou de mendigar plantões.</span>
          </h2>
          <p className="text-zinc-400 max-w-3xl mx-auto italic text-lg md:text-2xl leading-relaxed font-light px-4">
            Médicos reais que trocaram a insegurança dos grupos de WhatsApp pela estabilidade e respeito de uma escala fixa de elite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
          {testimonials.map((id) => (
            <div 
              key={id} 
              className="relative group cursor-pointer reveal opacity-0 scale-95 transition-all duration-1000"
              style={{ transitionDelay: `${id * 200}ms` }}
            >
              <div className="aspect-[10/16] bg-zinc-900/40 rounded-3xl overflow-hidden border border-white/5 flex items-center justify-center relative shadow-3xl">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all z-10"></div>
                <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 z-20"></div>
                
                <PlayCircle className="w-20 h-20 text-[#F4C542]/80 group-hover:text-[#F4C542] transition-all transform group-hover:scale-110 z-30 drop-shadow-3xl" />
                
                <div className="absolute bottom-10 left-10 z-30">
                  <p className="text-white font-black text-lg md:text-xl uppercase tracking-tighter">Resultado Real</p>
                  <p className="text-zinc-300 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mt-2 opacity-80">Conquista de Escala Fixa</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
