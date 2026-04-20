import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "We migrated from MyStudio in a single afternoon. All our members, programs, and pricing plans came over automatically. The team was impressed by how smooth it was.",
    author: "Studio Owner",
    role: "Multi-Location Martial Arts Gym",
    location: "Pennsylvania",
    avatar: "MG",
    rating: 5,
  },
  {
    quote: "Finally a CRM that understands martial arts. Tracking leads through trials into paying members — with separate analytics per program — is exactly what we needed.",
    author: "Head Coach & Owner",
    role: "BJJ & Muay Thai Academy",
    location: "Northeast USA",
    avatar: "HC",
    rating: 5,
  },
  {
    quote: "The per-location Stripe billing was a game changer for us. We run three separate LLCs and now each location has its own billing account inside one dashboard.",
    author: "Gym Director",
    role: "Three-Location Taekwondo Studio",
    location: "Mid-Atlantic",
    avatar: "GD",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Early Access</span>
          <h2 className="section-title">Built with Real Studios</h2>
          <p className="section-subtitle">
            DragonDesk™ was built in close partnership with multi-location martial arts gyms.
            Every feature solves a real problem real studio owners face.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div className="author-info">
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                  <span className="author-location">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat">
            <div className="stat-number">14</div>
            <div className="stat-label">Program Types Supported</div>
          </div>
          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">Locations in One Dashboard</div>
          </div>
          <div className="stat">
            <div className="stat-number">1,100+</div>
            <div className="stat-label">Members Managed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
