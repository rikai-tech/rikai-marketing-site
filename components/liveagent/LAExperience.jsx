import SLabel from '@/components/SLabel';

// Illustrative mockup only. The redesign proposal (§13, section 02) calls for
// an actual recorded LiveAgent conversation here — replace this static mockup
// with that real demo asset once it's captured. Do not present this as a
// real product screenshot.
export default function LAExperience() {
  return (
    <section id="experience" className="section-pad" style={{ position: 'relative' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <SLabel color="#818cf8">The Experience</SLabel>
        <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 48 }}>
          A real conversation,<br /><span className="gt">powered by a real agent.</span>
        </h2>

        <div className="fu d1" style={{
          maxWidth: 560, margin: '0 auto', borderRadius: 20, border: '1px solid rgba(79,110,247,0.3)',
          background: '#0d0d20', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.55)', textAlign: 'left',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 20px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: 12, color: 'var(--text-3)', fontFamily: 'var(--fh)', fontWeight: 600, letterSpacing: '0.05em' }}>LIVEAGENT · CHAT + AVATAR + VOICE</span>
          </div>
          <div style={{ padding: '22px 22px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ alignSelf: 'flex-end', maxWidth: '82%', background: 'rgba(255,255,255,0.06)', borderRadius: '14px 14px 3px 14px', padding: '11px 16px', fontSize: 14.5, color: 'var(--text-1)' }}>
              &quot;I ordered this three days ago. When will it arrive?&quot;
            </div>
            <div style={{ alignSelf: 'flex-start', maxWidth: '88%', background: 'rgba(79,110,247,0.14)', border: '1px solid rgba(79,110,247,0.24)', borderRadius: '14px 14px 14px 3px', padding: '11px 16px', fontSize: 14.5, color: 'var(--text-1)' }}>
              &quot;Let me check that for you...&quot;
            </div>
            <div style={{ alignSelf: 'flex-start', maxWidth: '88%', background: 'rgba(79,110,247,0.14)', border: '1px solid rgba(79,110,247,0.24)', borderRadius: '14px 14px 14px 3px', padding: '11px 16px', fontSize: 14.5, color: 'var(--text-1)' }}>
              &quot;It shipped yesterday via express delivery and should arrive by Thursday. Want me to send tracking to your email?&quot;
            </div>
          </div>
        </div>

        <p className="fu d2" style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 24 }}>
          Illustrative conversation. <a href="/contact" style={{ color: '#a78bfa' }}>See LiveAgent live →</a>
        </p>
      </div>
    </section>
  );
}
