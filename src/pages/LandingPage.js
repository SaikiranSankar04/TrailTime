import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="hero">
                <div className="container">
                    <h1>Welcome to the Ultimate Tourism Experience</h1>
                    <p>Explore, book, and enjoy the best travel experiences tailored just for you.</p>
                    <Link to="/register" className="btn btn-primary">Get Started</Link>
                </div>
            </header>

            <section className="features">
                <div className="container">
                    <h2>Why Choose Us?</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Discover Amazing Destinations</h3>
                            <p>Explore top tourist attractions and hidden gems across the world.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Plan Your Perfect Trip</h3>
                            <p>Create personalized itineraries and track your travel budget with ease.</p>
                        </div>
                        <div className="col-md-4">
                            <h3>Book Services</h3>
                            <p>Seamless booking for accommodations, adventure activities, and more.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
