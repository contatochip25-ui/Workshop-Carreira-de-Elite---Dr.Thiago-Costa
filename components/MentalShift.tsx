
import React from 'react';
import { Eye, ShieldCheck } from 'lucide-react';

const MentalShift: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center lg:text-left">
          <h2 className="font-serif text-3xl md:text-5xl mb-12 leading-tight text-white reveal opacity-0 translate-y-10">
            Existe um <span className="gold-text font-bold">Código Invisível</span> que separa o médico exausto do médico estratégico.
          </h2>
          
          <div className="space-y-6 mt-12">
            <div className="premium-card p-8 rounded-3xl border-l-2 border-gold-bg/30 reveal opacity-0 translate-y-10 transition-all">
              <div className="flex items-center space-x-4 mb-4">
                <Eye className="w-6 h-6 gold-text" />
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">O Olhar da Coordenação</h3>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Por que alguns médicos são sempre a primeira opção enquanto outros são apenas o plano B? Eu vou te mostrar o que acontece nos bastidores das escalas de elite.
              </p>
            </div>

            <div className="premium-card p-8 rounded-3xl border-l-2 border-gold-bg/30 reveal opacity-0 translate-y-10 transition-all delay-200">
              <div className="flex items-center space-x-4 mb-4">
                <ShieldCheck className="w-6 h-6 gold-text" />
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Postura & Autoridade</h3>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Não é sobre quanto você sabe de medicina, mas sobre como você se posiciona dentro da unidade. A confiança da equipe é sua maior moeda de troca.
              </p>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center lg:justify-start reveal opacity-0 translate-y-10">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F4C542] to-transparent opacity-25 blur rounded-full group-hover:opacity-50 transition-all"></div>
              <img 
                src="https://raw.githubusercontent.com/contatochip25-ui/DR.THIAGO-COSTA/main/public/images/drthiago2.jpg" 
                alt="Dr. Thiago Costa Estratégia" 
                className="relative w-24 h-24 rounded-full grayscale border-2 border-white/10"
              />
            </div>
            <div className="ml-6 flex flex-col justify-center">
              <p className="text-white font-bold text-lg">Dr. Thiago Costa</p>
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Mentor de Carreira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalShift;
