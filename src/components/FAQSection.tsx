import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What kind of companies do you work with?',
      answer: 'We work with businesses of all sizes that are ready to invest in strategic growth and understand the value of a strong brand position.'
    },
    {
      question: 'What is the first step to start working with EIXO?',
      answer: 'It all starts with a strategic meeting. Click the button on this page, send us an email, and we\'ll schedule a conversation to understand your challenges.'
    },
    {
      question: 'Do you only offer marketing services?',
      answer: 'We are a strategic consultancy. While our execution is in marketing, our core is aligning your entire brand for growth, from positioning to final result.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gray-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas tracking-wider mb-6">
            Have Questions?
            <br />
            <span className="text-brand-primary">We Have Answers</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-brand-primary/30 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
              >
                <h3 className="text-lg lg:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-brand-primary" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="mailto:contato@eixoacessoria.com.br"
            className="inline-flex items-center gap-3 bg-brand-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Get Your Questions Answered
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;