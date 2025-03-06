import React, { useEffect, useState } from 'react';
import GetStartedButton from './GetStartedButton';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleGetStarted = () => {
    window.location.href = 'https://auth-psi-dun.vercel.app/auth/login';
  };

  // Gestione responsive e ottimizzazione caricamento video
  useEffect(() => {
    // Funzione per controllare le dimensioni dello schermo
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verifica dimensioni iniziali
    checkScreenSize();
    
    // Aggiungi event listener per gestire il resize della finestra
    window.addEventListener('resize', checkScreenSize);
    
    // Ottimizzazione video su mobile
    if (isMobile) {
      const desktopVideos = document.querySelectorAll('video.desktop-only');
      desktopVideos.forEach(video => {
        video.pause();
        video.src = '';
        video.load();
      });
    }

    // Rimuovi event listener al cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isMobile]);

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
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/Streamline Your Business.mp4" type="video/mp4" />
        </video>
        
        {/* Video per dispositivi mobili */}
        <video 
          src="/images/mobile/Streamline Your Business.mp4" 
          alt="Streamline Your Business" 
          className="hero-media mobile-only"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/mobile/hero-poster-mobile.jpg"
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
