import React from 'react';
import '../global.css';
import logo from '../assets/logo.png';
import marscot2 from '../assets/mascot2.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
      <div className="footer-logo">
  <img src={logo} alt="Logo" style={{ width: '260px', height: 'auto' }} />
</div>

        <div className="footer-links">
            <div className="fun-stuff">
                <img src={marscot2} alt="Meme" style={{ width: '180px', height: 'auto' }} />
                <div>
              <p> </p>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Notice</a>
              <a href="#">Manage Cookies</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2025 turo.ai. All rights reserved.</p>
        <p>Website by me <i>(obviously)</i> in React JS.</p>
      </div>
      <div className="footer-contact">
        <p>Get in touch</p>
        <h1>support<span>@</span>turo.ai</h1>
      </div>
    </footer>
  );
};

export default Footer;
