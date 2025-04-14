import React, { useState, useEffect } from 'react';
import { Timer, Shield, Truck, Package, CheckCircle, Phone, Star, ArrowRight, Lock, CreditCard } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const packages = [
    { units: 1, price: 100.00, link: 'https://entrega.logzz.com.br/pay/mem62kvwo/rmt-gel', savings: '0%', perUnit: 100.00 },
    { units: 2, price: 159.00, link: 'https://entrega.logzz.com.br/pay/mem62kvwo/kgsjb-', savings: '20%', perUnit: 79.50, popular: true },
    { units: 3, price: 197.00, link: 'https://entrega.logzz.com.br/pay/mem62kvwo/ndlxu-3-por-197', savings: '34%', perUnit: 65.67 },
    { units: 6, price: 347.00, link: 'https://entrega.logzz.com.br/pay/mem62kvwo/6-por-r-34700', savings: '42%', perUnit: 57.83 },
    { units: 12, price: 597.00, link: 'https://entrega.logzz.com.br/pay/mem62kvwo/12-r-59700', savings: '50%', perUnit: 49.75, bestValue: true }
  ];

  const testimonials = [
    { initials: 'R.M.', age: 45, text: 'Recuperei minha confiança em apenas algumas semanas de uso. Resultado impressionante!', rating: 5 },
    { initials: 'J.P.', age: 38, text: 'Minha esposa notou a diferença já na primeira semana. Nossa vida íntima mudou completamente.', rating: 5 },
    { initials: 'M.S.', age: 52, text: 'Depois dos 50, pensei que não tinha mais jeito. O Rivosex provou que eu estava errado.', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Announcement Bar */}
      <div className="bg-red-800 text-white py-2 text-center text-sm font-medium">
        <span className="animate-pulse">🔥 PROMOÇÃO RELÂMPAGO</span> - Últimas unidades com até 50% OFF
      </div>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-yellow-400 font-medium">4.9/5 (10.000+ avaliações)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-800 to-yellow-600">
              Resultados em 30 minutos ou seu dinheiro de volta
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Fórmula natural que revolucionou a vida íntima de <span className="text-yellow-400">10.000+ homens</span>
            </p>
            <div className="bg-red-900/20 p-4 rounded-lg inline-block mb-8">
              <div className="text-2xl font-bold mb-2">⚡ Oferta Termina Em:</div>
              <div className="flex justify-center gap-4 text-3xl">
                <div className="bg-red-800/50 px-4 py-2 rounded">
                  <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                </div>
                :
                <div className="bg-red-800/50 px-4 py-2 rounded">
                  <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                </div>
                :
                <div className="bg-red-800/50 px-4 py-2 rounded">
                  <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sem Efeitos Colaterais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Resultados Comprovados</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="absolute -top-4 right-0 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold transform rotate-12">
              NOVO!
            </div>
            <img 
              src="https://logzz-s3.s3.us-east-2.amazonaws.com/uploads/files/products/20241117-103011pron6476.png"
              alt="Rivosex - Gel Natural de Desempenho Masculino"
              className="max-w-[300px] lg:max-w-[400px] h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="bg-black/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Você não está sozinho nessa jornada</h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
            <p className="text-lg">Milhões de homens enfrentam desafios com seu desempenho íntimo diariamente. Isso não apenas afeta a autoestima, mas também pode impactar relacionamentos e a qualidade de vida como um todo.</p>
            <p className="text-lg font-medium text-white">A boa notícia? <span className="text-yellow-400">Existe uma solução natural, segura e comprovada.</span></p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Por que escolher Rivosex?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-900/20 to-black p-6 rounded-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
            <Timer className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-xl font-bold mb-2">Ação Rápida</h3>
            <p>Resultados em até 30 minutos após a aplicação</p>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-black p-6 rounded-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
            <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-xl font-bold mb-2">100% Natural</h3>
            <p>Fórmula segura sem efeitos colaterais</p>
          </div>
          <div className="bg-gradient-to-br from-red-900/20 to-black p-6 rounded-lg text-center transform hover:-translate-y-1 transition-transform duration-300">
            <Package className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-xl font-bold mb-2">Entrega Discreta</h3>
            <p>Embalagem neutra e envio sigiloso</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-black/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">O que dizem nossos clientes</h2>
          <p className="text-center text-gray-300 mb-12">Junte-se a milhares de homens satisfeitos</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-red-900/10 to-black p-6 rounded-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 text-lg">"{testimonial.text}"</p>
                <div className="text-yellow-600 font-bold">
                  {testimonial.initials}, {testimonial.age} anos
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Escolha seu pacote</h2>
        <p className="text-center text-gray-300 mb-12">Quanto mais unidades, maior seu desconto!</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-gradient-to-br from-red-900/20 to-black p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 ${pkg.popular || pkg.bestValue ? 'border-2 border-yellow-600' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                  MAIS POPULAR
                </div>
              )}
              {pkg.bestValue && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                  MELHOR CUSTO-BENEFÍCIO
                </div>
              )}
              <div className="text-xl font-bold mb-2">{pkg.units} {pkg.units === 1 ? 'Unidade' : 'Unidades'}</div>
              <div className="text-4xl font-bold mb-2">
                R$ {pkg.price.toFixed(2)}
              </div>
              <div className="text-gray-400 mb-4">
                R$ {pkg.perUnit.toFixed(2)} por unidade
              </div>
              {pkg.savings !== '0%' && (
                <div className="text-yellow-400 font-bold mb-4">Economia de {pkg.savings}</div>
              )}
              <a
                href={pkg.link}
                className={`block w-full ${pkg.popular || pkg.bestValue ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400' : 'bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500'} text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2`}
              >
                COMPRAR AGORA <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-black/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-yellow-600" />
            <h2 className="text-3xl font-bold mb-6">Garantia de Satisfação</h2>
            <p className="text-xl mb-8">
              Teste por 7 dias ou devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-black/30 p-4 rounded-lg">
                <Lock className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                <p className="text-sm">Compra 100% Segura</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                <p className="text-sm">Pagamento Facilitado</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <Truck className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                <p className="text-sm">Entrega Expressa</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg">
                <Package className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                <p className="text-sm">Embalagem Discreta</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Entrega em embalagem discreta</span>
            </div>
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5" />
              <span>Envio em até 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Suporte via WhatsApp 24/7</span>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;