import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProfessionalInfo from './pages/ProfessionalInfo';

function App() {
  return (
    <Router>
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/professionalInfo" element={<ProfessionalInfo />} />
      </Routes>
    </div>
    </Router>
  )
}

export default App
