import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/dragondesk-logo.png" alt="DragonDesk" className="footer-logo-img" />
              <span>Dragon<span className="logo-accent">Desk</span><sup className="logo-tm">™</sup></span>
            </Link>
            <p className="footer-tagline">
              The all-in-one operations platform built exclusively for martial arts studios.
            </p>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><a href="#contact">Request Demo</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Programs</h4>
            <ul>
              <li><a href="/features">Brazilian Jiu-Jitsu</a></li>
              <li><a href="/features">Muay Thai & Kickboxing</a></li>
              <li><a href="/features">Taekwondo & HKD</a></li>
              <li><a href="/features">Barbell Club</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#contact">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Privacy Policy</a></li>
              <li><a href="#contact">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <Mail size={16} />
                <a href="mailto:hello@dragongym.com">hello@dragongym.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DragonDesk™. All rights reserved.</p>
          <div className="footer-badges">
            <span>🇺🇸 Made in USA</span>
            <span>🥋 Built for Martial Arts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
