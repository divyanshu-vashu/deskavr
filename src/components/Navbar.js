import React, { useState } from 'react';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log("Toggling menu:", !isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href={'/'} className='brand-link'><h1>DeskAVR</h1></a>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#register">Pre-Register</a></li>
        </ul>
        <div className="navbar-toggle" onClick={handleMenuToggle}>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
