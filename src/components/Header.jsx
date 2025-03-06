import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestisci lo scroll e aggiungi classe per cambiare lo stile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link href="/">
          <img src="/images/Black logo - no background.svg" alt="FiscEdge Logo" className="logo-image" width={150} height={40} />
        </Link>
      </div>
      <button 
        className="menu-button" 
        onClick={() => setIsMenuOpen(true)}
        aria-label="Toggle menu"
      >
        MENU ••
      </button>
      
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="close-button"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
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
            <Link href="https://auth-psi-dun.vercel.app/auth/login" className="sign-in-button">
              Sign In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
