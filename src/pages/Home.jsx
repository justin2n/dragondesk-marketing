import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import OptimizeCheckoutButton from '../components/OptimizeCheckoutButton';
import CTA from '../components/CTA';
import ProductReel from '../components/ProductReel';

// Homepage: DragonDesk as the AI-native member management platform.
// DragonDesk AI leads; the platform it runs inside follows; Optimize keeps a
// buy-today strip because it is the product a studio can start on without a
// demo call.

const specs = [
  { key: 'Website', val: 'AI sales rep, 24/7' },
  { key: 'Text', val: 'Two-way SMS with AI replies' },
  { key: 'Phone', val: 'AI calls, early access' },
  { key: 'In the app', val: 'Assistant by voice or text' },
];

const principles = [
  {
    title: 'One AI, one knowledge base',
    desc: 'Every channel answers from the same source: your programs, schedule, trial offer, and the documents you keep in Google Drive. Update it once and the website, texts, and calls all know.',
  },
  {
    title: 'Works inside your records',
    desc: 'Conversations land on the contact. A signup by chat or text becomes a lead with its program and location. Nothing to copy between tools, nothing lost between shifts.',
  },
  {
    title: 'Knows when to hand off',
    desc: 'Billing, cancellations, injuries, or anything it can’t answer go to a person, with an alert. The moment your team replies, the AI steps back.',
  },
];

const channels = [
  {
    medium: 'Website',
    name: 'AI Sales Rep',
    desc: 'Greets every visitor, answers questions about your programs, signs them up for your trial, and hands them your booking link so they pick a first class on the spot.',
    points: ['Leads land in your CRM and your existing website form', 'Measured on booked classes, not chats', 'Full-screen on phones, where most visitors are'],
    link: { to: '/ai-sales-rep', label: 'See the AI Sales Rep' },
  },
  {
    medium: 'Text',
    name: 'Two-way SMS',
    tag: 'New',
    desc: 'Every text to your studio number lands in Engage, in one conversation per person. Reply yourself, or let DragonDesk AI answer leads, trialers, and members in your studio’s voice.',
    points: ['Turn AI on for every new conversation, or one at a time', 'Signs newcomers up for your trial by text', 'Alerts for new texts wherever your team is in the app'],
  },
  {
    medium: 'Phone',
    name: 'AI calls',
    tag: 'Early access',
    desc: 'Give a call campaign a goal and a script. The agent holds a natural conversation, lets people interrupt, hangs up politely, and saves the transcript.',
    points: ['Place a test call to your own phone before anyone else hears it', 'Says it’s an AI assistant, every time', 'Live status and transcript while the call happens'],
  },
  {
    medium: 'In the app',
    name: 'DragonDesk AI assistant',
    desc: 'Ask about your studio in plain words, by voice or text. It answers from your data and documents, and builds the audiences and campaigns you describe.',
    points: ['Talks back in a studio voice you choose', 'Reads your Google Drive knowledge folder', 'Builds audiences and campaigns on request'],
  },
];

const platform = [
  { title: 'Member lifecycle', desc: 'Lead to trialer to member in one profile: programs, belt rank, attendance, and billing.' },
  { title: 'Billing', desc: 'Stripe subscriptions and invoices, with a separate account per location when each is its own LLC.' },
  { title: 'Classes and attendance', desc: 'Recurring schedules, instructors, and QR or wallet-pass check-in at the front desk.' },
  { title: 'Engage', desc: 'Email and SMS campaigns to the audiences you build, plus the two-way Messages inbox.' },
  { title: 'Pulse', desc: 'Leads ranked by what they do on your website, so your team calls the hottest first.' },
  { title: 'Your brand', desc: 'Your logo and color across the app, with text that stays readable on any color you pick.' },
];

const optimizeIncluded = ['Unlimited A/B tests', 'Promo bars and offer modals', 'Audience builder', 'Significance alerts'];

