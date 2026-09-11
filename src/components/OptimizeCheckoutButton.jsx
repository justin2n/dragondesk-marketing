import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// The Optimize product runs on its own backend; this asks it to create a Stripe
// Checkout Session, then redirects the browser to Stripe. Shared by the Optimize
// page and the homepage so the checkout call and its error handling live in one
// place rather than being duplicated per entry point.
const OPTIMIZE_API = (import.meta.env.VITE_OPTIMIZE_API_URL || 'https://optimize.dragondeskapp.com').replace(/\/$/, '');

const OptimizeCheckoutButton = ({ label = 'Get started', className = 'btn-primary btn-full' }) => {
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
      // fetch() rejects with a TypeError when the request never reached the
      // server at all — unresolvable host, refused connection, or a CORS block.
      // Its message ("Failed to fetch") is meaningless to a buyer and hides a
      // misconfiguration from us, so name both sides of it.
      const isNetworkFailure = err instanceof TypeError;
      if (isNetworkFailure) {
        console.error(
          `[checkout] could not reach ${OPTIMIZE_API}. Check that the host resolves and that this ` +
          `origin (${window.location.origin}) is in the Optimize app's ALLOWED_ORIGINS.`,
          err,
        );
      }
      setError(
        isNetworkFailure
          ? "We couldn't reach our checkout service. Please try again in a moment — if it keeps happening, email support@dragondeskapp.com and we'll get you set up."
          : err.message || 'Something went wrong. Please try again.',
      );
      setLoading(false);
    }
  };

  return (
    <>
      <button className={className} onClick={startCheckout} disabled={loading}>
        {loading ? 'Redirecting…' : <>{label} <ArrowRight size={16} /></>}
      </button>
      {error && <p style={{ color: '#e5484d', marginBottom: 0 }}>{error}</p>}
    </>
  );
};

export default OptimizeCheckoutButton;
