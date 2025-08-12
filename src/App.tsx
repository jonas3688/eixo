import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MethodSection from './components/MethodSection';
import ComparisonSection from './components/ComparisonSection';
import PortfolioSection from './components/PortfolioSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Header />
      <main>
        <HeroSection />
        <MethodSection />
        <ComparisonSection />
        <PortfolioSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;