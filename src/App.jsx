
import './App.css'

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './HomePage/HomePage';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Faucets from './Component/Product/ProductDetails/Faucets/Faucets';
import BathFitting from './Component/Product/ProductDetails/BathFitting';
import AboutCompany from './Component/About/AboutDetails/AboutCompany';
import Achivements from './Component/About/AboutDetails/Achivements';
import Innovations from './Component/About/AboutDetails/Innovations';
import InvestorRelation from './Component/About/AboutDetails/InvestorRelation';



function App() {
  return (

    <>  
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/faucets" element={<Faucets/>} />
      <Route path="/bathFittings" element={<BathFitting/>} />
      <Route path="/about-company" element={<AboutCompany/>} />
      <Route path="/awards-achievements" element={<Achivements/>} />
      <Route path="/innovation" element={<Innovations/>} />
      <Route path="/investor-relations" element={<InvestorRelation/>} />
    </Routes>
  </Router>


</>


  );
}


export default App;

