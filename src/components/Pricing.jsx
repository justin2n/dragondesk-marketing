import React, { useState } from 'react';
import { Check, ArrowRight, Building2, Globe, Award, Trophy, GraduationCap, Shield } from 'lucide-react';

const singlePlans = [
  {
    name: 'White Belt',
    belt: 'white',
    description: 'Core functionality for growing studios',
    price: 199,
    features: [
      'Member management (leads, trials, members)',
      'Class scheduling & QR check-in',
      'Stripe billing integration',
      'MyStudio CSV import',
      'Email campaigns',
      'Analytics dashboard',
      'Lead form embeds',
      'Email support',
    ],
    cta: 'Request Demo',
    popular: false,
  },
  {
    name: 'Blue Belt',
    belt: 'blue',
    description: 'True lifecycle model with advanced marketing',
    price: 399,
    features: [
      'Everything in White Belt',
      'SMS campaigns',
      'A/B testing & personalization',
      'Audience segmentation',
      'Social media scheduling',
      'Automated lifecycle workflows',
      'Churn prediction & retention tools',
      'Priority support',
    ],
    cta: 'Request Demo',
    popular: true,
  },
  {
    name: 'Black Belt',
    belt: 'black',
    description: 'Advanced business intelligence & analytics',
    price: 599,
    features: [
      'Everything in White & Blue Belt',
      'Advanced BI analytics dashboard',
      'ACV, ALTV & revenue forecasting',
      'Custom reporting',
      'Cohort analysis',
      'Dedicated onboarding',
      'Phone + priority support',
      'Early access to new features',
    ],
    cta: 'Request Demo',
    popular: false,
  },
];

const multiPlans = [
  {
    name: 'Master',
    belt: 'master',
    description: 'Core functionality across all locations',
    price: 599,
    features: [
      'Everything in Single Location Black Belt',
      'Multi-location dashboard',
      'Per-location Stripe accounts',
      'Location-level analytics',
      'Unified member database',
      'Cross-location reporting',
      'Dedicated onboarding',
      'Phone + email support',
    ],
    cta: 'Request Demo',
    popular: false,
  },
  {
    name: 'Grand Master',
    belt: 'grandmaster',
    description: 'Full lifecycle model + expanded services',
    price: 999,
    features: [
      'Everything in Master',
      'Advanced multi-location marketing',
      'Expanded service offerings',
      'Cross-location audience segments',
      'Franchise-level analytics',
      'Custom program configuration',
      'Priority multi-location support',
      'Quarterly business reviews',
    ],
    cta: 'Request Demo',
    popular: true,
  },
  {
    name: 'Professor',
    belt: 'professor',
    description: 'Enterprise-grade with custom development',
    price: null,
    features: [
      'Everything in Grand Master',
      'Custom API development',
      'White-label options',
      'Advanced custom analytics',
      'Dedicated engineering support',
      'SLA guarantees',
      'Custom integrations',
      'Executive business reviews',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const beltConfig = {
  white:       { icon: Award,          label: 'White Belt' },
  blue:        { icon: Award,          label: 'Blue Belt' },
  black:       { icon: Award,          label: 'Black Belt' },
  master:      { icon: Trophy,         label: 'Master' },
  grandmaster: { icon: Trophy,         label: 'Grand Master' },
  professor:   { icon: GraduationCap,  label: 'Professor' },
};

const BeltBadge = ({ belt }) => {
  const { icon: Icon, label } = beltConfig[belt] || { icon: Award, label: belt };
  return (
    <span className={`belt-badge belt-${belt}`}>
      <Icon size={12} style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
      {label}
    </span>
  );
};

const Pricing = () => {
  const [isMulti, setIsMulti] = useState(false);
  const plans = isMulti ? multiPlans : singlePlans;

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Pricing</span>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. No long-term contracts. Scale as your studio grows.
          </p>
        </div>

        <div className="pricing-location-toggle">
          <button
            className={`location-tab ${!isMulti ? 'active' : ''}`}
            onClick={() => setIsMulti(false)}
          >
            <Building2 size={18} />
            Single Location
          </button>
          <button
            className={`location-tab ${isMulti ? 'active' : ''}`}
            onClick={() => setIsMulti(true)}
          >
            <Globe size={18} />
            Multi Location
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="plan-header">
                <BeltBadge belt={plan.belt} />
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="plan-price">
                {plan.price ? (
                  <>
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/mo</span>
                  </>
                ) : (
                  <span className="amount-custom">Custom</span>
                )}
              </div>
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
          <div className="guarantee-icon"><Shield size={28} /></div>
          <div className="guarantee-text">
            <strong>No contracts. Cancel anytime.</strong>
            <span>All plans include free onboarding and MyStudio migration support.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
