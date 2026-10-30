'use client';
import { useState, useEffect } from 'react';

import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import BookDemoModal from '@/components/BookDemoModal';
import SLabel from '@/components/SLabel';

const MOMENTS = [
  { title: 'A customer sharing feedback', color: '#c4b5fd' },
  { title: 'A prospect asking a question', color: '#818cf8' },
  { title: 'Someone struggling to find an answer', color: '#60a5fa' },
];

const PRODUCTS = [
  {
    name: 'Voice',
    kicker: 'Understand',
    href: '/products/voice',
    color: '#c4b5fd',
    tint: 'rgba(124,58,237,0.07)',
    body: 'We are bringing AI-powered research and conversational intelligence to market research. We enable research companies to conduct richer conversations, explore perspectives at scale and uncover insights that traditional research methods can struggle to surface.',
  },
  {
    name: 'LiveAgent',
    kicker: 'Respond',
    href: '/products/liveagent',
    color: '#818cf8',
    tint: 'rgba(79,110,247,0.08)',
    body: 'We are rethinking how businesses support their customers. We bring together knowledge, intelligent conversations and governed actions to create AI agents that can answer questions, resolve requests and know when a human should step in.',
  },
];

const TRUST = [
  { title: 'Grounded in knowledge', body: 'AI should work with reliable, relevant information rather than inventing answers to fill gaps.', color: '#c4b5fd' },
  { title: 'Designed with boundaries', body: 'Intelligent systems should understand what they are allowed to do, when to act and when to ask for help.', color: '#818cf8' },
  { title: 'Transparent by design', body: 'People should be able to understand what happened, why it happened and what comes next.', color: '#60a5fa' },
  { title: 'Built around people', body: 'Technology should strengthen human understanding and decision-making, not remove the human element from the experience.', color: '#34d399' },
];

const FUTURE = [
  { from: 'research goes beyond collecting responses', to: 'uncovering what people really mean.' },
  { from: 'customer support goes beyond scripted answers', to: 'meaningful resolution.' },
  { from: 'AI doesn’t just participate in business processes', to: 'it makes them better.' },
];

const bodyText = { fontSize: 17, color: 'var(--text-2)', lineHeight: 1.85 };
const h2Style = { fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, color: 'var(--text-1)' };
const strong = { color: 'var(--text-1)', fontWeight: 600 };