const Home = () => (
  <>
    <section className="hero-bold">
      <div className="container">
        <div className="hb-top">
          <span className="hb-label">DragonDesk / Built for martial arts studios</span>
          <span className="hb-label hb-status"><span className="ai-console-dot" />AI on web, text, phone, and app</span>
        </div>

        <h1 className="hb-title">
          The <span className="hb-accent">AI&#8209;native</span>
          <br />member management platform.
        </h1>

        <div className="hb-grid">
          <div className="hb-copy">
            <p className="hb-sub">
              DragonDesk runs your members, billing, attendance, and marketing, and DragonDesk AI works
              every channel on top of it: answering your website, texting back, calling through your
              scripts, and building campaigns inside the app. Around the clock, in your studio’s voice.
            </p>
            <div className="hb-cta">
              <a href="#contact" className="btn-primary btn-large">Request a demo <ArrowRight size={18} /></a>
              <Link to="/ai" className="hb-link">Meet DragonDesk AI <ArrowRight size={16} /></Link>
            </div>
          </div>
          <ProductReel />
        </div>

        <div className="spec-strip hb-spec">
          {specs.map(s => (
            <div key={s.key} className="spec-cell">
              <span className="spec-key">{s.key}</span>
              <span className="spec-val">{s.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">01 / AI-native</span>
          <h2 className="section-title">Built around AI, not bolted on.</h2>
          <p className="section-subtitle">
            Most studio software adds a chatbot to the corner of the screen. In DragonDesk, the AI and
            the member records are the same system.
          </p>
        </div>
        <div className="principles">
          {principles.map((p, i) => (
            <div key={p.title} className="principle">
              <span className="principle-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">02 / DragonDesk AI</span>
          <h2 className="section-title">Everywhere people reach your studio.</h2>
          <p className="section-subtitle">
            Web, text, phone, and the app itself, all answered by one AI that knows your studio.
          </p>
        </div>
        <div className="channel-list">
          {channels.map((c, i) => (
            <div key={c.name} className="channel-row">
              <span className="channel-index">{String(i + 1).padStart(2, '0')}</span>
              <div className="channel-head">
                <span className="channel-medium">{c.medium}</span>
                <h3 className="channel-name">{c.name}</h3>
                {c.tag && <span className={`channel-tag ${c.tag === 'New' ? 'new' : ''}`}>{c.tag}</span>}
              </div>
              <div className="channel-body">
                <p>{c.desc}</p>
                <ul className="channel-points">
                  {c.points.map(pt => <li key={pt}>{pt}</li>)}
                </ul>
                {c.link && <Link to={c.link.to} className="channel-link">{c.link.label} <ArrowRight size={16} /></Link>}
              </div>
            </div>
          ))}
        </div>
        <div className="hero-cta" style={{ marginTop: 40 }}>
          <Link to="/ai" className="btn-secondary">How DragonDesk AI works <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="split">
          <div className="split-copy">
            <span className="section-label">03 / Messages</span>
            <h2 className="section-title">A text at 10pm gets an answer at 10pm.</h2>
            <p className="section-subtitle">
              DragonDesk AI replies in seconds, signs newcomers up, and flags anything that needs a
              person. Your team sees every word, and taking over is one reply away.
            </p>
          </div>
          <div className="screenshot-frame">
            <img src="/screenshots/messages.jpg" alt="DragonDesk Messages: the AI answering a parent and signing them up for a trial" className="screenshot-img" loading="lazy" width="2000" height="1250" />
            <div className="screenshot-nav">
              <p className="screenshot-caption">Engage, Messages: DragonDesk AI signs up a new lead by text. Demo studio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">04 / The platform</span>
          <h2 className="section-title">Everything the AI works with, in one place.</h2>
          <p className="section-subtitle">
            The member management underneath replaces your spreadsheets, email tool, billing system,
            and check-in app, built exclusively for martial arts.
          </p>
        </div>
        <div className="screenshot-frame platform-shot">
          <img src="/screenshots/dashboard.jpg" alt="The DragonDesk dashboard" className="screenshot-img" loading="lazy" />
          <div className="screenshot-nav">
            <p className="screenshot-caption">Dashboard: leads, trials, and every program at a glance. Demo studio.</p>
          </div>
        </div>
        <div className="features-grid">
          {platform.map(p => (
            <div key={p.title} className="feature-card">
              <h3 className="feature-title">{p.title}</h3>
              <p className="feature-description">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="hero-cta" style={{ marginTop: 40 }}>
          <Link to="/platform" className="btn-secondary">Explore the platform <ArrowRight size={16} /></Link>
          <Link to="/features" className="btn-video">All features</Link>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="buy-strip">
          <div className="buy-copy">
            <span className="section-label">Start today</span>
            <h2>DragonDesk: Optimize</h2>
            <p>
              A/B tests, promo bars, and offer modals for your studio’s website, and a clear answer on
              what converts. No demo call needed: sign up and run your first test today.
            </p>
            <Link to="/optimize" className="channel-link">How Optimize works <ArrowRight size={16} /></Link>
          </div>
          <div className="buy-price">
            <div className="buy-amount">$150<small> / month</small></div>
            <ul className="buy-included">
              {optimizeIncluded.map(item => <li key={item}><Check size={16} />{item}</li>)}
            </ul>
            <OptimizeCheckoutButton label="Get started" />
          </div>
        </div>
      </div>
    </section>

    {/* Carries id="contact", the target of every "Request a demo" link. */}
    <CTA />
  </>
);

export default Home;
