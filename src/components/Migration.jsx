import React from 'react';
import { Download, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const steps = [
  { step: '1', title: 'Export from MyStudio', desc: 'Download your Leads, Trials, and Members CSVs from MyStudio — one export per contact type.' },
  { step: '2', title: 'Import into DragonDesk', desc: 'Upload each CSV. DragonDesk auto-detects the format, maps all 14 program types, and creates pricing plans automatically.' },
  { step: '3', title: 'You\'re live', desc: 'All your contacts, programs, and billing plans are ready. Configure Stripe per location and start managing your studio.' },
];

const Migration = () => {
  return (
    <section className="migration-section">
      <div className="container">
        <div className="migration-inner">
          <div className="migration-badge">
            <Zap size={16} />
            MyStudio Migration
          </div>
          <h2 className="migration-title">
            Already on MyStudio?
            <br />Switch in Minutes.
          </h2>
          <p className="migration-subtitle">
            We built a direct import path from MyStudio. Your leads, trials, and members
            come over with their programs, attendance history, and pricing plans — automatically.
          </p>

          <div className="migration-steps">
            {steps.map((s, i) => (
              <div key={i} className="migration-step">
                <div className="step-number">{s.step}</div>
                <div className="step-content">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
                {i < steps.length - 1 && <ArrowRight size={20} className="step-arrow" />}
              </div>
            ))}
          </div>

          <div className="migration-features">
            {[
              'All 14 Dragon Gym program types supported',
              'Duplicate detection keeps your data clean',
              'Pricing plans auto-created from membership names',
              'Leads, Trials, and Members — all three CSV formats',
            ].map((f, i) => (
              <div key={i} className="migration-feature">
                <CheckCircle size={18} />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary btn-large">
            Talk to Us About Migrating
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Migration;
