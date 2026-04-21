import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const LoginModal = ({ onClose }) => {
  const [subdomain, setSubdomain] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = subdomain.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    if (!clean) return;
    window.location.href = `https://${clean}.dragondeskapp.com/login`;
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="login-modal-backdrop" onClick={handleBackdrop}>
      <div className="login-modal">
        <button className="login-modal-close" onClick={onClose} aria-label="Close"><X size={20} /></button>
        <h3 className="login-modal-title">Log In to DragonDesk™</h3>
        <p className="login-modal-subtitle">Enter your studio's subdomain to continue.</p>
        <form onSubmit={handleSubmit} className="login-modal-form">
          <div className="login-subdomain-row">
            <input
              ref={inputRef}
              type="text"
              className="login-subdomain-input"
              placeholder="yourstudio"
              value={subdomain}
              onChange={e => setSubdomain(e.target.value)}
              autoComplete="off"
              spellCheck={false}
            />
            <span className="login-subdomain-suffix">.dragondeskapp.com</span>
          </div>
          <button type="submit" className="btn-primary btn-full login-modal-btn" disabled={!subdomain.trim()}>
            Go to Login <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (showLoginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showLoginModal]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/dragondesk-logo.png" alt="DragonDesk" className="nav-logo-img" />
            <span className="logo-text">Dragon<span className="logo-accent">Desk</span><sup className="logo-tm">™</sup></span>
          </Link>

          <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>Features</Link>
            <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</Link>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <button className="btn-secondary" onClick={() => setShowLoginModal(true)}>Log In</button>
            <a href="#contact" className="btn-primary">Request Demo</a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </>
  );
};

export default Navbar;
