import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const API_URL = import.meta.env.VITE_DRAGONDESK_API_URL || 'http://localhost:5000';

const CTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', studio: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    try {
      const res = await fetch(`${API_URL}/api/public/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone || null,
          studio: formData.studio,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Could not submit. Please email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-content">
            <h2 className="cta-title">Ready to See DragonDesk™ in Action?</h2>
            <p className="cta-subtitle">
              Schedule a personalized demo and we'll show you how DragonDesk™
              can streamline your studio operations in under 30 minutes.
            </p>
            <div className="cta-bullets">
              {[
                'Free personalized demo — no sales pressure',
                'We\'ll help plan your MyStudio migration',
                'Setup and onboarding included',
                'Built for multi-location studios',
              ].map((b, i) => (
                <div key={i} className="cta-bullet">
                  <span className="bullet-dot"></span>
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="cta-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">🎉</div>
                <h3>Got it! We'll be in touch soon.</h3>
                <p>A member of our team will reach out within 1 business day to schedule your demo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cta-form">
                <h3>Request a Demo</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="john@yourstudio.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Studio Name</label>
                    <input
                      type="text"
                      placeholder="Elite BJJ Academy"
                      value={formData.studio}
                      onChange={e => setFormData({...formData, studio: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Anything you'd like us to know?</label>
                  <textarea
                    placeholder="How many locations? Currently using MyStudio? Approximate member count?"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="btn-primary btn-large btn-full" disabled={loading}>
                  {loading ? 'Submitting...' : 'Request My Demo'}
                  {!loading && <ArrowRight size={18} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
