'use client';
import { useState } from 'react';
import SLabel from './SLabel';

const queries = [
  {
    q: 'What are the top concerns from our NPS survey this month?',
    a: {
      summary: 'I analyzed 847 responses from your Q2 NPS study. Three themes are driving your detractor scores:',
      themes: [
        { label: 'Onboarding Complexity', pct: 34, detail: '"The setup felt overwhelming. I needed more guidance at the start."', sentiment: 'negative' },
        { label: 'Feature Discoverability', pct: 28, detail: "\"I didn't know half these features existed until a colleague told me.\"", sentiment: 'neutral' },
        { label: 'Support Response Time', pct: 21, detail: '"For a paid product, response times were slower than I expected."', sentiment: 'negative' },
      ],
      rec: 'Recommendation: Onboarding is your highest-leverage fix. It affects new users in their first 30 days and correlates with 2× churn risk in months 2–3.',
    },
  },
  {
    q: 'Which customer segment is most at risk of churning right now?',
    a: {
      summary: 'Cross-referencing your last 3 studies, the highest churn risk profile is:',
      themes: [
        { label: 'SMB accounts under 90 days old', pct: 62, detail: 'Low activation score. No team members added. Accessed portal < 3 times.', sentiment: 'negative' },
        { label: 'Users who skipped onboarding', pct: 47, detail: 'Never completed their first study. Pattern consistent with Q1 churners.', sentiment: 'negative' },
        { label: 'Single-seat Growth plan accounts', pct: 38, detail: 'High initial activity then a sharp drop-off after week 3.', sentiment: 'neutral' },
      ],
      rec: 'Trigger a targeted check-in study for accounts matching criteria 1 and 2. Estimated recovery potential: 18% of at-risk monthly revenue.',
    },
  },
  {
    q: 'How has sentiment shifted since last quarter?',
    a: {
      summary: "Comparing Q1 and Q2 across 1,240 responses, here's what moved:",
      themes: [
        { label: 'Positive sentiment', pct: 58, detail: 'Up from 44% — new UI and faster load times are being noticed.', sentiment: 'positive' },
        { label: 'Neutral / mixed', pct: 28, detail: 'Stable. Most neutral feedback clusters around pricing clarity.', sentiment: 'neutral' },
        { label: 'Negative sentiment', pct: 14, detail: 'Down from 26%. Support investment in Q1 is showing clear results.', sentiment: 'positive' },
      ],
      rec: 'Trend is strongly positive. Remaining negatives are concentrated in enterprise accounts — a targeted follow-up study is worth scheduling.',
    },
  },
];

const sentColors = { positive: '#4ade80', neutral: '#f59e0b', negative: '#f87171' };

export default function AskRishiSection() {
  const [activeQ, setActiveQ] = useState(0);
  const q = queries[activeQ];

  return (
    <section id="rishi" className="section-pad" style={{ background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 65% 50%, rgba(79,110,247,0.08) 0%, transparent 70%)' }} />
      <div className="container" style={{ position: 'relative' }}>
        <div className="rishi-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' }}>
          {/* Left */}
          <div>
            <SLabel color="#60a5fa">Ask Rishi</SLabel>
            <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.1, marginBottom: 16 }}>
              Ask anything about<br />your customers.<br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Get a clear answer in seconds.</span>
            </h2>
            <p className="fu d1" style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-1)', marginBottom: 6, letterSpacing: '-0.3px' }}>Your AI research analyst — always on, always ready.</p>
            <p className="fu d2" style={{ fontSize: 14, color: '#60a5fa', fontWeight: 600, marginBottom: 10 }}>From question to insight in minutes — no waiting, no digging.</p>
            <p className="fu d3" style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 12 }}>
              Ask Rishi anything about your customers. It reads your research data, surfaces themes, patterns, and signals — and returns a clear, decision-ready answer.
            </p>
            <p className="fu d4" style={{ fontSize: 12.5, color: 'var(--text-3)', lineHeight: 1.7, marginBottom: 32 }}>
              Designed to grow with your research across languages and channels — Rishi connects the signals that matter most to your team.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 36 }}>
              {['Surfaces context from your research data', 'Surfaces themes, not just statistics', 'Explains its reasoning, not just its findings', 'Recommends next actions based on evidence'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: 6, background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" fill="none" /></svg>
                  </div>
                  <span style={{ fontSize: 14.5, color: 'var(--text-2)' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Try an example query</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {queries.map((item, i) => (
                <button key={i} onClick={() => setActiveQ(i)} style={{ padding: '10px 16px', borderRadius: 10, border: '1px solid', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--fb)', fontSize: 13, transition: 'all 0.2s', lineHeight: 1.4, borderColor: activeQ === i ? 'rgba(96,165,250,0.4)' : 'var(--border)', background: activeQ === i ? 'rgba(96,165,250,0.1)' : 'transparent', color: activeQ === i ? '#93c5fd' : 'var(--text-2)' }}>"{item.q}"</button>
              ))}
            </div>
          </div>

          {/* Right — Chat UI */}
          <div className="fu d2">
            <div style={{ background: '#0c0c1e', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(79,110,247,0.15)' }}>
              <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: 'linear-gradient(135deg, #4f6ef7, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 14 }}>✦</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14 }}>Ask Rishi</div>
                  <div style={{ fontSize: 10, color: '#4ade80', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} /> Live · 847 responses analyzed
                  </div>
                </div>
              </div>
              <div style={{ padding: '20px 20px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
                  <div style={{ maxWidth: '80%', background: 'linear-gradient(135deg, #4f6ef7, #7c3aed)', borderRadius: '16px 16px 4px 16px', padding: '12px 16px', fontSize: 13, lineHeight: 1.55 }}>{q.q}</div>
                </div>
                <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #4f6ef7, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}><span style={{ fontSize: 12 }}>✦</span></div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px 16px 16px 4px', padding: '16px 18px', border: '1px solid rgba(255,255,255,0.08)', flex: 1 }}>
                    <p style={{ fontSize: 12.5, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 14 }}>{q.a.summary}</p>
                    {q.a.themes.map((t, i) => (
                      <div key={i} style={{ marginBottom: 13 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-1)' }}>
                            <span style={{ color: sentColors[t.sentiment], marginRight: 6 }}>{'①②③'[i]}</span>{t.label}
                          </span>
                          <span style={{ fontSize: 12, fontWeight: 700, color: sentColors[t.sentiment] }}>{t.pct}%</span>
                        </div>
                        <div style={{ height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 2, marginBottom: 5 }}>
                          <div style={{ height: '100%', width: `${t.pct}%`, background: sentColors[t.sentiment], borderRadius: 2, opacity: 0.7 }} />
                        </div>
                        <p style={{ fontSize: 11, color: 'var(--text-3)', lineHeight: 1.5 }}>{t.detail}</p>
                      </div>
                    ))}
                    <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(124,58,237,0.12)', borderRadius: 10, border: '1px solid rgba(124,58,237,0.22)' }}>
                      <p style={{ fontSize: 11.5, color: '#c4b5fd', lineHeight: 1.6 }}>{q.a.rec}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '12px 16px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '10px 16px', fontSize: 12, color: 'var(--text-3)' }}>Ask Rishi anything about your customers...</div>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
