import React from 'react';
import './LandingPage.css';  // CSS for the landing page
import logo from '../assets/trailtime-logo.png'; // Ensure this path is correct

const LandingPage = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Trail Time Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <button className="navbar-btn">Browse Listings</button>
          <button className="navbar-btn">Wish Lists</button>
          <button className="navbar-btn">Check Availability</button>
          <button className="navbar-btn">Book Services</button>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="login-box">
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <a href="/forgot-password" className="forgot-password-link">Forgot password?</a>
            </div>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="register-option">
            <p>New? <a href="/register">Continue as guest / Register now!</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
