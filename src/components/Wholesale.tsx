import React from 'react';
import { TrendingUp, DollarSign, Users, BarChart4 } from 'lucide-react';

const Wholesale: React.FC = () => {
  return (
    <section className="section bg-gradient-to-b from-black to-gray-900 text-white" id="revenda">
      <div className="container-custom">
        <h2 className="section-title text-white">Oportunidade para Revendedores</h2>
        <p className="section-subtitle text-gray-300">
          Comece seu próprio negócio com o Mounja Fit Black e obtenha lucros expressivos
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Por que revender o Mounja Fit Black?
              </h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <TrendingUp size={30} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Mercado em Crescimento</h4>
                    <p className="text-gray-300">
                      O mercado de suplementos para emagrecimento cresce mais de 15% ao ano, sendo um dos segmentos mais lucrativos do setor de bem-estar.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <DollarSign size={30} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Alta Margem de Lucro</h4>
                    <p className="text-gray-300">
                      Com nossas condições especiais para revendedores, você pode obter margens de lucro de até 100% em cada venda.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <Users size={30} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Produto de Consumo Recorrente</h4>
                    <p className="text-gray-300">
                      Clientes satisfeitos compram novamente, gerando um fluxo contínuo de vendas e uma carteira fidelizada.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <BarChart4 size={30} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Suporte e Material de Marketing</h4>
                    <p className="text-gray-300">
                      Fornecemos todo o suporte, treinamento e materiais de divulgação para impulsionar suas vendas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-green-900/30 rounded-xl p-6 border border-green-700/50">
              <h3 className="text-xl font-bold mb-4 text-center text-green-400">Pacotes para Revendedores</h3>
              
              <div className="space-y-6 mt-6">
                <div className="bg-white/5 rounded-lg p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg">Pacote Inicial</h4>
                    <div className="px-3 py-1 bg-green-700 rounded-full text-sm font-bold">POPULAR</div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-400">20 unidades</div>
                      <div className="text-sm text-gray-400">Lucro estimado: R$ 1.570,00</div>
                    </div>
                    <div className="text-2xl font-bold">R$ 967,00</div>
                  </div>
                  <a 
                    href="https://entrega.logzz.com.br/pay/memeq6yxw/compra-15-leve-2o-por-967" 
                    className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg font-bold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ADQUIRIR
                  </a>
                </div>
                
                <div className="bg-white/5 rounded-lg p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-bold text-lg">Pacote Profissional</h4>
                    <div className="px-3 py-1 bg-amber-600 rounded-full text-sm font-bold">MELHOR VALOR</div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-sm text-gray-400">50 unidades</div>
                      <div className="text-sm text-gray-400">Lucro estimado: R$ 4.380,00</div>
                    </div>
                    <div className="text-2xl font-bold">R$ 1.967,00</div>
                  </div>
                  <a 
                    href="https://entrega.logzz.com.br/pay/memeq6yxw/pague-40-leve-50-no-atacado-1967" 
                    className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-2 rounded-lg font-bold transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ADQUIRIR
                  </a>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="#precos"
                className="secondary-button inline-flex"
              >
                COMEÇAR MEU NEGÓCIO
              </a>
              <p className="mt-3 text-sm text-gray-400">
                Para pedidos personalizados ou mais informações, entre em contato com nossa equipe pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;