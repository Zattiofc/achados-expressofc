import React from 'react';
import { Award, Shield, AlertCircle, Leaf } from 'lucide-react';

const Composition: React.FC = () => {
  return (
    <section className="section bg-gray-900 text-white" id="composicao">
      <div className="container-custom">
        <h2 className="section-title text-white">Composição e Segurança</h2>
        <p className="section-subtitle text-gray-300">
          Conheça os ingredientes naturais que compõem o Mounja Fit Black e seus benefícios
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Leaf size={24} className="text-green-500 mr-2" />
                Ingredientes 100% Naturais
              </h3>
              
              <div className="space-y-4">
                {[
                  { name: "Chá Verde", desc: "Acelera o metabolismo e auxilia na queima de gordura" },
                  { name: "Gengibre", desc: "Propriedades termogênicas que aumentam o gasto calórico" },
                  { name: "Cavalinha", desc: "Efeito diurético natural que reduz a retenção de líquidos" },
                  { name: "Guaraná", desc: "Fornece energia e melhora a disposição física" },
                  { name: "Hibisco", desc: "Ajuda a controlar o apetite e reduzir a absorção de gorduras" },
                  { name: "Psyllium", desc: "Promove saciedade e melhora o funcionamento intestinal" }
                ].map((ingredient, index) => (
                  <div key={index} className="border-b border-gray-700 pb-3 last:border-0">
                    <h4 className="font-semibold text-green-400">{ingredient.name}</h4>
                    <p className="text-gray-300 text-sm">{ingredient.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex items-center justify-center">
                <div className="bg-green-900/50 p-4 rounded-lg flex items-center">
                  <Shield size={40} className="text-green-500 mr-4" />
                  <div>
                    <h4 className="font-bold text-green-400">Aprovado pela ANVISA</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-amber-600/20 backdrop-blur-md p-6 rounded-xl flex">
              <Award size={50} className="text-amber-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-amber-400">Qualidade Garantida</h3>
                <p className="text-gray-300">
                  Produzido em laboratório certificado com rigorosos padrões de qualidade. Cada lote passa por testes que garantem a pureza e eficácia dos ingredientes.
                </p>
              </div>
            </div>
            
            <div className="bg-green-600/20 backdrop-blur-md p-6 rounded-xl flex">
              <Shield size={50} className="text-green-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-green-400">Segurança Comprovada</h3>
                <p className="text-gray-300">
                  Seguro para a maioria das pessoas, inclusive diabéticos e hipertensos. Não causa efeitos colaterais como insônia, taquicardia ou ansiedade comuns em outros suplementos.
                </p>
              </div>
            </div>
            
            <div className="bg-red-600/20 backdrop-blur-md p-6 rounded-xl flex">
              <AlertCircle size={50} className="text-red-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-400">Contraindicações</h3>
                <p className="text-gray-300">
                  Não recomendado para gestantes, lactantes e crianças. Consulte seu médico antes de usar se você tiver alguma condição médica específica ou estiver tomando medicamentos.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a href="#precos" className="primary-button inline-flex">
                EXPERIMENTAR COM SEGURANÇA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Composition;