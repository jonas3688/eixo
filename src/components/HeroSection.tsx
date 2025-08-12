import React from 'react';
import { ArrowRight, Target } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background IX Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 text-9xl font-bebas text-white transform rotate-12">IX</div>
        <div className="absolute bottom-1/4 right-1/4 text-9xl font-bebas text-white transform -rotate-12">IX</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bebas leading-tight mb-6 tracking-wider">
            BASIC PROFILE
            <br />
            <span className="text-brand-primary">DOESN'T SELL.</span>
          </h1>

          {/* Sub-headline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-open-sans font-light text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            We align strategy and creativity to drive your brand's growth.
          </h2>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:contato@eixoacessoria.com.br"
              className="group bg-brand-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Target size={24} />
              Schedule a Strategic Meeting
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Supporting text */}
          <p className="mt-8 text-gray-400 text-sm max-w-2xl mx-auto">
            More than a marketing agency, we are the center that connects your purpose to your market position.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;