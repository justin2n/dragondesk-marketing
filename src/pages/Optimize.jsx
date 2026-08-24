import React, { useState } from 'react';
import { Check, ArrowRight, FlaskConical, LayoutTemplate, Users, BarChart3, Bell, Zap } from 'lucide-react';

// The Optimize product runs on its own backend; the Buy button asks it to create
// a Stripe Checkout Session, then redirects the browser to Stripe.
const OPTIMIZE_API = (import.meta.env.VITE_OPTIMIZE_API_URL || 'https://optimize.dragondeskapp.com').replace(/\/$/, '');

const features = [
  { icon: FlaskConical, title: 'A/B & multivariate tests', desc: 'Split traffic across variants and let the winner emerge on real conversions — no code deploys.' },
  { icon: LayoutTemplate, title: 'Promo bars & offer modals', desc: 'Launch promo bars and offer modals as experiences or variants, targeted to the right visitors.' },
  { icon: Users, title: 'Audience targeting', desc: 'Build audiences from behavior and experience signals. Start with a built-in All Traffic audience.' },
  { icon: BarChart3, title: 'Conversion analytics', desc: 'Every variant, promo bar, and modal is measured as a conversion so you always know what works.' },
  { icon: Bell, title: 'Significance alerts', desc: 'Get notified the moment a test reaches statistical significance — no more guessing when to call it.' },
  { icon: Zap, title: 'One tracking snippet', desc: 'Drop a single lightweight snippet on your site and start running experiments in minutes.' },
];

const included = [
  'Unlimited A/B tests',
  'Promo bars & offer modals',
  'Audience builder',
  'Statistical significance detection',
  'Conversion analytics dashboard',
  'Team members & roles',
  'Domain allow-listing',
];

const OptimizePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const startCheckout = async () => {
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${OPTIMIZE_API}/api/billing/public/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.url) throw new Error(data.error || 'Could not start checkout');
      window.location.href = data.url;
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <span className="section-label">DragonDesk: Optimize</span>
          <h1>Turn more visitors into members</h1>
          <p>
            Run A/B tests, promo bars, and offer modals on your website — and know exactly
            what converts. Purpose-built experimentation for studios, at one simple price.
          </p>
        </div>
      </section>

      <section className="comparison-section">
        <div className="container">
          <div className="faq-grid">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="faq-item">
                <h3><Icon size={20} /> {title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <div className="container" style={{ maxWidth: 480 }}>
          <div className="faq-item" style={{ textAlign: 'center' }}>
            <span className="section-label">Simple pricing</span>
            <div style={{ fontSize: '2.75rem', fontWeight: 800, margin: '0.5rem 0' }}>
              $150<span style={{ fontSize: '1rem', fontWeight: 500 }}>/month</span>
            </div>
            <p style={{ marginTop: 0 }}>Everything included. Cancel anytime.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '1.25rem 0', textAlign: 'left' }}>
              {included.map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '0.5rem 0' }}>
                  <Check size={18} className="check-icon" /> {item}
                </li>
              ))}
            </ul>
            <button className="btn-primary btn-full" onClick={startCheckout} disabled={loading}>
              {loading ? 'Redirecting…' : <>Get started <ArrowRight size={16} /></>}
            </button>
            {error && <p style={{ color: '#e5484d', marginBottom: 0 }}>{error}</p>}
            <p style={{ fontSize: 13, opacity: 0.7, marginBottom: 0 }}>
              After checkout we email you an activation link to create your workspace.
              If you cancel, billing stops at the end of your period and your tests and
              results are removed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptimizePage;
