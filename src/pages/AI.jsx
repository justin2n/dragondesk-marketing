import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTA from '../components/CTA';

// DragonDesk AI: how the one AI behind every channel works, each channel in
// turn, and the guardrails around it. The conversation panels are
// illustrations built from the product's own patterns; the website panel is a
// real screenshot of the agent on dragongym.com.

const flow = [
  { title: 'Knowledge', desc: 'Your business info, trial offer, instructions, and a Google Drive folder of documents, synced on its own.' },
  { title: 'Channels', desc: 'Your website, your studio’s text number, outbound calls, and the assistant inside DragonDesk.' },
  { title: 'Records', desc: 'Signups become leads. Conversations and transcripts are saved where your team works.' },
  { title: 'People', desc: 'Anything that needs a person is handed off with an alert, and the AI steps back when staff reply.' },
];

const guardrails = [
  { term: 'Says it’s AI', def: 'On text it introduces itself as your studio’s automated assistant. On calls it says it’s an AI assistant from the first sentence, and never claims to be a person.' },
  { term: 'Answers from your facts', def: 'It answers from what you give it. Prices, policies, or anything it doesn’t know go to your team instead of a guess.' },
  { term: 'Respects opt-outs', def: 'A number that replies STOP is never texted again, and START opts it back in. Opt-outs stay in sync with the contact.' },
  { term: 'Steps back for people', def: 'When a staff member replies, AI turns off for that conversation. Handoffs raise a “needs a person” alert.' },
  { term: 'Has limits', def: 'A daily reply limit on each conversation and a time limit on each call, so nothing runs away on its own.' },
  { term: 'Keeps the record', def: 'Every chat, text, and call transcript is saved, so you can read exactly what was said.' },
  { term: 'Tested before it’s live', def: 'Place a test call to your own phone and hear the exact script before a contact does.' },
  { term: 'Your choice, per conversation', def: 'Turn AI on for every new text conversation, or switch it on and off one conversation at a time.' },
];

