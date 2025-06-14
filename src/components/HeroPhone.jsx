import React from 'react';
import './HeroPhone.css';
import defaultImage from '../assets/logo2.png';    // Initial image
import bottomImage from '../assets/logo.png';    // Image below "Join"

const HeroPhone = () => {
  return (
    <div className="card">
      <div className="btn1"></div>
      <div className="btn2"></div>
      <div className="btn3"></div>
      <div className="btn4"></div>

      <div className="card-int">
        <div className="hello">
          <img src={defaultImage} alt="Default" className="default-image" />
          
          <div className="hover-content">
            <img src={bottomImage} alt="Bottom" className="bottom-image" />
          </div>
        </div>
      </div>

      <div className="top">
        <div className="camera"><div className="int"></div></div>
        <div className="speaker"></div>
      </div>
    </div>
  );
};

export default HeroPhone;
