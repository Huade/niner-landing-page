import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Results from './components/Results';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Industries from './components/Industries';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Results />
      <Industries />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;