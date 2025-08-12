import React from 'react';
import { Check, X, Star } from 'lucide-react';

const ComparisonSection = () => {
  const typicalAgencies = {
    pros: ['Fast delivery'],
    cons: ['Generic strategies', 'Lack of deep analysis', 'Focus on vanity metrics', 'Creative without purpose']
  };

  const eixoAcessoria = {
    pros: ['Deep strategic immersion', 'Creativity guided by data', 'Focus on real business results', 'A true growth partner'],
    cons: ['We are not the cheapest option, because we don\'t deliver superficial results.']
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas tracking-wider mb-6">
            Why Choose <span className="text-brand-primary">EIXO?</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Typical Agencies */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bebas tracking-wide text-gray-300 mb-2">
                Typical Agencies
              </h3>
              <div className="w-16 h-1 bg-gray-600 mx-auto rounded"></div>
            </div>

            {/* Pros */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                <Check size={20} />
                Pros
              </h4>
              <ul className="space-y-3">
                {typicalAgencies.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <Check size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <h4 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                <X size={20} />
                Cons
              </h4>
              <ul className="space-y-3">
                {typicalAgencies.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <X size={16} className="text-red-400 mt-1 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* EIXO Acessoria - Highlighted */}
          <div className="bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 border-2 border-brand-primary rounded-xl p-8 relative overflow-hidden">
            {/* Star badge */}
            <div className="absolute top-4 right-4">
              <Star size={24} className="text-brand-primary fill-current" />
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bebas tracking-wide text-white mb-2">
                EIXO Acessoria
              </h3>
              <div className="w-16 h-1 bg-brand-primary mx-auto rounded"></div>
            </div>

            {/* Pros */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                <Check size={20} />
                Pros
              </h4>
              <ul className="space-y-3">
                {eixoAcessoria.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-3 text-white">
                    <Check size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <h4 className="text-lg font-semibold text-orange-400 mb-4 flex items-center gap-2">
                <X size={20} />
                Reality Check
              </h4>
              <ul className="space-y-3">
                {eixoAcessoria.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-3 text-white">
                    <X size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <a
                href="mailto:contato@eixoacessoria.com.br"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Choose EIXO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;