import SLabel from '@/components/SLabel';

const FORMATS = [
  { label: 'PDF', color: '#f87171' },
  { label: 'DOCX', color: '#818cf8' },
  { label: 'XLSX', color: '#34d399' },
  { label: 'CSV', color: '#f59e0b' },
  { label: 'TXT', color: '#c4b5fd' },
  { label: 'Markdown', color: '#60a5fa' },
  { label: 'Websites', color: '#a78bfa' },
];

export default function LAKnowledge() {
  return (
    <section id="knowledge" className="section-pad" style={{ background: 'rgba(255,255,255,0.012)', borderTop: '1px solid var(--border)' }}>
      <div className="container not-avatar-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
        <div className="fu">
          <SLabel color="#a78bfa">Knowledge</SLabel>
          <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 20, fontSize: 32 }}>
            Not generic AI knowledge.<br /><span className="gt">Your knowledge.</span>
          </h2>
          <p style={{ fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.8 }}>
            Upload your documentation or point LiveAgent at your website — it turns your approved knowledge into the foundation for every conversation.
          </p>
        </div>
        <div className="fu d1 caps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {FORMATS.map(f => (
            <div key={f.label} style={{ padding: '18px 14px', borderRadius: 14, border: `1px solid ${f.color}30`, background: `${f.color}0d`, textAlign: 'center' }}>
              <span style={{ fontSize: 13.5, fontFamily: 'var(--fh)', fontWeight: 700, color: f.color }}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
