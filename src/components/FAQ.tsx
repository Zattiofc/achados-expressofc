import React from 'react';
import { HelpCircle } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: 'Quanto tempo demora para entregar?',
      answer: 'Realizamos entregas expressas em até 24 horas para todo o Brasil, sem custo adicional.'
    },
    {
      question: 'Como funciona a garantia?',
      answer: 'Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos seu dinheiro.'
    },
    {
      question: 'Como é feito o pagamento?',
      answer: 'Você só paga quando receber o produto em casa. Aceitamos todas as formas de pagamento.'
    },
    {
      question: 'Os produtos são originais?',
      answer: 'Sim, todos os produtos são 100% originais com garantia de fábrica e procedência.'
    }
  ];

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg mb-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <HelpCircle className="w-8 h-8 text-green-600" />
          <h2 className="text-3xl font-bold text-gray-800">
            Dúvidas Frequentes
          </h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}