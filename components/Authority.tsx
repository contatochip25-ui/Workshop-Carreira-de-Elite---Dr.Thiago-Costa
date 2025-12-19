
import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

const Authority: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 reveal opacity-0 translate-x-[-20px] transition-all duration-1000">
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#d4af37]/20 rounded-sm group-hover:border-[#d4af37]/40 transition-all"></div>
            <img 
              src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiagofoto.jpg" 
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
            Guiado por quem domina a engenharia do sucesso médico.
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              O Dr. Thiago Costa é médico endocrinologista e estrategista, referência em desenhar rotas de sucesso para médicos que buscam clareza e autoridade no mercado atual.
            </p>
            <p>
              Com uma atuação focada na formação de lideranças de alta performance, ele desenvolveu um método que entrega a direção exata para quem deseja sair da inércia dos plantões e construir uma trajetória de respeito e impacto.
            </p>
            <p>
              Sua metodologia de "Maestria da Carreira" já guiou centenas de médicos na transição entre ser apenas um profissional técnico e se tornar um verdadeiro protagonista de sua jornada.
            </p>
          </div>
          
          <div className="mt-10 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a 
              href="https://instagram.com/dr.thiago.costa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 group bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 px-6 py-3 rounded-sm transition-all"
            >
              <Instagram className="w-5 h-5 gold-text group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Acompanhe no Instagram</span>
                <span className="text-sm text-gray-200 flex items-center">@dr.thiago.costa <ArrowUpRight className="w-3 h-3 ml-1 opacity-50" /></span>
              </div>
            </a>

            <div className="flex flex-wrap gap-3">
               <div className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 uppercase tracking-tighter rounded-sm">Performance</div>
               <div className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 uppercase tracking-tighter rounded-sm">Estratégia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
