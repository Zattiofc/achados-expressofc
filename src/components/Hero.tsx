import React, { useState } from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { SpecialOffersModal } from './SpecialOffersModal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-50 to-green-100 rounded-3xl mb-12">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-8">
            Produtos Inovadores para
            <span className="block text-green-600">Transformar Sua Vida</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-600 mb-8">
            Descubra soluções práticas e modernas para seu dia a dia. 
            Qualidade premium, entrega expressa e satisfação garantida!
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>
            <span className="text-gray-600">
              +10.000 clientes satisfeitos
            </span>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out gap-2 hover:scale-105 transform"
          >
            <ShoppingBag className="w-5 h-5" />
            Ver Ofertas Especiais
          </button>
        </div>
      </div>

      <SpecialOffersModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}