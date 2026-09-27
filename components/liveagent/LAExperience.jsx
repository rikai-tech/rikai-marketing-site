'use client';
import { useState } from 'react';
import SLabel from '@/components/SLabel';

const HIGHLIGHTS = [
  { label: 'Natural', body: 'A real conversation, not a decision tree.' },
  { label: 'Grounded', body: 'Answers pulled from your approved knowledge, cited inline.' },
  { label: 'Governed', body: 'Order actions confirmed before anything happens.' },
  { label: 'Escalation', body: "When it isn't sure, it raises a ticket instead of guessing." },
];

const TABS = [
  {
    key: 'chat',
    label: 'Chat',
    badge: 'LIVEAGENT · CHAT WIDGET',
    poster: '/videos/liveagent-demo-poster.jpg',
    mp4: '/videos/liveagent-demo.mp4',
    webm: '/videos/liveagent-demo.webm',
    background: '#eef0f3',
  },
  {
    key: 'avatar',
    label: 'Avatar + Voice',
    badge: 'LIVEAGENT · AVATAR + VOICE',
    poster: '/videos/liveagent-avatar-demo-poster.jpg',
    mp4: '/videos/liveagent-avatar-demo.mp4',
    webm: '/videos/liveagent-avatar-demo.webm',
    background: '#0b1120',
  },
];

export default function LAExperience() {
  const [active, setActive] = useState('chat');
  const tab = TABS.find(t => t.key === active);

  return (
    <section id="experience" className="section-pad">
      <div className="container not-avatar-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 64, alignItems: 'center' }}>
        <div className="fu">
          <SLabel color="#818cf8">The Experience</SLabel>
          <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 20 }}>
            A real conversation,<br /><span className="gt">powered by a real agent.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {HIGHLIGHTS.map(h => (
              <div key={h.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700, color: '#818cf8', background: 'rgba(79,110,247,0.12)', border: '1px solid rgba(79,110,247,0.25)', fontFamily: 'var(--fh)', flexShrink: 0, marginTop: 2, whiteSpace: 'nowrap' }}>{h.label}</span>
                <span style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.6 }}>{h.body}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fu d1">
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
      </div>
    </section>
  );
}
