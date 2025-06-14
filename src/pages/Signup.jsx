import React from 'react';
import '../global.css';
import { colors, fonts } from '../theme/theme';

const Signup = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: colors.background,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: fonts.heading,
    }}>
      <img
        src={require('../assets/logo.png')}
        alt="Turo Logo"
        className="logo"
        style={{ marginBottom: '2rem', width: 64, height: 64 }}
      />
      <h2 style={{ color: colors.text, fontWeight: 'bold', marginBottom: '2rem', fontSize: '2rem', letterSpacing: '1px' }}>
        Create your Turo account
      </h2>
      <form style={{
        background: '#181818',
        padding: '2.5rem 2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 32px 0 rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 320,
        gap: '1.5rem',
      }}>
        <input
          type="text"
          placeholder="Name"
          style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #333',
            background: '#222',
            color: colors.text,
            fontFamily: fonts.heading,
            fontWeight: 'bold',
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #333',
            background: '#222',
            color: colors.text,
            fontFamily: fonts.heading,
            fontWeight: 'bold',
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            padding: '1rem',
            borderRadius: '0.5rem',
            border: '1px solid #333',
            background: '#222',
            color: colors.text,
            fontFamily: fonts.heading,
            fontWeight: 'bold',
            fontSize: '1rem',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          style={{
            background: colors.accent,
            color: '#181818',
            fontFamily: fonts.heading,
            fontWeight: 'bold',
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '1rem',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          Sign Up
        </button>
        <div style={{ textAlign: 'center', color: '#aaa', fontSize: '1rem' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: colors.accent, fontWeight: 'bold' }}>
            Log In
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup; 