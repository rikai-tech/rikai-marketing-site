export default function HomeClosingCTA() {
  return (
    <section style={{ padding: '80px 0 100px', textAlign: 'center' }}>
      <div className="container fu">
        <p style={{ fontSize: 17, color: 'var(--text-2)', marginBottom: 18 }}>Not sure where to start?</p>
        <a href="/contact" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '14px 30px', borderRadius: 12, border: '1px solid var(--border-md)',
          background: 'rgba(255,255,255,0.04)', color: 'var(--text-1)',
          fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 15, transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'var(--border-md)'; }}
        >Talk to us →</a>
      </div>
    </section>
  );
}
