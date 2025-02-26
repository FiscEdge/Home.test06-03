import React, { useState, useEffect } from 'react';

const GetStartedButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);
  
  // Funzione per generare gli effetti particellari quando il bottone viene premuto
  useEffect(() => {
    if (isPressed) {
      const newSparkles = [];
      for (let i = 0; i < 8; i++) {
        newSparkles.push({
          id: `sparkle-${Date.now()}-${i}`,
          size: Math.random() * 6 + 4,
          angle: (Math.random() * 360 * Math.PI) / 180,
          distance: Math.random() * 80 + 20,
          opacity: 1,
        });
      }
      setSparkles(newSparkles);
      
      // Rimuovi le particelle dopo l'animazione
      const timer = setTimeout(() => {
        setSparkles([]);
      }, 700);
      
      return () => clearTimeout(timer);
    }
  }, [isPressed]);
  
  // Gestisci la posizione del mouse per gli effetti di luce
  const handleMouseMove = (e) => {
    if (!isHovered) return;
    const button = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - button.left,
      y: e.clientY - button.top,
    });
  };

  return (
    <div className="get-started-container">
      <div 
        className={`
          get-started-wrapper
          ${isPressed ? 'scale-pressed' : isHovered ? 'scale-hovered' : ''}
        `}
      >
        {/* Sfondo principale con gradiente */}
        <button
          className={`
            get-started-button
            ${isHovered ? 'hovered' : ''}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsPressed(false);
            setSparkles([]);
          }}
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          onTouchStart={() => setIsPressed(true)}
          onTouchEnd={() => setIsPressed(false)}
          onClick={onClick}
        >
          {/* Testo del bottone */}
          <span className="button-text">Get Started Now</span>
          
          {/* Effetto glow che segue il cursore */}
          {isHovered && (
            <div 
              className="cursor-glow"
              style={{
                left: `${position.x - 64}px`,
                top: `${position.y - 64}px`
              }}
            />
          )}
          
          {/* Effetto shine che scorre da sinistra a destra */}
          {isHovered && (
            <div className="shine-container">
              <div className="shine-effect" />
            </div>
          )}
          
          {/* Bordo luminoso */}
          <div className={`
            glowing-border
            ${isHovered ? 'visible' : ''}
          `}></div>
        </button>
        
        {/* Particelle/scintille che appaiono quando si preme il bottone */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="sparkle"
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              transform: `translate(-50%, -50%) rotate(${sparkle.angle}rad) translateY(-${sparkle.distance}px)`,
              opacity: sparkle.opacity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GetStartedButton;
