import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl lg:text-3xl font-bold font-bebas tracking-wider">
              EIXO <span className="text-brand-primary">ACESSORIA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('method')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Method
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              FAQ
            </button>
            <a
              href="mailto:contato@eixoacessoria.com.br"
              className="bg-brand-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Schedule a Meeting
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-secondary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-dark/95 backdrop-blur-md rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('method')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 w-full text-left"
              >
                Method
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 w-full text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 w-full text-left"
              >
                FAQ
              </button>
              <a
                href="mailto:contato@eixoacessoria.com.br"
                className="block bg-brand-primary hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-semibold transition-colors duration-200 text-center mt-4"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;