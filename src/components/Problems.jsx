import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const problems = [
  { problem: 'Juggling MyStudio, spreadsheets, and email tools', solution: 'One platform for every part of your business' },
  { problem: 'Losing leads because there\'s no follow-up system', solution: 'Automatic lead capture, tracking, and conversion funnels' },
  { problem: 'No idea why members cancel or churn', solution: 'Churn tracking with cancellation reasons and alerts' },
  { problem: 'Paper sign-in sheets and manual attendance', solution: 'QR code kiosk check-in with real-time attendance reports' },
  { problem: 'Billing chaos across multiple locations (separate LLCs)', solution: 'Per-location Stripe accounts with independent billing' },
  { problem: 'Marketing blasted to everyone with no targeting', solution: 'Segmented campaigns by program, rank, and status' },
];

const Problems = () => {
  return (
    <section className="problems-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Sound Familiar?</span>
          <h2 className="section-title">
            The Old Way Is Costing You Members
          </h2>
          <p className="section-subtitle">
            Most martial arts studio owners are wasting 10+ hours a week on admin tasks
            that should be automated. Here's what DragonDesk™ changes.
          </p>
        </div>

        <div className="problems-comparison">
          <div className="comparison-column without">
            <div className="column-header">
              <div className="header-icon negative"><X size={24} /></div>
              <h3>Without DragonDesk</h3>
            </div>
            <ul className="comparison-list">
              {problems.map((item, index) => (
                <li key={index}>
                  <X size={18} className="icon-negative" />
                  <span>{item.problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="comparison-arrow">
            <ArrowRight size={32} />
          </div>

          <div className="comparison-column with">
            <div className="column-header">
              <div className="header-icon positive"><Check size={24} /></div>
              <h3>With DragonDesk™</h3>
            </div>
            <ul className="comparison-list">
              {problems.map((item, index) => (
                <li key={index}>
                  <Check size={18} className="icon-positive" />
                  <span>{item.solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
