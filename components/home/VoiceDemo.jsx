'use client';
import { useEffect, useState } from 'react';

// Placeholder animated demo for the Voice tile — a looping, CSS-driven
// walkthrough (interview → themes → Ask Rishi). Swap for a real screen
// recording by passing a <video> as the Voice tile's `media` in PortfolioHero.

const SCENES = [
  { key: 'interview', label: 'AI-led interviews' },
  { key: 'themes', label: 'Themes & sentiment' },
  { key: 'rishi', label: 'Ask Rishi' },
];
const SCENE_MS = 4200;

const THEMES = [
  { label: 'Onboarding complexity', pct: 34, color: '#a78bfa' },
  { label: 'Pricing clarity', pct: 26, color: '#818cf8' },
  { label: 'Support wait times', pct: 19, color: '#60a5fa' },
  { label: 'Feature requests', pct: 12, color: '#34d399' },
];

function Typed({ text, active, speed = 28 }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) { setN(0); return; }
    const t = setInterval(() => setN(c => (c < text.length ? c + 1 : c)), speed);
    return () => clearInterval(t);
  }, [active, text, speed]);
  return <>{text.slice(0, n)}</>;
}

function Interview({ active }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, fontFamily: 'var(--fh)' }}>R</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--fh)' }}>Purchase journey interview</div>
          <div style={{ fontSize: 11.5, color: 'var(--text-3)' }}>Live · English · 12 min</div>
        </div>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444', animation: 'pulse 1.2s ease-in-out infinite' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 44, padding: '0 4px' }}>
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} style={{
            flex: 1, borderRadius: 2, background: 'linear-gradient(180deg, #a78bfa, #60a5fa)',
            height: '100%', transformOrigin: 'center',
            animation: active ? `wave ${0.9 + (i % 7) * 0.13}s ease-in-out ${(i % 9) * 0.07}s infinite` : 'none',
            transform: 'scaleY(0.2)', opacity: 0.85,
          }} />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12.5, lineHeight: 1.55 }}>
        <div style={{ color: 'var(--text-3)' }}>
          <b style={{ color: '#c4b5fd' }}>Rishi</b> · What made you hesitate before buying?
        </div>
        <div style={{ color: 'var(--text-1)' }}>
          <b style={{ color: '#818cf8' }}>Customer</b> · <Typed text="Honestly the setup looked complicated, and I couldn't tell what it would cost…" active={active} />
          <span style={{ animation: 'blink 1s step-end infinite' }}>▍</span>
        </div>
      </div>
    </div>
  );
}

function Themes({ active }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--fh)' }}>Top themes · 248 interviews</span>
        <span style={{ fontSize: 11.5, color: '#34d399' }}>● Sentiment +12</span>
      </div>
      {THEMES.map((t, i) => (
        <div key={t.label}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5, color: 'var(--text-2)' }}>
            <span>{t.label}</span><span style={{ color: t.color, fontWeight: 600 }}>{t.pct}%</span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 4, background: t.color,
              width: active ? `${t.pct * 2.4}%` : '0%',
              transition: `width 1s cubic-bezier(.2,.8,.2,1) ${i * 0.15}s`,
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Rishi({ active }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ alignSelf: 'flex-end', maxWidth: '85%', background: 'rgba(255,255,255,0.07)', borderRadius: '12px 12px 2px 12px', padding: '9px 14px', fontSize: 13 }}>
        What's driving churn this month?
      </div>
      <div style={{ alignSelf: 'flex-start', maxWidth: '92%', background: 'rgba(124,58,237,0.16)', border: '1px solid rgba(124,58,237,0.28)', borderRadius: '12px 12px 12px 2px', padding: '10px 14px', fontSize: 12.5, lineHeight: 1.6, color: 'var(--text-1)', minHeight: 92 }}>
        <Typed text="Onboarding complexity (34%) is your top detractor theme, correlating with 2× churn risk in months 2–3. Pricing clarity follows at 26%." active={active} speed={22} />
      </div>
    </div>
  );
}

export default function VoiceDemo() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(c => (c + 1) % SCENES.length), SCENE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#0d0d20' }}>
      <div style={{ flex: 1, position: 'relative', padding: '22px 24px' }}>
        {[Interview, Themes, Rishi].map((Scene, idx) => (
          <div key={idx} style={{
            position: 'absolute', inset: '22px 24px',
            opacity: i === idx ? 1 : 0, transform: i === idx ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity .5s ease, transform .5s ease', pointerEvents: 'none',
          }}>
            <Scene active={i === idx} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 6, padding: '0 24px 16px' }}>
        {SCENES.map((s, idx) => (
          <div key={s.key} style={{ flex: 1 }}>
            <div style={{ height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.1)', overflow: 'hidden', marginBottom: 6 }}>
              <div style={{ height: '100%', background: '#a78bfa', width: idx < i ? '100%' : idx === i ? '100%' : '0%', transformOrigin: 'left', animation: idx === i ? `fillbar ${SCENE_MS}ms linear` : 'none' }} />
            </div>
            <span style={{ fontSize: 10.5, color: idx === i ? '#c4b5fd' : 'var(--text-3)', fontFamily: 'var(--fh)', fontWeight: 600, letterSpacing: '0.04em' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
