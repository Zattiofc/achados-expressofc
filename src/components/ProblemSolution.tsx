import React from 'react';
import { Flame, TrendingUp, Utensils } from 'lucide-react';

const testimonials = [
  {
    name: "Maria S.",
    text: "Depois de tentar vários métodos para emagrecer, o Mounja Fit Black foi o único que realmente funcionou. Perdi 8kg em 2 meses!",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Carlos L.",
    text: "Minha disposição melhorou muito e a gordura da barriga começou a diminuir nas primeiras semanas. Resultado impressionante!",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Juliana R.",
    text: "O que mais me surpreendeu foi como controlou minha fome. Antes eu comia compulsivamente, agora consigo manter uma alimentação saudável.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const ProblemSolution: React.FC = () => {
  return (
    <section className="section bg-white" id="problema-solucao">
      <div className="container-custom">
        <h2 className="section-title">Por que tantas pessoas não conseguem emagrecer?</h2>
        <p className="section-subtitle text-gray-700">
          Descubra como o Mounja Fit Black ataca os 3 principais obstáculos que impedem sua perda de peso
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="card flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
              <TrendingUp size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Metabolismo Lento</h3>
            <p className="text-gray-700 mb-4">
              Um metabolismo lento dificulta a queima de gordura, mesmo com dieta e exercícios.
            </p>
            <div className="h-0.5 w-16 bg-green-500 my-4"></div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">Como Resolvemos:</h4>
            <p className="text-gray-700">
              Os compostos naturais do Mounja Fit Black aceleram seu metabolismo, transformando seu corpo em uma máquina de queimar gordura.
            </p>
          </div>
          
          <div className="card flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
              <Flame size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Gordura Persistente</h3>
            <p className="text-gray-700 mb-4">
              Algumas áreas do corpo acumulam gordura que parece impossível de eliminar.
            </p>
            <div className="h-0.5 w-16 bg-green-500 my-4"></div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">Como Resolvemos:</h4>
            <p className="text-gray-700">
              Nossa fórmula ativa a lipólise, processo natural do corpo que quebra as moléculas de gordura, focando nas áreas mais resistentes.
            </p>
          </div>
          
          <div className="card flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
              <Utensils size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fome Constante</h3>
            <p className="text-gray-700 mb-4">
              A sensação de fome constante leva a exageros alimentares que sabotam seus esforços.
            </p>
            <div className="h-0.5 w-16 bg-green-500 my-4"></div>
            <h4 className="text-lg font-semibold text-green-600 mb-2">Como Resolvemos:</h4>
            <p className="text-gray-700">
              Os ingredientes do Mounja Fit Black promovem a saciedade natural, reduzindo a fome e a vontade de comer doces e carboidratos.
            </p>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            O que nossos clientes dizem sobre os resultados
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card border border-gray-200 hover:border-green-500">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Mais de <span className="font-bold text-green-600">10.000 pessoas</span> já transformaram seus corpos com o Mounja Fit Black. Seja a próxima história de sucesso!
          </p>
          <a href="#precos" className="primary-button inline-flex mx-auto">
            QUERO ESSES RESULTADOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;