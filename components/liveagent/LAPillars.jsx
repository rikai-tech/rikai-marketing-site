import SLabel from '@/components/SLabel';

// Illustrative mockup only — needs a real screenshot from the admin console's
// retrieval-details view before this ships (redesign proposal §13, section 07).
function TraceabilityMockup() {
  return (
    <div style={{
      marginTop: 28, maxWidth: 520, margin: '28px auto 0', textAlign: 'left',
      borderRadius: 16, border: '1px solid var(--border-md)', background: '#0d0d20',
      overflow: 'hidden', fontFamily: 'monospace', fontSize: 12.5,
    }}>
      <div style={{ padding: '10px 18px', borderBottom: '1px solid var(--border)', color: 'var(--text-3)', fontFamily: 'var(--fh)', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Conversation #10482
      </div>
      <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--text-2)', lineHeight: 1.8 }}>
        <div><span style={{ color: 'var(--text-3)' }}>Customer:</span> &quot;What is your cancellation policy?&quot;</div>
        <div><span style={{ color: '#818cf8' }}>Knowledge retrieved:</span> Cancellation Policy v3 · Confidence: 0.91</div>
        <div><span style={{ color: '#818cf8' }}>Agent instructions:</span> Customer Support Policy v2</div>
        <div><span style={{ color: 'var(--text-3)' }}>Response:</span> ...</div>
        <div><span style={{ color: 'var(--text-3)' }}>Latency:</span> ...</div>
      </div>
    </div>
  );
}

const PILLARS = [
  {
    id: 'grounded',
    eyebrow: 'Grounded',
    color: '#a78bfa',
    headline: 'Your knowledge. Not generic AI knowledge.',
    body: "LiveAgent answers from knowledge you upload and approve — PDF, DOCX, XLSX, CSV, TXT, Markdown, or your website — retrieved with a confidence floor. When nothing in your knowledge is a confident match, the system is built to escalate rather than let the model guess.",
  },
  {
    id: 'governed',
    eyebrow: 'Governed',
    color: '#818cf8',
    headline: 'The AI operates within rules you define — not just instructions you hope the model follows.',
    body: 'Escalation runs through a deterministic rule engine, evaluated before and after every model call, with configurable keyword and confidence triggers and a once-only claim that prevents double-escalation. This isn’t the model’s judgment call — it’s a rule your team configured.',
  },
  {
    id: 'traceable',
    eyebrow: 'Traceable',
    color: '#34d399',
    headline: 'See not just what it said. See why.',
    body: 'For any conversation, your team can inspect exactly which knowledge was retrieved, how confident the system was, the exact instructions it was given, and what happened next.',
    extra: <TraceabilityMockup />,
  },
];

export default function LAPillars() {
  return (
    <>
      {PILLARS.map((p, i) => (
        <section key={p.id} id={p.id} className="section-pad" style={{ borderTop: i === 0 ? '1px solid var(--border)' : 'none', textAlign: 'center' }}>
          <div className="container fu" style={{ maxWidth: 660 }}>
            <SLabel color={p.color}>{p.eyebrow}</SLabel>
            <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: 20, fontSize: 32 }}>
              {p.headline}
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.8 }}>{p.body}</p>
            {p.extra}
          </div>
        </section>
      ))}
    </>
  );
}
