import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Brand */}
          <div className="space-y-4">
            <div className="text-2xl lg:text-3xl font-bebas tracking-wider">
              EIXO <span className="text-brand-primary">ACESSORIA</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              The balance point between strategy and creativity. We are the center where brands align to grow with direction.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('method')}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Method
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
              >
                FAQ
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contato@eixoacessoria.com.br"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail size={18} />
                contato@eixoacessoria.com.br
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} />
                Brasília, DF, Brazil
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 EIXO Acessoria. All rights reserved.
            </p>
            <a
              href="mailto:contato@eixoacessoria.com.br"
              className="bg-brand-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm"
            >
              Let's Talk Strategy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;