import React, { useState } from 'react';
import { ProductCardProps } from '../types';
import { formatCurrency } from '../utils/format';
import { Truck, ShieldCheck, Clock2 as Clock24, Star } from 'lucide-react';

export function ProductCard({ product }: ProductCardProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const maxQuantity = Math.max(...product.prices.map(p => p.quantity));
  
  const selectedPrice = product.prices.find(p => p.quantity === selectedQuantity);
  const savings = selectedQuantity > 1 
    ? (selectedPrice?.price || 0) - (product.prices[0].price * selectedQuantity)
    : 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
        </div>
        {selectedQuantity > 1 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Economize {formatCurrency(Math.abs(savings))}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-600">5.0 (100+ avaliações)</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-3xl font-bold text-green-600">
                {formatCurrency(selectedPrice?.price || 0)}
              </span>
              {selectedQuantity > 1 && (
                <span className="block text-sm text-gray-500">
                  {formatCurrency((selectedPrice?.price || 0) / selectedQuantity)} cada
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSelectedQuantity(q => Math.max(1, q - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                disabled={selectedQuantity === 1}
              >
                -
              </button>
              <span className="w-8 text-center font-semibold">{selectedQuantity}</span>
              <button
                onClick={() => setSelectedQuantity(q => Math.min(maxQuantity, q + 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
                disabled={selectedQuantity === maxQuantity}
              >
                +
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex flex-col items-center text-center gap-1">
              <Truck className="w-5 h-5 text-green-600" />
              <span>Frete Grátis</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <Clock24 className="w-5 h-5 text-green-600" />
              <span>24h Entrega</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>Garantia</span>
            </div>
          </div>

          <a
            href={selectedPrice?.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 text-center font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
          >
            Comprar Agora
          </a>
          
          <p className="text-center text-sm text-gray-500">
            Pague apenas quando receber
          </p>
        </div>
      </div>
    </div>
  );
}