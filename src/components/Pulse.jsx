import React from 'react';
import { Activity, Flame, Eye, RefreshCw, SlidersHorizontal, TrendingUp, ArrowRight } from 'lucide-react';

const signals = [
  { name: 'Sarah M.', events: 58, tier: 'ON FIRE', cls: 'tier-fire', pages: ['Pricing', 'Kids BJJ', 'Free Trial'] },
  { name: 'Marcus T.', events: 31, tier: 'HOT', cls: 'tier-hot', pages: ['Adult Muay Thai', 'Schedule'] },
  { name: 'priya@gmail…', events: 14, tier: 'WARM', cls: 'tier-warm', pages: ['Programs', 'About'] },
];

const points = [
  {
    Icon: TrendingUp,
    title: 'Behavior-based scoring',
    desc: 'Every lead is ranked by real activity on your site — visits, pages, and intent — not guesswork.',
  },
  {
    Icon: Flame,
    title: 'WARM to HOT to ON FIRE',
    desc: 'Clear urgency tiers tell you who to call first, the moment they cross your threshold.',
  },
  {
    Icon: Eye,
    title: 'See exactly what they viewed',
    desc: 'Pricing? Kids BJJ? The free-trial page? Walk into every call already knowing what they want.',
  },
  {
    Icon: RefreshCw,
    title: 'Live, auto-refreshing feed',
    desc: 'Pulse updates around the clock, so a hot lead never goes cold while you are on the mat.',
  },
];

const Pulse = () => {
  return (
    <section className="pulse-section">
      <div className="container">
        <div className="pulse-grid">
          {/* Copy */}
          <div className="pulse-copy">
            <div className="pulse-badge">
              <Activity size={16} />
              DragonDesk: Pulse
            </div>
            <h2 className="pulse-title">
              Know who is ready to join —
              <span className="pulse-accent"> in real time.</span>
            </h2>
            <p className="pulse-subtitle">
              Pulse watches how leads engage with your website and surfaces the ones heating up
              right now — ranked by intent, so your team reaches the right person at the right moment.
            </p>

            <div className="pulse-points">
              {points.map((p, i) => (
                <div className="pulse-point" key={i}>
                  <div className="pulse-point-icon">
                    <p.Icon size={18} />
                  </div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary btn-large">
              See Pulse in Action
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Live feed mock */}
          <div className="pulse-feed" aria-hidden="true">
            <div className="pulse-feed-header">
              <div className="pulse-feed-title">
                <span className="pulse-dot" />
                Hot leads right now
              </div>
              <div className="pulse-feed-filter">
                <SlidersHorizontal size={14} />
                10+ events · 24h
              </div>
            </div>

            <div className="pulse-feed-list">
              {signals.map((s, i) => (
                <div className="pulse-signal" key={i}>
                  <div className="pulse-signal-main">
                    <span className="pulse-signal-name">{s.name}</span>
                    <span className={`pulse-tier ${s.cls}`}>{s.tier}</span>
                  </div>
                  <div className="pulse-signal-meta">
                    <span className="pulse-signal-count">{s.events} signals</span>
                    <span className="pulse-signal-pages">
                      {s.pages.map((pg, j) => (
                        <span className="pulse-page" key={j}>{pg}</span>
                      ))}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pulse-feed-foot">
              <RefreshCw size={12} />
              Auto-refreshing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pulse;
