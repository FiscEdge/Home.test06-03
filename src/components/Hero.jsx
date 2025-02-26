import React from 'react';
import backgroundVideo from '../assets/Streamline Your Business.mp4';
import GetStartedButton from './GetStartedButton';
import '../styles/globals.css';

const Hero = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://dashboard-cyan-three-25.vercel.app/';
  };

  return (
    <section className="hero-section">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 className="hero-title">Streamline Your Business</h1>
        <p className="hero-subtitle">Doing business has never been easier</p>
        <div className="hero-buttons">
          <GetStartedButton onClick={handleGetStarted} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
