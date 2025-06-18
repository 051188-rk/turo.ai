import React from 'react';
import { Link } from 'react-router-dom'; // <-- Routing component
import '../global.css';

const navLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Services', href: '/services' },
  { label: 'Search', href: '/search' },
];

const Navbar = () => {
  return (
    <nav
      style={{
        width: '100%',
        backdropFilter: 'blur(16px)',
        background: 'rgba(15, 15, 15, 0.4)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem',
        height: '72px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
        borderRadius: '0 0 1rem 1rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
      className="poppins"
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
        <img
          src={require('../assets/logo.png')}
          alt="Logo"
          className="logo"
          style={{ width: 160, height: 160, marginRight: '1.2rem', objectFit: 'contain' }}
        />
      </div>

      {/* Centered Nav Links */}
      <div
        style={{
          display: 'flex',
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              textDecoration: 'none',
              position: 'relative',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.3rem',
              transition: 'color 0.3s ease',
            }}
            className="poppins nav-underline"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Login Button Only */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: '2.5rem' }}>
        <Link
          to="/login"
          style={{
            background: 'linear-gradient(135deg, #4DFF29, #9FFF62)',
            color: '#181818',
            fontWeight: 700,
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 2rem',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            marginRight: '2rem',
          }}
          className="poppins login-popout"
        >
          Login
        </Link>
      </div>

      <style>{`
        .nav-underline {
          display: inline-block;
          position: relative;
        }

        .nav-underline::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 3px;
          bottom: -4px;
          left: 0;
          background-color: #4DFF29;
          transition: width 0.3s ease;
        }

        .nav-underline:hover::after {
          width: 100%;
        }

        .nav-underline:hover {
          color: #4DFF29;
        }

        .login-popout:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(77, 255, 41, 0.35);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
