import React from 'react';
import { MessageSquare, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="section bg-white" id="contato">
      <div className="container-custom">
        <h2 className="section-title">Fale Conosco</h2>
        <p className="section-subtitle text-gray-700">
          Estamos à disposição para tirar suas dúvidas e ajudar em sua jornada
        </p>
        
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Envie sua mensagem</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  placeholder="Digite seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  placeholder="Digite seu e-mail"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="duvida">Dúvida sobre o produto</option>
                  <option value="pedido">Informações sobre pedido</option>
                  <option value="revenda">Revenda/Atacado</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  placeholder="Digite sua mensagem"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="primary-button w-full justify-center"
                >
                  <MessageSquare size={18} className="mr-2" />
                  ENVIAR MENSAGEM
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de contato</h3>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone size={24} className="text-green-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                  <p className="text-gray-700">Atendimento rápido e personalizado</p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center mt-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (11) 99999-9999
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-green-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">E-mail</h4>
                  <p className="text-gray-700">Para dúvidas e suporte</p>
                  <a 
                    href="mailto:contato@mounjafitblack.com" 
                    className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center mt-1"
                  >
                    contato@mounjafitblack.com
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock size={24} className="text-green-600" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-700">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-4">Perguntas frequentes</h4>
              <p className="text-gray-700 mb-4">
                Muitas dúvidas podem ser esclarecidas em nossa seção de perguntas frequentes.
              </p>
              <a 
                href="#faq" 
                className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center"
              >
                Ver perguntas frequentes
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;