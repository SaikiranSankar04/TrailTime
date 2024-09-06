import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import CheckAvailability from './pages/CheckAvailability';
import BudgetTracking from './pages/BudgetTracking'; // Make sure this path is correct


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/check-availability" element={<CheckAvailability />} />
        <Route path="/budget-tracking" element={<BudgetTracking />} />
        
      </Routes>
    </Router>
  );
};

export default App;
