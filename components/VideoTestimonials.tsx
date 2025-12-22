
import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoTestimonials: React.FC = () => {
  const testimonials = [1, 2, 3]; // Placeholders para vídeos

  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Médicos que entenderam o jogo deixaram de disputar plantões.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            Relatos reais de quem saiu da insegurança dos grupos de WhatsApp para a previsibilidade da escala fixa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((id) => (
            <div 
              key={id} 
              className="relative group cursor-pointer reveal opacity-0 scale-95 transition-all duration-700"
              style={{ transitionDelay: `${id * 150}ms` }}
            >
              <div className="aspect-[9/16] bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 flex items-center justify-center relative">
                {/* Placeholder para Thumbnail */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent absolute inset-0 z-20"></div>
                
                <PlayCircle className="w-12 h-12 gold-text opacity-70 group-hover:opacity-100 transition-all transform group-hover:scale-110 z-30" />
                
                <div className="absolute bottom-6 left-6 z-30">
                  <p className="text-white font-bold text-sm">Dr(a). Fulano(a)</p>
                  <p className="text-zinc-400 text-[10px] uppercase tracking-widest">Ex-membro de grupos de plantão</p>
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
