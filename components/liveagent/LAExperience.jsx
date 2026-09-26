import SLabel from '@/components/SLabel';

const HIGHLIGHTS = [
  { label: 'Natural', body: 'A real conversation, not a decision tree.' },
  { label: 'Grounded', body: 'Answers pulled from your approved knowledge.' },
  { label: 'Governed', body: 'Actions checked before anything happens.' },
];

// Illustrative mockup only. The redesign proposal (§13, section 02) calls for
// an actual recorded LiveAgent conversation here — replace this static mockup
// with that real demo asset once it's captured. Do not present this as a
// real product screenshot.
export default function LAExperience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container not-avatar-grid" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 64, alignItems: 'center' }}>
        <div className="fu">
          <SLabel color="#818cf8">The Experience</SLabel>
          <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 20 }}>
            A real conversation,<br /><span className="gt">powered by a real agent.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {HIGHLIGHTS.map(h => (
              <div key={h.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700, color: '#818cf8', background: 'rgba(79,110,247,0.12)', border: '1px solid rgba(79,110,247,0.25)', fontFamily: 'var(--fh)', flexShrink: 0, marginTop: 2 }}>{h.label}</span>
                <span style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.6 }}>{h.body}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fu d1" style={{
          borderRadius: 20, border: '1px solid rgba(79,110,247,0.3)',
          background: '#0d0d20', overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.55)',
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
          <div style={{ padding: '10px 22px 18px' }}>
            <p style={{ fontSize: 12, color: 'var(--text-3)' }}>
              Illustrative conversation. <a href="/contact" style={{ color: '#a78bfa' }}>See LiveAgent live →</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
