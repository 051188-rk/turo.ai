import React from 'react';
import p1 from '../assets/p1.svg';
import a1 from '../assets/a1.svg';
import ap1 from '../assets/ap1.svg';
import m1 from '../assets/m1.svg';
import n1 from '../assets/n1.svg';
import g1 from '../assets/g1.svg';

const companies = [p1, a1, ap1, m1, n1, g1];

const TrustedCompanies = () => (
  <div style={{ width: '100%', textAlign: 'center', padding: '4rem 1rem' }}>
    <h2 style={{ marginBottom: '2rem', fontWeight: 600, fontSize: '1.5rem', color: '#f1f1f1' }}>
      Trusted by
    </h2>

    <div style={{
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        display: 'inline-flex',
        gap: '4rem',
        animation: 'scrollX 30s linear infinite',
      }}>
        {[...companies, ...companies].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Trusted Company"
            style={{
              height: '40px',
              filter: 'drop-shadow(0 0 6px #4DFF29)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
          />
        ))}
      </div>

      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  </div>
);

export default TrustedCompanies;
