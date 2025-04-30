import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Composition from './components/Composition';
import Pricing from './components/Pricing';
import Wholesale from './components/Wholesale';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolution />
        <HowItWorks />
        <Benefits />
        <Composition />
        <Pricing />
        <Wholesale />
        <Guarantee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;