import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';
import logo from '../assets/logo.png'; // Adjust path as needed

const Signup = () => {
  return (
    <div className="auth-center">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <form className="form">
        <p className="title">Register</p>
        <p className="message">Signup now and get full access to our app.</p>
        <label>
          Firstname
          <input className="input" type="text" placeholder="Enter your first name" required />
        </label>
        <label>
          Lastname
          <input className="input" type="text" placeholder="Enter your last name" required />
        </label>
        <label>
          Email
          <input className="input" type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Password
          <input className="input" type="password" placeholder="Enter your password" required />
        </label>
        <label>
          Confirm password
          <input className="input" type="password" placeholder="Confirm your password" required />
        </label>
        <button className="submit">Sign Up</button>
        <p className="signin">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
