import React from 'react';
import '../global.css';
import { colors, fonts } from '../theme/theme';

import HeroPhone from './HeroPhone';
import bgImage from '../assets/bg.png';
import mascot from '../assets/mascot1.png'; // Make sure this path is correct

const HeroSection = () => (
  <section style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0rem 12rem 4rem 12rem',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
  }}>

    {/* Left: Text Content */}
    <div style={{ maxWidth: '60%', zIndex: 2 }}>
      <h1 style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        fontSize: '3.5rem',
        lineHeight: 1.1,
        margin: 0,
        maxWidth: '900px',
      }}>
        The Smartest Way to <span style={{
          background: '#4dff29',
          color: '#181818',
          padding: '0.2em 0.5em',
          borderRadius: '0.25em',
          display: 'inline-block',
          transform: 'rotate(-2deg)'
        }}>Search</span> Everything.
      </h1>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.35rem',
        margin: '2rem 0 2.5rem 0',
        color: '#ccc',
        maxWidth: '600px',
      }}>
        Use AI to find anything, anywhere — instantly. Relevant results in milliseconds.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#search" style={{
          background: '#fff',
          color: '#181818',
          borderRadius: '0.5rem',
          padding: '1rem 2.5rem',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s ease',
        }} className="hover-pop">
          Search Now
        </a>
      </div>
    </div>

    {/* Right: Phone + Mascot */}
    <div style={{
  position: 'relative',
  width: 'fit-content',
  transform: 'translateY(-50px) scale(1.2)',
  zIndex: 1,
}}>
  {/* Mascot - Larger size, side of the phone, slightly lower */}
  <img
    src={mascot}
    alt="Mascot"
    style={{
      position: 'absolute',
      left: '-190px',           // push it to the left of the phone
      top: '200px',              // drop it down slightly
      width: '260px',           // bigger mascot
      filter: 'drop-shadow(0 0 16px #4dff29)',
      animation: 'float 4s ease-in-out infinite',
      zIndex: 2,
    }}
  />

  {/* Phone Component */}
  <HeroPhone />
</div>


    {/* Floating animation for mascot */}
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `}</style>
  </section>
);

export default HeroSection;
