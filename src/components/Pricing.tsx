import React from 'react';
import { Truck, Calendar, CreditCard, Wallet, QrCode } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const packages = [
  {
    id: 1,
    title: "1 FRASCO",
    quantity: 1,
    price: 127.00,
    link: "https://entrega.logzz.com.br/pay/memeq6yxw/ivmeq-1-unidade-127"
  },
  {
    id: 2,
    title: "2 FRASCOS",
    quantity: 2,
    price: 197.00,
    link: "https://entrega.logzz.com.br/pay/memeq6yxw/ojhwf-2-unidade-197"
  },
  {
    id: 3,
    title: "3 FRASCOS",
    quantity: 3,
    price: 247.00,
    link: "https://entrega.logzz.com.br/pay/memeq6yxw/3-unidade-247",
    popular: true
  },
  {
    id: 4,
    title: "5 FRASCOS",
    quantity: 5,
    price: 367.00,
    link: "https://entrega.logzz.com.br/pay/memeq6yxw/jbmrl-"
  },
  {
    id: 5,
    title: "10 FRASCOS",
    quantity: 10,
    price: 897.00,
    link: "https://entrega.logzz.com.br/pay/memeq6yxw/10-unidade-897"
  }
];

const wholesalePackages = [
  {
    id: 6,
    title: "20 FRASCOS",
    quantity: 20,
    price: 967.00,
    link: "https://entrega.logzz.com.br/pay/memeq6yxw/compra-15-leve-2o-por-967"
  },
  {
    id: 7,
    title: "50 FRASCOS",
    quantity: 50,
    price: 1967.00,
    link: "https://entrega.logzz.com.br/pay/memeq6yxw/pague-40-leve-50-no-atacado-1967"
  }
];

const PaymentMethods = () => (
  <div className="flex flex-col items-center space-y-2">
    <div className="flex items-center space-x-4">
      <div className="flex items-center text-gray-400">
        <CreditCard size={20} className="mr-1" />
        <span>Cartão</span>
      </div>
      <div className="flex items-center text-gray-400">
        <Wallet size={20} className="mr-1" />
        <span>Dinheiro</span>
      </div>
      <div className="flex items-center text-gray-400">
        <QrCode size={20} className="mr-1" />
        <span>PIX</span>
      </div>
    </div>
    <div className="text-amber-400 text-sm font-medium flex items-center">
      <Truck size={16} className="mr-1" />
      <span>Pague apenas na entrega</span>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section className="section bg-black text-white" id="precos">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          ADQUIRA AGORA
        </h2>
        
        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 mb-4">Essa oferta acaba em:</p>
          <div className="inline-flex items-center justify-center bg-gray-800/50 rounded-lg p-4">
            <CountdownTimer hours={7} minutes={17} seconds={0} />
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-12 bg-gray-800/50 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <div className="bg-amber-500/20 rounded-full p-2">
              <Calendar size={24} className="text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-amber-400 mb-2">
                Pagamento na Entrega
              </h3>
              <p className="text-gray-300 text-sm">
                Agende sua entrega e pague apenas quando receber o produto. 
                Nós entramos em contato para confirmar seu pedido e agendar 
                a melhor data para entrega.
              </p>
            </div>
          </div>
        </div>

        {/* Regular Packages */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`relative rounded-xl border-2 ${
                pkg.popular 
                  ? 'border-primary bg-gray-900' 
                  : 'border-gray-800 bg-gray-900/50'
              } p-6 flex flex-col items-center`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    MAIS VENDIDO
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-6">{pkg.title}</h3>

              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary">
                  R$ {pkg.price.toFixed(2)}
                </div>
                <div className="text-gray-400 mt-2">
                  em até 12x no cartão
                </div>
              </div>

              <div className="mb-6">
                <PaymentMethods />
              </div>

              <a
                href={pkg.link}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg
                          transition-all duration-300 text-center uppercase tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                ADQUIRA AGORA
              </a>
            </div>
          ))}
        </div>

        {/* Wholesale Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8">Pacotes para Revendedores</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {wholesalePackages.map((pkg) => (
              <div 
                key={pkg.id}
                className="relative rounded-xl border-2 border-gray-800 bg-gray-900/50 p-6 flex flex-col items-center"
              >
                <h3 className="text-2xl font-bold mb-6">{pkg.title}</h3>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary">
                    R$ {pkg.price.toFixed(2)}
                  </div>
                  <div className="text-gray-400 mt-2">
                    em até 12x no cartão
                  </div>
                </div>

                <div className="mb-6">
                  <PaymentMethods />
                </div>

                <a
                  href={pkg.link}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg
                            transition-all duration-300 text-center uppercase tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ADQUIRA AGORA
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>* Pagamento 100% seguro na entrega</p>
          <p>* Entrega expressa para todo Brasil</p>
          <p>* Agendamento confirmado por telefone</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;