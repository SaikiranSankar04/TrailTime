import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Trail Time</h1>
        <Link to="/login" className="login-link">Login</Link>
        {/* Add other content and sections for the landing page */}
      </header>
    </div>
  );
};

export default LandingPage;
