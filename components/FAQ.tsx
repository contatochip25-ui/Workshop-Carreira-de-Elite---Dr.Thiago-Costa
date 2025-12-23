
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "O workshop é apenas para quem ainda não escolheu a residência?",
    answer: "Não. A visão estratégica de carreira é independente do título de especialista. Muitos médicos terminam a residência com excelente técnica, mas sem nenhuma noção de posicionamento de mercado ou construção de autoridade. O workshop serve para quem quer ser o protagonista da sua trajetória, esteja ele no primeiro plantão ou no R3."
  },
  {
    question: "O conteúdo aborda marketing médico ou vendas?",
    answer: "Definitivamente não da forma como você vê por aí. Não ensinamos fórmulas de redes sociais. Ensinamos Engenharia de Carreira e Pensamento Clínico Contemporâneo. O objetivo é que sua autoridade seja construída sobre competência e diferenciação estratégica, e não sobre 'dancinhas' ou marketing vazio."
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
    <section className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white font-bold">Clareza Final</h2>
          <p className="text-zinc-300 font-light italic text-lg">Respostas diretas para quem não tem tempo a perder.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div 
              key={idx} 
              className="border border-zinc-800 rounded-sm overflow-hidden transition-all duration-300 reveal opacity-0 translate-y-10 bg-zinc-950"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-900 transition-colors"
              >
                <span className="font-serif text-lg md:text-xl text-white pr-4 font-bold">{item.question}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 gold-text shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-zinc-300 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-zinc-200 font-light leading-relaxed border-t border-zinc-900/50 text-base md:text-lg">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal opacity-0 translate-y-10 transition-all duration-700">
          <p className="text-zinc-300 text-sm font-bold">Ainda tem alguma dúvida técnica?</p>
          <a href="#" className="gold-text text-sm underline underline-offset-4 hover:text-white transition-colors mt-2 inline-block font-black uppercase tracking-widest">
            Falar com suporte especializado
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
