'use client';
import { useState } from 'react';
import SLabel from './SLabel';

const personas = [
  { name: 'Jal', element: 'Empathy Mode', color: '#60a5fa', symbol: '〰', tagline: "Creates space for answers people don't usually say out loud.", when: 'Sensitive topics · Emotional insights' },
  { name: 'Vayu', element: 'Discovery Mode', color: '#a78bfa', symbol: '≋', tagline: 'Explores unexpected directions to uncover new insight.', when: 'Exploration · Concept testing' },
  { name: 'Agni', element: 'Insight Mode', color: '#f97316', symbol: '▲', tagline: "Pushes past answers to find what's actually driving them.", when: 'Pain points · Opinion research' },
  { name: 'Prithvi', element: 'Clarity Mode', color: '#34d399', symbol: '⬡', tagline: 'Turns ambiguous feedback into structured understanding.', when: 'Structured research · Validation' },
  { name: 'Aakash', element: 'Reflection Mode', color: '#c084fc', symbol: '✦', tagline: "Surfaces thoughts people didn't know they had.", when: 'Strategy · Innovation · Future trends' },
];

export default function PersonasSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.07) 0%, transparent 70%)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <SLabel>AI Interview Personas</SLabel>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 14 }}>
            The right conversation<br /><span className="gt">for every kind of question</span>
          </h2>
          <p className="fu d1" style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 580, margin: '0 auto 56px', lineHeight: 1.75 }}>
            Rik AI adapts how it asks — not just what it asks. Each persona shapes the tone, pacing, and style of every participant interaction based on your research goal. The result is better conversations, and richer insights.
          </p>
        </div>
        <div className="personas-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
          {personas.map((p, i) => (
            <div key={i} className={`fu d${i + 1}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ padding: '28px 20px', borderRadius: 18, background: hovered === i ? `linear-gradient(145deg, ${p.color}14, ${p.color}06)` : 'var(--card)', border: `1px solid ${hovered === i ? p.color + '40' : 'var(--border)'}`, transition: 'all 0.3s', cursor: 'default', textAlign: 'center', boxShadow: hovered === i ? `0 16px 48px ${p.color}18` : 'none', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: `${p.color}16`, border: `1.5px solid ${p.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', fontSize: 22, color: p.color, transition: 'all 0.3s', boxShadow: hovered === i ? `0 0 28px ${p.color}35` : 'none' }}>{p.symbol}</div>
              <div style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 20, color: p.color, marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: p.color, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>{p.element}</div>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-1)', lineHeight: 1.55, marginBottom: 'auto', fontFamily: 'var(--fh)', flexGrow: 1 }}>{p.tagline}</p>
              <div style={{ marginTop: 20, fontSize: 11, color: p.color, lineHeight: 1.55, padding: '8px 12px', background: `${p.color}10`, borderRadius: 8, border: `1px solid ${p.color}25` }}>
                <span style={{ fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 9, display: 'block', marginBottom: 4, opacity: 0.7 }}>Best for</span>
                {p.when}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
