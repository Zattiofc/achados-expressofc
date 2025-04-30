import React from 'react';
import { Scale, Clock, Leaf, Zap, ShieldCheck, Heart } from 'lucide-react';

const benefits = [
  {
    icon: <Scale size={32} className="text-green-600" />,
    title: "Perda de Peso Efetiva",
    description: "Resultados visíveis em até 30 dias, com redução de medidas e peso na balança."
  },
  {
    icon: <Leaf size={32} className="text-green-600" />,
    title: "Controle Natural do Apetite",
    description: "Redução da fome e da vontade de comer doces sem efeitos colaterais."
  },
  {
    icon: <Zap size={32} className="text-green-600" />,
    title: "Aumento de Energia",
    description: "Mais disposição para suas atividades diárias e exercícios físicos."
  },
  {
    icon: <ShieldCheck size={32} className="text-green-600" />,
    title: "100% Natural e Seguro",
    description: "Fórmula natural, aprovada pela ANVISA e sem contraindicações para a maioria das pessoas."
  },
  {
    icon: <Clock size={32} className="text-green-600" />,
    title: "Praticidade de Uso",
    description: "Fácil de incluir na rotina, sem necessidade de dietas complexas ou exercícios intensos."
  },
  {
    icon: <Heart size={32} className="text-green-600" />,
    title: "Bem-estar Geral",
    description: "Melhora da autoestima, do sono e da sensação de bem-estar no dia a dia."
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="section bg-white" id="beneficios">
      <div className="container-custom">
        <h2 className="section-title">Benefícios do Mounja Fit Black</h2>
        <p className="section-subtitle text-gray-700">
          Conheça as vantagens que transformarão seu corpo e sua vida
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card flex flex-col items-center p-6">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-700 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-100 rounded-xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Transforme Seu Corpo e Sua Vida</h3>
              <p className="text-gray-700 mb-6">
                Imagine-se mais leve, com mais energia e confiança. O Mounja Fit Black foi criado para ajudar você a alcançar esse objetivo, independentemente da sua idade ou do seu histórico de tentativas anteriores.
              </p>
              <ul className="space-y-3">
                {[
                  "Resultados em até 30 dias de uso contínuo",
                  "Compatível com diversos estilos de vida",
                  "Não é necessário seguir dietas restritivas",
                  "Ajuda a manter os resultados a longo prazo"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#precos" className="primary-button inline-flex">
                  QUERO ESSES BENEFÍCIOS
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Mulher feliz e saudável" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -right-4 -top-4 bg-amber-500 text-white rounded-lg shadow-lg p-4 transform rotate-3 animate-bounce">
                <div className="text-center font-bold">
                  <div className="text-xs">ATÉ</div>
                  <div className="text-3xl">30%</div>
                  <div className="text-xs">OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;