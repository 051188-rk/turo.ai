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

const Footer = () => (
  <footer style={{
    background: '#0e0e0e',
    color: '#888',
    textAlign: 'center',
    padding: '2rem',
    fontFamily: fonts.body,
    borderTop: '1px solid #222'
  }}>
    <p>© 2025 AtomAI — Built with ❤️ for faster search</p>
    <div style={{ marginTop: '1rem' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 .55.45 1 1 1v.93zm1-.93v-2c0-.55-.45-1-1-1H8V9.41l5.59 5.59c-.36.19-.76.33-1.18.42zM13 5.07c3.95.49 7 3.85 7 7.93 0 .62-.08 1.21-.21 1.79L15 9v-1c0-.55-.45-1-1-1V5.07z" />
      </svg>
    </div>
  </footer>
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
