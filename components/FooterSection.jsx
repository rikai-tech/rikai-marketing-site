const cols = [
  {
    title: 'Products',
    links: [
      { label: 'Voice', href: '/products/voice' },
      { label: 'LiveAgent', href: '/products/liveagent' },
      { label: 'Compare Products', href: '/products' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Voice',
    links: [
      { label: 'Platform Capabilities', href: '/products/voice#features' },
      { label: 'How It Works', href: '/products/voice#howitworks' },
      { label: 'Ask Rishi', href: '/products/voice#rishi' },
    ],
  },
  {
    title: 'LiveAgent',
    links: [
      { label: 'Overview', href: '/products/liveagent#la-hero' },
      { label: 'How It Works', href: '/products/liveagent#how-it-works' },
      { label: 'Integrations', href: '/products/liveagent#knowledge' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Trust Center', href: '/trust' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function FooterSection() {
  return (
    <footer style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '72px 0 40px' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img src="/uploads/logo_upload-1776774656314.png" alt="Rik AI" style={{ height: 36 }} />
              <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20 }}>Rik<span className="gt">.ai</span></span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-3)', lineHeight: 1.8, maxWidth: 240, marginBottom: 8 }}>Understand your customers. Take care of them, too. Two AI product lines, one conviction.</p>
            <p style={{ fontSize: 12, color: 'rgba(167,139,250,0.4)' }}>Inspired by knowledge. Built for clarity.</p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 13, color: 'var(--text-1)', marginBottom: 20 }}>{col.title}</div>
              {col.links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{ display: 'block', fontSize: 13.5, color: 'var(--text-3)', marginBottom: 12, transition: 'color 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                >{l.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom" style={{ borderTop: '1px solid var(--border)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: 'var(--text-3)' }}>© 2026 Rik Systems LLP. All rights reserved.</span>
          <span style={{ fontSize: 13, color: 'var(--text-3)' }}>Inspired by knowledge. Built for clarity.</span>
        </div>
      </div>
    </footer>
  );
}
