import React from 'react';
import { Link } from 'react-router-dom';
import mainImage from '../assets/immagine principale.png';
import '../styles/globals.css';

const Hero = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://dashboard-cyan-three-25.vercel.app/';
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Streamline Your Business</h1>
        <p className="hero-description">
          Simplify your financial operations with our comprehensive management solution.
        </p>
        <div className="hero-buttons">
          <button onClick={handleGetStarted} className="get-started-button">
            Get Started Now
          </button>
          <Link to="/how-it-works" className="see-how-it-works">
            See How It Works
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={mainImage} alt="City skyline" />
      </div>
    </section>
  );
};

export default Hero;
