import SLabel from '@/components/SLabel';

const problems = [
  { icon: '⏳', color: '#818cf8', title: 'Waiting', body: "Customers have questions outside business hours." },
  { icon: '🔍', color: '#a78bfa', title: 'Searching', body: 'Answers are scattered across docs, macros, and tribal knowledge.' },
  { icon: '↻', color: '#f59e0b', title: 'Repeating themselves', body: "Every hand-off means explaining the issue again from scratch." },
  { icon: '💬', color: '#f87171', title: 'Generic chatbot responses', body: 'Scripted flows that deflect instead of actually helping.' },
];

export default function LAProblem() {
  return (
    <section id="problem" className="section-pad" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(79,110,247,0.05) 0%, transparent 70%)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SLabel color="#818cf8">The Problem</SLabel>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15 }}>
            Your customers don&apos;t want to submit a ticket.<br /><span className="gt">They want an answer.</span>
          </h2>
        </div>
        <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 40 }}>
          {problems.map((p, i) => (
            <div key={p.title} className={`fu d${i + 1}`} style={{ padding: '28px 24px', background: 'var(--card)', borderRadius: 'var(--r)', border: '1px solid var(--border)', transition: 'border-color 0.3s, transform 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(79,110,247,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: 24, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, marginBottom: 10, color: p.color }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.7 }}>{p.body}</p>
            </div>
          ))}
        </div>
        <p className="fu" style={{ textAlign: 'center', fontSize: 15.5, color: 'var(--text-2)', maxWidth: 560, margin: '0 auto' }}>
          Then, finally, creating a ticket. LiveAgent is designed to change that interaction.
        </p>
      </div>
    </section>
  );
}
