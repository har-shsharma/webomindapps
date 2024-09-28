import React, { useState, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    buttonRef.current.click();
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      </div>
      <div className={`navElements ${isMenuOpen ? 'open' : ''}`}>
        <button ref={buttonRef} className="menu-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a onClick={closeMenu}>Products</a></li>
          <li><a onClick={closeMenu}>Industries</a></li>
          <li><a onClick={closeMenu}>Company</a></li>
          <li><a onClick={closeMenu}>Resources</a></li>
        </ul>
        <div className={`button-container ${isMenuOpen ? 'open' : ''}`}>
          <button className={`navbar-button ${isMenuOpen ? 'open' : ''}`}>Schedule Demo &gt;</button>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;
