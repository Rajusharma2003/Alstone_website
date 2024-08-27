
import './App.css'

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './HomePage/Home';
import About from './Component/About/About';
import Product from './Component/Product/Product';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}


export default App;

