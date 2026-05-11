import SLabel from './SLabel';

const pillars = [
  { icon: '◈', color: '#a78bfa', title: 'Multi-modal signal capture', body: 'Whether your study captures text responses, video interviews, or voice notes — Rik AI processes and analyses each format, extracting meaning and themes so nothing gets lost.', label: 'Text · Video · Voice' },
  { icon: '✦', color: '#60a5fa', title: 'Multi-language understanding', body: 'Your customers speak different languages. Understand feedback across all of them — without losing meaning in translation. No manual localization needed.', label: 'Global-ready by default' },
  { icon: '◉', color: '#34d399', title: 'Response quality you can trust', body: 'Built-in quality validation flags low-effort responses, contradictory answers, and speeders before they reach your analysis — so your decisions rest on genuine signal, not noise.', label: 'Signal integrity built-in' },
  { icon: '◇', color: '#f59e0b', title: 'Insights that build as you research', body: 'Every response is processed and made available the moment it arrives. As your study collects more responses, your aggregate understanding deepens in real time.', label: 'Cumulative intelligence' },
  { icon: '▣', color: '#818cf8', title: 'Built for trust from day one', body: 'Customer data is handled securely across every interaction. Privacy-first design with controlled access, defined retention policies, and enterprise-grade encryption throughout.', label: 'Security & Privacy' },
];

export default function UnderstandingSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 40% at 30% 60%, rgba(96,165,250,0.06) 0%, transparent 70%)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SLabel color="#a78bfa">Signal Intelligence</SLabel>
          <h2 className="fu" style={{ fontFamily: 'var(--fh)', fontSize: 46, fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Understanding every signal<br /><span className="gt">that matters</span>
          </h2>
          <p className="fu d1" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            The depth of your customer understanding should never be constrained by format, language, or data quality. Rik AI removes each of those limits.
          </p>
        </div>
        <div className="understand-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {pillars.map((p, i) => (
            <div key={i} className={`fu d${i + 1}`} style={{ padding: '28px 20px', background: 'var(--card)', borderRadius: 'var(--r)', border: '1px solid var(--border)', transition: 'border-color 0.3s, transform 0.3s', cursor: 'default', position: 'relative', overflow: 'hidden', textAlign: 'center' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.color}40`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 60, background: `radial-gradient(ellipse at 50% 0%, ${p.color}12, transparent 70%)` }} />
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${p.color}18`, border: `1px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: p.color, margin: '0 auto 16px' }}>{p.icon}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: p.color, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 10 }}>{p.label}</div>
              <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, marginBottom: 10, lineHeight: 1.35 }}>{p.title}</h3>
              <p style={{ fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.75 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
