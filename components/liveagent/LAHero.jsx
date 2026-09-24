'use client';

// Note: no launch-stage badge here on purpose — the redesign proposal (§12
// "still open") flags that the real launch stage (early access vs. live)
// needs confirmation before any badge copy ships. Add one once that's decided.
export default function LAHero({ onBookDemo }) {
  return (
    <section id="la-hero" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 68 }}>
      <div className="orb" style={{ width: 680, height: 680, background: 'radial-gradient(circle, rgba(79,110,247,0.2) 0%, transparent 70%)', top: -140, right: -120, animation: 'float 10s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 420, height: 420, background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)', bottom: -60, left: '18%', animation: 'floatB 8s ease-in-out infinite' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 820, padding: '80px 48px' }}>
        <p className="fu" style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, color: '#818cf8', fontFamily: 'var(--fh)', marginBottom: 20 }}>
          AI Support Agent
        </p>

        <h1 className="hero-h1 fu d1" style={{ fontFamily: 'var(--fh)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24, color: 'var(--text-1)' }}>
          Give your customers an answer.<br /><span className="gt">Not a queue.</span>
        </h1>

        <p className="fu d2" style={{ fontSize: 17.5, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 40, maxWidth: 660, marginLeft: 'auto', marginRight: 'auto' }}>
          LiveAgent brings a knowledgeable AI agent to your website — one that understands your approved knowledge, operates within your rules, can take governed actions when configured to do so, and gives your team visibility into what happened.
        </p>

        <div className="hero-ctas" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#experience" style={{ background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 15, padding: '14px 30px', borderRadius: 12, boxShadow: '0 0 40px rgba(79,110,247,0.45)', display: 'inline-block' }}>
            See LiveAgent in Action →
          </a>
          <button onClick={() => onBookDemo()} style={{ color: 'var(--text-1)', fontFamily: 'var(--fh)', fontWeight: 500, fontSize: 15, padding: '14px 26px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'rgba(255,255,255,0.04)', cursor: 'pointer' }}>
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
