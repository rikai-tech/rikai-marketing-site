'use client';
import { useState, useEffect, useRef } from 'react';

const PORTALS = [
  {
    key: 'voice',
    label: 'Voice Portal',
    sub: 'For Survey Respondents',
    desc: 'Join a research study, complete a survey, or share your feedback.',
    href: 'https://survey.rikai.tech',
    grad: 'linear-gradient(135deg,rgba(124,58,237,0.3),rgba(79,110,247,0.2))',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
      </svg>
    ),
  },
  {
    key: 'customer',
    label: 'Customer Portal',
    sub: 'For Teams & Organisations',
    desc: 'Access your Rik AI workspace, manage projects, and view insights.',
    href: 'https://customer.rikai.tech',
    grad: 'linear-gradient(135deg,rgba(79,110,247,0.3),rgba(124,58,237,0.15))',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    key: 'liveagent-admin',
    label: 'LiveAgent Admin Console',
    sub: 'Coming soon',
    desc: 'Configure and manage your LiveAgent support agents.',
    href: '#',
    disabled: true,
    grad: 'linear-gradient(135deg,rgba(245,158,11,0.25),rgba(124,58,237,0.15))',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 21v-1a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7v1"/>
      </svg>
    ),
  },
];

const PRODUCTS_DROPDOWN = [
  { key: 'market-research', label: 'Market Research', sub: 'Understand your customers', href: '/products/market-research' },
  { key: 'liveagent', label: 'LiveAgent', sub: 'Take care of your customers', href: '/products/liveagent' },
];

const LOCAL_LINKS = {
  'market-research': [
    { label: 'Platform', href: '/products/market-research#features' },
    { label: 'Ask Rishi', href: '/products/market-research#rishi' },
    { label: 'Solutions', href: '/products/market-research#personas' },
    { label: 'Product', href: '/products/market-research#product' },
  ],
  liveagent: [
    { label: 'Overview', href: '/products/liveagent#la-hero' },
    { label: 'How It Works', href: '/products/liveagent#how-it-works' },
    { label: 'Security', href: '/products/liveagent#governed' },
    { label: 'Traceability', href: '/products/liveagent#traceable' },
    { label: "Who It's For", href: '/products/liveagent#who-for' },
  ],
};

const GLOBAL_CTA = { 'market-research': 'Book a Market Research Demo', liveagent: 'Book a LiveAgent Demo' };

