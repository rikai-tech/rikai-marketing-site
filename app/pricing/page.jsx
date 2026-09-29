'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import BookDemoModal from '@/components/BookDemoModal';
import SLabel from '@/components/SLabel';

import LiveAgentPricing from '@/components/pricing/LiveAgentPricing';
import VoicePricing from '@/components/pricing/VoicePricing';

const FAQS = [
  {
    q: 'How does usage-based billing work on LiveAgent?',
    a: 'Every paid plan includes a monthly allowance across three metered channels — chat conversations, voice minutes, and avatar minutes. Usage beyond your plan’s included amount is billed at that plan’s per-unit overage rate.',
  },
  {
    q: 'What happens if I hit the limit on the Free Trial?',
    a: 'The Free Trial has no overage billing — usage simply stops at the plan’s limit rather than being charged. Upgrade to a paid plan to keep going.',
  },
  {
    q: 'If pricing changes, does it affect me right away?',
    a: 'No. Plan terms are never edited in place — a price or allowance change creates a new, separately versioned plan. Existing subscribers keep their current terms until their own next billing-period boundary.',
  },
  {
    q: 'Is annual billing available?',
    a: 'Yes — every paid LiveAgent plan offers a reduced monthly rate when billed annually, charged once per year.',
  },
  {
    q: 'Why is Voice priced differently from LiveAgent?',
    a: 'LiveAgent is usage-based and self-serve because it meters cleanly — conversations, minutes. Voice engagements vary widely in data sources, volume, and integrations, so we scope and price each one as a Statement of Work.',
  },
];

export default function PricingPage() {
  const [showBookDemo, setShowBookDemo] = useState(false);
  const [demoProduct, setDemoProduct] = useState('LiveAgent');
  const [product, setProduct] = useState('liveagent');

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    const attach = () => document.querySelectorAll('.fu:not(.vis)').forEach(el => obs.observe(el));
    attach();
    const t = setInterval(attach, 500);
    setTimeout(() => clearInterval(t), 4000);
    return () => { obs.disconnect(); clearInterval(t); };
  }, [product]);

  const openBookDemo = (p) => { setDemoProduct(p); setShowBookDemo(true); };

  return (
    <>
      <NavBar onBookDemo={() => openBookDemo(product === 'voice' ? 'Voice' : 'LiveAgent')} activeProduct="pricing" />
      <main>
        {/* Hero */}
        <section className="section-pad" style={{ paddingTop: 140, paddingBottom: 56, textAlign: 'center' }}>
          <div className="container fu" style={{ maxWidth: 720 }}>
            <SLabel>Pricing</SLabel>
            <h1 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 16, color: 'var(--text-1)' }}>
              Usage-based for LiveAgent.<br /><span className="gt">Scoped for Voice.</span>
            </h1>
            <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.8 }}>
              Two products, two ways of pricing. Pick a product below to see how it works.
            </p>
          </div>
        </section>

        {/* Product switch */}
        <section style={{ paddingBottom: 64 }}>
          <div className="container">
            <div className="fu" style={{ display: 'flex', justifyContent: 'center', marginBottom: 56 }}>
              <div style={{ display: 'inline-flex', gap: 4, padding: 4, borderRadius: 100, background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-md)' }}>
                {[{ k: 'liveagent', label: 'LiveAgent' }, { k: 'voice', label: 'Voice' }].map(opt => (
                  <button
                    key={opt.k}
                    onClick={() => setProduct(opt.k)}
                    style={{
                      padding: '11px 32px', borderRadius: 100, fontSize: 15, fontFamily: 'var(--fh)', fontWeight: 700,
                      border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                      background: product === opt.k ? 'var(--grad)' : 'transparent',
                      color: product === opt.k ? '#fff' : 'var(--text-2)',
                    }}
                  >{opt.label}</button>
                ))}
              </div>
            </div>

            {product === 'liveagent' ? (
              <LiveAgentPricing />
            ) : (
              <VoicePricing onBookDemo={() => openBookDemo('Voice')} />
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.012)' }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div className="fu" style={{ textAlign: 'center', marginBottom: 44 }}>
              <SLabel>FAQ</SLabel>
              <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', fontSize: 32 }}>Common questions</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {FAQS.map((f, i) => (
                <div key={f.q} className={`fu d${Math.min(i + 1, 5)}`} style={{ padding: '22px 26px', borderRadius: 16, background: 'var(--card)', border: '1px solid var(--border)' }}>
                  <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15.5, marginBottom: 8, color: 'var(--text-1)' }}>{f.q}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.75 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-pad" style={{ textAlign: 'center' }}>
          <div className="container fu">
            <h2 className="section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 20, fontSize: 30 }}>
              Not sure which one fits?
            </h2>
            <p style={{ fontSize: 15, color: 'var(--text-2)', marginBottom: 28 }}>Talk to us — we&apos;ll help you figure out the right starting point.</p>
            <button onClick={() => openBookDemo('LiveAgent')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', borderRadius: 12,
              background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15,
              border: 'none', cursor: 'pointer', boxShadow: '0 0 32px rgba(124,58,237,0.4)',
            }}>Book a demo →</button>
          </div>
        </section>
      </main>
      <FooterSection />

      {showBookDemo && <BookDemoModal product={demoProduct} onClose={() => setShowBookDemo(false)} />}
    </>
  );
}
