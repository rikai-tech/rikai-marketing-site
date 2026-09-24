import SLabel from '@/components/SLabel';

export default function LAEscalation() {
  return (
    <section id="escalation" className="section-pad">
      <div className="container fu" style={{ maxWidth: 680, textAlign: 'center' }}>
        <SLabel color="#f87171">Escalation</SLabel>
        <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 20, fontSize: 32 }}>
          When AI can&apos;t resolve it,<br />the customer doesn&apos;t start over.
        </h2>
        <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.8 }}>
          When LiveAgent can&apos;t confidently resolve a question, it raises a ticket and links the full conversation, giving your support team complete context the moment they pick it up.
        </p>
      </div>
    </section>
  );
}
