import SLabel from '@/components/SLabel';

function Chip({ label, color }) {
  return (
    <div style={{
      padding: '12px 20px', borderRadius: 12, border: `1px solid ${color}35`,
      background: `${color}12`, fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14,
      color: 'var(--text-1)', textAlign: 'center', whiteSpace: 'nowrap',
    }}>{label}</div>
  );
}

export default function LAOneBrain() {
  return (
    <section id="one-brain" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container not-avatar-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
        <div className="fu">
          <SLabel color="#818cf8">Multi-Channel by Design</SLabel>
          <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 20 }}>
            One agent. Every channel.<br /><span className="gt">One brain.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 16 }}>
            Your customers can reach LiveAgent through web chat, an avatar with voice, or voice alone. These aren&apos;t three separate bots wearing different interfaces — they&apos;re different entry points into the same agent brain, all calling the same shared reasoning core.
          </p>
          <p style={{ fontSize: 15, color: 'var(--text-3)', lineHeight: 1.7, fontStyle: 'italic' }}>
            The channel is just the interface. The intelligence underneath is shared.
          </p>
        </div>

        <div className="fu d1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Chip label="Web Chat" color="#818cf8" />
            <Chip label="Avatar + Voice" color="#818cf8" />
            <Chip label="Voice" color="#818cf8" />
          </div>
          <div style={{ color: 'var(--text-3)', fontSize: 18 }}>↓</div>
          <div style={{
            padding: '16px 32px', borderRadius: 16,
            background: 'var(--grad)', boxShadow: '0 0 40px rgba(79,110,247,0.35)',
            fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 15, color: '#fff',
          }}>ONE AGENT BRAIN</div>
          <div style={{ color: 'var(--text-3)', fontSize: 18 }}>↓</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Chip label="Knowledge" color="#a78bfa" />
            <Chip label="Rules" color="#a78bfa" />
            <Chip label="Actions" color="#a78bfa" />
          </div>
        </div>
      </div>
    </section>
  );
}
