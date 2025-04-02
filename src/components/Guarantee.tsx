import React from 'react';
import { ShieldCheck, ThumbsUp, Package } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 sm:p-12 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Compre com Tranquilidade Total
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
              <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">7 Dias de Garantia</h3>
            <p className="text-gray-600">Devolução garantida se não ficar satisfeito</p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Produto Original</h3>
            <p className="text-gray-600">Qualidade e procedência garantidas</p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
              <ThumbsUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800">Satisfação Total</h3>
            <p className="text-gray-600">Mais de 10.000 clientes satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  );
}