'use client';
import SLabel from '@/components/SLabel';

const SCOPE_FACTORS = [
  { label: 'Data sources', body: 'Surveys, reviews, support transcripts, call recordings — however many channels you need unified.' },
  { label: 'Volume', body: 'How much customer signal you’re processing monthly.' },
  { label: 'Integrations', body: 'Connecting into your existing CRM, helpdesk, or data warehouse.' },
  { label: 'Team seats', body: 'How many people need workspace access.' },
];

export default function VoicePricing({ onBookDemo }) {
  return (
    <div className="fu" style={{
      maxWidth: 860, margin: '0 auto', padding: '48px 44px', borderRadius: 24,
      border: '1px solid var(--border-md)',
      background: 'linear-gradient(160deg, rgba(124,58,237,0.08), rgba(79,110,247,0.03))',
      textAlign: 'center',
    }}>
      <SLabel color="#c4b5fd">Custom Scope</SLabel>
      <h2 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 28, letterSpacing: '-0.5px', marginBottom: 14, color: 'var(--text-1)' }}>
        Voice is scoped to your project, not sold off a price list.
      </h2>
      <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, maxWidth: 620, margin: '0 auto 36px' }}>
        Every Voice engagement is different — the data sources, the volume, the integrations. We scope it with you and price it as a Statement of Work, so you’re paying for exactly what you need.
      </p>

      <div className="usecase-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, textAlign: 'left', marginBottom: 40 }}>
        {SCOPE_FACTORS.map(f => (
          <div key={f.label} style={{ padding: '18px 20px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
            <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 13.5, color: '#c4b5fd', marginBottom: 6 }}>{f.label}</div>
            <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>{f.body}</div>
          </div>
        ))}
      </div>

      <button
        onClick={onBookDemo}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 12,
          background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15,
          border: 'none', cursor: 'pointer', boxShadow: '0 0 32px rgba(124,58,237,0.4)',
        }}
      >Talk to us about Voice →</button>
    </div>
  );
}
