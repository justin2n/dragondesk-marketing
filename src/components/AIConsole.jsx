import React, { useEffect, useState } from 'react';

// The homepage hero's activity feed: DragonDesk AI at work across every
// channel. It is a demo loop (labeled as such), not live customer data.

const EVENTS = [
  { ch: 'TEXT', msg: 'Answered a parent about Saturday Kids BJJ' },
  { ch: 'WEB', msg: 'Signed up Marcus for a free trial class' },
  { ch: 'CALL', msg: 'Confirmed Thursday 6pm with a new trialer' },
  { ch: 'TEXT', msg: 'Handed a membership freeze to the front desk' },
  { ch: 'APP', msg: 'Built audience: trialers with no second class' },
  { ch: 'WEB', msg: 'Sent the booking link, first class picked' },
  { ch: 'TEXT', msg: 'Replied at 10:42 PM: “Yes, no-gi is Mondays”' },
  { ch: 'CALL', msg: 'Reached voicemail, logged and hung up' },
  { ch: 'APP', msg: 'Drafted a win-back email for lapsed members' },
  { ch: 'WEB', msg: 'Answered pricing from your trial offer' },
];

const VISIBLE = 6;

function stamp(offsetSec) {
  const d = new Date(Date.now() - offsetSec * 1000);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

const AIConsole = () => {
  const reduced = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [tick, setTick] = useState(VISIBLE);

  useEffect(() => {
    if (reduced) return undefined;
    const id = setInterval(() => setTick(t => t + 1), 2200);
    return () => clearInterval(id);
  }, [reduced]);

  // Newest first; each row keeps a stable key so only the new one animates.
  const rows = Array.from({ length: VISIBLE }, (_, i) => {
    const n = tick - 1 - i;
    return { key: n, ...EVENTS[((n % EVENTS.length) + EVENTS.length) % EVENTS.length], ago: i * 37 + 4 };
  });

  return (
    <div className="ai-console" aria-label="Demo of DragonDesk AI activity across channels">
      <div className="ai-console-head">
        <span className="ai-console-live"><span className="ai-console-dot" />DragonDesk AI</span>
        <span>Activity · demo</span>
      </div>
      <ol className="ai-console-list">
        {rows.map((r, i) => (
          <li key={r.key} className={i === 0 && !reduced ? 'is-new' : ''}>
            <span className="ai-console-time">{stamp(r.ago)}</span>
            <span className={`ai-console-ch ch-${r.ch.toLowerCase()}`}>{r.ch}</span>
            <span className="ai-console-msg">{r.msg}</span>
          </li>
        ))}
      </ol>
      <div className="ai-console-foot">
        <span>Web</span><span>Text</span><span>Phone</span><span>App</span>
      </div>
    </div>
  );
};

export default AIConsole;
