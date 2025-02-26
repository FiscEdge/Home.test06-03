import React, { useState } from 'react';
import businessFormationImg from '../assets/Business Formation AI.png';
import financialPlanningImg from '../assets/Financial Planning Suite.png';
import globalExpansionImg from '../assets/Global Expansion Tool.png';
import riskAssessmentImg from '../assets/Risk assessment Engine.png';
import businessFormationServicesImg from '../assets/Business Formation Services.png';
import financialAdvisoryImg from '../assets/Financial Advisory.png';
import globalExpansionConsultingImg from '../assets/Global Expansion Consulting.png';
import marketAnalysisImg from '../assets/Market Analysis.png';
import discussionForumImg from '../assets/discussion forum.png';
import expertNetworkImg from '../assets/expert network .png';
import resourceLibraryImg from '../assets/resources library.png';

const Products = () => {
  const [expandedProducts, setExpandedProducts] = useState(new Set());
  const [expandedServices, setExpandedServices] = useState(new Set());
  const [expandedCommunity, setExpandedCommunity] = useState(new Set());

  const toggleProduct = (productId) => {
    setExpandedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const toggleService = (serviceId) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const toggleCommunity = (communityId) => {
    setExpandedCommunity(prev => {
      const newSet = new Set(prev);
      if (newSet.has(communityId)) {
        newSet.delete(communityId);
      } else {
        newSet.add(communityId);
      }
      return newSet;
    });
  };

  return (
    <div className="content-wrapper">
      <div id="products" className="section products-section">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Discover our suite of AI-powered business solutions</p>
        
        <div className="products-container">
          <div className="product-item">
            <button 
              className="product-title" 
              onClick={() => toggleProduct(1)}
              aria-expanded={expandedProducts.has(1)}
            >
              Business Formation AI
            </button>
            {expandedProducts.has(1) && (
              <div className="product-details animate-slide-down">
                <p>Automated business registration and compliance across jurisdictions</p>
                <img src={businessFormationImg} alt="Business Formation AI" className="product-image" />
              </div>
            )}
          </div>

          <div className="product-item">
            <button 
              className="product-title" 
              onClick={() => toggleProduct(2)}
              aria-expanded={expandedProducts.has(2)}
            >
              Financial Planning Suite
            </button>
            {expandedProducts.has(2) && (
              <div className="product-details animate-slide-down">
                <p>AI-driven financial planning and optimization tools</p>
                <img src={financialPlanningImg} alt="Financial Planning Suite" className="product-image" />
              </div>
            )}
          </div>

          <div className="product-item">
            <button 
              className="product-title" 
              onClick={() => toggleProduct(3)}
              aria-expanded={expandedProducts.has(3)}
            >
              Global Expansion Tool
            </button>
            {expandedProducts.has(3) && (
              <div className="product-details animate-slide-down">
                <p>Market analysis and expansion strategy platform</p>
                <img src={globalExpansionImg} alt="Global Expansion Tool" className="product-image" />
              </div>
            )}
          </div>

          <div className="product-item">
            <button 
              className="product-title" 
              onClick={() => toggleProduct(4)}
              aria-expanded={expandedProducts.has(4)}
            >
              Risk Assessment Engine
            </button>
            {expandedProducts.has(4) && (
              <div className="product-details animate-slide-down">
                <p>Advanced risk analysis and mitigation solutions</p>
                <img src={riskAssessmentImg} alt="Risk Assessment Engine" className="product-image" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section services-section">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive business solutions powered by AI</p>
        
        <div className="services-container">
          <div className="service-item">
            <button 
              className="service-title"
              onClick={() => toggleService(1)}
              aria-expanded={expandedServices.has(1)}
            >
              Business Formation Services
            </button>
            {expandedServices.has(1) && (
              <div className="service-details animate-slide-down">
                <p>Complete business registration and compliance management across multiple jurisdictions</p>
                <img src={businessFormationServicesImg} alt="Business Formation Services" className="service-image" />
              </div>
            )}
          </div>

          <div className="service-item">
            <button 
              className="service-title"
              onClick={() => toggleService(2)}
              aria-expanded={expandedServices.has(2)}
            >
              Financial Advisory
            </button>
            {expandedServices.has(2) && (
              <div className="service-details animate-slide-down">
                <p>Expert financial planning, tax optimization, and funding acquisition support</p>
                <img src={financialAdvisoryImg} alt="Financial Advisory" className="service-image" />
              </div>
            )}
          </div>

          <div className="service-item">
            <button 
              className="service-title"
              onClick={() => toggleService(3)}
              aria-expanded={expandedServices.has(3)}
            >
              Global Expansion Consulting
            </button>
            {expandedServices.has(3) && (
              <div className="service-details animate-slide-down">
                <p>Strategic guidance for international market entry and business scaling</p>
                <img src={globalExpansionConsultingImg} alt="Global Expansion Consulting" className="service-image" />
              </div>
            )}
          </div>

          <div className="service-item">
            <button 
              className="service-title"
              onClick={() => toggleService(4)}
              aria-expanded={expandedServices.has(4)}
            >
              Market Analysis
            </button>
            {expandedServices.has(4) && (
              <div className="service-details animate-slide-down">
                <p>In-depth market research and competitive analysis for informed decision-making</p>
                <img src={marketAnalysisImg} alt="Market Analysis" className="service-image" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section community-section">
        <h2 className="section-title">Community</h2>
        <p className="section-subtitle">Connect with fellow entrepreneurs and industry experts</p>
        
        <div className="community-container">
          <div className="community-item">
            <button 
              className="community-title"
              onClick={() => toggleCommunity(1)}
              aria-expanded={expandedCommunity.has(1)}
            >
              Discussion Forums
            </button>
            {expandedCommunity.has(1) && (
              <div className="community-details animate-slide-down">
                <p>Engage in meaningful discussions with peers about business challenges and opportunities</p>
                <img src={discussionForumImg} alt="Discussion Forums" className="community-image" />
              </div>
            )}
          </div>

          <div className="community-item">
            <button 
              className="community-title"
              onClick={() => toggleCommunity(2)}
              aria-expanded={expandedCommunity.has(2)}
            >
              Expert Network
            </button>
            {expandedCommunity.has(2) && (
              <div className="community-details animate-slide-down">
                <p>Connect with seasoned professionals for mentorship and guidance</p>
                <img src={expertNetworkImg} alt="Expert Network" className="community-image" />
              </div>
            )}
          </div>

          <div className="community-item">
            <button 
              className="community-title"
              onClick={() => toggleCommunity(3)}
              aria-expanded={expandedCommunity.has(3)}
            >
              Resource Library
            </button>
            {expandedCommunity.has(3) && (
              <div className="community-details animate-slide-down">
                <p>Access curated resources, guides, and templates for business success</p>
                <img src={resourceLibraryImg} alt="Resource Library" className="community-image" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
