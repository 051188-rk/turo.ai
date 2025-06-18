import React from 'react';
import '../global.css';
import { colors, fonts } from '../theme/theme';

import HeroPhone from './HeroPhone';
import bgImage from '../assets/bg.png';
import mascot from '../assets/mascot1.png';
import mascot2 from '../assets/mascot2.png';
import mascot3 from '../assets/mascot3.png';
import b1 from '../assets/b1.jpeg';
import b2 from '../assets/b2.jpeg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.png';
import b5 from '../assets/b5.jpg';
import b6 from '../assets/b6.jpeg';
import vg from '../assets/vg.png';


const HeroSection = () => (
  <section style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0rem 12rem 4rem 12rem',
    backgroundImage: `url(${b4})`,
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
    The Smartest Way to <span className="highlight" style={{
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


      <div className="ai-wrapper">
      <div className="ai-container">
        <div className="ai-box">
          <textarea
            className="ai-input"
            placeholder="Search with Turo"
            id="ai-input"
          ></textarea>

          <div className="ai-controls">
            <div className="ai-controls-left">
            <label className="ai-upload-btn">
  <input type="file" />
  <svg
    className="ai-icon"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    viewBox="0 0 24 24"
    height="16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
</label>

              <button className="ai-search-btn" type="button">
                <div className="ai-btn-icon">
                  <svg
                    className="text-sky-500"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle r="10" cy="12" cx="12" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="text-sm text-sky-500">Search</span>
              </button>
            </div>

            <div className="ai-controls-right">
              <button className="ai-lightning-btn" type="button">
                <svg
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
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
