'use client';

const CREDIBILITY = [
  'Enterprise-grade security and privacy, built in from day one',
  'AI-powered, human-verified',
  'Built by the same team, built for how real teams work',
];

export default function PortfolioHero() {
  return (
    <section className="portfolio-hero" style={{ paddingTop: 68, position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 640, height: 640, background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', top: -120, right: -100, animation: 'float 10s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 420, height: 420, background: 'radial-gradient(circle, rgba(79,110,247,0.14) 0%, transparent 70%)', bottom: -60, left: '20%', animation: 'floatB 8s ease-in-out infinite' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '96px 48px 64px', textAlign: 'center' }}>
        <div className="fu" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(124,58,237,0.14)', border: '1px solid rgba(124,58,237,0.28)', borderRadius: 100, marginBottom: 28 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', fontFamily: 'var(--fh)', letterSpacing: '0.05em' }}>rik.ai · Two products, one mission</span>
        </div>

        <h1 className="hero-h1 fu" style={{ fontFamily: 'var(--fh)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24, color: 'var(--text-1)', maxWidth: 820, margin: '0 auto 24px' }}>
          Understand your customers.<br /><span className="gt">Take care of them, too.</span>
        </h1>

        <p className="fu d1" style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 640, margin: '0 auto 40px' }}>
          rik.ai builds AI products that help businesses understand what customers need — and act on it when it matters.
        </p>

        <div className="fu d2" style={{ display: 'flex', gap: 22, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 8 }}>
          {CREDIBILITY.map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--purple-light)', flexShrink: 0 }} />
              <span style={{ fontSize: 12.5, color: 'var(--text-3)', fontFamily: 'var(--fb)', whiteSpace: 'nowrap' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PhilosophyBand() {
  return (
    <section className="section-pad" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.012)' }}>
      <div className="container fu" style={{ maxWidth: 760, textAlign: 'center' }}>
        <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 22, color: 'var(--text-1)' }}>
          AI that does more than talk.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.8 }}>
          We believe customer-facing AI should do more than generate convincing responses. It should know what it knows.
          Operate within boundaries. Know when to escalate. And give your team a clear record of what happened.
        </p>
      </div>
    </section>
  );
}
