// src/App.js
import './styles.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importing Routes

import HomePage from './HomePage';
import PaymentPage from './PaymentPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
