import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, CheckCircle, FlaskConical, LayoutTemplate,
  Users, BarChart3, Bell, Zap,
} from 'lucide-react';
import OptimizeCheckoutButton from '../components/OptimizeCheckoutButton';
import CTA from '../components/CTA';

// DragonDesk: Optimize leads the homepage — it is the product a studio can buy
// and start using the same day, without a demo call. The full studio platform
// keeps its own pitch at /platform, linked from the handoff section below.

const capabilities = [
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

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              DragonDesk: Optimize
            </div>

            <h1 className="hero-title">
              Turn more visitors
              <br />into <span className="highlight">customers</span>
            </h1>

            <p className="hero-subtitle">
              Run A/B tests, promo bars, and offer modals on your studio's website — and know
              exactly what converts. Purpose-built experimentation, live in minutes, at one
              simple price.
            </p>

            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle size={18} />
                <span>No code deploys — edit and test visually</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={18} />
                <span>Know when a test is actually conclusive</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={18} />
                <span>$150/month, cancel anytime</span>
              </div>
            </div>

            <div className="hero-cta">
              <OptimizeCheckoutButton label="Get started — $150/mo" className="btn-primary btn-large" />
              <Link to="/optimize" className="btn-video">
                See how it works
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="screenshot-frame fade-in">
              <img
                src="/screenshots/optimize.png"
                alt="DragonDesk: Optimize dashboard"
                className="screenshot-img"
              />
              <div className="screenshot-nav">
                <p className="screenshot-caption">
                  Run A/B tests on any page with a live visual editor. Let data drive your conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What you get</span>
            <h2 className="section-title">Everything you need to test and convert</h2>
            <p className="section-subtitle">
              Built for studios, not for engineering teams. Launch an experiment, watch real
              conversions, and ship the winner.
            </p>
          </div>

          <div className="features-grid">
            {capabilities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={24} />
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-description">{desc}</p>
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
            <OptimizeCheckoutButton />
            <p style={{ fontSize: 13, opacity: 0.7, marginBottom: 0 }}>
              After checkout we email you an activation link to create your workspace.
            </p>
          </div>
        </div>
      </section>

      {/* Handoff to the full studio platform, which keeps its own pitch. */}
      <section className="migration-section">
        <div className="container">
          <div className="migration-inner">
            <span className="migration-badge">Running a whole studio?</span>
            <h2 className="migration-title">
              DragonDesk: The Full Platform for Martial Arts Studios
            </h2>
            <p className="migration-subtitle">
              Optimize is one part of DragonDesk. The full platform runs the whole studio —
              members, billing, attendance, and marketing — built exclusively for martial arts.
            </p>

            <div className="migration-features">
              <div className="migration-feature">
                <Check size={18} />
                <span>Lead → Trialer → Member tracking</span>
              </div>
              <div className="migration-feature">
                <Check size={18} />
                <span>Per-location Stripe billing</span>
              </div>
              <div className="migration-feature">
                <Check size={18} />
                <span>Attendance, belts & program tracking</span>
              </div>
              <div className="migration-feature">
                <Check size={18} />
                <span>Email & SMS campaigns built in</span>
              </div>
            </div>

            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <Link to="/platform" className="btn-primary btn-large">
                Explore the full platform
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carries id="contact" — the target of every "Request Demo" link in the
          navbar and footer, which would otherwise be dead on this page. */}
      <CTA />
    </>
  );
};

export default Home;
