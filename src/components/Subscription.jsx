import React from 'react';
import Link from 'next/link';

const Subscription = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: 'Free',
      features: [
        'Access to the core platform features',
        'Basic AI chatbot for general FAQs'
      ]
    },
    {
      name: 'Pro Plan',
      price: '€19.99/month',
      features: [
        'Full AI automation capabilities',
        'Real-time business setup guidance',
        'Tax optimization and financial planning',
        'AI-powered business model generation'
      ]
    },
    {
      name: 'Enterprise Plan',
      price: 'Custom Pricing',
      features: [
        'White-label AI chatbot integration for banks, startup accelerators, and legal firms',
        'API licensing for AI-driven automation',
        'Custom B2B solutions and integrations'
      ]
    }
  ];

  return (
    <section id="subscription" className="subscription-section">
      <h2 className="section-title">Subscription Plans</h2>
      <p className="section-description"></p>
      
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className="plan-content">
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <span className="price">{plan.price}</span>
              </div>
              
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="plan-cta">
              <Link href="https://auth-psi-dun.vercel.app/auth/login" className="plan-button">
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscription;
