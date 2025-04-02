import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { SocialProof } from './components/SocialProof';
import { UrgencyBanner } from './components/UrgencyBanner';
import { LivePurchaseNotification } from './components/LivePurchaseNotification';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { products } from './data/products';
import { Truck, ShieldCheck, Clock2 as Clock24, CreditCard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
        <UrgencyBanner />
        <SocialProof />
        
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
            Produtos Exclusivos com Preços Imbatíveis
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-lg">
            Aproveite nossas ofertas especiais e transforme seu dia a dia com produtos 
            de alta qualidade. Entrega expressa para todo Brasil!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Por que Escolher a Achadinhos Express?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">Frete Grátis</h3>
              <p className="text-gray-600">Entregamos em todo o Brasil sem custo adicional em até 24h</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Clock24 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">Entrega Express</h3>
              <p className="text-gray-600">Receba em até 24 horas após a confirmação do pedido</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">Garantia Total</h3>
              <p className="text-gray-600">7 dias de garantia incondicional de satisfação</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-4 p-6 rounded-xl hover:bg-green-50 transition-colors">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">Pagamento Seguro</h3>
              <p className="text-gray-600">Pague apenas quando receber seu produto em casa</p>
            </div>
          </div>
        </section>

        <Guarantee />
        <FAQ />
      </main>

      <LivePurchaseNotification />
    </div>
  );
}

export default App;