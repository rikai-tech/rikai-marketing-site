'use client';
import SLabel from '@/components/SLabel';

const SCOPE_FACTORS = [
  { label: 'Research scope', body: 'From exploratory studies to large-scale qualitative programs.' },
  { label: 'Audience & volume', body: 'Scale from focused studies to high-volume insight programs.' },
  { label: 'Data & integrations', body: 'Bring together surveys, reviews, transcripts and other customer signals.' },
  { label: 'Collaboration', body: 'Give your teams the access and workflows they need to turn insights into action.' },
];

export default function VoicePricing({ onBookDemo }) {
  return (
    <div className="fu" style={{
      maxWidth: 860, margin: '0 auto', padding: '48px 44px', borderRadius: 24,
      border: '1px solid var(--border-md)',
      background: 'linear-gradient(160deg, rgba(124,58,237,0.08), rgba(79,110,247,0.03))',
      textAlign: 'center',
    }}>
      <SLabel color="#c4b5fd">Tailored To Your Research</SLabel>
      <h2 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 28, letterSpacing: '-0.5px', marginBottom: 14, color: 'var(--text-1)' }}>
        Your research is unique. Your Voice engagement should be too.
      </h2>
      <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, maxWidth: 620, margin: '0 auto 36px' }}>
        Every research program has its own objectives, audiences, data sources and scale. We work with you to design the right Voice solution for your needs — and scope it as a tailored engagement.
      </p>

      <div className="usecase-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, textAlign: 'left', marginBottom: 28 }}>
        {SCOPE_FACTORS.map(f => (
          <div key={f.label} style={{ padding: '18px 20px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
            <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 13.5, color: '#c4b5fd', marginBottom: 6 }}>{f.label}</div>
            <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{f.body}</div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 13, color: 'var(--text-3)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 32px' }}>
        We scope each engagement around your research objectives, data sources, scale and integrations, and provide a tailored Statement of Work.
      </p>

      <button
        onClick={onBookDemo}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 12,
          background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15,
          border: 'none', cursor: 'pointer', boxShadow: '0 0 32px rgba(124,58,237,0.4)',
        }}
      >Let&apos;s design your Voice engagement →</button>
    </div>
  );
}
