import SLabel from '@/components/SLabel';

export default function LANotAvatar() {
  return (
    <section id="how-it-works" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />
      <div className="container not-avatar-grid" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center' }}>
        <div className="fu">
          <SLabel>How It Works</SLabel>
          <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 20 }}>
            Not an avatar.<br /><span className="gt">A support agent.</span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 16 }}>
            The avatar is what your customer sees. The intelligence underneath is what you&apos;re buying.
          </p>
          <p style={{ fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.8 }}>
            Anyone can put an AI avatar on a website. The hard part is the system underneath it. LiveAgent combines your knowledge, controlled AI reasoning, and deterministic rules into one agent core — not a scripted bot wearing a face. The avatar itself is swappable behind that core; the platform is what stays.
          </p>
        </div>

        <div className="fu d1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Knowledge', 'Reasoning', 'Rules'].map(t => (
              <span key={t} style={{ padding: '9px 16px', borderRadius: 10, fontSize: 12.5, fontFamily: 'var(--fh)', fontWeight: 700, color: '#c4b5fd', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)' }}>{t}</span>
            ))}
          </div>
          <div style={{ color: 'var(--text-3)', fontSize: 18 }}>↓</div>
          <div style={{ padding: '16px 32px', borderRadius: 16, background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 15, boxShadow: '0 0 40px rgba(124,58,237,0.35)' }}>AGENT CORE</div>
          <div style={{ color: 'var(--text-3)', fontSize: 18 }}>↓</div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Chat', 'Voice', 'Avatar'].map(t => (
              <span key={t} style={{ padding: '9px 16px', borderRadius: 10, fontSize: 12.5, fontFamily: 'var(--fh)', fontWeight: 700, color: 'var(--text-1)', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-md)' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
