import SLabel from './SLabel';

const problems = [
  { icon: '⏱', color: '#60a5fa', title: 'Insights arrive after the decision is already made', body: 'Traditional tools surface data days or weeks later. Your team deserves intelligence that keeps pace with the speed of your decisions — not one step behind them.' },
  { icon: '◈', color: '#a78bfa', title: 'Your data is rich. Your answers still feel uncertain.', body: "Dashboards show what happened — but not why, or what to do next. Your team shouldn't have to bridge that gap manually every single time." },
  { icon: '⚡', color: '#f59e0b', title: 'Every tool is an island. Nothing connects the full picture.', body: 'Surveys here, video there, analysis somewhere else. Each handoff loses signal. Rik AI brings every format together so nothing falls through the cracks.' },
  { icon: '🔒', color: '#f87171', title: 'Great research deserves to drive real change', body: 'Too often, findings reach the right people too late — or not at all. Rik AI routes insights to every team that needs to act on them, right when it matters.' },
];

export default function ProblemSection() {
  return (
    <section className="section-pad" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.055) 0%, transparent 70%)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <SLabel>The Problem</SLabel>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15 }}>
            Your team is collecting signals.<br /><span className="gt">The challenge is knowing what to do next.</span>
          </h2>
          <p className="fu d1" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 540, margin: '20px auto 0', lineHeight: 1.7 }}>
            Rik AI bridges the gap between the customer data you already have and the confident, timely decisions your team needs to make.
          </p>
        </div>
        <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {problems.map((p, i) => (
            <div key={i} className={`fu d${i + 1}`} style={{ padding: '28px 24px', background: 'var(--card)', borderRadius: 'var(--r)', border: '1px solid var(--border)', transition: 'border-color 0.3s, transform 0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ fontSize: 26, marginBottom: 16, color: p.color }}>{p.icon}</div>
              <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, marginBottom: 12, color: p.color, lineHeight: 1.4 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.75 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
