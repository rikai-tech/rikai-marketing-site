import SLabel from '@/components/SLabel';

const HIGHLIGHTS = [
  { label: 'Natural', body: 'A real conversation, not a decision tree.' },
  { label: 'Grounded', body: 'Answers pulled from your approved knowledge, cited inline.' },
  { label: 'Governed', body: 'Order actions confirmed before anything happens.' },
  { label: 'Escalation', body: "When it isn't sure, it raises a ticket instead of guessing." },
];

// Real widget UI, scripted for demonstration. The chat panel markup and CSS
// are copied verbatim from live-agent-app's apps/support-widget (chat-view.ts
// / styles.ts) and driven through a fixed, written conversation — not a live
// model call. See /public/videos/liveagent-demo.mp4. Replace with real
// captured footage once a live sandbox with provider credentials exists.
export default function LAExperience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container not-avatar-grid" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 64, alignItems: 'center' }}>
        <div className="fu">
          <SLabel color="#818cf8">The Experience</SLabel>
          <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 20 }}>
            A real conversation,<br /><span className="gt">powered by a real agent.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {HIGHLIGHTS.map(h => (
              <div key={h.label} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700, color: '#818cf8', background: 'rgba(79,110,247,0.12)', border: '1px solid rgba(79,110,247,0.25)', fontFamily: 'var(--fh)', flexShrink: 0, marginTop: 2, whiteSpace: 'nowrap' }}>{h.label}</span>
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
            <span style={{ fontSize: 12, color: 'var(--text-3)', fontFamily: 'var(--fh)', fontWeight: 600, letterSpacing: '0.05em' }}>LIVEAGENT · CHAT WIDGET</span>
          </div>
          <video
            poster="/videos/liveagent-demo-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
            style={{ display: 'block', width: '100%', height: 'auto', background: '#eef0f3' }}
          >
            <source src="/videos/liveagent-demo.mp4" type="video/mp4" />
            <source src="/videos/liveagent-demo.webm" type="video/webm" />
            Your browser doesn&apos;t support embedded video.
          </video>
          <div style={{ padding: '10px 22px 18px' }}>
            <p style={{ fontSize: 12, color: 'var(--text-3)' }}>
              LiveAgent&apos;s real chat interface, scripted for demonstration. <a href="/contact" style={{ color: '#a78bfa' }}>See it live →</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
