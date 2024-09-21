// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Order from './components/Order/Order';
import { CartProvider } from './CartContext';

const App = () => (
  <Router>
    <CartProvider>
      <Navbar />
      <Routes>
      
        <Route path="/order" element={<Order />} />
      </Routes>
    </CartProvider>
  </Router>
);

export default App;
