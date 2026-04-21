import React from 'react';
import { Shield, Zap, Star, Dumbbell, BoxSelect, Leaf } from 'lucide-react';

const programs = [
  { name: 'Brazilian Jiu-Jitsu', icon: Shield, adult: 'Adult BJJ', kids: 'Kids BJJ', color: '#dc2626' },
  { name: 'Muay Thai & Kickboxing', icon: Zap, adult: 'Adult Muay Thai', kids: 'Kids Muay Thai', color: '#f59e0b' },
  { name: 'Taekwondo', icon: Star, adult: 'Adult TKD', kids: "Children's Martial Arts", color: '#3b82f6' },
  { name: 'Boxing', icon: BoxSelect, adult: 'Adult Boxing', kids: 'Kids Boxing', color: '#8b5cf6' },
  { name: 'Weight Training', icon: Dumbbell, adult: 'Weight Training', kids: null, color: '#10b981' },
  { name: 'Yoga', icon: Leaf, adult: 'Adult Yoga', kids: 'Youth Yoga', color: '#ec4899' },
];

const Programs = () => {
  return (
    <section className="programs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Built For Your Programs</span>
          <h2 className="section-title">Every Program, Every Age Group</h2>
          <p className="section-subtitle">
            DragonDesk™ tracks Adults and Kids separately across all your programs —
            with the right metrics, belt rankings, and billing for each.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon"><program.icon size={28} color={program.color} /></div>
              <h3 className="program-name">{program.name}</h3>
              <div className="program-tracks">
                <div className="track adult">
                  <span className="track-label">Adult</span>
                  <span className="track-name">{program.adult}</span>
                </div>
                {program.kids ? (
                  <div className="track kids">
                    <span className="track-label">Kids</span>
                    <span className="track-name">{program.kids}</span>
                  </div>
                ) : (
                  <div className="track adults-only">
                    <span className="track-label">Adults only</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="programs-note">
          <p>
            <strong>14 program types supported.</strong> Custom programs available on request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
