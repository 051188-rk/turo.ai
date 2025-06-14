import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServiceBentoGrid from '../components/ServiceBentoGrid';
import PricingPlans from '../components/PricingPlans';
import '../global.css';


const Landing = () => {
  return (
    <div style={{ background: '#111', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <main style={{ marginTop: '5.5rem' }}>
        <HeroSection />
        <ServiceBentoGrid />
        <PricingPlans />
      </main>
    </div>
  );
};

export default Landing;
