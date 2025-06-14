import React from 'react';
import '../global.css';
import { colors, fonts } from '../theme/theme';

const Profile = () => {
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
      <div style={{
        background: '#181818',
        padding: '2.5rem 2rem',
        borderRadius: '1rem',
        boxShadow: '0 4px 32px 0 rgba(0,0,0,0.12)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 320,
        gap: '1.5rem',
      }}>
        <div style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: '#222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          fontSize: '2.5rem',
          color: colors.accent,
          fontWeight: 'bold',
        }}>
          {/* Placeholder avatar, could be replaced with user image */}
          <span role="img" aria-label="User">👤</span>
        </div>
        <h2 style={{ color: colors.text, fontWeight: 'bold', fontSize: '1.5rem', margin: 0 }}>John Doe</h2>
        <p style={{ color: '#aaa', fontSize: '1.1rem', margin: 0 }}>john.doe@email.com</p>
        <button
          style={{
            background: colors.accent,
            color: '#181818',
            fontFamily: fonts.heading,
            fontWeight: 'bold',
            fontSize: '1.1rem',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '1rem 2.5rem',
            marginTop: '1.5rem',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile; 