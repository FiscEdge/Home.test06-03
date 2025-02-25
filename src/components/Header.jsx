import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">FiscEdge</Link>
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
            <div className="newsletter-signup">
              <h3>Subscribe to our newsletter</h3>
              <div className="email-input">
                <input type="email" placeholder="Your email" />
                <button type="button" className="submit-arrow">→</button>
              </div>
            </div>
            <Link to="/auth" className="sign-in-button">
              Sign In/Sign Up →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
