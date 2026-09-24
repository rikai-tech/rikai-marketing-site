import SLabel from '@/components/SLabel';

const STEPS = [
  { n: '01', title: 'Capture', body: 'The agent collects the required information.' },
  { n: '02', title: 'Verify', body: 'Each captured value is checked against evidence in the actual conversation.' },
  { n: '03', title: 'Confirm', body: 'The customer receives a version-bound confirmation before anything submits.' },
  { n: '04', title: 'Submit', body: 'Only after confirmation does the system send the request.' },
  { n: '05', title: 'Protect', body: 'Tool calls are idempotent; submission uses signed, idempotency-keyed webhooks.' },
];

export default function LAAction() {
  return (
    <section id="action" className="section-pad" style={{ background: 'rgba(255,255,255,0.012)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <SLabel color="#f59e0b">Governed Action</SLabel>
        <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 22 }}>
          Here&apos;s what governed AI<br /><span className="gt">looks like in practice.</span>
        </h2>
        <p className="fu d1" style={{ fontSize: 16.5, color: 'var(--text-2)', maxWidth: 620, margin: '0 auto 56px', lineHeight: 1.8 }}>
          If you let an AI interact with your customers, the real question is: how do you know it won&apos;t just do something wrong?
          This is rik.ai&apos;s concrete answer.
        </p>

        <div className="action-steps fu d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 40, textAlign: 'left' }}>
          {STEPS.map(s => (
            <div key={s.n} style={{ padding: '22px 18px', borderRadius: 16, background: 'var(--card)', border: '1px solid var(--border)' }}>
              <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#fcd34d', fontWeight: 700, marginBottom: 12 }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, color: 'var(--text-1)', marginBottom: 8 }}>{s.title}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.6 }}>{s.body}</div>
            </div>
          ))}
        </div>

        <p className="fu d3" style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 18, color: 'var(--text-1)', maxWidth: 560, margin: '0 auto' }}>
          This is AI that operates within a process — not AI that simply generates text.
        </p>
      </div>
    </section>
  );
}
