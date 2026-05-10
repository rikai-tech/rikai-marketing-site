import SLabel from './SLabel';

const caps = [
  { icon: '◈', title: 'Understand what customers actually mean — not just what they select', body: 'Open-ended responses clustered into themes, scored for sentiment, summarized in plain language — the moment they arrive. No manual coding. No queue.', tag: 'AI Analysis', color: '#a78bfa' },
  { icon: '✦', title: 'Ask anything about your customers. Get a decision-ready answer.', body: 'Natural language queries across all your research data. Ask Rishi connects signals across studies and surfaces what matters — in seconds, not spreadsheets.', tag: 'Ask Rishi', color: '#60a5fa', highlight: true },
  { icon: '◇', title: 'Get research live in hours. Make decisions the same day.', body: 'Multi-format studies with skip logic and branching — live in hours. Research moves at the speed of your roadmap, not weeks behind it.', tag: 'Study Builder', color: '#34d399' },
  { icon: '◉', title: 'Capture meaning from text, video, and voice — in one place', body: 'Participants respond in the format that suits them. You get unified analysis across all formats — not siloed reports from three separate tools.', tag: 'Multi-Format', color: '#f59e0b' },
  { icon: '▣', title: 'Know when something changes before it becomes a problem', body: 'Real-time health monitoring on every active study. Automatic alerts on response drops, sentiment shifts, and anomalies — before they affect your findings.', tag: 'Monitoring', color: '#f87171' },
  { icon: '◐', title: 'Insights that reach every team that needs to act on them', body: "Role-based digests, shareable reports, one-click exports. Findings go where decisions are being made — not filed where they'll be forgotten.", tag: 'Distribution', color: '#c084fc' },
];

export default function CapabilitiesSection() {
  return (
    <section id="features" className="section-pad">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SLabel>Platform Capabilities</SLabel>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 16 }}>
            Everything your team needs<br /><span className="gt">to go from feedback to action</span>
          </h2>
        </div>
        <div className="caps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {caps.map((f, i) => (
            <div key={i} className={`fu d${(i % 3) + 1}`} style={{ padding: '28px', background: f.highlight ? 'linear-gradient(145deg, rgba(96,165,250,0.1), rgba(124,58,237,0.08))' : 'var(--card)', borderRadius: 'var(--r)', border: `1px solid ${f.highlight ? 'rgba(96,165,250,0.3)' : 'var(--border)'}`, transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s', cursor: 'default', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${f.color}45`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 16px 48px ${f.color}12`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = f.highlight ? 'rgba(96,165,250,0.3)' : 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: 80, background: `radial-gradient(circle at top right, ${f.color}14, transparent 70%)` }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: `${f.color}18`, border: `1px solid ${f.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: f.color }}>{f.icon}</div>
                <span style={{ fontSize: 10, fontWeight: 700, color: f.color, background: `${f.color}15`, padding: '3px 9px', borderRadius: 6, letterSpacing: '0.05em' }}>{f.tag}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 17, marginBottom: 10, lineHeight: 1.35 }}>{f.title}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.75 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
