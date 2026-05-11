import SLabel from './SLabel';

const items = [
  { icon: '◈', title: 'Built for messy, real-world data', body: 'Rik AI automatically handles incomplete responses, mixed-format inputs, contradictory signals, and low-quality entries — without manual cleanup or preprocessing.', color: '#a78bfa' },
  { icon: '◇', title: 'No data team required', body: "You don't need analysts or engineers to uncover meaningful insight. Every layer is built for researchers, PMs, and CX teams that need answers fast.", color: '#60a5fa' },
  { icon: '▣', title: 'Handles the complexity you actually face', body: 'Multi-segment studies. Mixed-language panels. Async video across time zones. Skip logic on branching studies. Standard workflows — not edge cases.', color: '#34d399' },
  { icon: '◉', title: 'Moves at the pace of your decisions', body: "Go from study launch to AI-generated insight in hours, not weeks. Built for teams where research needs to inform this week's decision — not next quarter's review.", color: '#f59e0b' },
];

export default function TrustSection() {
  return (
    <section className="section-pad" style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(34,197,94,0.04) 0%, transparent 70%)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SLabel color="#34d399">Built for Reality</SLabel>
          <h2 className="fu" style={{ fontFamily: 'var(--fh)', fontSize: 46, fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Built for real-world<br /><span style={{ background: 'linear-gradient(135deg, #34d399, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>complexity</span>
          </h2>
          <p className="fu d1" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            Most research tools work perfectly in demos. Rik AI was built for the workflows that happen in practice — the messy, fast-moving reality of how teams actually gather and understand customer signals.
          </p>
        </div>
        <div className="trust-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {items.map((item, i) => (
            <div key={i} className={`fu d${i % 2 + 1}`} style={{ padding: '36px 32px', background: 'var(--card)', borderRadius: 20, border: '1px solid var(--border)', display: 'flex', gap: 24, alignItems: 'flex-start', transition: 'border-color 0.3s, transform 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${item.color}38`; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 14, background: `${item.color}16`, border: `1px solid ${item.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: item.color, flexShrink: 0 }}>{item.icon}</div>
              <div>
                <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 18, marginBottom: 10, color: 'var(--text-1)', lineHeight: 1.3 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.8 }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
