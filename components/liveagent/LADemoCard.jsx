'use client';
import { useState } from 'react';

const TABS = [
  {
    key: 'avatar',
    label: 'Avatar',
    badge: 'LIVEAGENT · AVATAR + VOICE',
    poster: '/videos/liveagent-avatar-demo-poster.jpg',
    mp4: '/videos/liveagent-avatar-demo.mp4',
    webm: '/videos/liveagent-avatar-demo.webm',
    background: '#0b1120',
  },
  {
    key: 'chat',
    label: 'Chat',
    badge: 'LIVEAGENT · CHAT WIDGET',
    poster: '/videos/liveagent-demo-poster.jpg',
    mp4: '/videos/liveagent-demo.mp4',
    webm: '/videos/liveagent-demo.webm',
    background: '#eef0f3',
  },
];

export default function LADemoCard() {
  const [active, setActive] = useState('avatar');
  const tab = TABS.find(t => t.key === active);

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {TABS.map(t => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            style={{
              padding: '9px 20px', borderRadius: 100, fontSize: 13.5, fontFamily: 'var(--fh)', fontWeight: 600,
              border: `1px solid ${active === t.key ? 'rgba(79,110,247,0.5)' : 'var(--border-md)'}`,
              background: active === t.key ? 'rgba(79,110,247,0.16)' : 'rgba(255,255,255,0.03)',
              color: active === t.key ? '#fff' : 'var(--text-2)',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
          >{t.label}</button>
        ))}
      </div>

      <div style={{
        borderRadius: 20, border: '1px solid rgba(79,110,247,0.3)',
        background: '#0d0d20', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ fontSize: 12, color: 'var(--text-3)', fontFamily: 'var(--fh)', fontWeight: 600, letterSpacing: '0.05em' }}>{tab.badge}</span>
        </div>
        <video
          key={tab.key}
          poster={tab.poster}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          style={{ display: 'block', width: '100%', height: 'auto', background: tab.background }}
        >
          <source src={tab.mp4} type="video/mp4" />
          <source src={tab.webm} type="video/webm" />
        </video>
      </div>
    </div>
  );
}
