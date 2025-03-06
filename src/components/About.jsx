import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Us</h2>
        <p>We are dedicated to providing innovative financial solutions that help businesses grow and succeed. Our comprehensive management platform streamlines operations and enhances efficiency.</p>
        <div className="about-video">
          <video 
            width="100%" 
            controls
            autoPlay
            muted
            loop
          >
            <source src="/videos/FiscEdge Presentazione.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default About;
