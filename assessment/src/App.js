import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
