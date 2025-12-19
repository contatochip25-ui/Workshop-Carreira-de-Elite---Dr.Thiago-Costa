
import React from 'react';
import { Target, Map, TrendingUp, ShieldCheck, Home } from 'lucide-react';

const WorkshopContent: React.FC = () => {
  const items = [
    {
      title: "Os erros invisíveis do início da carreira",
      desc: "Aquilo que ninguém te contou na residência ou no internato, mas que custa milhares de reais.",
      icon: <Target className="w-8 h-8 gold-text" />
    },
    {
      title: "Como pensar carreira antes de escolher caminhos",
      desc: "Um framework para decidir seu futuro sem a pressão do 'achismo'.",
      icon: <Map className="w-8 h-8 gold-text" />
    },
    {
      title: "Por que trabalhar mais não significa evoluir",
      desc: "A armadilha dos múltiplos plantões e como quebrar o ciclo de exaustão.",
      icon: <TrendingUp className="w-8 h-8 gold-text" />
    },
    {
      title: "O que diferencia médicos comuns de bem posicionados",
      desc: "As soft skills e o pensamento clínico que atraem os melhores pacientes.",
      icon: <ShieldCheck className="w-8 h-8 gold-text" />
    },
    {
      title: "Como construir um consultório com propósito",
      desc: "A base teórica e prática para quem deseja autonomia e excelência clínica.",
      icon: <Home className="w-8 h-8 gold-text" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 reveal opacity-0 translate-y-10 transition-all duration-700">
            A Grade do Workshop
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto reveal opacity-0 translate-y-10 transition-all duration-700 delay-100">
            Cinco pilares fundamentais para transformar sua prática médica e sua visão de futuro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="p-10 border border-zinc-800 bg-zinc-900/50 rounded-sm hover:bg-zinc-900 transition-all group reveal opacity-0 translate-y-10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
              <h3 className="font-serif text-2xl mb-4 text-white group-hover:gold-text transition-colors">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
          
          <div className="p-10 border-2 border-dashed border-zinc-800 flex flex-col justify-center items-center text-center reveal opacity-0 translate-y-10">
            <p className="text-zinc-600 italic">E muito mais através da interação ao vivo e Q&A exclusivo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopContent;
