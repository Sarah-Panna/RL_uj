import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">RecordLabel</div>
      <div className="linkek">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/record">Record</Link>
      </div>
    </div>
  );
};

export default NavBar;
