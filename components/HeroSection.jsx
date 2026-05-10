'use client';

const heroVariants = {
  A: { h1a: 'Your customers are speaking.', h1b: 'Make sure every signal', h1c: 'becomes an action.' },
  B: { h1a: 'Turn customer signals', h1b: 'into confident decisions.', h1c: 'Every time.' },
  C: { h1a: 'Go beyond collecting data.', h1b: 'Understand what customers', h1c: 'are really telling you.' },
};

function DashboardMockup() {
  const surveys = [
    { name: 'NPS Survey — Q2 2026', status: 'Active', pct: 68, color: '#22c55e' },
    { name: 'Product Feedback v3', status: 'Collecting', pct: 34, color: '#818cf8' },
    { name: 'Exit Survey — Churned Users', status: 'Draft', pct: 0, color: 'rgba(240,240,255,0.3)' },
  ];
  return (
    <div style={{ background: '#0c0c1e', borderRadius: 18, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 80px rgba(124,58,237,0.18)', width: '100%', maxWidth: 520 }}>
      <div style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/uploads/logo_upload-1776774656314.png" style={{ height: 22 }} alt="" />
          <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 13 }}>Rik.ai</span>
          <span style={{ fontSize: 9, color: 'rgba(240,240,255,0.35)', letterSpacing: '0.08em' }}>CUSTOMER PORTAL</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Support', 'Sign out'].map(t => <div key={t} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.06)', borderRadius: 6, fontSize: 10, color: 'rgba(240,240,255,0.55)' }}>{t}</div>)}
        </div>
      </div>
      <div style={{ padding: '22px 24px' }}>
        <div style={{ fontFamily: 'var(--fh)', fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Good morning, Harry</div>
        <div style={{ fontSize: 12, color: 'rgba(240,240,255,0.45)', marginBottom: 18 }}>14 active · 6 completions</div>
        <div style={{ padding: '10px 14px', background: 'rgba(239,68,68,0.09)', border: '1px solid rgba(239,68,68,0.18)', borderLeft: '3px solid #ef4444', borderRadius: 9, marginBottom: 18, fontSize: 11, color: '#fca5a5' }}>
          ⚠ "Brand Study" stalled — no new responses in 72 hours
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
          {['Q2 Brand Research', 'UX Satisfaction Study'].map((p, i) => (
            <div key={i} style={{ padding: '12px 14px', background: 'rgba(255,255,255,0.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 6 }}>{p}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: 10, color: '#4ade80' }}>Active</span>
              </div>
            </div>
          ))}
        </div>
        {surveys.map((s, i) => (
          <div key={i} style={{ padding: '11px 14px', marginBottom: 7, background: 'rgba(255,255,255,0.03)', borderRadius: 9, border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 500, marginBottom: 5 }}>{s.name}</div>
              <span style={{ fontSize: 9, padding: '2px 7px', background: `${s.color}18`, borderRadius: 4, color: s.color, fontWeight: 600 }}>{s.status}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: s.pct > 0 ? '#818cf8' : 'rgba(240,240,255,0.25)', fontFamily: 'var(--fh)' }}>{s.pct}%</div>
              <div style={{ fontSize: 9, color: 'rgba(240,240,255,0.3)' }}>completion</div>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 14, padding: '10px 14px', background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,110,247,0.1))', borderRadius: 10, border: '1px solid rgba(124,58,237,0.25)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#c4b5fd', marginBottom: 2 }}>Rishi AI · Insight Ready</div>
            <div style={{ fontSize: 10, color: 'rgba(240,240,255,0.5)' }}>3 themes detected · Action recommended</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CredibilityStrip() {
  const items = [
    { icon: '◈', text: 'From customer signals to confident decisions — in minutes, not weeks' },
    { icon: '✦', text: 'Understand feedback across every language and format' },
    { icon: '◉', text: 'AI-powered insights your whole team can act on' },
    { icon: '◇', text: 'Works with real-world customer data, exactly as it comes' },
    { icon: '▣', text: 'From question to insight — without the wait' },
    { icon: '◐', text: 'Text, video, voice — understood together, instantly' },
    { icon: '▣', text: 'Enterprise-grade security and privacy, built in from day one' },
    { icon: '◈', text: 'From customer signals to confident decisions — in minutes, not weeks' },
    { icon: '✦', text: 'Understand feedback across every language and format' },
    { icon: '◉', text: 'AI-powered insights your whole team can act on' },
    { icon: '◇', text: 'Works with real-world customer data, exactly as it comes' },
  ];
  return (
    <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '22px 0', overflow: 'hidden', background: 'rgba(255,255,255,0.012)' }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 56, animation: 'marquee 28s linear infinite', width: 'max-content', alignItems: 'center' }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, whiteSpace: 'nowrap' }}>
              <span style={{ color: 'var(--purple-light)', fontSize: 11 }}>{item.icon}</span>
              <span style={{ fontFamily: 'var(--fb)', fontSize: 13, color: 'rgba(240,240,255,0.32)', fontWeight: 450 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ onBookDemo }) {
  const variant = heroVariants['A'];
  const heroSize = 52;

  return (
    <>
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 68 }}>
        <div className="orb" style={{ width: 720, height: 720, background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', top: -140, right: -120, animation: 'float 10s ease-in-out infinite' }} />
        <div className="orb" style={{ width: 480, height: 480, background: 'radial-gradient(circle, rgba(79,110,247,0.15) 0%, transparent 70%)', bottom: -60, left: '28%', animation: 'floatB 8s ease-in-out infinite' }} />
        <div className="orb" style={{ width: 180, height: 180, background: 'radial-gradient(circle, rgba(245,158,11,0.18) 0%, transparent 70%)', top: 140, left: '8%', animation: 'float 7s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)' }} />

        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', position: 'relative', zIndex: 2, padding: '80px 48px' }}>
          <div>
            {/* Brand lockup */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5 }}>
                <img src="/uploads/logo_upload-1776774656314.png" style={{ height: 18, width: 'auto', opacity: 0.9 }} alt="" />
                <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14, color: 'var(--text-1)', letterSpacing: '-0.2px' }}>
                  Rik<span className="gt">.ai</span>
                </span>
              </div>
              <p style={{ fontSize: 11.5, color: 'rgba(167,139,250,0.55)', letterSpacing: '0.04em', fontStyle: 'italic', margin: 0 }}>
                The new verse of market intelligence
              </p>
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(124,58,237,0.14)', border: '1px solid rgba(124,58,237,0.28)', borderRadius: 100, marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', fontFamily: 'var(--fh)', letterSpacing: '0.05em' }}>Now in Early Access · Join Forward-Thinking Teams</span>
            </div>

            <h1 className="hero-h1" style={{ fontFamily: 'var(--fh)', fontWeight: 700, lineHeight: 1.1, marginBottom: 22, color: 'var(--text-1)' }}>
              {variant.h1a}<br />{variant.h1b}<br />
              <span className="gt">{variant.h1c}</span>
            </h1>

            <p style={{ fontSize: 17.5, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 40, maxWidth: 500 }}>
              Rik AI transforms customer feedback, research, and behaviour into clear, confident decisions — across every format, language, and channel.
            </p>

            <div className="hero-ctas" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={() => onBookDemo()} style={{ background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 15, padding: '14px 30px', borderRadius: 12, boxShadow: '0 0 40px rgba(124,58,237,0.5)', transition: 'transform 0.2s, box-shadow 0.2s', border: 'none', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 48px rgba(124,58,237,0.65)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.5)'; }}
              >Book a Demo →</button>
              <a href="#howitworks" style={{ color: 'var(--text-1)', fontFamily: 'var(--fh)', fontWeight: 500, fontSize: 15, padding: '14px 26px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'rgba(255,255,255,0.04)', transition: 'background 0.2s, border-color 0.2s', display: 'inline-block' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'var(--border-md)'; }}
              >See how it works</a>
            </div>
          </div>
          <div className="hero-mockup" style={{ display: 'flex', justifyContent: 'center', animation: 'float 8s ease-in-out infinite' }}>
            <DashboardMockup />
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Explore</div>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, rgba(124,58,237,0.5), transparent)' }} />
        </div>
      </section>
      <CredibilityStrip />
    </>
  );
}
