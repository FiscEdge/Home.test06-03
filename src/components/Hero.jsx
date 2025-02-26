import React, { useEffect } from 'react';
import backgroundVideo from '../assets/Streamline Your Business.mp4';
import mobileHeroImage from '../assets/mobile/hero-mobile.png';
import GetStartedButton from './GetStartedButton';
import '../styles/globals.css';

const Hero = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://dashboard-cyan-three-25.vercel.app/';
  };

  // Script di ottimizzazione per prevenire caricamento video su mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      const videoElements = document.querySelectorAll('video.desktop-only');
      videoElements.forEach(video => {
        video.pause();
        video.src = '';
        video.load();
      });
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Video visualizzato solo su desktop */}
        <video 
          className="hero-media desktop-only"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        
        {/* Immagine per dispositivi mobili */}
        <img 
          src={mobileHeroImage} 
          alt="Streamline Your Business" 
          className="hero-media mobile-only"
        />
        
        {/* Contenitore per il testo/contenuto sovrapposto */}
        <div className="hero-content">
          <h1 className="hero-title">Streamline Your Business</h1>
          <p className="hero-subtitle">Doing business has never been easier</p>
          <div className="hero-buttons">
            <GetStartedButton onClick={handleGetStarted} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
