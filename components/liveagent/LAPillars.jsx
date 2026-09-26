import SLabel from '@/components/SLabel';

function GroundedVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ padding: '11px 20px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'rgba(255,255,255,0.04)', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 13.5 }}>Customer question</div>
      <div style={{ color: 'var(--text-3)', fontSize: 16 }}>↓</div>
      <div style={{ padding: '14px 28px', borderRadius: 14, background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 14, boxShadow: '0 0 32px rgba(124,58,237,0.3)' }}>Your knowledge base</div>
      <div style={{ color: 'var(--text-3)', fontSize: 16 }}>↓</div>
      <div style={{ display: 'flex', gap: 10 }}>
        <div style={{ padding: '9px 16px', borderRadius: 10, fontSize: 12.5, fontFamily: 'var(--fh)', fontWeight: 700, color: '#34d399', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)' }}>Confident → Answer</div>
        <div style={{ padding: '9px 16px', borderRadius: 10, fontSize: 12.5, fontFamily: 'var(--fh)', fontWeight: 700, color: '#f87171', background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.25)' }}>Not confident → Escalate</div>
      </div>
    </div>
  );
}

function GovernedVisual() {
  const rules = [
    { trigger: 'Keyword match', action: '→ Escalate (before model runs)' },
    { trigger: 'Low retrieval confidence', action: '→ Escalate (after retrieval)' },
    { trigger: 'Once-only claim', action: '→ Never double-escalates' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 380 }}>
      {rules.map(r => (
        <div key={r.trigger} style={{ padding: '14px 18px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'var(--card)' }}>
          <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 13.5, color: '#818cf8', marginBottom: 4 }}>{r.trigger}</div>
          <div style={{ fontSize: 12.5, color: 'var(--text-2)' }}>{r.action}</div>
        </div>
      ))}
    </div>
  );
}

// Illustrative mockup only — needs a real screenshot from the admin console's
// retrieval-details view before this ships (redesign proposal §13, section 07).
function TraceabilityMockup() {
  return (
    <div style={{
      width: '100%', maxWidth: 420, textAlign: 'left',
      borderRadius: 16, border: '1px solid var(--border-md)', background: '#0d0d20',
      overflow: 'hidden', fontFamily: 'monospace', fontSize: 12.5,
    }}>
      <div style={{ padding: '10px 18px', borderBottom: '1px solid var(--border)', color: 'var(--text-3)', fontFamily: 'var(--fh)', fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Conversation #10482
      </div>
      <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 8, color: 'var(--text-2)', lineHeight: 1.8 }}>
        <div><span style={{ color: 'var(--text-3)' }}>Customer:</span> &quot;What is your cancellation policy?&quot;</div>
        <div><span style={{ color: '#34d399' }}>Knowledge retrieved:</span> Cancellation Policy v3 · Confidence: 0.91</div>
        <div><span style={{ color: '#34d399' }}>Agent instructions:</span> Customer Support Policy v2</div>
        <div><span style={{ color: 'var(--text-3)' }}>Response:</span> ...</div>
        <div><span style={{ color: 'var(--text-3)' }}>Latency:</span> ...</div>
      </div>
    </div>
  );
}

const PILLARS = [
  {
    id: 'grounded', eyebrow: 'Grounded', color: '#a78bfa', reverse: false,
    headline: 'Your knowledge. Not generic AI knowledge.',
    body: "LiveAgent answers from knowledge you upload and approve — PDF, DOCX, XLSX, CSV, TXT, Markdown, or your website — retrieved with a confidence floor. When nothing in your knowledge is a confident match, the system is built to escalate rather than let the model guess.",
    Visual: GroundedVisual,
  },
  {
    id: 'governed', eyebrow: 'Governed', color: '#818cf8', reverse: true,
    headline: 'The AI operates within rules you define — not just instructions you hope the model follows.',
    body: 'Escalation runs through a deterministic rule engine, evaluated before and after every model call, with configurable keyword and confidence triggers and a once-only claim that prevents double-escalation. This isn’t the model’s judgment call — it’s a rule your team configured.',
    Visual: GovernedVisual,
  },
  {
    id: 'traceable', eyebrow: 'Traceable', color: '#34d399', reverse: false,
    headline: 'See not just what it said. See why.',
    body: 'For any conversation, your team can inspect exactly which knowledge was retrieved, how confident the system was, the exact instructions it was given, and what happened next.',
    Visual: TraceabilityMockup,
  },
];

export default function LAPillars() {
  return (
    <>
      {PILLARS.map((p, i) => (
        <section key={p.id} id={p.id} className="section-pad" style={{ borderTop: i === 0 ? '1px solid var(--border)' : 'none', background: i % 2 === 1 ? 'rgba(255,255,255,0.012)' : 'transparent' }}>
          <div
            className="container not-avatar-grid"
            style={{ display: 'grid', gridTemplateColumns: p.reverse ? '0.9fr 1.1fr' : '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}
          >
            <div className="fu" style={{ order: p.reverse ? 2 : 1 }}>
              <SLabel color={p.color}>{p.eyebrow}</SLabel>
              <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-0.5px', lineHeight: 1.2, marginBottom: 18, fontSize: 30 }}>
                {p.headline}
              </h2>
              <p style={{ fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.8 }}>{p.body}</p>
            </div>
            <div className="fu d1" style={{ order: p.reverse ? 1 : 2, display: 'flex', justifyContent: 'center' }}>
              <p.Visual />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
