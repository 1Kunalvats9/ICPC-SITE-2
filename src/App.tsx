import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Coaches from './components/Coaches';
import Schedule from './components/Schedule';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Schedule />
        <Coaches />
        <Registration />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;