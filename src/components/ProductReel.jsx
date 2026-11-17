import React, { useEffect, useRef, useState } from 'react';

// Homepage hero reel: a 16:9 loop over real DragonDesk screenshots. Each scene
// pans a "camera" from a wide view into one detail, sweeps an AI scan line
// across it, brackets the detail, and captions it.
//
// Camera rects are fractions of the screenshot: x, y = top-left, w = width
// (height follows from the 16:9 frame). Bracket boxes are fractions of the
// frame at the end of the move. Captions describe shipped features.

const SCENE_MS = 5000;

// Screens captured from a demo studio (fictional people) running the current
// app, plus the live website agent on dragongym.com.
const APP = 2880 / 1800;

const SCENES = [
  {
    view: 'Desktop view', title: 'Text',
    src: '/reel/messages.jpg', aspect: APP,
    from: { x: 0.18, y: 0.02, w: 0.82 }, to: { x: 0.42, y: 0.32, w: 0.56 },
    box: { l: 0.31, t: 0.55, w: 0.65, h: 0.14 }, tag: 'DragonDesk AI · trial signup',
    caption: 'A parent texts at 9:22 PM. DragonDesk AI answers, signs them up, and books the class.',
  },
  {
    view: 'Desktop view', title: 'Website',
    src: '/reel/sales-rep.jpg', aspect: 1800 / 1125,
    from: { x: 0.02, y: 0.04, w: 0.96 }, to: { x: 0.57, y: 0.26, w: 0.42 },
    box: { l: 0.38, t: 0.1, w: 0.6, h: 0.86 }, tag: 'AI Sales Rep · answering',
    caption: 'On your website, the same AI finds the right program and location for every visitor.',
  },
  {
    view: 'Desktop view', title: 'Phone',
    src: '/reel/test-call.jpg', aspect: APP,
    from: { x: 0.08, y: 0.02, w: 0.84 }, to: { x: 0.29, y: 0.13, w: 0.47 },
    box: { l: 0.1, t: 0.55, w: 0.72, h: 0.16 }, tag: 'AI call · live transcript',
    caption: 'AI calls follow your script and say they’re AI. Test one on your own phone first.',
  },
  {
    view: 'Desktop view', title: 'Pulse',
    src: '/reel/pulse.jpg', aspect: APP,
    from: { x: 0.16, y: 0.02, w: 0.84 }, to: { x: 0.19, y: 0.17, w: 0.5 },
    box: { l: 0.02, t: 0.26, w: 0.5, h: 0.62 }, tag: 'Hot lead · on fire',
    caption: 'Pulse ranks leads by what they do on your site, so your team calls the hottest first.',
  },
  {
    view: 'Desktop view', title: 'In the app',
    src: '/reel/assistant.jpg', aspect: APP,
    from: { x: 0.16, y: 0.02, w: 0.84 }, to: { x: 0.45, y: 0.24, w: 0.55 },
    box: { l: 0.49, t: 0.73, w: 0.37, h: 0.26 }, tag: 'Ask by voice or text',
    caption: 'Ask DragonDesk AI about your studio, or tell it what to do.',
  },
  {
    view: 'Mobile view', title: 'On a phone', phone: true,
    src: '/reel/sales-rep-phone.jpg', backdrop: '/reel/sales-rep.jpg',
    tag: 'Full-screen chat',
    caption: 'Where most visitors are: the same AI, full-screen on their phone.',
  },
];

const FRAME_ASPECT = 16 / 9;

// The camera as a transform on an image laid out at the frame's width.
function camera(rect) {
  return `scale(${1 / rect.w}) translate(${-rect.x * 100}%, ${-rect.y * 100}%)`;
}

