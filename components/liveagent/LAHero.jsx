'use client';
import LADemoCard from './LADemoCard';

const HIGHLIGHTS = [
  { label: 'Natural', body: 'A real conversation, not a decision tree.' },
  { label: 'Grounded', body: 'Answers pulled from your approved knowledge, cited inline.' },
  { label: 'Governed', body: 'Order actions confirmed before anything happens.' },
  { label: 'Escalation', body: "When it isn't sure, it raises a ticket instead of guessing." },
];

// Note: no launch-stage badge here on purpose — the redesign proposal (§12
// "still open") flags that the real launch stage (early access vs. live)
// needs confirmation before any badge copy ships. Add one once that's decided.
export default function LAHero({ onBookDemo }) {
  return (
    <section id="la-hero" style={{ position: 'relative', overflow: 'hidden', paddingTop: 140, paddingBottom: 96 }}>
      <div className="orb" style={{ width: 680, height: 680, background: 'radial-gradient(circle, rgba(79,110,247,0.2) 0%, transparent 70%)', top: -140, right: -120, animation: 'float 10s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 420, height: 420, background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)', bottom: -60, left: '18%', animation: 'floatB 8s ease-in-out infinite' }} />

      <div className="container not-avatar-grid" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center' }}>
        <div className="fu">
          <p style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, color: '#818cf8', fontFamily: 'var(--fh)', marginBottom: 20 }}>
            AI Support Agent
          </p>

          <h1 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 44, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 22, color: 'var(--text-1)' }}>
            Give your customers an answer.<br /><span className="gt">Not a queue.</span>
          </h1>

          <p style={{ fontSize: 16.5, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 32, maxWidth: 480 }}>
            LiveAgent brings a knowledgeable AI agent to your website — grounded in your approved knowledge, operating within your rules, visible to your team. Try the live demo.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
            {HIGHLIGHTS.map(h => (
              <div key={h.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700, color: '#818cf8', background: 'rgba(79,110,247,0.12)', border: '1px solid rgba(79,110,247,0.25)', fontFamily: 'var(--fh)', flexShrink: 0, marginTop: 2, whiteSpace: 'nowrap' }}>{h.label}</span>
                <span style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.6 }}>{h.body}</span>
              </div>
            ))}
          </div>

          <div className="hero-ctas" style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onBookDemo()} style={{ background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 15, padding: '14px 30px', borderRadius: 12, boxShadow: '0 0 40px rgba(79,110,247,0.45)', border: 'none', cursor: 'pointer' }}>
              Book a Demo
            </button>
            <a href="#problem" style={{ fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14.5, color: 'var(--text-2)' }}>
              See how it works ↓
            </a>
          </div>
        </div>

        <div className="fu d1" id="experience">
          <LADemoCard />
        </div>
      </div>
    </section>
  );
}
