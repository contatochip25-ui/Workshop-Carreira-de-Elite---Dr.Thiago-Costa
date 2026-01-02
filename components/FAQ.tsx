
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "O workshop é apenas para quem ainda não escolheu a residência?",
    answer: "Não. A visão estratégica de carreira é independente do título de especialista. Muitos médicos terminam a residência com excelente técnica, mas sem nenhuma noção de posicionamento de mercado ou construção de autoridade. O workshop serve para quem quer ser o protagonista da sua trajetória, esteja ele no primeiro plantão ou no R3."
  },
  {
    question: "O conteúdo aborda marketing médico ou vendas?",
    answer: "Definitivamente não da forma como você vê por aí. Ensinamos Engenharia de Carreira e Pensamento Clínico Contemporâneo. O objetivo é que sua autoridade seja construída sobre competência e diferenciação estratégica, e não sobre 'dancinhas' ou marketing vazio."
  },
  {
    question: "Por que participar ao vivo se minha rotina de plantões é imprevisível?",
    answer: "A experiência ao vivo permite a interação direta com o Dr. Thiago e o networking com outros médicos que buscam o mesmo nível de excelência. É um compromisso com o seu futuro. No entanto, o acesso ao link oficial de participação será enviado com antecedência para que você possa se organizar."
  },
  {
    question: "Terei acesso a algum material de apoio após o evento?",
    answer: "Sim. Os inscritos receberão o 'Mapa de Direção Médica', um material exclusivo consolidando os pilares discutidos no workshop, para que a execução da sua nova rota comece imediatamente no dia seguinte."
  },
  {
    question: "O workshop emite certificado de participação?",
    answer: "Sim, emitimos um certificado de participação em workshop de Gestão Estratégica e Carreira Médica. Mas, honestamente? O maior valor que você levará não é o papel, mas a clareza para não desperdiçar os próximos 5 anos da sua vida."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 md:py-48 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 md:mb-28 reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="font-serif text-3xl md:text-6xl mb-8 text-white font-bold relative pb-8 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-[1px] after:bg-gold-bg/30 leading-tight">
            <span className="gold-text">Clareza Final</span>
          </h2>
          <p className="text-zinc-400 font-light italic text-lg md:text-2xl px-4">Respostas diretas para quem não tem tempo a perder.</p>
        </div>

        <div className="space-y-6">
          {faqData.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-zinc-800/60 rounded-2xl overflow-hidden transition-all duration-300 reveal opacity-0 translate-y-10 bg-zinc-950/40"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 md:p-10 text-left hover:bg-zinc-900/40 transition-colors"
              >
                <span className="font-serif text-2xl md:text-3xl text-white pr-6 font-bold leading-tight tracking-tight">{item.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-6 h-6 gold-text shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-zinc-500 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-8 md:p-10 pt-0 text-zinc-300 font-light leading-relaxed border-t border-zinc-900/50 text-lg md:text-xl">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center reveal opacity-0 translate-y-10 transition-all duration-1000">
          <p className="text-zinc-400 text-lg font-bold">Ainda tem alguma dúvida técnica?</p>
          <a href="#" className="gold-text text-lg underline underline-offset-8 hover:text-white transition-all mt-4 inline-block font-black uppercase tracking-[0.2em]">
            Falar com suporte especializado
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
