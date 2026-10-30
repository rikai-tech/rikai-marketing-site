'use client';
import ProductTile from './ProductTile';
import VoiceDemo from './VoiceDemo';
import LiveAgentMedia from './LiveAgentMedia';

// Hero for the portfolio home page: the company idea up top, the two product
// tiles immediately beneath it, then the line that binds them.
export default function PortfolioHero() {
  return (
    <section className="portfolio-hero" style={{ paddingTop: 124, paddingBottom: 72, position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 640, height: 640, background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', top: -160, left: -140, animation: 'float 10s ease-in-out infinite' }} />
      <div className="orb" style={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(79,110,247,0.16) 0%, transparent 70%)', top: -100, right: -120, animation: 'floatB 8s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)', backgroundSize: '64px 64px', maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 100%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 48px' }}>
          <p className="fu" style={{ fontSize: 13, fontWeight: 700, color: '#c4b5fd', fontFamily: 'var(--fh)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>rik.ai</p>
          <h1 className="hero-h1 fu d1" style={{ fontFamily: 'var(--fh)', fontWeight: 700, lineHeight: 1.1, marginBottom: 20, color: 'var(--text-1)' }}>
            Better customer experiences begin with <span className="gt">better understanding.</span>
          </h1>
          <p className="fu d2" style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.7 }}>
            Businesses need to understand what customers think, and they need to be there when customers need them.
          </p>
        </div>

        <div className="product-tiles-grid fu d2">
          <ProductTile
            product="Voice"
            headline="Listen deeper."
            description="AI-powered research and customer intelligence."
            href="/products/voice"
            cta="Explore Voice"
            accent="#a78bfa"
            media={<VoiceDemo />}
          />
          <ProductTile
            product="LiveAgent"
            headline="Respond smarter."
            description="Knowledge-powered AI customer support."
            href="/products/liveagent"
            cta="Explore LiveAgent"
            accent="#818cf8"
            media={<LiveAgentMedia />}
          />
        </div>

        <div className="fu d3" style={{ textAlign: 'center', maxWidth: 700, margin: '56px auto 0' }}>
          <p style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 15, letterSpacing: '0.04em', color: 'var(--text-1)', marginBottom: 10 }}>
            One philosophy. Two products.
          </p>
          <p style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.7 }}>
            AI that understands context, works within boundaries and helps people make better decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    title: 'Understands context',
    voice: 'Reads every interview, survey and open-ended answer in the context of who said it and why.',
    la: 'Answers from your approved knowledge, in the context of the customer’s question — never generic guesses.',
    color: '#a78bfa',
  },
  {
    title: 'Works within boundaries',
    voice: 'Insights are grounded in your real customer data, with quotes you can trace back.',
    la: 'Your rules define what it can do, and it escalates to a person when it isn’t sure.',
    color: '#818cf8',
  },
  {
    title: 'Helps people decide',
    voice: 'Turns research into confident, evidence-backed decisions for your whole team.',
    la: 'Leaves a clear record of every conversation and hand-off so teams can act and improve.',
    color: '#34d399',
  },
];

export function PhilosophyBand() {
  return (
    <section className="section-pad" style={{ borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.012)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 className="fu section-h2" style={{ fontFamily: 'var(--fh)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 20, color: 'var(--text-1)' }}>
            One philosophy, in everything we build.
          </h2>
          <p className="fu d1" style={{ fontSize: 17, color: 'var(--text-2)', lineHeight: 1.8, maxWidth: 680, margin: '0 auto' }}>
            Voice and LiveAgent are separate products for separate jobs. They share the same belief about how AI should behave.
          </p>
        </div>
        <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {PILLARS.map((p, i) => (
            <div key={p.title} className={`fu d${i + 1}`} style={{ padding: '28px 24px', background: 'var(--card)', borderRadius: 'var(--r)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 18, marginBottom: 18, color: p.color }}>{p.title}</h3>
              {[['Voice', p.voice], ['LiveAgent', p.la]].map(([label, text]) => (
                <div key={label} style={{ marginBottom: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, fontFamily: 'var(--fh)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)' }}>{label}</span>
                  <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.7, marginTop: 3 }}>{text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
