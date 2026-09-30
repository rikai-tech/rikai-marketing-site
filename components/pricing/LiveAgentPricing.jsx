'use client';
import { useState } from 'react';
import { LIVEAGENT_TIERS, LIVEAGENT_SIGNUP_URL } from './pricingData';

function Check({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
      <path d="M2.5 7.3l3 3 6-6.6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LiveAgentPricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      {/* Billing interval toggle */}
      <div className="fu" style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
        <div style={{ display: 'inline-flex', gap: 4, padding: 4, borderRadius: 100, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-md)' }}>
          {[{ k: true, label: 'Annual' }, { k: false, label: 'Monthly' }].map(opt => (
            <button
              key={String(opt.k)}
              onClick={() => setAnnual(opt.k)}
              style={{
                padding: '9px 22px', borderRadius: 100, fontSize: 13.5, fontFamily: 'var(--fh)', fontWeight: 600,
                border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                background: annual === opt.k ? 'var(--grad)' : 'transparent',
                color: annual === opt.k ? '#fff' : 'var(--text-2)',
              }}
            >{opt.label}</button>
          ))}
        </div>
      </div>

      {/* Pricing cards */}
      <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, alignItems: 'stretch' }}>
        {LIVEAGENT_TIERS.map((t, i) => {
          const price = annual ? t.annualMonthly : t.monthly;
          const savingsPerMonth = t.monthly - t.annualMonthly;
          return (
            <div key={t.key} className={`fu d${Math.min(i + 1, 5)}`} style={{
              display: 'flex', flexDirection: 'column',
              padding: '30px 26px', borderRadius: 20,
              background: t.popular ? 'linear-gradient(160deg, rgba(124,58,237,0.1), rgba(79,110,247,0.04))' : 'var(--card)',
              border: t.popular ? '1px solid rgba(124,58,237,0.5)' : '1px solid var(--border)',
              boxShadow: t.popular ? '0 24px 64px rgba(124,58,237,0.25)' : 'none',
              position: 'relative',
            }}>
              {t.popular && (
                <span style={{
                  position: 'absolute', top: -13, left: 26,
                  padding: '5px 14px', borderRadius: 100,
                  background: 'var(--grad-gold)', color: '#1a1204',
                  fontSize: 10.5, fontWeight: 800, fontFamily: 'var(--fh)', letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>Most Popular</span>
              )}

              <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20, marginBottom: 6, color: 'var(--text-1)' }}>{t.name}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.6, marginBottom: 20, minHeight: 40 }}>{t.tagline}</p>

              <div style={{ marginBottom: 4, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 38, letterSpacing: '-1px', color: 'var(--text-1)' }}>${price}</span>
                <span style={{ fontSize: 13.5, color: 'var(--text-3)' }}>/month</span>
              </div>
              <p style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 24, minHeight: 18 }}>
                {t.isTrial ? 'No card required' : annual ? `billed annually · save $${savingsPerMonth}/mo` : 'billed monthly'}
              </p>

              <a
                href={LIVEAGENT_SIGNUP_URL} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'block', textAlign: 'center', padding: '12px 20px', borderRadius: 12,
                  fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14.5, marginBottom: 26,
                  textDecoration: 'none', transition: 'transform 0.2s',
                  background: t.popular ? 'var(--grad)' : 'rgba(255,255,255,0.06)',
                  color: t.popular ? '#fff' : 'var(--text-1)',
                  border: t.popular ? 'none' : '1px solid var(--border-md)',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >{t.cta}</a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                {t.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                    <Check color={t.popular ? '#a78bfa' : '#818cf8'} />
                    <span style={{ fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
