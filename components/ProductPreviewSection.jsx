'use client';
import { useState } from 'react';
import SLabel from './SLabel';

const tabs = [
  {
    label: 'Customer Portal',
    img: '/uploads/rikai-customerportal.JPG',
    headline: 'Every study. Every signal. One command centre.',
    caption: 'Monitor completion rates, receive real-time alerts, and see AI-generated insights the moment responses arrive — without digging through data or waiting for a report.',
    why: 'Why this matters: your team stays one step ahead of every study, every time.',
  },
  {
    label: 'Voice Portal',
    img: '/uploads/rikai-surveyportal.JPG',
    headline: 'An experience respondents actually want to come back to.',
    caption: 'Purpose-built for participants — not just researchers. Seamless navigation, pending study queues, and incentive management designed to maximize completion and response quality.',
    why: 'Why this matters: higher completion rates mean more reliable, representative data.',
  },
];

export default function ProductPreviewSection() {
  const [tab, setTab] = useState(0);
  const t = tabs[tab];

  return (
    <section id="product" className="section-pad" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <SLabel>Product Preview</SLabel>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Two portals.<br /><span className="gt">One seamless system.</span>
          </h2>
          <p className="fu d1" style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 560, margin: '0 auto 8px' }}>
            Rik AI is built around two connected experiences — one for your team, one for your respondents. Both designed to reduce friction and maximize signal quality.
          </p>
          <p className="fu d2" style={{ fontSize: 13, color: 'rgba(167,139,250,0.6)', margin: '0 auto', textAlign: 'center' }}>See how decisions happen in real time.</p>
        </div>
        <div className="preview-tabs" style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 36, flexWrap: 'wrap' }}>
          {tabs.map((tb, i) => (
            <button key={i} onClick={() => setTab(i)} style={{ padding: '10px 22px', borderRadius: 10, border: '1px solid', cursor: 'pointer', fontFamily: 'var(--fh)', fontWeight: 500, fontSize: 14, transition: 'all 0.25s', minWidth: 160, textAlign: 'center', borderColor: tab === i ? 'rgba(124,58,237,0.5)' : 'var(--border)', background: tab === i ? 'rgba(124,58,237,0.15)' : 'transparent', color: tab === i ? '#c4b5fd' : 'var(--text-2)' }}>{tb.label}</button>
          ))}
        </div>
        <div className="fu" style={{ borderRadius: 16, border: '1px solid var(--border-md)', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(124,58,237,0.1)' }}>
          <div style={{ background: '#141426', padding: '12px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 7 }}>
              {['#ef4444', '#f59e0b', '#22c55e'].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />)}
            </div>
            <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 7, padding: '5px 14px', fontSize: 11, color: 'var(--text-3)', textAlign: 'center' }}>app.rik.ai</div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.img} alt={t.label} style={{ width: '100%', display: 'block', maxHeight: 560, objectFit: 'cover', objectPosition: 'top center' }} />
        </div>
        <div className="preview-caption" style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20, marginBottom: 10, color: 'var(--text-1)' }}>{t.headline}</div>
            <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8 }}>{t.caption}</p>
          </div>
          <div style={{ padding: '16px 20px', background: 'rgba(124,58,237,0.08)', borderRadius: 12, border: '1px solid rgba(124,58,237,0.2)', alignSelf: 'center' }}>
            <p style={{ fontSize: 14, color: '#c4b5fd', lineHeight: 1.7 }}>{t.why}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
