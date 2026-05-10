'use client';
import { useState } from 'react';
import SLabel from './SLabel';

const personas = [
  { role: 'CX & Customer Success', tagline: 'Never miss a churn signal again.', body: "Rik AI monitors sentiment and satisfaction continuously — so your team acts on warning signs before they become cancellations. Stop reviewing last month's NPS. Start responding to today's.", outcomes: ['Real-time satisfaction monitoring across every touchpoint', 'Automatic alerts when sentiment drops in a segment', 'AI-generated weekly digests, ready for team meetings'], color: '#60a5fa' },
  { role: 'UX & Product Research', tagline: "Scale qual insights. Don't scale headcount.", body: 'Run async video studies, concept tests, and usability research simultaneously. AI handles transcription, theme extraction, and analysis — you focus on what the findings mean.', outcomes: ['10× more studies per researcher per quarter', 'Auto-generated reports with zero manual coding', 'Video insight highlights without hours of review'], color: '#a78bfa' },
  { role: 'Product Management', tagline: 'Build with evidence, not assumptions.', body: 'From concept validation to post-launch retrospectives, Rik AI gives PMs a continuous signal on what users need — so roadmap prioritization is grounded in data, not gut feel.', outcomes: ['Validate features before a sprint begins', 'Link customer language directly to roadmap items', 'Measure launch impact with structured post-release studies'], color: '#34d399' },
  { role: 'Strategy & Leadership', tagline: 'A real-time pulse on your market.', body: "As a founder or exec, you need honest signal fast. Rik AI gives you a direct line to customer sentiment and market intelligence — without needing a dedicated research team to interpret it.", outcomes: ['Voice-of-customer evidence for board and investor updates', 'Competitive positioning signal from real user language', 'Continuous PMF monitoring from day one'], color: '#f59e0b' },
];

export default function UseCasesSection() {
  const [active, setActive] = useState(0);
  const p = personas[active];

  return (
    <section id="personas" className="section-pad">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SLabel>Who It's For</SLabel>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15 }}>
            Built for every team that<br /><span className="gt">wants to truly understand their customers</span>
          </h2>
        </div>
        <div className="usecase-tabs" style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          {personas.map((per, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ padding: '10px 24px', borderRadius: 10, border: '1px solid', cursor: 'pointer', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14, transition: 'all 0.25s', borderColor: active === i ? `${per.color}60` : 'var(--border)', background: active === i ? `${per.color}18` : 'transparent', color: active === i ? per.color : 'var(--text-2)' }}>{per.role}</button>
          ))}
        </div>
        <div className="usecase-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', background: 'var(--card2)', borderRadius: 24, border: '1px solid var(--border)', padding: '56px 64px' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>{p.role}</div>
            <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 28, lineHeight: 1.2, marginBottom: 20, color: p.color }}>{p.tagline}</h3>
            <p style={{ fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 36 }}>{p.body}</p>
            <a href="#cta" style={{ display: 'inline-block', background: `${p.color}18`, border: `1px solid ${p.color}40`, color: p.color, padding: '12px 26px', borderRadius: 10, fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = `${p.color}28`}
              onMouseLeave={e => e.currentTarget.style.background = `${p.color}18`}
            >See how {p.role} use Rik AI →</a>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>Key outcomes</div>
            {p.outcomes.map((o, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 22 }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, background: `${p.color}18`, border: `1px solid ${p.color}38`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke={p.color} strokeWidth="2" strokeLinecap="round" fill="none" /></svg>
                </div>
                <span style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.65 }}>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
