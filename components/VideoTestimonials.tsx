
import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoTestimonials: React.FC = () => {
  const testimonials = [1, 2, 3]; // Placeholders para vídeos

  return (
    <section className="py-20 md:py-32 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-serif text-3xl md:text-5xl mb-6 text-white font-bold">
            Médicos que entenderam o jogo deixaram de disputar plantões.
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto italic text-lg leading-relaxed">
            Relatos reais de quem saiu da insegurança dos grupos de WhatsApp para a previsibilidade da escala fixa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((id) => (
            <div 
              key={id} 
              className="relative group cursor-pointer reveal opacity-0 scale-95 transition-all duration-700"
              style={{ transitionDelay: `${id * 150}ms` }}
            >
              <div className="aspect-[9/16] bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 flex items-center justify-center relative">
                {/* Placeholder para Thumbnail */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors z-10"></div>
                <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 z-20"></div>
                
                <PlayCircle className="w-14 h-14 text-[#F4C542] opacity-90 group-hover:opacity-100 transition-all transform group-hover:scale-110 z-30 drop-shadow-lg" />
                
                <div className="absolute bottom-6 left-6 z-30">
                  <p className="text-white font-black text-sm uppercase tracking-tight">Dr(a). Residente</p>
                  <p className="text-zinc-200 text-[10px] uppercase tracking-widest font-bold mt-1">Escala Fixa em Emergência</p>
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
