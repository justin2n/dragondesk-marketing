import React from 'react';
import { Link } from 'react-router-dom';
import { MailCheck, ArrowRight } from 'lucide-react';

// Stripe redirects here after a successful checkout. Provisioning + the activation
// email happen server-side via webhook, so this page just tells them to check
// their inbox.
const OptimizeSuccess = () => (
  <div className="pricing-page">
    <section className="pricing-hero">
      <div className="container" style={{ maxWidth: 560, textAlign: 'center' }}>
        <MailCheck size={48} className="check-icon" />
        <h1>Check your email to activate</h1>
        <p>
          Payment received — thank you! We just sent an activation link to your email.
          Click it to create your administrator account and start optimizing.
        </p>
        <p style={{ fontSize: 14, opacity: 0.75 }}>
          The link can take a minute to arrive and is valid for 7 days. Be sure to check
          your spam folder if you don't see it.
        </p>
        <Link to="/optimize" className="btn-secondary" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          Back to Optimize <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

export default OptimizeSuccess;
