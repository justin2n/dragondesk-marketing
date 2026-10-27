import React from 'react';
import {
  CheckCircle, MessageSquare, UserPlus, CalendarCheck, BellRing, ClipboardList,
  MousePointerClick, Globe, Timer, Radio, Smartphone, FileText,
} from 'lucide-react';
import CTA from '../components/CTA';

// Product page for the inbound AI sales representative (DragonDesk: Outreach,
// Website Chat Agents). Both screenshots are the live agent on dragongym.com.

const steps = [
  { title: 'Answers questions', desc: 'Programs, ages, locations, and your trial offer, straight from what you tell it.' },
  { title: 'Signs them up', desc: 'Collects name, email, phone, program, and location, confirms them, then saves the lead.' },
  { title: 'Gets them booked', desc: 'Hands over your booking link as a button so they pick their first class on the spot.' },
  { title: 'Follows up', desc: 'A few minutes later it checks they managed to book, and helps if they got stuck.' },
];

const features = [
  { icon: ClipboardList, title: 'Trained on your studio', desc: 'Write your offer, schedule, and FAQs in plain English. It only answers from what you give it, and hands anything else to your team.' },
  { icon: UserPlus, title: 'Leads land in your CRM', desc: 'Every signup becomes a lead in DragonDesk with the program, location, and how they found you.' },
  { icon: FileText, title: 'Submits your existing form', desc: "It also fills in your website's own signup form in the background, so your current inbox and tools keep getting every lead." },
  { icon: MousePointerClick, title: 'Measured on bookings', desc: 'Clicks on your booking link are the headline number, with chat-to-booking rate per website.' },
  { icon: BellRing, title: 'New-lead alerts', desc: 'Your team gets an email and an in-app alert the moment a new lead comes in.' },
  { icon: Radio, title: '"Chatting now" badges', desc: 'See which leads are talking to the agent right now, on their contact record and in Pulse.' },
  { icon: Timer, title: 'Opens at the right moment', desc: 'Pop the chat after a few seconds or once a visitor scrolls far enough, at most once per visit.' },
  { icon: Globe, title: 'One agent per website', desc: 'Run a different agent on each of your sites from one snippet, each with its own offer and voice.' },
];

const phonePoints = [
  { icon: Smartphone, title: 'Full-screen on phones', desc: 'Plenty of visitors arrive on a phone, so the chat fills the screen and stays out of the way until they tap it.' },
  { icon: MessageSquare, title: 'Every transcript saved', desc: 'Read any conversation in DragonDesk, see who signed up, and whether their booking click happened.' },
  { icon: CalendarCheck, title: 'Buttons, not raw links', desc: 'Booking and schedule links show up as clear buttons that open without losing the chat.' },
  { icon: CheckCircle, title: 'No new install', desc: 'It runs through the DragonDesk tracking snippet you already have. Switch it on and it appears.' },
];

const SalesRep = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              DragonDesk: Outreach AI Sales Rep
            </div>

            <h1 className="hero-title">
              Sell while
              <br /><span className="highlight">you sleep</span>
            </h1>

            <p className="hero-subtitle">
              It greets every visitor, answers their questions about your programs, signs them up for
              your trial, and sends them straight to book their first class, at 11pm on a Sunday as
              easily as at noon.
            </p>

            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle size={18} />
                <span>Replies in seconds, any time of day</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={18} />
                <span>Leads go to your CRM and your existing form</span>
              </div>
              <div className="hero-feature">
                <CheckCircle size={18} />
                <span>Measured on booked classes, not chats</span>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#contact" className="btn-primary btn-large">Request a demo</a>
              <a href="#on-your-phone" className="btn-video">See it on a phone</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="screenshot-frame fade-in">
              <img
                src="/screenshots/ai-sales-rep-dragongym.jpg"
                alt="The DragonDesk AI sales rep chatting with a parent about kids classes on dragongym.com"
                className="screenshot-img"
                width="2160"
                height="1350"
              />
              <div className="screenshot-nav">
                <p className="screenshot-caption">
                  Live on dragongym.com: a parent asks about kids classes and the agent finds them the
                  right program at their nearest school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="migration-section sales-rep-steps">
        <div className="container">
          <div className="migration-inner">
            <span className="migration-badge">How it works</span>
            <h2 className="migration-title">From first question to first class</h2>
            <p className="migration-subtitle">
              The agent does what your best front-desk person would do with every visitor, without
              anyone having to be at the desk.
            </p>
            <div className="migration-steps">
              {steps.map((s, i) => (
                <div key={s.title} className="migration-step">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-content">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What you get</span>
            <h2 className="section-title">A sales rep that never misses a lead</h2>
            <p className="section-subtitle">
              Built into DragonDesk, so every conversation, signup, and booking click shows up where
              your team already works.
            </p>
          </div>

          <div className="features-grid">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon">
                  <Icon size={24} />
                </div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-description">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pulse-section" id="on-your-phone">
        <div className="container">
          <div className="pulse-grid">
            <div>
              <span className="pulse-badge">Made for phones</span>
              <h2 className="pulse-title">
                Where your visitors <span className="pulse-accent">actually are</span>
              </h2>
              <p className="pulse-subtitle">
                The same conversation, on the phone in a parent's hand. This is the agent running on
                dragongym.com.
              </p>
              <div className="pulse-points">
                {phonePoints.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="pulse-point">
                    <div className="pulse-point-icon"><Icon size={20} /></div>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sales-rep-phone">
              <img
                src="/screenshots/ai-sales-rep-dragongym-phone.jpg"
                alt="The DragonDesk AI sales rep full-screen on a phone on dragongym.com"
                width="780"
                height="1688"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Carries id="contact", the target of every "Request Demo" link. */}
      <CTA />
    </>
  );
};

export default SalesRep;
