import React from 'react';
import PricingComponent from '../components/Pricing';
import CTA from '../components/CTA';
import { Check, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start. You can explore all features before committing.'
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.'
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your data remains available for 30 days after cancellation. You can export all your member data at any time, even after cancelling.'
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes, you save 20% when you choose annual billing. That\'s like getting 2+ months free!'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees, ever. You can import your existing member data from spreadsheets or other systems for free.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex) and ACH bank transfers for annual plans.'
  },
  {
    question: 'Can I get a refund?',
    answer: 'We offer a 30-day money-back guarantee on all plans. If you\'re not satisfied, contact us for a full refund.'
  },
  {
    question: 'Do you offer nonprofit or military discounts?',
    answer: 'Yes! We offer 25% off for verified nonprofits and military/veteran-owned studios. Contact us to apply.'
  }
];

const comparisonFeatures = [
  { feature: 'Member management', starter: true, professional: true, enterprise: true },
  { feature: 'Class scheduling', starter: true, professional: true, enterprise: true },
  { feature: 'QR check-in', starter: true, professional: true, enterprise: true },
  { feature: 'Email campaigns', starter: 'Basic', professional: 'Advanced', enterprise: 'Advanced' },
  { feature: 'SMS campaigns', starter: false, professional: true, enterprise: true },
  { feature: 'A/B testing', starter: false, professional: true, enterprise: true },
  { feature: 'Stripe integration', starter: false, professional: true, enterprise: true },
  { feature: 'Lead capture forms', starter: false, professional: true, enterprise: true },
  { feature: 'Analytics dashboard', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom' },
  { feature: 'Multi-location', starter: false, professional: false, enterprise: true },
  { feature: 'API access', starter: false, professional: false, enterprise: true },
  { feature: 'Custom integrations', starter: false, professional: false, enterprise: true },
  { feature: 'Dedicated account manager', starter: false, professional: false, enterprise: true },
  { feature: 'Support', starter: 'Email', professional: 'Priority', enterprise: 'Phone + Email' },
];

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <span className="section-label">Pricing</span>
          <h1>Plans That Grow With You</h1>
          <p>
            Start free, upgrade as your studio grows. No long-term contracts, cancel anytime.
          </p>
        </div>
      </section>

      <PricingComponent />

      <section className="comparison-section">
        <div className="container">
          <h2>Feature Comparison</h2>
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index}>
                    <td>{row.feature}</td>
                    <td>
                      {row.starter === true ? <Check size={18} className="check-icon" /> :
                        row.starter === false ? <span className="dash">—</span> :
                          <span className="text-value">{row.starter}</span>}
                    </td>
                    <td>
                      {row.professional === true ? <Check size={18} className="check-icon" /> :
                        row.professional === false ? <span className="dash">—</span> :
                          <span className="text-value">{row.professional}</span>}
                    </td>
                    <td>
                      {row.enterprise === true ? <Check size={18} className="check-icon" /> :
                        row.enterprise === false ? <span className="dash">—</span> :
                          <span className="text-value">{row.enterprise}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>
                  <HelpCircle size={20} />
                  {faq.question}
                </h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default PricingPage;