const reducedMotion = () => typeof window !== 'undefined'
  && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const ProductReel = () => {
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  // The first two screenshots load with the page; the rest just after.
  const [loaded, setLoaded] = useState(2);
  const root = useRef(null);
  const visible = useRef(true);

  // Once the first scene is up, fetch the rest so no scene starts before its
  // screenshot has loaded.
  useEffect(() => {
    const t = setTimeout(() => setLoaded(SCENES.length), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Pause while the reel is off screen or the tab is hidden.
    const io = new IntersectionObserver(([e]) => { visible.current = e.isIntersecting; }, { threshold: 0.2 });
    if (root.current) io.observe(root.current);
    const id = setInterval(() => {
      if (!visible.current || document.hidden) return;
      setIndex(i => {
        const next = (i + 1) % SCENES.length;
        if (next === 0) setCycle(c => c + 1);
        setLoaded(l => Math.max(l, Math.min(SCENES.length, next + 2)));
        return next;
      });
    }, SCENE_MS);
    return () => { clearInterval(id); io.disconnect(); };
  }, []);

  const still = reducedMotion();
  const scene = SCENES[index];

  return (
    <div className="reel" ref={root} aria-label="DragonDesk product tour: AI texting, website chat, AI calls, Pulse, the in-app assistant, and mobile">
      <div className="reel-stage">
        {SCENES.map((s, i) => {
          const active = i === index;
          if (i >= loaded && !active) return null;
          const key = active ? `${i}-${cycle}` : `${i}`;
          return (
            <div key={i} className={`reel-scene ${active ? 'is-active' : ''}`} aria-hidden={!active}>
              {s.phone ? (
                <div className="reel-phone-scene" key={key}>
                  <img className="reel-backdrop" src={s.backdrop} alt="" />
                  <div className={`reel-phone ${active && !still ? 'animate' : ''}`}>
                    <img src={s.src} alt="" />
                  </div>
                </div>
              ) : (
                <img
                  key={key}
                  className={`reel-shot ${active && !still ? 'animate' : ''}`}
                  src={s.src}
                  alt=""
                  style={{
                    '--from': camera(s.from),
                    '--to': camera(s.to),
                    transform: still ? camera(s.to) : camera(s.from),
                    clipPath: s.clipBottom ? `inset(0 0 ${s.clipBottom * 100}% 0)` : undefined,
                    // The image is laid out at frame width; its height in frame units.
                    height: `${(FRAME_ASPECT / s.aspect) * 100}%`,
                  }}
                />
              )}
            </div>
          );
        })}

        {/* Overlay for the active scene; keyed so its animations replay. */}
        <div className="reel-overlay" key={`o-${index}-${cycle}`}>
          {!still && <span className="reel-scan" />}
          {scene.box ? (
            <span
              className="reel-box"
              // Tag above the bracket; below it when the bracket is near the
              // top; inside it when the bracket fills the frame.
              data-tag={scene.box.t >= 0.2 ? 'above' : scene.box.t + scene.box.h < 0.8 ? 'below' : 'inside'}
              style={{ left: `${scene.box.l * 100}%`, top: `${scene.box.t * 100}%`, width: `${scene.box.w * 100}%`, height: `${scene.box.h * 100}%` }}
            >
              <span className="reel-tag">{scene.tag}</span>
            </span>
          ) : (
            <span className="reel-box reel-box-phone"><span className="reel-tag">{scene.tag}</span></span>
          )}
          <p className="reel-caption">{scene.caption}</p>
        </div>

        <div className="reel-hud" aria-hidden="true">
          <span className="reel-corner tl" /><span className="reel-corner tr" />
          <span className="reel-corner bl" /><span className="reel-corner br" />
          <span className="reel-ruler" />
          <div className="reel-top">
            <span className="reel-view"><span className="reel-dot" />{scene.view}</span>
            <span>{String(index + 1).padStart(2, '0')} / {scene.title}</span>
          </div>
        </div>
      </div>

      <div className="reel-progress" aria-hidden="true" style={{ gridTemplateColumns: `repeat(${SCENES.length}, 1fr)` }}>
        {SCENES.map((s, i) => (
          <span key={i} className={i < index ? 'done' : i === index ? 'on' : ''}>
            <i key={i === index ? `p-${cycle}` : undefined} style={{ animationDuration: `${SCENE_MS}ms` }} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductReel;
