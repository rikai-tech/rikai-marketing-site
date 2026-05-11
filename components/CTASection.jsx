'use client';
import { useState } from 'react';

export default function CTASection({ onBookDemo }) {
  const [email, setEmail] = useState('');

  return (
    <section id="cta" style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(124,58,237,0.16) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)' }} />
      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 100, marginBottom: 28 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f59e0b', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: '#fcd34d', fontFamily: 'var(--fh)', letterSpacing: '0.06em' }}>EARLY ACCESS NOW OPEN — LIMITED SPOTS AVAILABLE</span>
        </div>
        <h2 style={{ fontFamily: 'var(--fh)', fontSize: 58, fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.08, marginBottom: 24 }}>
          Customer signals move fast.<br /><span className="gt">Your decisions should too.</span>
        </h2>
        <p style={{ fontSize: 18, color: 'var(--text-2)', maxWidth: 580, margin: '0 auto 16px', lineHeight: 1.75 }}>
          Rik AI helps teams continuously understand customer feedback, behavior, and research signals — so insight reaches decision-makers while it still matters.
        </p>
        <p style={{ fontSize: 14, color: 'rgba(167,139,250,0.6)', marginBottom: 52 }}>A new era of customer understanding.</p>

        <div className="cta-inputs" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 14 }}>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your work email"
            style={{ padding: '14px 22px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'rgba(255,255,255,0.06)', color: 'var(--text-1)', fontSize: 15, outline: 'none', minWidth: 290, fontFamily: 'var(--fb)' }}
            onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
            onBlur={e => e.target.style.borderColor = 'var(--border-md)'}
          />
          <button
            onClick={() => onBookDemo(email)}
            style={{ background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 12, border: 'none', cursor: 'pointer', boxShadow: '0 0 40px rgba(124,58,237,0.5)', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 48px rgba(124,58,237,0.65)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.5)'; }}
          >Book a Demo →</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a
            href="mailto:sales@rikai.tech?subject=Sales%20Enquiry%20%E2%80%94%20Rik%20AI"
            style={{ display: 'inline-block', padding: '13px 28px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'rgba(255,255,255,0.04)', color: 'var(--text-2)', fontFamily: 'var(--fh)', fontWeight: 500, fontSize: 14, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'var(--border-md)'; }}
          >Contact Sales at sales@rikai.tech</a>
        </div>

        <p style={{ marginTop: 22, fontSize: 13, color: 'var(--text-3)' }}>White-glove onboarding · Enterprise-grade security · Fast deployment with guided setup</p>
      </div>
    </section>
  );
}