const AIPage = () => (
  <>
    <section className="pricing-hero">
      <div className="container">
        <span className="section-label">DragonDesk AI</span>
        <h1>One AI that knows your studio, on every channel.</h1>
        <p>
          DragonDesk AI answers your website, your texts, and your calls, and works beside your team
          inside the app. It runs on the same member records and the same knowledge base everywhere, so
          every answer is consistent and every conversation ends up in the right place.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary btn-large">Request a demo <ArrowRight size={18} /></a>
          <a href="#channels" className="btn-video">See each channel</a>
        </div>
      </div>
    </section>

    <section className="section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How it works</span>
          <h2 className="section-title">Knowledge in, conversations out, people in charge.</h2>
        </div>
        <div className="flow">
          {flow.map((f, i) => (
            <div key={f.title} className="flow-step">
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section" id="channels" style={{ scrollMarginTop: 64 }}>
      <div className="container">
        <div className="split">
          <div className="split-copy">
            <span className="section-label">01 / Website</span>
            <h2 className="section-title">AI Sales Rep</h2>
            <p className="section-subtitle">
              Greets every visitor, answers questions about your programs, signs interested visitors up
              for your trial, and sends them to book their first class. It also submits your website’s
              own signup form, so your existing tools keep getting every lead.
            </p>
            <ul className="channel-points">
              <li>Leads land in DragonDesk with program, location, and source</li>
              <li>Measured on booking clicks, with a follow-up if someone gets stuck</li>
              <li>“Chatting now” badges show who is talking to it right now</li>
            </ul>
            <Link to="/ai-sales-rep" className="channel-link">More on the AI Sales Rep <ArrowRight size={16} /></Link>
          </div>
          <div className="screenshot-frame">
            <img
              src="/screenshots/ai-sales-rep-dragongym.jpg"
              alt="The DragonDesk AI sales rep chatting with a parent on dragongym.com"
              className="screenshot-img"
              width="2160"
              height="1350"
            />
            <div className="screenshot-nav">
              <p className="screenshot-caption">Live on dragongym.com.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="split">
          <div className="mock" aria-label="Illustration of a text conversation handed off to staff">
            <div className="mock-head">
              <strong>Messages</strong>
              <span className="channel-tag new">Needs a person</span>
            </div>
            <div className="mock-body">
              <div className="mock-msg in"><p>Can I freeze my membership for a month? I hurt my knee.</p><span>Member · 6:12 PM</span></div>
              <div className="mock-msg out ai"><p>Sorry to hear about your knee. I’ve passed this to the front desk and someone will text you back soon.</p><span>DragonDesk AI · 6:12 PM</span></div>
              <p className="mock-note">AI handed off: membership freeze, injury</p>
              <div className="mock-msg out"><p>Hi Sam, this is Jess at the front desk. Yes, we can pause it. Feel better!</p><span>Jess · 6:20 PM</span></div>
            </div>
            <div className="mock-foot"><span>Illustration</span><span>AI off after staff reply</span></div>
          </div>
          <div className="split-copy">
            <span className="section-label">02 / Text</span>
            <h2 className="section-title">Two-way SMS</h2>
            <p className="section-subtitle">
              Every text to your studio number lands in Engage, one conversation per person, matched to
              their contact. Leads, trialers, members, and people you’ve never met all get an answer.
            </p>
            <ul className="channel-points">
              <li>Choose whether AI answers new conversations, and switch it per conversation</li>
              <li>Signs newcomers up for your trial by text, using the number they texted from</li>
              <li>Replies to bulk campaigns arrive with the campaign text, for context</li>
              <li>New texts alert your team wherever they are in the app</li>
              <li>Text any contact straight from their profile</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="split">
          <div className="split-copy">
            <span className="section-label">03 / Phone</span>
            <h2 className="section-title">AI calls <span className="channel-tag" style={{ verticalAlign: 'middle', marginLeft: 8 }}>Early access</span></h2>
            <p className="section-subtitle">
              Write a call campaign’s goal and script, and the agent holds the conversation: it follows
              the script’s intent in natural speech, lets people interrupt, and hangs up politely when
              the call is done.
            </p>
            <ul className="channel-points">
              <li>Test call to your own phone, with live status and transcript</li>
              <li>Opens with your script and says it’s an AI assistant</li>
              <li>Ends the call itself on a goodbye, a voicemail, or a “please don’t call”</li>
              <li>Every call and transcript saved to the campaign</li>
            </ul>
          </div>
          <div className="mock" aria-label="Illustration of a live test call transcript">
            <div className="mock-head">
              <strong>Test call</strong>
              <span className="mock-status">Connected · 0:42</span>
            </div>
            <div className="mock-body">
              <div className="mock-line"><span className="mock-who agent">Agent</span><span>Hi Alex, this is Maya, an AI assistant calling from the studio about your free trial. Do you have a quick minute?</span></div>
              <div className="mock-line"><span className="mock-who">You</span><span>Sure, what’s up?</span></div>
              <div className="mock-line"><span className="mock-who agent">Agent</span><span>You signed up for a trial class last week. Would Tuesday or Thursday evening work better for your first one?</span></div>
              <div className="mock-line"><span className="mock-who">You</span><span>Thursday works.</span></div>
            </div>
            <div className="mock-foot"><span>Illustration</span><span>Transcript saved</span></div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="split">
          <div className="mock" aria-label="Illustration of the DragonDesk AI assistant inside the app">
            <div className="mock-head">
              <strong>DragonDesk AI</strong>
              <span>Voice</span>
            </div>
            <div className="mock-body">
              <div className="mock-msg out"><p>Make an audience of trialers who haven’t booked a second class.</p><span>You</span></div>
              <div className="mock-msg in"><p>Done. “Trialers, no second class” is ready in Audiences. Want an email campaign to go with it?</p><span>DragonDesk AI</span></div>
            </div>
            <div className="mock-foot"><span>Illustration</span><span>Audience created</span></div>
          </div>
          <div className="split-copy">
            <span className="section-label">04 / In the app</span>
            <h2 className="section-title">DragonDesk AI assistant</h2>
            <p className="section-subtitle">
              Ask about your studio in plain words, typed or spoken, and get answers from your own
              records and documents. Describe the audience or campaign you want and it builds it.
            </p>
            <ul className="channel-points">
              <li>Talks back in a studio voice you design</li>
              <li>Knows the documents in your Google Drive knowledge folder</li>
              <li>One tap from the dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Guardrails</span>
          <h2 className="section-title">AI you can put your studio’s name on.</h2>
          <p className="section-subtitle">
            DragonDesk AI speaks for your business, so it’s built to be honest about what it is and
            careful about what it does.
          </p>
        </div>
        <dl className="spec-list">
          {guardrails.map(g => (
            <div key={g.term} className="spec-item">
              <dt>{g.term}</dt>
              <dd>{g.def}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* Carries id="contact", the target of every "Request a demo" link. */}
    <CTA />
  </>
);

export default AIPage;