export default function NavBar({ onBookDemo, activeProduct, ctaLabel }) {
  const [scrolled, setScrolled] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const signInRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (signInRef.current && !signInRef.current.contains(e.target)) setSignInOpen(false);
      if (productsRef.current && !productsRef.current.contains(e.target)) setProductsOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const links = LOCAL_LINKS[activeProduct] || null;
  const resolvedCta = ctaLabel || GLOBAL_CTA[activeProduct] || 'Book a Demo';

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    height: '68px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 48px',
    background: scrolled ? 'rgba(8,8,26,0.88)' : 'transparent',
    backdropFilter: scrolled ? 'blur(24px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
    transition: 'all 0.35s ease',
  };

  const linkStyle = {
    color: 'rgba(240,240,255,0.68)', fontSize: '15px',
    fontFamily: 'var(--fb)', fontWeight: 450,
    transition: 'color 0.2s', cursor: 'pointer',
  };

  return (
    <nav style={navStyle}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="/uploads/logo_upload-1776774656314.png" alt="Rik AI" style={{ height: '38px', width: 'auto' }} />
        <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: '21px', color: 'var(--text-1)', letterSpacing: '-0.5px' }}>
          Rik<span className="gt">.ai</span>
        </span>
      </a>

      <div className="nav-links" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {links ? (
          links.map(l => (
            <a key={l.label} href={l.href} style={linkStyle}
              onMouseEnter={e => e.currentTarget.style.color = '#f0f0ff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,255,0.68)'}
            >{l.label}</a>
          ))
        ) : (
          <>
            <div ref={productsRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setProductsOpen(o => !o)}
                style={{ ...linkStyle, background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center', gap: 5 }}
                onMouseEnter={e => e.currentTarget.style.color = '#f0f0ff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,255,0.68)'}
              >
                Products
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transition: 'transform 0.2s', transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.6 }}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {productsOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 14px)', left: '50%', transform: 'translateX(-50%)',
                  width: 270, background: '#0d0d20', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 16,
                  boxShadow: '0 32px 80px rgba(0,0,0,0.7)', overflow: 'hidden', zIndex: 300, padding: 8,
                }}>
                  {PRODUCTS_DROPDOWN.map(p => (
                    <a key={p.key} href={p.href} onClick={() => setProductsOpen(false)} style={{
                      display: 'block', padding: '12px 14px', borderRadius: 10, textDecoration: 'none',
                      transition: 'background 0.15s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(124,58,237,0.1)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14, color: 'var(--text-1)', marginBottom: 2 }}>{p.label}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{p.sub}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="/about" style={linkStyle}
              onMouseEnter={e => e.currentTarget.style.color = '#f0f0ff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,255,0.68)'}
            >About</a>
            <a href="/contact" style={linkStyle}
              onMouseEnter={e => e.currentTarget.style.color = '#f0f0ff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,255,0.68)'}
            >Contact</a>
          </>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

        {/* Sign in with dropdown — hidden on mobile */}
        <div ref={signInRef} className="nav-desktop-only" style={{ position: 'relative' }}>
          <button
            onClick={() => setSignInOpen(o => !o)}
            style={{
              ...linkStyle,
              padding: '8px 14px',
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#f0f0ff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,255,0.68)'}
          >
            Sign in
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              style={{ transition: 'transform 0.2s', transform: signInOpen ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.6 }}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dropdown */}
          {signInOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 12px)', right: 0,
              width: 310,
              background: '#0d0d20',
              border: '1px solid rgba(124,58,237,0.2)',
              borderRadius: 18,
              boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
              backdropFilter: 'blur(24px)',
              overflow: 'hidden',
              zIndex: 300,
            }}>
              {/* Header hint */}
              <div style={{ padding: '12px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--fh)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Sign in to
                </p>
              </div>

              {/* Portal cards */}
              <div style={{ padding: '8px' }}>
                {PORTALS.map((portal, i) => (
                  <a
                    key={portal.key}
                    href={portal.href}
                    target={portal.disabled ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    onClick={(e) => { if (portal.disabled) { e.preventDefault(); return; } setSignInOpen(false); }}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: 14,
                      padding: '14px 12px',
                      borderRadius: 12,
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                      background: 'transparent',
                      opacity: portal.disabled ? 0.55 : 1,
                      cursor: portal.disabled ? 'default' : 'pointer',
                      marginBottom: i < PORTALS.length - 1 ? 4 : 0,
                    }}
                    onMouseEnter={e => { if (!portal.disabled) e.currentTarget.style.background = 'rgba(124,58,237,0.1)'; }}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    {/* Icon box */}
                    <div style={{
                      width: 42, height: 42, borderRadius: 11, flexShrink: 0,
                      background: portal.grad,
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{portal.icon}</div>

                    {/* Text stack */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: '0 0 3px', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14, color: 'var(--text-1)', lineHeight: 1.3 }}>
                        {portal.label}
                      </p>
                      <p style={{ margin: '0 0 6px', fontFamily: 'var(--fh)', fontSize: 11, fontWeight: 600, color: portal.disabled ? '#fcd34d' : '#a78bfa', lineHeight: 1.3, letterSpacing: '0.02em' }}>
                        {portal.sub}
                      </p>
                      <p style={{ margin: 0, fontFamily: 'var(--fb)', fontSize: 12, color: 'var(--text-3)', lineHeight: 1.65 }}>
                        {portal.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    {!portal.disabled && (
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ flexShrink: 0, opacity: 0.3, marginTop: 3 }}>
                        <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div style={{ padding: '8px 16px 12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ margin: 0, fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--fb)' }}>
                  Not sure?{' '}
                  <a href="/contact" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}>Contact us</a>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Desktop CTA — hidden on mobile */}
        <button className="nav-desktop-only" onClick={() => onBookDemo()} style={{
          background: 'var(--grad)', color: '#fff',
          fontFamily: 'var(--fh)', fontWeight: 600, fontSize: '14px',
          padding: '10px 22px', borderRadius: '10px',
          boxShadow: '0 0 28px rgba(124,58,237,0.45)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          border: 'none', cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 32px rgba(124,58,237,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(124,58,237,0.45)'; }}
        >{resolvedCta}</button>

        {/* Hamburger — visible on mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
          style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-md)', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center' }}
        >
          <span style={{ display: 'block', width: 18, height: 1.5, background: mobileOpen ? 'transparent' : 'var(--text-1)', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--text-1)', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(-45deg)' : 'none' }} />
          {!mobileOpen && <span style={{ display: 'block', width: 18, height: 1.5, background: 'var(--text-1)', transition: 'all 0.2s' }} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" style={{
          position: 'fixed', top: 68, left: 0, right: 0, bottom: 0,
          background: 'rgba(8,8,26,0.97)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '24px 24px 32px',
          overflowY: 'auto',
          zIndex: 199,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 24 }}>
            {(links || [
              { label: 'Market Research', href: '/products/market-research' },
              { label: 'LiveAgent', href: '/products/liveagent' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ]).map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} style={{ padding: '13px 12px', borderRadius: 10, fontSize: 17, fontFamily: 'var(--fh)', fontWeight: 600, color: 'var(--text-2)', display: 'block', transition: 'background 0.15s, color 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-1)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-2)'; }}
              >{l.label}</a>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PORTALS.filter(p => !p.disabled).map(portal => (
              <a key={portal.key} href={portal.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 12, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', textDecoration: 'none' }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: portal.grad, border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{portal.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 14, color: 'var(--text-1)' }}>{portal.label}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{portal.sub}</div>
                </div>
              </a>
            ))}
            <button onClick={() => { onBookDemo(); setMobileOpen(false); }} style={{ background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, padding: '14px 24px', borderRadius: 12, border: 'none', cursor: 'pointer', marginTop: 4, boxShadow: '0 0 28px rgba(124,58,237,0.4)' }}>
              {resolvedCta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
