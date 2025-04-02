import React from 'react';
import { Clock, AlertCircle, Users } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4 mb-12">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-6 h-6 text-red-500" />
          <div>
            <p className="font-bold text-red-800">
              Oferta Relâmpago! Últimas unidades
            </p>
            <div className="flex items-center gap-2 mt-1">
              <Clock className="w-4 h-4 text-red-500" />
              <p className="text-sm text-red-700">
                Promoção válida apenas hoje
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-red-500" />
          <p className="text-sm text-red-700">
            <span className="font-semibold">127 pessoas</span> compraram nas últimas 24h
          </p>
        </div>
      </div>
    </div>
  );
}