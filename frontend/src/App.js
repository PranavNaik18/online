import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './components/Dashboard';
import Settings from './pages/settings';  // If the file is renamed to Settings.js

import AppNavbar from './components/Navbar'; // Import the Navbar component here

const App = () => {
  return (
    <Router>
      <AppNavbar /> {/* Use the Navbar component */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
