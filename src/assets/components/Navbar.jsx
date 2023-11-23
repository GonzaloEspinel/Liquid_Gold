// eslint-disable-next-line no-unused-vars
import React from 'react';
import './nav.css'
import logo from '../img/logo_oroil.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
