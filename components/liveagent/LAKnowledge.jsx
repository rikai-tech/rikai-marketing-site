import SLabel from '@/components/SLabel';

const FORMATS = ['PDF', 'DOCX', 'XLSX', 'CSV', 'TXT', 'Markdown', 'Websites'];

export default function LAKnowledge() {
  return (
    <section id="knowledge" className="section-pad" style={{ background: 'rgba(255,255,255,0.012)', borderTop: '1px solid var(--border)' }}>
      <div className="container fu" style={{ maxWidth: 680, textAlign: 'center' }}>
        <SLabel color="#a78bfa">Knowledge</SLabel>
        <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.2, marginBottom: 24, fontSize: 32 }}>
          Not generic AI knowledge.<br /><span className="gt">Your knowledge.</span>
        </h2>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 26 }}>
          {FORMATS.map(f => (
            <span key={f} style={{ padding: '8px 16px', borderRadius: 100, fontSize: 13, fontFamily: 'var(--fh)', fontWeight: 600, color: 'var(--text-1)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-md)' }}>{f}</span>
          ))}
        </div>
        <p style={{ fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.8 }}>
          Upload your documentation or point LiveAgent at your website — it turns your approved knowledge into the foundation for every conversation.
        </p>
      </div>
    </section>
  );
}
