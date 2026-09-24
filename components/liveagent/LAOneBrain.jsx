import SLabel from '@/components/SLabel';

function Chip({ label, color }) {
  return (
    <div style={{
      padding: '14px 22px', borderRadius: 14, border: `1px solid ${color}35`,
      background: `${color}12`, fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14.5,
      color: 'var(--text-1)', textAlign: 'center', whiteSpace: 'nowrap',
    }}>{label}</div>
  );
}

export default function LAOneBrain() {
  return (
    <section id="one-brain" className="section-pad">
      <div className="container" style={{ textAlign: 'center' }}>
        <SLabel color="#818cf8">Multi-Channel by Design</SLabel>
        <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 18 }}>
          One agent. Every channel.<br /><span className="gt">One brain.</span>
        </h2>
        <p className="fu d1" style={{ fontSize: 16.5, color: 'var(--text-2)', maxWidth: 640, margin: '0 auto 56px', lineHeight: 1.75 }}>
          Your customers can reach LiveAgent through web chat, an avatar with voice, or voice alone. These aren&apos;t three separate bots wearing different interfaces — they&apos;re different entry points into the same agent brain, all calling the same shared reasoning core.
        </p>

        <div className="fu d2 one-brain-diagram" style={{ maxWidth: 620, margin: '0 auto' }}>
          <div className="one-brain-row" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
            <Chip label="Web Chat" color="#818cf8" />
            <Chip label="Avatar + Voice" color="#818cf8" />
            <Chip label="Voice" color="#818cf8" />
          </div>
          <div style={{ color: 'var(--text-3)', fontSize: 20, margin: '4px 0' }}>↓</div>
          <div style={{
            display: 'inline-block', padding: '18px 40px', borderRadius: 18,
            background: 'var(--grad)', boxShadow: '0 0 48px rgba(79,110,247,0.4)',
            fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 17, color: '#fff', margin: '4px 0 12px',
          }}>ONE AGENT BRAIN</div>
          <div style={{ color: 'var(--text-3)', fontSize: 20, margin: '4px 0' }}>↓</div>
          <div className="one-brain-row" style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
            <Chip label="Knowledge" color="#a78bfa" />
            <Chip label="Rules" color="#a78bfa" />
            <Chip label="Actions" color="#a78bfa" />
          </div>
        </div>

        <p className="fu d3" style={{ fontSize: 15, color: 'var(--text-3)', maxWidth: 520, margin: '40px auto 0', lineHeight: 1.7, fontStyle: 'italic' }}>
          The channel is just the interface. The intelligence underneath is shared.
        </p>
      </div>
    </section>
  );
}
