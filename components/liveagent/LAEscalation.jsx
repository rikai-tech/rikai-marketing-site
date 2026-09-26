import SLabel from '@/components/SLabel';

function TicketVisual() {
  return (
    <div style={{ width: '100%', maxWidth: 380, borderRadius: 16, border: '1px solid rgba(248,113,113,0.25)', background: 'var(--card)', overflow: 'hidden' }}>
      <div style={{ padding: '12px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 11, fontFamily: 'var(--fh)', fontWeight: 700, color: '#f87171', letterSpacing: '0.05em' }}>TICKET #4821</span>
        <span style={{ fontSize: 10, fontFamily: 'var(--fh)', fontWeight: 700, color: '#fcd34d', background: 'rgba(245,158,11,0.15)', padding: '3px 10px', borderRadius: 100 }}>NEW</span>
      </div>
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontSize: 13, color: 'var(--text-1)', fontFamily: 'var(--fh)', fontWeight: 600 }}>Escalated: low retrieval confidence</div>
        <div style={{ fontSize: 12.5, color: 'var(--text-3)' }}>Linked conversation: #10482</div>
        <div style={{ fontSize: 12.5, color: 'var(--text-3)' }}>Full transcript viewable in backoffice</div>
      </div>
    </div>
  );
}

export default function LAEscalation() {
  return (
    <section id="escalation" className="section-pad">
      <div className="container not-avatar-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
        <div className="fu">
          <SLabel color="#f87171">Escalation</SLabel>
          <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 20, fontSize: 32 }}>
            When AI can&apos;t resolve it,<br />the customer doesn&apos;t start over.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.8 }}>
            When LiveAgent can&apos;t confidently resolve a question, it raises a ticket and links the full conversation, giving your support team complete context the moment they pick it up.
          </p>
        </div>
        <div className="fu d1" style={{ display: 'flex', justifyContent: 'center' }}>
          <TicketVisual />
        </div>
      </div>
    </section>
  );
}
