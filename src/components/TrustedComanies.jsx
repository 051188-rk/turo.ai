import React from 'react';
import p1 from '../assets/p1.svg';
import a1 from '../assets/a1.svg';
import ap1 from '../assets/ap1.svg';
import m1 from '../assets/m1.svg';
import n1 from '../assets/n1.svg';
import g1 from '../assets/g1.svg';

const companies = [p1, a1, ap1, m1, n1, g1];

const TrustedCompanies = () => {
  return (
    <div style={{
      width: '100%',
      textAlign: 'center',
      padding: '4rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h2 style={{
        marginBottom: '2rem',
        fontWeight: 600,
        fontSize: '1.5rem',
        color: '#f1f1f1'
      }}>
        Trusted by
      </h2>

      <div style={{
        width: '100%',
        maxWidth: '1200px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div className="company-slider" style={{
          display: 'flex',
          gap: '4rem',
          animation: 'slideCompanies 24s ease-in-out infinite',
        }}>
          {[...companies, ...companies].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Trusted Company"
              style={{
                height: '70px',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
            />
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideCompanies {
          0% { transform: translateX(0); }
          10% { transform: translateX(0); }
          20% { transform: translateX(-16.66%); }
          30% { transform: translateX(-16.66%); }
          40% { transform: translateX(-33.33%); }
          50% { transform: translateX(-33.33%); }
          60% { transform: translateX(-50%); }
          70% { transform: translateX(-50%); }
          80% { transform: translateX(-66.66%); }
          90% { transform: translateX(-66.66%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default TrustedCompanies;
