'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import BookDemoModal from '@/components/BookDemoModal';
import SLabel from '@/components/SLabel';

const ROWS = [
  ['Understand customer needs', 'Voice', ''],
  ['Analyse qualitative feedback', 'Voice', ''],
  ['Run AI-powered interviews', 'Voice', ''],
  ['Answer customer questions', '', 'LiveAgent'],
  ['Automate first-line support', '', 'LiveAgent'],
  ['Escalate conversations to humans', '', 'LiveAgent'],
];

export default function ProductsPage() {
  const [showBookDemo, setShowBookDemo] = useState(false);
  const [demoProduct, setDemoProduct] = useState('Voice');

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fu:not(.vis)').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <NavBar onBookDemo={() => setShowBookDemo(true)} />
      <main>
        <section className="section-pad" style={{ paddingTop: 140, textAlign: 'center' }}>
          <div className="container fu" style={{ maxWidth: 760 }}>
            <SLabel>Products</SLabel>
            <h1 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 20, color: 'var(--text-1)' }}>
              Two ways to make every customer interaction matter.
            </h1>
          </div>
        </section>

        <section style={{ paddingBottom: 80 }}>
          <div className="container">
            <div className="product-paths-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 72 }}>
              <div className="fu" style={{ padding: '40px 36px', borderRadius: 22, border: '1px solid var(--border)', background: 'linear-gradient(160deg, rgba(124,58,237,0.06), rgba(124,58,237,0.01))' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#c4b5fd', fontFamily: 'var(--fh)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>Understand them</span>
                <h2 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 26, marginBottom: 14, color: 'var(--text-1)' }}>Voice</h2>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 26 }}>
                  Your customers are already telling you what they think, need, and feel. Turn those conversations into insight and action.
                </p>
                <a href="/products/voice" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14 }}>Explore Voice →</a>
              </div>
              <div className="fu d1" style={{ padding: '40px 36px', borderRadius: 22, border: '1px solid var(--border)', background: 'linear-gradient(160deg, rgba(79,110,247,0.08), rgba(79,110,247,0.01))' }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#818cf8', fontFamily: 'var(--fh)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>Take care of them</span>
                <h2 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 26, marginBottom: 14, color: 'var(--text-1)' }}>LiveAgent</h2>
                <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 26 }}>
                  When customers need an answer, give them one. A grounded, governed AI support agent that can converse, act, and escalate.
                </p>
                <a href="/products/liveagent" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', borderRadius: 12, background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14 }}>Explore LiveAgent →</a>
              </div>
            </div>

            {/* Self-selection table */}
            <div className="fu" style={{ maxWidth: 760, margin: '0 auto' }}>
              <p style={{ textAlign: 'center', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20, marginBottom: 24, color: 'var(--text-1)' }}>Which one is right for you?</p>
              <div style={{ border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>If you need to...</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: 12, fontFamily: 'var(--fh)', fontWeight: 700, color: 'var(--text-3)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>rik.ai product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map(([need, mr, la], i) => (
                      <tr key={need} style={{ borderTop: '1px solid var(--border)' }}>
                        <td style={{ padding: '13px 20px', fontSize: 14.5, color: 'var(--text-2)' }}>{need}</td>
                        <td style={{ padding: '13px 20px', fontSize: 14.5, fontWeight: 600, color: mr ? '#c4b5fd' : la ? '#818cf8' : 'var(--text-2)' }}>{mr || la}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />

      {showBookDemo && (
        <BookDemoModal
          product={demoProduct}
          onClose={() => setShowBookDemo(false)}
        />
      )}
    </>
  );
}
