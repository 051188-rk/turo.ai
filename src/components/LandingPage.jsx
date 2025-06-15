import React from 'react';
import HeroSection from './HeroSection';
import ServiceBentoGrid from './ServiceBentoGrid';
import PricingPlans from './PricingPlans';
import '../global.css';
import TrustedCompanies from '../components/TrustedCompanies';
import MascotRow from '../components/MascotRow';
import Footer from '../components/Footer';

// Optional: include for any global styling
import { fonts } from '../theme/theme';

// Company logos
<TrustedCompanies />

const MascotRow = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '4rem 2rem',
    alignItems: 'center'
  }}>
    {[mascot1, mascot2, mascot3].map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`Mascot ${i + 1}`}
        style={{
          width: '100px',
          filter: 'drop-shadow(0 0 10px #4dff29)',
          animation: 'float 4s ease-in-out infinite',
        }}
      />
    ))}
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `}</style>
  </div>
);


const LandingPage = () => (
  <>
    <HeroSection />
    <TrustedCompanies />
    <ServiceBentoGrid />
    <MascotRow />
    <PricingPlans />
    <Footer />
  </>
);

export default LandingPage;
