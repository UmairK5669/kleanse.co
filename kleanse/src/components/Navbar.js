import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [overlayActive, setOverlayActive] = useState(false);

  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
  };

  const closeOverlay = () => {
    setOverlayActive(false);
  };

  const handleLinkClick = () => {
    closeOverlay();
  };

  return (
    <div>
      <header className="header">
        <a className="logo" href="#">
          Kleanse Logo
        </a>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Items</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Installation</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#">
          Donate
        </a>
        <p className="menu cta" onClick={toggleOverlay}>
          Menu
        </p>
      </header>
      <div className={`overlay ${overlayActive ? 'overlay--active' : ''}`}>
        <a className="close" onClick={closeOverlay}>
          &times;
        </a>
        <div className="overlay__content">
          <a href="#" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#" onClick={handleLinkClick}>
            Items
          </a>
          <a href="#" onClick={handleLinkClick}>
            Reviews
          </a>
          <a href="#" onClick={handleLinkClick}>
            Installation
          </a>
          <a href="#" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
