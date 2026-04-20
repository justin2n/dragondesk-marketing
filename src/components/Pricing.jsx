import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Studio',
    description: 'Perfect for single-location studios',
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      'Up to 200 members',
      'Lead & trial management',
      'Email campaigns',
      'Class scheduling & QR check-in',
      'Stripe billing integration',
      'Analytics dashboard',
      'MyStudio CSV import',
      'Email support',
    ],
    cta: 'Request Demo',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For studios ready to scale',
    monthlyPrice: 299,
    yearlyPrice: 239,
    features: [
      'Up to 600 members',
      'Everything in Studio',
      'SMS campaigns',
      'A/B testing & personalization',
      'Advanced analytics (ACV, ALTV, Churn)',
      'Social media scheduling',
      'Audience segmentation',
      'Priority support',
    ],
    cta: 'Request Demo',
    popular: true,
  },
  {
    name: 'Multi-Location',
    description: 'For gyms with multiple locations',
    monthlyPrice: 499,
    yearlyPrice: 399,
    features: [
      'Unlimited members',
      'Everything in Pro',
      'Multi-location dashboard',
      'Per-location Stripe accounts',
      'Location-level analytics',
      'Custom program configuration',
      'Dedicated onboarding',
      'Phone + email support',
    ],
    cta: 'Talk to Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. No long-term contracts. Scale up as your studio grows.
          </p>
        </div>

        <div className="pricing-toggle">
          <span className={!isYearly ? 'active' : ''}>Monthly</span>
          <button
            className={`toggle-switch ${isYearly ? 'yearly' : ''}`}
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle yearly billing"
          >
            <span className="toggle-thumb"></span>
          </button>
          <span className={isYearly ? 'active' : ''}>
            Yearly <span className="save-badge">Save 20%</span>
          </span>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                <span className="period">/mo</span>
              </div>
              {isYearly && (
                <p className="billed-yearly">Billed annually</p>
              )}
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}><Check size={16} /><span>{feature}</span></li>
                ))}
              </ul>
              <a href="#contact" className={`plan-cta ${plan.popular ? 'primary' : 'secondary'}`}>
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="pricing-guarantee">
          <div className="guarantee-icon">🛡️</div>
          <div className="guarantee-text">
            <strong>Custom pricing available</strong>
            <span>Large studio chains and special use cases — contact us for a tailored quote.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
