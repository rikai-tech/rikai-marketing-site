const CREDIBILITY = [
  'Enterprise-grade security and privacy, built in from day one',
  'AI-powered, human-verified',
  'Built by one team, for how real teams work',
];

const buttonStyle = {
  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 30px', borderRadius: 12,
  fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 15, transition: 'transform 0.2s',
};

export default function HomeClosingCTA() {
  return (
    <section style={{ padding: '80px 0 100px', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
      <div className="container fu">
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 56 }}>
          {CREDIBILITY.map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 100, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--purple-light)', flexShrink: 0 }} />
              <span style={{ fontSize: 12.5, color: 'var(--text-3)' }}>{item}</span>
            </div>
          ))}
        </div>
        <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 14, color: 'var(--text-1)' }}>
          Where would you like to start?
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-2)', marginBottom: 32 }}>Listen deeper with Voice, or respond smarter with LiveAgent.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/products/voice" style={{ ...buttonStyle, background: 'var(--grad)', color: '#fff', boxShadow: '0 0 32px rgba(124,58,237,0.4)' }}>Explore Voice →</a>
          <a href="/products/liveagent" style={{ ...buttonStyle, background: 'var(--grad)', color: '#fff', boxShadow: '0 0 32px rgba(79,110,247,0.4)' }}>Explore LiveAgent →</a>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-3)', marginTop: 28 }}>
          Not sure which fits? <a href="/contact" style={{ color: 'var(--text-2)', textDecoration: 'underline' }}>Talk to us</a>
        </p>
      </div>
    </section>
  );
}
