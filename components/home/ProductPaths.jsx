'use client';

// Illustrative mockup only — not a captured product screenshot. Replace with
// a real LiveAgent conversation recording/screenshot when the demo asset
// referenced in the redesign proposal (§12/§13) is ready.
function LiveAgentSnippet() {
  return (
    <div style={{
      marginTop: 24, borderRadius: 16, border: '1px solid rgba(124,58,237,0.25)',
      background: '#0d0d20', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderBottom: '1px solid var(--border)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
        <span style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--fh)', fontWeight: 600, letterSpacing: '0.04em' }}>LIVEAGENT · LIVE CONVERSATION</span>
      </div>
      <div style={{ padding: '18px 18px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ alignSelf: 'flex-end', maxWidth: '80%', background: 'rgba(255,255,255,0.06)', borderRadius: '12px 12px 2px 12px', padding: '9px 14px', fontSize: 13.5, color: 'var(--text-1)' }}>
          "What's the status of my order?"
        </div>
        <div style={{ alignSelf: 'flex-start', maxWidth: '85%', background: 'rgba(124,58,237,0.14)', border: '1px solid rgba(124,58,237,0.22)', borderRadius: '12px 12px 12px 2px', padding: '9px 14px', fontSize: 13.5, color: 'var(--text-1)' }}>
          "Let me check that for you — it shipped yesterday and should arrive by Thursday."
        </div>
      </div>
    </div>
  );
}

export default function ProductPaths() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="product-paths-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>

          {/* Understand — Market Research */}
          <div className="fu" style={{
            padding: '44px 40px', borderRadius: 24, border: '1px solid var(--border)',
            background: 'linear-gradient(160deg, rgba(124,58,237,0.06), rgba(124,58,237,0.01))',
            display: 'flex', flexDirection: 'column',
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', fontFamily: 'var(--fh)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Understand</span>
            <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 30, letterSpacing: '-0.5px', marginBottom: 16, color: 'var(--text-1)' }}>Market Research</h3>
            <p style={{ fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 28, flex: 1 }}>
              Turn customer conversations, feedback, and research into clear, confident decisions — across every format, language, and channel.
            </p>
            <a href="/products/market-research" style={{
              alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px', borderRadius: 12, background: 'var(--grad)', color: '#fff',
              fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14.5, boxShadow: '0 0 32px rgba(124,58,237,0.4)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >Explore Market Research →</a>
          </div>

          {/* Act — LiveAgent */}
          <div className="fu d1" style={{
            padding: '44px 40px', borderRadius: 24, border: '1px solid var(--border)',
            background: 'linear-gradient(160deg, rgba(79,110,247,0.08), rgba(79,110,247,0.01))',
            display: 'flex', flexDirection: 'column',
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#818cf8', fontFamily: 'var(--fh)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>Act</span>
            <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 30, letterSpacing: '-0.5px', marginBottom: 16, color: 'var(--text-1)' }}>LiveAgent</h3>
            <p style={{ fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 4 }}>
              Put a knowledgeable AI support agent on your website — grounded in your knowledge, governed by your rules, and built to make every interaction accountable.
            </p>
            <LiveAgentSnippet />
            <a href="/products/liveagent" style={{
              alignSelf: 'flex-start', marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px', borderRadius: 12, background: 'var(--grad)', color: '#fff',
              fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14.5, boxShadow: '0 0 32px rgba(124,58,237,0.4)',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >Explore LiveAgent →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
