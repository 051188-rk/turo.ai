import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import '../global.css';
import Footer from '../components/Footer';
import BentoGrid from '../components/bentogrid';

const Landing = () => {
  return (
    <div style={{ background: '#111', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <main style={{ marginTop: '5.5rem' }}>
        <HeroSection />
        <Footer />
      </main>
    </div>
  );
};

export default Landing;
