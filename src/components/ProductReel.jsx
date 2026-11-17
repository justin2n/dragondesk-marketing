import React, { useEffect, useRef, useState } from 'react';

// Homepage hero reel: a 16:9 loop over real DragonDesk screenshots. Each scene
// pans a "camera" from a wide view into one detail, sweeps an AI scan line
// across it, brackets the detail, and captions it.
//
// Camera rects are fractions of the screenshot: x, y = top-left, w = width
// (height follows from the 16:9 frame). Bracket boxes are fractions of the
// frame at the end of the move. Captions describe shipped features.

const SCENE_MS = 5200;

const SCENES = [
  {
    view: 'Desktop view', title: 'Website',
    src: '/reel/sales-rep.jpg', aspect: 1800 / 1125,
    from: { x: 0.02, y: 0.04, w: 0.96 }, to: { x: 0.57, y: 0.26, w: 0.42 },
    box: { l: 0.38, t: 0.1, w: 0.6, h: 0.86 }, tag: 'AI Sales Rep · answering',
    caption: 'A parent asks about kids classes. DragonDesk AI finds the right program and location.',
  },
  {
    view: 'Desktop view', title: 'Contacts',
    // Only the header and stat cards: the camera stays above the Programs row.
    src: '/reel/dashboard.jpg', aspect: 3448 / 1748, clipBottom: 0.605,
    from: { x: 0.155, y: 0, w: 0.41 }, to: { x: 0.185, y: 0.03, w: 0.375 },
    box: { l: 0.02, t: 0.45, w: 0.99, h: 0.33 }, tag: 'Leads · captured',
    caption: 'Every chat, text, and call lands on the contact, in one member record.',
  },
  {
    view: 'Desktop view', title: 'Engage',
    src: '/reel/engage.jpg', aspect: 3448 / 1742,
    from: { x: 0.14, y: 0, w: 0.86 }, to: { x: 0.17, y: 0.2, w: 0.62 },
    box: { l: 0.03, t: 0.37, w: 0.3, h: 0.13 }, tag: 'Audience · built by AI',
    caption: 'Describe the audience and the campaign. DragonDesk AI builds both.',
  },
  {
    view: 'Desktop view', title: 'Optimize',
    src: '/reel/optimize.jpg', aspect: 3448 / 1748,
    from: { x: 0.14, y: 0, w: 0.86 }, to: { x: 0.38, y: 0.2, w: 0.6 },
    box: { l: 0.03, t: 0.06, w: 0.93, h: 0.13 }, tag: 'A/B test · 50 / 50',
    caption: 'Test your website and keep the version that converts.',
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
  // Load each screenshot just before its scene, not all up front.
  const [loaded, setLoaded] = useState(2);
  const root = useRef(null);
  const visible = useRef(true);

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
    <div className="reel" ref={root} aria-label="DragonDesk product tour: website AI, contacts, Engage, Optimize, and mobile">
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

      <div className="reel-progress" aria-hidden="true">
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
