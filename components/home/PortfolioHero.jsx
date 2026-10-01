'use client';

const CREDIBILITY = [
  'Enterprise-grade security and privacy, built in from day one',
  'AI-powered, human-verified',
  'Built by the same team, built for how real teams work',
];

function ProductMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%', maxWidth: 440 }}>
      <div style={{ borderRadius: 16, border: '1px solid rgba(124,58,237,0.25)', background: '#0d0d20', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderBottom: '1px solid var(--border)' }}>
          <span style={{ fontSize: 11, color: '#c4b5fd', fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '0.05em' }}>VOICE · ASK RISHI</span>
        </div>
        <div style={{ padding: '16px 18px' }}>
          <p style={{ fontSize: 13, color: 'var(--text-2)', marginBottom: 8 }}>"What's driving churn this month?"</p>
          <p style={{ fontSize: 12.5, color: 'var(--text-3)', lineHeight: 1.6 }}>Onboarding complexity (34%) is your top detractor theme, correlating with 2× churn risk in months 2–3.</p>
        </div>
      </div>
      <div style={{ borderRadius: 16, border: '1px solid rgba(79,110,247,0.3)', background: '#0d0d20', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.5)', alignSelf: 'flex-end', width: '90%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderBottom: '1px solid var(--border)' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
          <span style={{ fontSize: 11, color: '#818cf8', fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '0.05em' }}>LIVEAGENT · LIVE CONVERSATION</span>
        </div>
        <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ alignSelf: 'flex-end', maxWidth: '80%', background: 'rgba(255,255,255,0.06)', borderRadius: '10px 10px 2px 10px', padding: '8px 12px', fontSize: 12.5, color: 'var(--text-1)' }}>
            "What's my order status?"
          </div>
          <div style={{ alignSelf: 'flex-start', maxWidth: '85%', background: 'rgba(79,110,247,0.14)', border: '1px solid rgba(79,110,247,0.22)', borderRadius: '10px 10px 10px 2px', padding: '8px 12px', fontSize: 12.5, color: 'var(--text-1)' }}>
            "It shipped yesterday — arriving Thursday."
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioHero() {
  return (
    <section className="portfolio-hero hero-section" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: 68, position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 640, height: 640, background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', top: -120, right: -100, animation: 'float 10s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 420, height: 420, background: 'radial-gradient(circle, rgba(79,110,247,0.14) 0%, transparent 70%)', bottom: -60, left: '10%', animation: 'floatB 8s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)' }} />

      <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', position: 'relative', zIndex: 2, padding: '80px 48px' }}>
        <div>
          <div className="fu" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(124,58,237,0.14)', border: '1px solid rgba(124,58,237,0.28)', borderRadius: 100, marginBottom: 28 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', fontFamily: 'var(--fh)', letterSpacing: '0.05em' }}>rik.ai · Two products, one mission</span>
          </div>

          <h1 className="hero-h1 fu d1" style={{ fontFamily: 'var(--fh)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24, color: 'var(--text-1)' }}>
            Understand your customers.<br /><span className="gt">Take care of them, too.</span>
          </h1>

          <p className="fu d2" style={{ fontSize: 17.5, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 36, maxWidth: 520 }}>
            rik.ai builds AI products that help businesses understand what customers need — and act on it when it matters.
          </p>

          <div className="fu d3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {CREDIBILITY.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--purple-light)', flexShrink: 0 }} />
                <span style={{ fontSize: 12.5, color: 'var(--text-3)', fontFamily: 'var(--fb)', whiteSpace: 'nowrap' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-mockup fu d2" style={{ display: 'flex', justifyContent: 'center', animation: 'float 8s ease-in-out infinite' }}>
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}

export function PhilosophyBand() {
  const PILLARS = [
    { title: 'Know what it knows', body: "It should draw from the knowledge you've given it — not fill gaps with generic AI knowledge.", color: '#a78bfa' },
    { title: 'Operate within boundaries', body: 'Rules and escalation paths define what it can do, not just what it might try.', color: '#818cf8' },
    { title: 'Leave a clear record', body: 'Every decision and hand-off should be traceable back to what triggered it.', color: '#34d399' },
  ];

  return (
    <section className="section-pad" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.012)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 20, color: 'var(--text-1)' }}>
            AI that does more than talk.
          </h2>
          <p className="fu d1" style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.8, maxWidth: 680, margin: '0 auto' }}>
            We believe customer-facing AI should do more than generate convincing responses. It should know what it knows,
            operate within boundaries, know when to escalate, and give your team a clear record of what happened.
          </p>
        </div>
        <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {PILLARS.map((p, i) => (
            <div key={p.title} className={`fu d${i + 1}`} style={{ padding: '28px 24px', background: 'var(--card)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 16, marginBottom: 10, color: p.color }}>{p.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.75 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
