import React from 'react';
import { X, ShoppingBag, Percent } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { products } from '../data/products';
import { formatCurrency } from '../utils/format';

interface SpecialOffersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SpecialOffersModal({ isOpen, onClose }: SpecialOffersModalProps) {
  if (!isOpen) return null;

  const specialOffers = products.map(product => ({
    ...product,
    specialPrice: product.prices[0].price * 1, // 20% discount
    originalPrice: product.prices[0].price,
    checkoutUrl: product.prices[0].checkoutUrl
  }));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Ofertas Especiais</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center justify-between bg-red-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <Percent className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-800">
                Desconto extra de 20% válido por:
              </span>
            </div>
            <CountdownTimer />
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {specialOffers.map(offer => (
            <div key={offer.id} className="border rounded-xl p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-semibold text-lg mb-2">{offer.name}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(offer.specialPrice)}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  {formatCurrency(offer.originalPrice)}
                </div>
              </div>

              <a
                href={offer.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 px-4 bg-green-600 text-white rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
              >
                <div className="flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Aproveitar Oferta
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}