import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../Black logo - no background.svg';
import '../styles/globals.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt="FiscEdge Logo" className="logo-image" />
        </Link>
      </div>
      <button 
        className="menu-button" 
        onClick={() => setIsMenuOpen(true)}
        aria-label="Toggle menu"
      >
        MENU ••
      </button>
      {isMenuOpen && (
        <div className="menu-overlay" style={{ right: 0, left: 'auto' }}>
          <button 
            className="close-button new-style"
            onClick={() => setIsMenuOpen(false)}
          >
            CLOSE ••
          </button>
          <nav className="menu-content">
            <ul>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>ABOUT US</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>OUR PRODUCTS, SERVICES & COMMUNITY</a></li>
              <li><a href="#subscription" onClick={(e) => handleNavClick(e, 'subscription')}>SUBSCRIPTION</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>CONTACT</a></li>
            </ul>
            <div className="menu-cta">
              <a href="https://dashboard-cyan-three-25.vercel.app/" className="sign-in-button">
                Sign In
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
