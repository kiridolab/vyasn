import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ForFarmers from './components/ForFarmers';
import ForBuyers from './components/ForBuyers';
import Technology from './components/Technology';
import DemoPrototype from './components/DemoPrototype';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <HowItWorks />
      <ForFarmers />
      <ForBuyers />
      <Technology />
      <DemoPrototype />
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default App;