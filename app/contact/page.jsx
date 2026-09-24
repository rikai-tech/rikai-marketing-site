'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import SLabel from '@/components/SLabel';

const inputStyle = {
  width: '100%', padding: '12px 14px', borderRadius: 10,
  border: '1px solid var(--border-md)', background: 'rgba(255,255,255,0.05)',
  color: 'var(--text-1)', fontSize: 14.5, outline: 'none',
  fontFamily: 'var(--fb)', boxSizing: 'border-box',
};

const labelStyle = {
  fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 600,
  color: 'var(--text-2)', display: 'block', marginBottom: 6,
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', product: 'Not sure', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | sent | error

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fu:not(.vis)').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const isValid = form.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && form.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid || status === 'loading') return;
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('server');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <NavBar onBookDemo={() => (window.location.href = '/products')} />
      <main>
        <section className="section-pad" style={{ paddingTop: 140 }}>
          <div className="container" style={{ maxWidth: 980, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>

            {/* Left — copy + direct contacts */}
            <div className="fu">
              <SLabel>Contact</SLabel>
              <h1 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 18, color: 'var(--text-1)' }}>
                Let&apos;s talk.
              </h1>
              <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 36 }}>
                Tell us which product you&apos;re interested in and we&apos;ll route you to the right person — or just ask us anything.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 36 }}>
                <a href="mailto:sales@rikai.tech" style={{ display: 'flex', flexDirection: 'column', gap: 2, textDecoration: 'none' }}>
                  <span style={{ fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Sales</span>
                  <span style={{ fontSize: 15, color: '#a78bfa', fontWeight: 600 }}>sales@rikai.tech</span>
                </a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="/products/market-research" style={{ fontSize: 14, color: 'var(--text-2)' }}>→ Book a Market Research demo</a>
                <a href="/products/liveagent" style={{ fontSize: 14, color: 'var(--text-2)' }}>→ Book a LiveAgent demo</a>
              </div>

              <p style={{ marginTop: 40, fontSize: 14, color: 'var(--text-3)' }}>
                Prefer to read first? Visit our <a href="/trust" style={{ color: '#a78bfa' }}>Trust Center →</a>
              </p>
            </div>

            {/* Right — form */}
            <div className="fu d1">
              {status === 'sent' ? (
                <div style={{ padding: '48px 32px', textAlign: 'center', borderRadius: 20, border: '1px solid rgba(124,58,237,0.25)', background: 'rgba(124,58,237,0.06)' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--grad)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: '#fff' }}>✓</div>
                  <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 18, color: 'var(--text-1)', marginBottom: 8 }}>Message sent</p>
                  <p style={{ fontSize: 14.5, color: 'var(--text-2)' }}>We&apos;ll get back to you shortly. In the meantime, reach us directly at <a href="mailto:sales@rikai.tech" style={{ color: '#a78bfa' }}>sales@rikai.tech</a>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 32, borderRadius: 20, border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                  <div>
                    <label style={labelStyle}>Name</label>
                    <input style={inputStyle} value={form.name} onChange={set('name')} required />
                  </div>
                  <div>
                    <label style={labelStyle}>Work email</label>
                    <input type="email" style={inputStyle} value={form.email} onChange={set('email')} required />
                  </div>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input style={inputStyle} value={form.company} onChange={set('company')} />
                  </div>
                  <div>
                    <label style={labelStyle}>Which product?</label>
                    <select style={inputStyle} value={form.product} onChange={set('product')}>
                      <option>Market Research</option>
                      <option>LiveAgent</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }} value={form.message} onChange={set('message')} required />
                  </div>

                  {status === 'error' && (
                    <p style={{ fontSize: 13, color: 'var(--red)' }}>Something went wrong. Please try again or email us at sales@rikai.tech</p>
                  )}

                  <button type="submit" disabled={!isValid || status === 'loading'} style={{
                    background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15,
                    padding: '14px 24px', borderRadius: 12, border: 'none', cursor: isValid ? 'pointer' : 'not-allowed',
                    opacity: !isValid || status === 'loading' ? 0.6 : 1, marginTop: 4,
                  }}>
                    {status === 'loading' ? 'Sending…' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
