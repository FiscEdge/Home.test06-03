import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-items">
              <div className="info-item">
                <span className="icon">📧</span>
                <a href="mailto:info@fiscedge.com" className="info-link">
                  info@fiscedge.com
                </a>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <a href="tel:+390212345678" className="info-link">
                  +39 02 123 4567
                </a>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <a 
                  href="https://maps.google.com/?q=Via+Business+123,+Milano,+IT+20100" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  Via Business 123, Milano, IT 20100
                </a>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" />
              </div>
            </div>
            
            <div className="form-group">
              <label>Subject</label>
              <input type="text" />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5"></textarea>
            </div>
            
            <button type="submit" className="send-message-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
