import React from 'react';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-black via-secondary to-secondary-light text-white" id="home">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-2 animate-pulse">
            Produto Natural • Aprovado pela ANVISA
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            TRANSFORME SEU <br className="hidden md:block" />
            <span className="text-primary">METABOLISMO</span> E <br className="hidden md:block" />
            <span className="text-primary-light">EMAGREÇA</span> DE FORMA NATURAL
          </h1>
          
          <p className="text-lg md:text-xl opacity-90">
            O suplemento que acelera seu metabolismo, queima gordura e controla seu apetite de forma natural e eficaz.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <CheckCircle size={20} className="text-primary" />
              <span>Resultados em até 30 dias</span>
            </div>
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <CheckCircle size={20} className="text-primary" />
              <span>100% natural e aprovado pela ANVISA</span>
            </div>
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <CheckCircle size={20} className="text-primary" />
              <span>Sem efeitos colaterais</span>
            </div>
          </div>
          
          <div className="pt-4">
            <a 
              href="#precos" 
              className="primary-button mx-auto md:mx-0 text-lg group w-full md:w-auto"
            >
              <span>QUERO EMAGRECER AGORA</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="mt-4 flex items-center justify-center md:justify-start space-x-2 text-sm">
              <Clock size={16} />
              <span>Oferta por tempo limitado:</span>
              <CountdownTimer hours={23} minutes={59} seconds={59} />
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md p-1 rounded-2xl">
            <img 
              src="https://mounjafitblack.com/wp-content/uploads/2024/12/mounja-bg-2.png" 
              alt="Mounja Fit Black" 
              className="rounded-2xl w-full h-auto shadow-2xl transform hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute -right-4 -top-4 bg-amber-500 text-white rounded-lg shadow-lg p-4 transform rotate-3 animate-bounce">
              <div className="text-center font-bold">
                <div className="text-xs">ATÉ</div>
                <div className="text-3xl">30%</div>
                <div className="text-xs">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;