'use client';

export default function LACTA({ onBookDemo }) {
  return (
    <section id="la-cta" style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(79,110,247,0.16) 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(79,110,247,0.5), transparent)' }} />
      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--fh)', fontSize: 50, fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 24 }}>
          Give your customers an answer.<br /><span className="gt">Not a wait.</span>
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-2)', maxWidth: 560, margin: '0 auto 44px', lineHeight: 1.75 }}>
          Put a grounded, governed AI support agent on the front line of your customer experience.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 22 }}>
          <button onClick={() => onBookDemo()} style={{ background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 12, border: 'none', cursor: 'pointer', boxShadow: '0 0 40px rgba(79,110,247,0.45)' }}>
            Book a LiveAgent Demo →
          </button>
          <a href="mailto:sales@rikai.tech?subject=LiveAgent%20Enquiry%20%E2%80%94%20Rik%20AI" style={{ display: 'inline-block', padding: '13px 28px', borderRadius: 12, border: '1px solid var(--border-md)', background: 'rgba(255,255,255,0.04)', color: 'var(--text-2)', fontFamily: 'var(--fh)', fontWeight: 500, fontSize: 14 }}>
            Contact Sales at sales@rikai.tech
          </a>
        </div>

        <p style={{ fontSize: 13, color: 'var(--text-3)' }}>Tenant-isolated by design · Every action traceable · Sandbox-tested before it ever talks to a customer</p>
      </div>
    </section>
  );
}
