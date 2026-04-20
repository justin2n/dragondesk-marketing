import React from 'react';
import { ArrowRight, CheckCircle, Users, TrendingUp, Zap } from 'lucide-react';

const Hero = () => {
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
            <a href="/features" className="btn-video">
              See All Features
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dashboard-preview">
            <div className="preview-header">
              <div className="preview-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="preview-title">DragonDesk™ Dashboard</span>
            </div>
            <div className="preview-content">
              <div className="preview-sidebar">
                <div className="sidebar-item active"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <div className="preview-main">
                <div className="stats-row">
                  <div className="stat-card">
                    <div className="stat-label">Active Members</div>
                    <div className="stat-value">342</div>
                    <div className="stat-change positive">+18%</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-label">Trials This Month</div>
                    <div className="stat-value">47</div>
                    <div className="stat-change positive">+12%</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-label">MRR</div>
                    <div className="stat-value">$24.6k</div>
                    <div className="stat-change positive">+9%</div>
                  </div>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    <div className="bar" style={{height: '55%'}}></div>
                    <div className="bar" style={{height: '72%'}}></div>
                    <div className="bar" style={{height: '48%'}}></div>
                    <div className="bar" style={{height: '88%'}}></div>
                    <div className="bar" style={{height: '65%'}}></div>
                    <div className="bar" style={{height: '91%'}}></div>
                    <div className="bar" style={{height: '78%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-card card-1">
            <div className="card-icon green">
              <CheckCircle size={18} />
            </div>
            <div className="card-text">
              <strong>Trial Converted</strong>
              <span>Marcus T. → Adult BJJ Member</span>
            </div>
          </div>

          <div className="floating-card card-2">
            <div className="card-icon red">
              <TrendingUp size={18} />
            </div>
            <div className="card-text">
              <strong>Conversion Rate</strong>
              <span>68% trial-to-member this month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
