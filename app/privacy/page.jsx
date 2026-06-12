export const metadata = {
  title: 'Privacy Policy — Rik.ai',
  description: 'How Rik Technologies handles data collected through the Rik.ai marketing website.',
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: 44 }}>
    <h2 style={{
      fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 18,
      color: 'var(--text-1)', marginBottom: 14,
      paddingBottom: 10, borderBottom: '1px solid var(--border)',
    }}>{title}</h2>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 12 }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 7, paddingLeft: 4 }}>{children}</li>
);

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: 'var(--fb)' }}>

      {/* Nav */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(8,8,26,0.92)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 48px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/uploads/logo_upload-1776774656314.png" alt="Rik.ai" style={{ height: 34, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 20, color: 'var(--text-1)', letterSpacing: '-0.5px' }}>
            Rik<span className="gt">.ai</span>
          </span>
        </a>
        <a href="/" style={{ fontSize: 14, color: 'var(--text-3)', fontFamily: 'var(--fh)' }}>← Back to home</a>
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,110,247,0.05))',
        borderBottom: '1px solid var(--border)',
        padding: '60px 0 52px', textAlign: 'center',
      }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 12, fontFamily: 'var(--fh)' }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 38, color: 'var(--text-1)', letterSpacing: '-1px', marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ fontSize: 14, color: 'var(--text-3)' }}>Rik Technologies · Last updated: April 2026</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 24px 96px' }}>

        <P>
          Rik Technologies (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the Rik.ai marketing website at{' '}
          <a href="https://rikai.tech" style={{ color: 'var(--purple-light)' }}>https://rikai.tech</a>.
        </P>
        <P>
          This Privacy Policy explains how we collect, use, and protect information when you visit this website, request a demo, or contact us.
        </P>

        {/* Scope callout */}
        <div style={{
          background: 'rgba(124,58,237,0.07)',
          border: '1px solid rgba(124,58,237,0.2)',
          borderRadius: 10, padding: '16px 20px', marginBottom: 40,
        }}>
          <p style={{ margin: 0, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--purple-light)' }}>This policy applies only to this website.</strong>{' '}
            If you use the Rik.ai product platform, a separate Platform Privacy Policy governs how your data is handled in that context.
          </p>
        </div>

        <Section title="Who we are">
          <P>
            Rik.ai is an AI-powered market research platform built by Rik Technologies, based in India.
          </P>
          <P>
            For the purposes of applicable data protection laws, Rik Technologies acts as the entity responsible for handling your data collected through this website.
          </P>
        </Section>

        <Section title="What we collect">
          <P>When you interact with this website, we may collect:</P>

          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--purple-light)', textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: 'var(--fh)', marginBottom: 8 }}>Contact information</p>
          <ul style={{ paddingLeft: 18, marginBottom: 20 }}>
            <Li>Name</Li>
            <Li>Email address</Li>
            <Li>Company name</Li>
            <Li>Phone number (if provided)</Li>
            <Li>Any message or details you submit</Li>
          </ul>

          <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--purple-light)', textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: 'var(--fh)', marginBottom: 8 }}>Technical information</p>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>IP address</Li>
            <Li>Browser and device type</Li>
            <Li>Pages visited and interaction data</Li>
          </ul>

          <P>We collect only the information necessary to respond to you and improve the website experience.</P>
        </Section>

        <Section title="How we use your information">
          <P>We use your data to:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Respond to enquiries and schedule demos</Li>
            <Li>Communicate relevant information about Rik.ai (only if you opt in)</Li>
            <Li>Improve website performance and usability</Li>
          </ul>
          <P>We do not use your data for automated decision-making or profiling.</P>
        </Section>

        <Section title="Legal basis (India)">
          <P>We process your data based on:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Your consent (when you submit forms or opt in to communication)</Li>
            <Li>Our legitimate interest in operating and improving our website</Li>
          </ul>
        </Section>

        <Section title="Cookies">
          <P>We use only essential cookies required for basic website functionality.</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>No advertising cookies</Li>
            <Li>No third-party tracking pixels</Li>
            <Li>No profiling or retargeting</Li>
          </ul>
          <P>You can configure your browser to block cookies without affecting your ability to use this website.</P>
        </Section>

        <Section title="Third-party services">
          <P>We use a limited number of service providers to operate this website, such as:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Hosting and infrastructure providers</Li>
            <Li>Email delivery services</Li>
          </ul>
          <P>These providers process data only as necessary to perform their services and are expected to maintain appropriate security standards.</P>
        </Section>

        <Section title="Data sharing">
          <P>We do not sell, rent, or trade your personal data.</P>
          <P>We do not share your data with advertising networks or data brokers.</P>
        </Section>

        <Section title="International data transfers">
          <P>Some of our service providers may process data outside India.</P>
          <P>Where this occurs, we ensure that appropriate safeguards are in place to protect your information.</P>
        </Section>

        <Section title="Data retention">
          <P>We retain contact and enquiry data:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>For up to 2 years, or</Li>
            <Li>Until you request deletion</Li>
          </ul>
          <P>— whichever occurs first.</P>
        </Section>

        <Section title="Your rights">
          <P>You may request to:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Access the personal data we hold about you</Li>
            <Li>Correct inaccurate information</Li>
            <Li>Delete your data from our records</Li>
          </ul>
          <P>
            To make a request, contact us at{' '}
            <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>contact@rikai.tech</a>.
            We aim to respond within 30 days.
          </P>
        </Section>

        <Section title="Security">
          <P>We implement reasonable technical and organisational measures to protect your data, including:</P>
          <ul style={{ paddingLeft: 18, marginBottom: 14 }}>
            <Li>Encrypted data transmission (TLS)</Li>
            <Li>Access controls</Li>
          </ul>
          <P>While no system is completely secure, we take data protection seriously.</P>
        </Section>

        <Section title="Changes to this policy">
          <P>We may update this Privacy Policy from time to time.</P>
          <P>The &quot;Last updated&quot; date reflects the most recent version. Continued use of the website indicates acceptance of any updates.</P>
        </Section>

        <Section title="Contact">
          <P>For any questions about this policy or your data:</P>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '18px 22px',
          }}>
            <p style={{ margin: '0 0 4px', fontSize: 15, color: 'var(--text-1)', fontWeight: 700, fontFamily: 'var(--fh)' }}>Rik Technologies</p>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--text-3)', lineHeight: 1.9 }}>
              Email: <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)' }}>contact@rikai.tech</a><br />
              <a href="https://rikai.tech" style={{ color: 'var(--text-3)' }}>https://rikai.tech</a>
            </p>
          </div>
        </Section>

      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>© 2026 Rik Technologies. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="/trust" style={{ fontSize: 13, color: 'var(--text-3)' }}>Trust Center</a>
          <a href="/privacy" style={{ fontSize: 13, color: 'var(--purple-light)' }}>Privacy Policy</a>
          <a href="/terms" style={{ fontSize: 13, color: 'var(--text-3)' }}>Terms of Service</a>
        </div>
      </div>

    </div>
  );
}
