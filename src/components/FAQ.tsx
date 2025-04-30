import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "O Mounja Fit Black funciona mesmo?",
    answer: "Sim, o Mounja Fit Black possui uma fórmula natural cientificamente desenvolvida para acelerar o metabolismo, queimar gordura e controlar o apetite. Os resultados variam de pessoa para pessoa, mas a maioria dos usuários relatam efeitos positivos nas primeiras semanas de uso."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros resultados geralmente aparecem entre 15 e 30 dias de uso contínuo. A redução do apetite e o aumento de disposição podem ser percebidos nos primeiros dias. Para resultados mais expressivos de perda de peso, recomendamos o uso por pelo menos 3 meses."
  },
  {
    question: "Tenho diabetes, posso tomar?",
    answer: "Sim, o Mounja Fit Black é composto por ingredientes naturais e não contém substâncias prejudiciais para diabéticos. Entretanto, como medida de precaução, recomendamos consultar seu médico antes de iniciar o uso, especialmente se você faz uso de medicamentos para controle da diabetes."
  },
  {
    question: "Existe algum efeito colateral?",
    answer: "Por ser um produto 100% natural, o Mounja Fit Black não costuma causar efeitos colaterais significativos. Diferente de outros suplementos para emagrecimento, não causa insônia, taquicardia ou ansiedade. Em casos raros, pessoas mais sensíveis podem sentir leve desconforto gastrointestinal nos primeiros dias de uso."
  },
  {
    question: "Preciso fazer dieta ou exercícios junto com o suplemento?",
    answer: "O Mounja Fit Black funciona mesmo sem dietas restritivas ou exercícios intensos. No entanto, para resultados otimizados e mais rápidos, recomendamos manter uma alimentação balanceada e praticar alguma atividade física, mesmo que leve, como caminhadas."
  },
  {
    question: "Como é feita a entrega? Quanto tempo demora?",
    answer: "A entrega é feita pelos Correios ou transportadoras parceiras para todo o Brasil. O prazo médio é de 5 a 15 dias úteis, dependendo da sua localização. Após a confirmação do pagamento, você receberá um código de rastreamento para acompanhar sua encomenda."
  },
  {
    question: "Qual a diferença do Mounja Fit Black para outros suplementos?",
    answer: "O Mounja Fit Black se diferencia pela sua fórmula exclusiva que atua em três frentes: aceleração do metabolismo, queima de gordura e controle do apetite. Além disso, não contém estimulantes agressivos, o que evita efeitos colaterais como insônia e taquicardia, comuns em outros produtos para emagrecimento."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  
  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };
  
  return (
    <section className="section bg-gray-100" id="faq">
      <div className="container-custom">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="section-subtitle text-gray-700">
          Dúvidas comuns sobre o Mounja Fit Black
        </p>
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'shadow-lg' : ''
                }`}
              >
                <button
                  className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="font-bold text-lg">{item.question}</h3>
                  <div>
                    {openItems.includes(index) ? (
                      <ChevronUp size={20} className="text-green-600" />
                    ) : (
                      <ChevronDown size={20} className="text-gray-600" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-5 pb-5">
                    <div className="h-px bg-gray-200 mb-4"></div>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-700 mb-4">
              Ainda tem dúvidas? Entre em contato com nossa equipe de suporte
            </p>
            <a 
              href="#contato" 
              className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              Falar com um atendente 
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;