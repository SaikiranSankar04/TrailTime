import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/assets/trailtime-logo.png" alt="Trail Time Logo" className="logo" />
      <div className="navbar-links">
        <Link to="/check-availability" className="nav-link">Check Availability</Link>
        <Link to="/budget-tracking" className="nav-link">Budget Tracking</Link>
        {/* Add other links as needed */}
      </div>
      <div className="login-container">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
