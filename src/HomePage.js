// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Payment Gateway</h1>
      <Link to="/payment">
        <button className="button">Proceed to Payment</button>
      </Link>
    </div>
  );
}

export default HomePage;
