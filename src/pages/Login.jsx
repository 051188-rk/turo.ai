import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import logo from '../assets/logo.png'; // Adjust path as needed

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat');
  };
  return (
    <div className="auth-center">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Login</p>
        <p className="message">Welcome back! Login to access your account.</p>
        <label>
          Email
          <input className="input" type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Password
          <input className="input" type="password" placeholder="Enter your password" required />
        </label>
        <button className="submit">Login</button>
        <p className="signin">
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
