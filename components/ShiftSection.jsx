import SLabel from './SLabel';

const rows = [
  ['Collect data. Analyze it later.', 'Understand customers the moment they speak.'],
  ['Dashboards tell you what happened.', 'Intelligence tells you what to do about it.'],
  ['Fragmented tools. Fragmented thinking.', 'One unified signal layer. One clear picture.'],
  ['Research takes weeks to deliver.', 'Launch studies in hours. Decide the same day.'],
  ['Insights live in reports no one reads.', 'Every team gets the signal that matters to them.'],
];

export default function ShiftSection() {
  return (
    <section id="howitworks" className="section-pad" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SLabel>A Different Way of Working</SLabel>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Traditional tools collect feedback.<br /><span className="gt">Rik AI operationalizes understanding.</span>
          </h2>
          <p className="fu d1" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Traditional research tools are built to collect data. Rik AI is built to continuously interpret it — automatically transforming signals into intelligence every team can act on.
          </p>
          <div className="fu d2" style={{ margin: '0 auto 48px', maxWidth: 720, padding: '28px 40px', background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,110,247,0.07))', borderRadius: 16, border: '1px solid rgba(124,58,237,0.22)' }}>
            <p style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 700, color: 'var(--text-1)', textAlign: 'center', lineHeight: 1.4, margin: 0 }}>
              Dashboards show you what happened.<br />
              <span className="gt">Rik AI tells you what to do next.</span>
            </p>
          </div>
        </div>
        <div className="fu shift-table" style={{ borderRadius: 20, border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div className="shift-header" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--card2)' }}>
            <div style={{ padding: '18px 36px', borderBottom: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
              <span style={{ fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 12, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>The old way</span>
            </div>
            <div style={{ padding: '18px 36px', borderBottom: '1px solid var(--border)', background: 'rgba(124,58,237,0.06)' }}>
              <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 12, color: '#c4b5fd', letterSpacing: '0.08em', textTransform: 'uppercase' }}>✦  With Rik AI</span>
            </div>
          </div>
          {rows.map(([old, neo], i) => (
            <div key={i} className="shift-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: i < rows.length - 1 ? '1px solid var(--border)' : 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.015)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div className="shift-old" style={{ padding: '24px 36px', borderRight: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ color: 'rgba(239,68,68,0.4)', fontSize: 15, flexShrink: 0 }}>✕</span>
                <span style={{ fontSize: 15, color: 'var(--text-3)', lineHeight: 1.55 }}>{old}</span>
              </div>
              <div className="shift-new" style={{ padding: '24px 36px', display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(124,58,237,0.025)' }}>
                <span style={{ color: '#4ade80', fontSize: 15, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 15, color: 'var(--text-1)', fontWeight: 500, lineHeight: 1.55 }}>{neo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
