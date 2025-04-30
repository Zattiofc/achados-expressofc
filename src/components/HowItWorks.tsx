import React from 'react';
import { Zap, Flame, Gauge, Clock, CalendarCheck, ArrowUpRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="section bg-gray-100" id="como-funciona">
      <div className="container-custom">
        <h2 className="section-title">Como o Mounja Fit Black Funciona</h2>
        <p className="section-subtitle text-gray-700">
          Nossa fórmula exclusiva atua em 3 frentes para garantir resultados reais e duradouros
        </p>
        
        <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://i.pinimg.com/736x/76/72/05/767205d758b310e582e4faf58c6fe27f.jpg" 
              alt="Como usar o Mounja Fit Black" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dosagem Recomendada</h3>
                <p className="text-gray-700">
                  Tome 2 cápsulas ao dia, preferencialmente 30 minutos antes do café da manhã. Para melhores resultados, ingerir com um copo cheio de água.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Duração do Tratamento</h3>
                <p className="text-gray-700">
                  Para resultados mais expressivos, recomendamos o uso contínuo por pelo menos 3 meses. Isso permite que o produto atue profundamente no metabolismo.
                </p>
                <div className="flex items-center mt-3">
                  <Clock size={20} className="text-amber-600 mr-2" />
                  <span className="text-sm text-amber-700 font-medium">Resultados iniciais: 15-30 dias</span>
                </div>
                <div className="flex items-center mt-1">
                  <CalendarCheck size={20} className="text-amber-600 mr-2" />
                  <span className="text-sm text-amber-700 font-medium">Resultados completos: 90 dias</span>
                </div>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dicas para Potencializar</h3>
                <p className="text-gray-700">
                  Para obter resultados ainda melhores, combine o uso do Mounja Fit Black com:
                </p>
                <ul className="mt-2 space-y-2">
                  {[
                    "Beber pelo menos 2 litros de água por dia",
                    "Adotar uma alimentação mais equilibrada",
                    "Praticar atividade física regularmente, mesmo que leve",
                    "Dormir pelo menos 7 horas por noite"
                  ].map((tip, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowUpRight size={18} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-green-50 p-8 rounded-xl shadow-md">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Resultados Esperados</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-12 h-8 rounded bg-green-200 flex items-center justify-center font-bold">1º</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Primeiras 2 semanas</h4>
                    <p className="text-sm text-gray-700">Redução do apetite, mais disposição e início da perda de peso leve.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-12 h-8 rounded bg-green-300 flex items-center justify-center font-bold">2º</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Primeiro mês</h4>
                    <p className="text-sm text-gray-700">Perda de 2 a 4kg, redução de medidas e melhora na aparência da pele.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-12 h-8 rounded bg-green-400 flex items-center justify-center font-bold">3º</div>
                  </div>
                  <div>
                    <h4 className="font-semibold">Terceiro mês</h4>
                    <p className="text-sm text-gray-700">Perda acumulada de 5 a 10kg, transformação visível no corpo e aumento da autoestima.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="p-2 bg-white inline-block rounded-full mb-4 shadow-md">
                <svg className="w-32 h-32" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="12" />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="12"
                    strokeDasharray="339.3"
                    strokeDashoffset="85"
                    transform="rotate(-90 60 60)"
                  />
                  <text x="60" y="65" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#222">75%</text>
                </svg>
              </div>
              <p className="font-bold text-lg">de nossos clientes alcançam seus objetivos de perda de peso em 3 meses</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="#precos" className="primary-button inline-flex mx-auto">
              QUERO COMEÇAR MEU TRATAMENTO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;