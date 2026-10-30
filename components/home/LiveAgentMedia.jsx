'use client';
import { useEffect, useRef, useState } from 'react';

const TABS = [
  { key: 'avatar', label: 'Avatar', poster: '/videos/liveagent-avatar-demo-poster.jpg', mp4: '/videos/liveagent-avatar-demo.mp4', webm: '/videos/liveagent-avatar-demo.webm', background: '#0b1120' },
  { key: 'chat', label: 'Chat', poster: '/videos/liveagent-demo-poster.jpg', mp4: '/videos/liveagent-demo.mp4', webm: '/videos/liveagent-demo.webm', background: '#eef0f3' },
];

// Plays only while on screen, so the 7 MB avatar clip isn't decoding in the
// background (and mobile visitors who scroll past never stream it).
export default function LiveAgentMedia() {
  const [active, setActive] = useState('avatar');
  const tab = TABS.find(t => t.key === active);
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
    }, { threshold: 0.25 });
    obs.observe(v);
    return () => obs.disconnect();
  }, [active]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <video
        ref={ref} key={tab.key} poster={tab.poster} muted loop playsInline preload="metadata" disablePictureInPicture
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', background: tab.background }}
      >
        <source src={tab.mp4} type="video/mp4" />
        <source src={tab.webm} type="video/webm" />
      </video>
      <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', gap: 6, padding: 4, borderRadius: 100, background: 'rgba(8,8,26,0.7)', backdropFilter: 'blur(8px)', border: '1px solid var(--border-md)' }}>
        {TABS.map(t => (
          <button key={t.key} onClick={() => setActive(t.key)} style={{
            padding: '5px 14px', borderRadius: 100, border: 'none', cursor: 'pointer', fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 600,
            background: active === t.key ? 'rgba(79,110,247,0.9)' : 'transparent', color: active === t.key ? '#fff' : 'var(--text-2)',
          }}>{t.label}</button>
        ))}
      </div>
    </div>
  );
}