export default function AboutPage() {
  const [showBookDemo, setShowBookDemo] = useState(false);

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
        {/* Hero */}
        <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 150, paddingBottom: 96 }}>
          <div className="orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', top: -160, left: -120, animation: 'float 10s ease-in-out infinite' }} />
          <div className="orb" style={{ width: 480, height: 480, background: 'radial-gradient(circle, rgba(79,110,247,0.14) 0%, transparent 70%)', top: -60, right: -120, animation: 'floatB 8s ease-in-out infinite' }} />
          <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 1100, textAlign: 'center' }}>
            <div className="fu"><SLabel>About Rik.ai</SLabel></div>
            <h1 className="hero-h1 fu d1" style={{ fontFamily: 'var(--fh)', fontWeight: 700, lineHeight: 1.1, color: 'var(--text-1)' }}>
              Technology should make businesses <span className="gt">understand people better.</span>
            </h1>
          </div>
        </section>

        {/* Every interaction tells a story */}
        <section style={{ paddingBottom: 100 }}>
          <div className="container" style={{ maxWidth: 996 }}>
            <h2 className="fu section-h2" style={{ ...h2Style, marginBottom: 36 }}>Every business interaction tells a story.</h2>
            <div className="problem-grid fu d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 28 }}>
              {MOMENTS.map(m => (
                <div key={m.title} style={{ padding: '20px 22px', borderRadius: 14, border: '1px solid var(--border)', background: 'var(--card)', borderTop: `2px solid ${m.color}` }}>
                  <p style={{ fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 15.5, color: m.color, lineHeight: 1.4 }}>{m.title}</p>
                </div>
              ))}
            </div>

            <p className="fu d2" style={{ ...bodyText, marginBottom: 28 }}>
              A conversation that reveals <span style={strong}>what people really think, need or expect.</span>
            </p>
            <p className="fu" style={{ ...bodyText, marginBottom: 44 }}>
              Yet businesses often struggle to make sense of these interactions. Customer insights get <span style={strong}>buried in reports</span>, feedback gets <span style={strong}>lost across channels</span>, and support experiences become <span style={strong}>fragmented between systems and teams.</span>
            </p>

            <div className="fu" style={{ padding: '32px 36px', borderRadius: 20, borderLeft: '3px solid var(--purple)', background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,110,247,0.04))' }}>
              <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 26, letterSpacing: '-0.5px', marginBottom: 12, color: 'var(--text-1)' }}>
                We believe technology can do <span className="gt">better.</span>
              </p>
              <p style={{ fontSize: 16.5, color: 'var(--text-2)', lineHeight: 1.75 }}>
                Rik.ai exists to help businesses <span style={strong}>understand their customers more deeply</span> and <span style={strong}>serve them more intelligently.</span>
              </p>
            </div>
          </div>
        </section>

        {/* From understanding to action */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.012)' }}>
          <div className="container">
            <div style={{ maxWidth: 900, margin: '0 auto 56px' }}>
              <h2 className="fu section-h2" style={{ ...h2Style, marginBottom: 28 }}>From understanding to <span className="gt">action.</span></h2>
              <p className="fu d1" style={{ ...bodyText, marginBottom: 20 }}>
                We started Rik.ai with a simple conviction: the real value of AI isn’t in generating more content or automating more tasks. It’s in helping businesses <span style={strong}>make better sense of information</span> and <span style={strong}>turn that understanding into meaningful action.</span>
              </p>
              <p className="fu d2" style={{ fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 19, color: 'var(--text-1)' }}>
                That belief shapes everything we build.
              </p>
            </div>

            <div className="product-paths-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 40 }}>
              {PRODUCTS.map((p, i) => (
                <a key={p.name} href={p.href} className={`fu d${i + 1}`} style={{
                  display: 'flex', flexDirection: 'column', padding: '36px 34px', borderRadius: 22, border: '1px solid var(--border-md)',
                  background: `linear-gradient(160deg, ${p.tint}, rgba(255,255,255,0.01))`, transition: 'transform 0.25s, border-color 0.25s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = p.color + '70'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = ''; }}
                >
                  <span style={{ fontSize: 12, fontWeight: 700, color: p.color, fontFamily: 'var(--fh)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>{p.kicker}</span>
                  <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 30, letterSpacing: '-0.5px', marginBottom: 14, color: 'var(--text-1)' }}>With {p.name}</h3>
                  <p style={{ fontSize: 15.5, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 24, flex: 1 }}>{p.body}</p>
                  <span style={{ fontSize: 14.5, fontFamily: 'var(--fh)', fontWeight: 600, color: p.color }}>Explore {p.name} →</span>
                </a>
              ))}
            </div>

            <div className="fu" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto', padding: '28px 32px', borderRadius: 18, border: '1px solid rgba(124,58,237,0.25)', background: 'rgba(124,58,237,0.06)' }}>
              <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.7 }}>
                Two different challenges. <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, color: 'var(--text-1)' }}>One shared philosophy:</span> technology should make every interaction more valuable.
              </p>
            </div>
          </div>
        </section>

        {/* AI that earns trust */}
        <section className="section-pad">
          <div className="container">
            <div style={{ maxWidth: 900, margin: '0 auto 48px' }}>
              <h2 className="fu section-h2" style={{ ...h2Style, marginBottom: 28 }}>AI that earns <span className="gt">trust.</span></h2>
              <p className="fu d1" style={{ ...bodyText, marginBottom: 20 }}>
                We don’t believe better AI is simply about making systems sound more human or responses appear more convincing.
              </p>
              <p className="fu d2" style={{ ...bodyText }}>
                We believe it is about building AI that <span style={strong}>understands context</span>, <span style={strong}>respects boundaries</span> and <span style={strong}>operates with accountability.</span>
              </p>
            </div>

            <p className="fu" style={{ maxWidth: 900, margin: '0 auto 20px', fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-3)' }}>That means</p>
            <div className="product-paths-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 900, margin: '0 auto 48px' }}>
              {TRUST.map((t, i) => (
                <div key={t.title} className={`fu d${(i % 2) + 1}`} style={{ padding: '26px 28px', borderRadius: 16, border: '1px solid var(--border)', background: 'var(--card)', display: 'flex', gap: 18 }}>
                  <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 22, color: t.color, opacity: 0.55, lineHeight: 1.2 }}>0{i + 1}</span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 17, marginBottom: 8, color: t.color }}>{t.title}</h3>
                    <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.75 }}>{t.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="fu" style={{ maxWidth: 900, margin: '0 auto', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 21, lineHeight: 1.5, color: 'var(--text-1)' }}>
              Trust isn’t a feature we add later. <span className="gt">It is a principle that shapes how we design and build.</span>
            </p>
          </div>
        </section>

        {/* Built for what comes next */}
        <section className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.012)' }}>
          <div className="container" style={{ maxWidth: 996 }}>
            <h2 className="fu section-h2" style={{ ...h2Style, marginBottom: 28 }}>Built for what <span className="gt">comes next.</span></h2>
            <p className="fu d1" style={{ ...bodyText, marginBottom: 36 }}>
              We see a future where businesses can <span style={strong}>understand their customers continuously</span>, <span style={strong}>respond intelligently</span> and <span style={strong}>make decisions with greater confidence.</span>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
              {FUTURE.map((f, i) => (
                <div key={f.from} className={`fu d${i + 1}`} style={{ display: 'flex', gap: 16, alignItems: 'baseline', padding: '20px 24px', borderRadius: 14, border: '1px solid var(--border)', background: 'var(--card)' }}>
                  <span style={{ color: 'var(--purple-light)', fontSize: 18 }}>→</span>
                  <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.65 }}>
                    <span style={{ color: 'var(--text-3)' }}>Where</span> {f.from} <span style={{ color: 'var(--text-3)' }}>to</span> <span style={strong}>{f.to}</span>
                  </p>
                </div>
              ))}
            </div>

            <p className="fu" style={{ ...bodyText }}>That’s the future we are working towards at Rik.ai.</p>
          </div>
        </section>

        {/* Closing statement */}
        <section style={{ padding: '110px 0 130px', position: 'relative', overflow: 'hidden' }}>
          <div className="orb" style={{ width: 640, height: 640, background: 'radial-gradient(circle, rgba(124,58,237,0.16) 0%, transparent 70%)', top: -100, left: '50%', marginLeft: -320 }} />
          <div className="container fu" style={{ position: 'relative', zIndex: 2, maxWidth: 860, textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 34, letterSpacing: '-0.8px', lineHeight: 1.25, color: 'var(--text-1)', marginBottom: 36 }}>
              We build AI that helps businesses <span className="gt">listen better, understand deeper and respond smarter.</span>
            </p>
            <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, letterSpacing: '0.04em', color: 'var(--text-1)', marginBottom: 6 }}>Rik.ai</p>
            <p style={{ fontSize: 14.5, color: 'rgba(167,139,250,0.8)', marginBottom: 32 }}>Better understanding. More meaningful interactions. Smarter outcomes.</p>
            <a href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 12, background: 'var(--grad)', color: '#fff', fontFamily: 'var(--fh)', fontWeight: 600, fontSize: 14.5, boxShadow: '0 0 32px rgba(124,58,237,0.4)' }}>See our products →</a>
          </div>
        </section>
      </main>
      <FooterSection />

      {showBookDemo && <BookDemoModal onClose={() => setShowBookDemo(false)} />}
    </>
  );
}
