import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const screenshots = [
  {
    src: '/screenshots/dashboard.png',
    label: 'Dashboard',
    caption: 'Real-time member stats, program breakdowns, and growth analytics — all at a glance.',
  },
  {
    src: '/screenshots/optimize.png',
    label: 'Optimize',
    caption: 'Run A/B tests on any page with a live visual editor. Let data drive your conversions.',
  },
  {
    src: '/screenshots/engage.png',
    label: 'Engage',
    caption: 'Build and send targeted email campaigns to the right members at the right time.',
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => goTo((active + 1) % screenshots.length), 5000);
    return () => clearInterval(timer);
  }, [active]);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 200);
  };

  const prev = () => goTo((active - 1 + screenshots.length) % screenshots.length);
  const next = () => goTo((active + 1) % screenshots.length);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Built exclusively for Martial Arts Studios
          </div>

          <h1 className="hero-title">
            The CRM Built for
            <br /><span className="highlight">Martial Arts</span> Studios
          </h1>

          <p className="hero-subtitle">
            Manage leads, trialers, and members. Automate your marketing. Track billing.
            Monitor attendance. All in one platform — so you can focus on teaching, not admin.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <CheckCircle size={18} />
              <span>Lead → Trialer → Member tracking</span>
            </div>
            <div className="hero-feature">
              <CheckCircle size={18} />
              <span>Per-location Stripe billing</span>
            </div>
            <div className="hero-feature">
              <CheckCircle size={18} />
              <span>MyStudio CSV migration</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary btn-large">
              Request a Demo
              <ArrowRight size={20} />
            </a>
            <a href="#features" className="btn-video">
              See All Features
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="screenshot-carousel">
            <div className="screenshot-tabs">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  className={`screenshot-tab ${active === i ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className={`screenshot-frame ${animating ? 'fade-out' : 'fade-in'}`}>
              <img
                src={screenshots[active].src}
                alt={screenshots[active].label}
                className="screenshot-img"
              />
              <div className="screenshot-nav">
                <button className="screenshot-arrow" onClick={prev} aria-label="Previous">
                  <ChevronLeft size={20} />
                </button>
                <p className="screenshot-caption">{screenshots[active].caption}</p>
                <button className="screenshot-arrow" onClick={next} aria-label="Next">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="screenshot-dots">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  className={`screenshot-dot ${active === i ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
