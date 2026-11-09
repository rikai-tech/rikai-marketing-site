'use client';
import { useState } from 'react';
import { LIVEAGENT_TIERS, LIVEAGENT_ENTERPRISE, LIVEAGENT_SIGNUP_URL } from './pricingData';

function Check({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
      <path d="M2.5 7.3l3 3 6-6.6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChoiceRow({ label, text }) {
  return (
    <div>
      <p style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--text-1)', fontFamily: 'var(--fh)', marginBottom: 2 }}>{label}</p>
      <p style={{ fontSize: 12, color: 'var(--text-2)', lineHeight: 1.55 }}>{text}</p>
    </div>
  );
}

export default function LiveAgentPricing({ onBookDemo }) {
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
          const accent = t.popular ? '#a78bfa' : '#818cf8';
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
                  <Check color={accent} />
                  <span style={{ fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.6 }}>{t.chat}</span>
                </div>

                <div style={{ borderRadius: 12, border: `1px dashed ${t.popular ? 'rgba(167,139,250,0.4)' : 'var(--border-md)'}`, background: 'rgba(255,255,255,0.025)', padding: '12px 14px' }}>
                  <p style={{ fontSize: 10.5, fontWeight: 700, fontFamily: 'var(--fh)', letterSpacing: '0.08em', textTransform: 'uppercase', color: accent, marginBottom: 10 }}>
                    Choose one: voice or avatar
                  </p>
                  <ChoiceRow label="Voice channel" text={t.voice} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0' }}>
                    <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                    <span style={{ fontSize: 10, fontWeight: 700, fontFamily: 'var(--fh)', letterSpacing: '0.1em', color: 'var(--text-3)' }}>OR</span>
                    <span style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                  </div>
                  <ChoiceRow label="Avatar" text={t.avatar} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enterprise */}
      <div className="fu enterprise-card" style={{
        marginTop: 20, padding: '32px 34px', borderRadius: 20, border: '1px solid var(--border-md)',
        background: 'linear-gradient(135deg, rgba(79,110,247,0.08), rgba(124,58,237,0.05))',
        display: 'grid', gridTemplateColumns: '1.1fr 1.3fr auto', gap: 36, alignItems: 'center',
      }}>
        <div>
          <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 22, marginBottom: 6, color: 'var(--text-1)' }}>{LIVEAGENT_ENTERPRISE.name}</h3>
          <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 12 }}>{LIVEAGENT_ENTERPRISE.tagline}</p>
          <span style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.5px', color: 'var(--text-1)' }}>Custom pricing</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }} className="enterprise-features">
          {LIVEAGENT_ENTERPRISE.features.map(f => (
            <div key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
              <Check color="#818cf8" />
              <span style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{f}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => onBookDemo && onBookDemo()}
          style={{
            padding: '13px 28px', borderRadius: 12, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
            background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14.5,
            boxShadow: '0 0 28px rgba(79,110,247,0.35)',
          }}
        >{LIVEAGENT_ENTERPRISE.cta}</button>
      </div>
    </div>
  );
}
