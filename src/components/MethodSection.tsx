import React from 'react';
import { Target, BarChart3, TrendingUp } from 'lucide-react';

const MethodSection = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Strategic Brand Alignment',
      description: 'We start by connecting with your brand\'s purpose, aligning its essence with its market positioning to build a solid foundation.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Creative',
      description: 'Guided by data, moved by ideas. We find what makes you unique and transform it into campaigns with real impact and consistency.'
    },
    {
      icon: TrendingUp,
      title: 'Performance & Growth',
      description: 'We are the alignment that drives growth. We structure, direct, and move brands with strategy, innovation, and clarity to achieve tangible results.'
    }
  ];

  return (
    <section id="method" className="py-20 lg:py-32 relative">
      {/* Background IX Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bebas text-white">IX</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bebas tracking-wider mb-6">
            The EIXO Method:
            <br />
            <span className="text-brand-primary">Your Brand's Growth Axis</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            More than a marketing agency, we are the center that connects your purpose to your market position. 
            We work based on three fundamental pillars:
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-brand-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-brand-primary/20 rounded-xl flex items-center justify-center group-hover:bg-brand-primary/30 transition-colors duration-300">
                  <pillar.icon size={32} className="text-brand-primary" />
                </div>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-bebas tracking-wide mb-4 text-white">
                {pillar.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {pillar.description}
              </p>

              {/* Pillar number */}
              <div className="absolute top-4 right-4 opacity-20 text-4xl font-bebas text-brand-primary">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="mailto:contato@eixoacessoria.com.br"
            className="inline-flex items-center gap-3 bg-brand-secondary hover:bg-brand-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Start Your Strategic Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;