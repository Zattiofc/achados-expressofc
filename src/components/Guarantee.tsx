import React from 'react';
import { ShieldCheck, CreditCard, Lock, Shield } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="section bg-white" id="garantia">
      <div className="container-custom">
        <h2 className="section-title">Garantia e Segurança</h2>
        <p className="section-subtitle text-gray-700">
          Compre com tranquilidade e confiança
        </p>
        
        <div className="mt-12 bg-gray-100 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center mb-6">
                <ShieldCheck size={40} className="text-green-600 mr-4" />
                <h3 className="text-2xl font-bold">Satisfação Garantida</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Confiamos tanto na eficácia do Mounja Fit Black que oferecemos garantia total de satisfação. Se após 30 dias de uso conforme as instruções você não estiver satisfeito com os resultados, devolvemos seu dinheiro.*
              </p>
              
              <p className="text-sm text-gray-600 italic">
                * Para solicitar o reembolso, entre em contato com nossa central de atendimento em até 30 dias após o recebimento do produto, com a embalagem original. Taxas de envio não são reembolsáveis.
              </p>
            </div>
            
            <div className="bg-green-600 p-8 text-white flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-6">Compra 100% Segura</h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <Lock size={24} className="mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Pagamento Protegido</h4>
                    <p className="text-sm text-green-100">
                      Toda transação é protegida por criptografia SSL de 256 bits, garantindo que seus dados estejam sempre seguros.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <CreditCard size={24} className="mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Diversas Formas de Pagamento</h4>
                    <p className="text-sm text-green-100">
                      Aceitamos todos os cartões de crédito, boleto bancário e PIX para sua conveniência.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <ShieldCheck size={24} className="mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Site Verificado e Seguro</h4>
                    <p className="text-sm text-green-100">
                      Nosso site é verificado e monitorado constantemente contra ameaças, garantindo uma experiência de compra tranquila.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 py-3 px-4 bg-white/20 rounded-lg flex justify-between items-center">
                <div className="text-sm font-bold">Formas de pagamento aceitas:</div>
                <div className="flex space-x-2">
                  {['Visa', 'Mastercard', 'Amex', 'Boleto', 'PIX'].map((method, index) => (
                    <div key={index} className="bg-white text-green-800 text-xs py-1 px-2 rounded font-bold">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-6">
            <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-md">
              <Lock size={32} className="text-green-600 mr-3" />
              <span className="font-bold">Site Seguro</span>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-md">
              <Shield size={32} className="text-green-600 mr-3" />
              <span className="font-bold">Aprovado ANVISA</span>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-lg flex items-center shadow-md">
              <ShieldCheck size={32} className="text-green-600 mr-3" />
              <span className="font-bold">Garantia de Satisfação</span>
            </div>
          </div>
          
          <a 
            href="#precos" 
            className="primary-button inline-flex mx-auto"
          >
            APROVEITAR OFERTA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;