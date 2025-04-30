import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8" id="footer">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Leaf size={24} className="text-primary mr-2" />
              <h2 className="text-xl font-bold">
                <span className="text-white">Mounja</span>{' '}
                <span className="text-primary">Fit</span>{' '}
                <span className="text-amber-400">Black</span>
              </h2>
            </div>
            <p className="text-gray-400 mb-4">
              Suplemento natural para emagrecimento, com fórmula exclusiva que acelera o metabolismo, queima gordura e controla o apetite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 17.5C7.17 17.5 6.5 16.83 6.5 16C6.5 15.17 7.17 14.5 8 14.5C8.83 14.5 9.5 15.17 9.5 16C9.5 16.83 8.83 17.5 8 17.5ZM9.5 10H6.5V8H14.5V10H9.5V10ZM15.5 17.5C14.67 17.5 14 16.83 14 16C14 15.17 14.67 14.5 15.5 14.5C16.33 14.5 17 15.17 17 16C17 16.83 16.33 17.5 15.5 17.5ZM17.5 10V8H18.5C19.33 8 20 7.33 20 6.5C20 5.67 19.33 5 18.5 5H15.5V10H17.5Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.94 5.5 18.5 6.06 18.5 6.75C18.5 7.44 17.94 8 17.25 8C16.56 8 16 7.44 16 6.75C16 6.06 16.56 5.5 17.25 5.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#precos" className="text-gray-400 hover:text-white transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#revenda" className="text-gray-400 hover:text-white transition-colors">
                  Revenda
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Envio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">achadinhosexpressofc@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">(47) 99555-8105</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">São Paulo, SP - Brasil</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <div className="inline-block bg-green-900/50 backdrop-blur-md p-3 rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/5913344/pexels-photo-5913344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Selo ANVISA" 
                  className="h-12"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mounja Fit Black. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Este produto é um suplemento alimentar. Seu uso não substitui uma alimentação equilibrada e seu efeito está diretamente relacionado à prática de exercícios físicos e hábitos de vida saudáveis. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;