export const metadata = {
  title: 'Trust Center — Rik.ai',
  description: 'How Rik.ai approaches security, privacy, responsible AI, and compliance.',
};

const Section = ({ number, title, children }) => (
  <div style={{ marginBottom: 48 }}>
    <h2 style={{
      fontFamily: 'var(--fh)', fontWeight: 700, fontSize: 18,
      color: 'var(--text-1)', marginBottom: 14,
      paddingBottom: 10, borderBottom: '1px solid var(--border)',
    }}>
      {number}. {title}
    </h2>
    {children}
  </div>
);

const SubSection = ({ id, title, children }) => (
  <div style={{ marginBottom: 20 }}>
    <p style={{
      fontSize: 13, fontWeight: 700, color: 'var(--purple-light)',
      fontFamily: 'var(--fh)', marginBottom: 10,
    }}>
      {id} {title}
    </p>
    {children}
  </div>
);

const P = ({ children }) => (
  <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 10 }}>{children}</p>
);

const Clause = ({ id, children }) => (
  <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 10 }}>
    <span style={{ color: 'var(--text-3)', fontWeight: 600, marginRight: 8 }}>{id}</span>{children}
  </p>
);

const SubItem = ({ label, children }) => (
  <div style={{ display: 'flex', gap: 12, marginBottom: 8, paddingLeft: 16 }}>
    <span style={{ color: 'var(--text-3)', fontWeight: 600, minWidth: 20, fontSize: 15, flexShrink: 0 }}>{label}</span>
    <span style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8 }}>{children}</span>
  </div>
);

const Bullet = ({ children }) => (
  <div style={{ display: 'flex', gap: 12, marginBottom: 8, paddingLeft: 8 }}>
    <span style={{ color: 'var(--text-3)', fontWeight: 600, fontSize: 15, flexShrink: 0 }}>–</span>
    <span style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8 }}>{children}</span>
  </div>
);

const TableRow = ({ cols }) => (
  <tr>
    {cols.map((c, i) => (
      <td key={i} style={{
        padding: '10px 14px', fontSize: 14, color: i === 0 ? 'var(--text-1)' : 'var(--text-2)',
        fontWeight: i === 0 ? 600 : 400, borderBottom: '1px solid var(--border)',
        verticalAlign: 'top', lineHeight: 1.6,
      }}>{c}</td>
    ))}
  </tr>
);

export default function TrustPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', fontFamily: 'var(--fb)' }}>

      {/* Nav */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(8,8,26,0.92)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
        padding: '0 clamp(20px, 5vw, 48px)', height: 64,
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
        <h1 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 38px)', color: 'var(--text-1)', letterSpacing: '-1px', marginBottom: 12 }}>Trust Center</h1>
        <p style={{ fontSize: 14, color: 'var(--text-3)', marginBottom: 4 }}>Rik Technologies · Last Updated: [Date] · Last Reviewed: [Date] · Version 1.0</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(32px, 5vw, 56px) clamp(20px, 5vw, 24px) 96px' }}>

        {/* Preamble */}
        <P>
          Welcome to the Rik.ai Trust Center. This page is our commitment to transparency regarding how we protect your data, secure our systems, and responsibly develop AI. We believe that trust is earned through demonstrable action, not just statements.
        </P>
        <P>
          Rik.ai is built for organisations that rely on data to make critical business decisions. Security and privacy are not afterthoughts – they are foundational principles embedded into our platform architecture, development lifecycle, and operational practices.
        </P>
        <P>
          This Trust Center applies to both our marketing website (rikai.tech) and our product platform (customer.rikai.tech and survey.rikai.tech), unless otherwise specified.
        </P>

        <div style={{ height: 24 }} />

        {/* ── Section 1: Security ── */}
        <Section number="1" title="Security">
          <P>We take a layered, defence-in-depth approach to security, protecting data at the infrastructure, application, and operational levels.</P>

          <SubSection id="1.1" title="Infrastructure Security.">
            <Clause id="(a)">Cloud Hosting: Our platform is hosted on secure, accredited cloud infrastructure providers located in approved jurisdictions (currently in India, Singapore) that maintain industry-standard certifications for physical and network security.</Clause>
            <Clause id="(b)">Network Protections: We implement firewalls, intrusion detection and prevention systems (IDPS), distributed denial-of-service (DDoS) mitigation, and network segmentation to limit attack surfaces.</Clause>
            <Clause id="(c)">Data Centres: Our cloud providers maintain state-of-the-art data centres with redundant power, climate control, 24/7 monitoring, biometric access controls, and video surveillance.</Clause>
            <Clause id="(d)">Encryption in Transit: All data transmitted between users and our platform is encrypted using TLS 1.2 or higher (HTTPS). We enforce secure connections (HSTS) and disable obsolete protocols.</Clause>
            <Clause id="(e)">Encryption at Rest: Sensitive data categories (including mobile numbers, transcripts, facial expression scores, and UPI IDs) are encrypted at rest using AES-256-GCM, a strong industry-standard encryption algorithm. Non-sensitive data is encrypted at the storage volume level.</Clause>
          </SubSection>

          <SubSection id="1.2" title="Application Security.">
            <Clause id="(a)">Secure Development Lifecycle: We follow a secure software development lifecycle (SDLC) that includes threat modelling, static code analysis, dynamic scanning, and peer reviews before any code is deployed to production.</Clause>
            <Clause id="(b)">Authentication and Session Management: We use JSON Web Tokens (JWT) stored in HTTP-only, SameSite=Strict cookies to prevent cross-site scripting (XSS) and cross-site request forgery (CSRF) attacks. Session timeouts are enforced across all portals based on user role and risk profile.</Clause>
            <Clause id="(c)">Password Security: Passwords are securely hashed using industry-standard cryptographic techniques and are never stored in plaintext. We also screen passwords against known breached password databases using a privacy-preserving method (k-anonymity) — your full password never leaves your device.</Clause>
            <Clause id="(d)">Rate Limiting and Brute Force Protection: We implement rate limiting, account protection mechanisms, and anomaly detection controls on sensitive operations (including login, registration, OTP requests, and UPI verification) to mitigate brute-force attacks, credential stuffing, and other abusive activity.</Clause>
            <Clause id="(e)">Input Validation and Sanitisation: We validate and sanitise all user inputs to prevent injection attacks (SQL injection, command injection, cross-site scripting).</Clause>
            <Clause id="(f)">API Security: Our APIs require authentication, enforce least-privilege access controls, and are protected against parameter tampering and replay attacks.</Clause>
            <Clause id="(g)">Security Headers: We implement security headers including Content Security Policy (CSP), X-Content-Type-Options, X-Frame-Options (DENY), and Referrer-Policy to mitigate common web vulnerabilities.</Clause>
            <Clause id="(h)">Audit Logging: We maintain comprehensive audit logs of authentication events, data access, administrative actions, and security-relevant events.</Clause>
          </SubSection>

          <SubSection id="1.3" title="Operational Security.">
            <Clause id="(a)">Access Control: Access to production systems is restricted to authorised personnel based on the principle of least privilege. Multi-factor authentication (MFA) is required for all administrative access.</Clause>
            <Clause id="(b)">Vendor Risk Management: We conduct due diligence on all third-party service providers before engagement. Each provider signs a data processing agreement that mandates compliance with applicable data protection laws and security standards.</Clause>
            <Clause id="(c)">Incident Response: We maintain a documented incident response plan that includes detection, containment, eradication, recovery, and notification procedures. We periodically review and test our response readiness.</Clause>
            <Clause id="(d)">Business Continuity and Disaster Recovery: We maintain backups and have documented recovery procedures to ensure platform availability and data integrity in the event of a system failure or disaster.</Clause>
            <Clause id="(e)">Regular Security Assessments: We periodically assess our systems for security vulnerabilities through a combination of automated and manual review processes and engage independent professionals for security assessments. Remediation is prioritised based on risk severity.</Clause>
            <Clause id="(f)">Employee Training: All employees receive mandatory security and privacy training. Developers receive additional training on secure coding practices.</Clause>
          </SubSection>

          <SubSection id="1.4" title="Current Certifications and Roadmap.">
            <P>Rik.ai intends to pursue recognised security certifications, including ISO 27001 and SOC 2, as the organisation matures and customer requirements evolve. In the interim, we operate under industry-standard security practices as described above.</P>
          </SubSection>
        </Section>

        {/* ── Section 2: Privacy ── */}
        <Section number="2" title="Privacy">

          <SubSection id="2.1" title="Our Privacy Principles.">
            <Clause id="(a)">Data Minimisation: We collect only the personal data that is necessary for the specific purpose for which it is processed.</Clause>
            <Clause id="(b)">Purpose Limitation: We use personal data only for the purposes disclosed at the time of collection, or for purposes that are compatible with those original purposes.</Clause>
            <Clause id="(c)">Transparency: We provide clear, accessible, and understandable privacy notices (Privacy Policies) for each of our portals – marketing website, customer portal, and participant portal.</Clause>
            <Clause id="(d)">User Control: You have rights to access, correct, delete, and withdraw consent for your personal data. We provide mechanisms to exercise these rights.</Clause>
            <Clause id="(e)">Data Security: We implement strong technical and organisational measures to protect personal data.</Clause>
          </SubSection>

          <SubSection id="2.2" title="Data Processing Roles (Under DPDP Act 2023).">
            <div style={{ overflowX: 'auto', marginBottom: 12 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 520 }}>
                <thead>
                  <tr style={{ background: 'rgba(124,58,237,0.08)' }}>
                    {['Portal / Context', 'Data Fiduciary', 'Data Processor (if any)'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', fontSize: 12, fontWeight: 700, color: 'var(--purple-light)', fontFamily: 'var(--fh)', textAlign: 'left', borderBottom: '1px solid var(--border)', letterSpacing: '0.04em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <TableRow cols={['Marketing Website (rikai.tech)', 'Rik Technologies', 'Resend (email), HubSpot (CRM)']} />
                  <TableRow cols={['Customer Portal (customer.rikai.tech) – Portal User data', 'Rik Technologies', 'Neon (database), Resend (email)']} />
                  <TableRow cols={['Customer Portal – Customer Data (Survey configurations, etc.)', 'Customer (the business customer)', 'Rik Technologies (as Service Provider)']} />
                  <TableRow cols={['Participant Portal (survey.rikai.tech) – Participant Data', 'Rik Technologies', 'Google Cloud Platform, Anthropic, ElevenLabs, Resend, Neon, MSG91']} />
                </tbody>
              </table>
            </div>
          </SubSection>

          <SubSection id="2.3" title="Data Collection and Use Summaries.">
            {[
              { label: 'Marketing Website', text: 'Name, email, company, phone, demo preferences. Used to respond to enquiries and send demo confirmations. Retention: up to 2 years.' },
              { label: 'Customer Portal (Portal Users)', text: 'Name, work email, company, role, authentication logs. Used to provide platform access and manage accounts. Retention: until account closure + 90 days.' },
              { label: 'Participant Portal (Participants)', text: 'Name, mobile, email, demographics, survey responses, transcripts, voice recordings (transient), facial expression scores (video surveys). Used to conduct surveys, generate aggregate research reports, and disburse payouts. Retention: transcripts 90 days, payout records 7 years, account data until deletion + 30 days.' },
            ].map(({ label, text }) => (
              <div key={label} style={{ marginBottom: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.025)', border: '1px solid var(--border)', borderRadius: 10 }}>
                <p style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 700, color: 'var(--purple-light)', fontFamily: 'var(--fh)' }}>{label}</p>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </SubSection>

          <SubSection id="2.4" title="Data Subject Rights.">
            <P>We respect the rights of Data Principals under the DPDP Act 2023:</P>
            <Clause id="(a)">Right to access your personal data;</Clause>
            <Clause id="(b)">Right to correction of inaccurate data;</Clause>
            <Clause id="(c)">Right to deletion (subject to legal retention requirements);</Clause>
            <Clause id="(d)">Right to withdraw consent;</Clause>
            <Clause id="(e)">Right to grievance redressal;</Clause>
            <Clause id="(f)">Right to nominate a representative.</Clause>
            <P>To exercise these rights, please contact our Grievance Officer: Partha Roy, Founder &amp; Grievance Officer at <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)' }}>contact@rikai.tech</a>.</P>
          </SubSection>

          <SubSection id="2.5" title="Third-Party Sub-processors.">
            <P>The following reflects the major sub-processors currently engaged by Rik.ai to operate our platform. Each is bound by a data processing agreement, and this list is maintained and updated as changes occur.</P>
            <div style={{ overflowX: 'auto', marginBottom: 12 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
                <thead>
                  <tr style={{ background: 'rgba(124,58,237,0.08)' }}>
                    {['Sub-processor', 'Purpose', 'Data Processed', 'Location'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', fontSize: 12, fontWeight: 700, color: 'var(--purple-light)', fontFamily: 'var(--fh)', textAlign: 'left', borderBottom: '1px solid var(--border)', letterSpacing: '0.04em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <TableRow cols={['Neon (PostgreSQL hosting)', 'Database hosting', 'All stored data (encrypted at rest)', 'AWS ap-southeast-1 (Singapore)']} />
                  <TableRow cols={['Anthropic (Claude)', 'AI interviewer; aggregate report generation; "Ask Your Data" analytics', 'Anonymised transcript segments; Portal User queries', 'USA']} />
                  <TableRow cols={['Google Cloud Platform', 'Speech-to-text; sentiment analysis; facial expression analysis; text-to-speech; file storage', 'Audio (transient), transcript text, still frames (transient)', 'USA / global']} />
                  <TableRow cols={['Resend', 'Transactional email delivery', 'Email address, name, email content', 'USA']} />
                  <TableRow cols={['MSG91', 'WhatsApp / SMS notifications', 'Phone number, notification content', 'India']} />
                  <TableRow cols={['ElevenLabs', 'AI voice (English)', 'Agent response text only', 'USA']} />
                  <TableRow cols={['HubSpot', 'CRM for marketing leads', 'Name, email, company, phone, demo preferences', 'USA']} />
                </tbody>
              </table>
            </div>
          </SubSection>

          <SubSection id="2.6" title="International Data Transfers.">
            <P>Some of our sub-processors are located outside India (primarily the United States). When personal data is transferred outside India, we rely on:</P>
            <Bullet>Standard Contractual Clauses (SCCs) or equivalent data processing agreements;</Bullet>
            <Bullet>Adequacy determinations issued by the Government of India (once notified); and</Bullet>
            <Bullet>Your explicit consent (where required).</Bullet>
            <P style={{ marginTop: 10 }}>We take steps to ensure that any cross-border data transfer provides an adequate level of protection comparable to that required under the DPDP Act.</P>
          </SubSection>

          <SubSection id="2.7" title="Data Retention.">
            <P>Different categories of data are retained for different periods:</P>
            <Bullet>Participant session transcripts: 90 days</Bullet>
            <Bullet>Raw video frames: deleted immediately after analysis</Bullet>
            <Bullet>Participant account data: until deletion + 30-day cooling period</Bullet>
            <Bullet>Payout records: 7 years (legal obligation)</Bullet>
            <Bullet>Audit logs: 90 days</Bullet>
            <Bullet>Customer Data (Survey configs): until account closure + 90 days</Bullet>
            <Bullet>Aggregate Reports: indefinitely (anonymised, no personal data)</Bullet>
            <Bullet>Marketing website enquiry data: up to 2 years</Bullet>
          </SubSection>
        </Section>

        {/* ── Section 3: Responsible AI ── */}
        <Section number="3" title="Responsible AI">
          <P>Rik.ai uses artificial intelligence (including large language models, natural language processing, computer vision, and sentiment analysis) to conduct and analyse qualitative research interviews. We design our AI systems with care, transparency, and human oversight.</P>

          <SubSection id="3.1" title="Our AI Principles.">
            <Clause id="(a)">Human-Centred Design: AI interactions are structured to encourage honest, voluntary, and thoughtful responses from participants. AI does not make decisions about participants (e.g., payout eligibility) without human review where needed.</Clause>
            <Clause id="(b)">Transparency: We clearly communicate when an AI is being used. Participants are informed before any interview that they will be interacting with an AI interviewer. Customers are informed that reports are AI-generated.</Clause>
            <Clause id="(c)">Accuracy and Limitations: We acknowledge that AI-generated outputs may contain inaccuracies, omissions, biases, or analytical artefacts. We do not present AI outputs as infallible or as a substitute for human judgment.</Clause>
            <Clause id="(d)">Data Privacy: AI processing uses participant data only for the purposes of conducting the specific survey and generating research insights. Customer Data and Participant Data processed through third-party AI services are used solely to provide the requested functionality and are not provided for the purpose of training Anthropic&apos;s foundation models. We do not use Customer Data to train proprietary or third-party foundation models unless expressly authorised in writing by the Customer.</Clause>
            <Clause id="(e)">Human Oversight: Critical decisions (e.g., fraud review for referrals, disputed session quality) involve human review. Customers are advised to review AI-generated insights alongside human judgment.</Clause>
          </SubSection>

          <SubSection id="3.2" title="AI Features.">
            <Clause id="(a)">AI Interviewer (Multiple Personas): Our AI agents (Jal – Empathy, Vayu – Discovery, Agni – Insight, Prithvi – Clarity, Aakash – Reflection) conduct structured interviews, ask follow-up questions based on participant responses, and adapt conversation flow.</Clause>
            <Clause id="(b)">Sentiment Analysis: We use Google Cloud Natural Language API to compute sentiment scores (positive, neutral, negative) from participant transcripts.</Clause>
            <Clause id="(c)">Facial Expression Analysis (video surveys only, with explicit consent): We use Google Cloud Vision API to derive engagement-related analytical metrics. Raw frames are deleted immediately after analysis.</Clause>
            <Clause id="(d)">Automated Theme Extraction: The AI identifies recurring themes, patterns, and anomalies across participant responses.</Clause>
            <Clause id="(e)">&quot;Ask Your Data&quot; (Customer Portal): Customers can ask natural language questions about their survey data, and the AI provides answers based on aggregate, anonymised data.</Clause>
            <Clause id="(f)">Aggregate Report Generation: The AI generates executive summaries, key findings, and strategic recommendations from survey data.</Clause>
          </SubSection>

          <SubSection id="3.3" title="AI Limitations and Disclaimers.">
            <Clause id="(a)">AI-generated outputs may not be complete, accurate, or suitable for every purpose.</Clause>
            <Clause id="(b)">The AI may reflect biases present in its training data. We take reasonable steps to mitigate bias but cannot guarantee bias-free outputs.</Clause>
            <Clause id="(c)">Rik.ai does not provide legal, financial, medical, investment, or professional advice through any AI feature. Customers and participants should consult qualified professionals for such advice.</Clause>
            <Clause id="(d)">AI is not a substitute for human judgment, especially in high-stakes decisions.</Clause>
          </SubSection>

          <SubSection id="3.4" title="Participant Consent for AI.">
            <Bullet>Before any survey, participants are informed that they will be interacting with an AI interviewer.</Bullet>
            <Bullet>For video surveys, participants must provide explicit, per-survey consent for facial expression analysis.</Bullet>
            <Bullet>Participants can withdraw consent for facial analysis at any time before a session is finalised, without affecting their ability to complete non-video surveys. Withdrawal takes effect for any session that has not yet been finalised.</Bullet>
          </SubSection>
        </Section>

        {/* ── Section 4: Compliance ── */}
        <Section number="4" title="Compliance and Governance">

          <SubSection id="4.1" title="Regulatory Framework.">
            <P>Rik.ai aligns its practices with:</P>
            <Clause id="(a)">Digital Personal Data Protection Act, 2023 (DPDP Act) – India&apos;s comprehensive data protection law;</Clause>
            <Clause id="(b)">Information Technology Act, 2000 (and associated rules, including the SPDI Rules);</Clause>
            <Clause id="(c)">Industry standards for security and data protection (ISO 27001, SOC 2 – in progress);</Clause>
            <Clause id="(d)">Emerging AI governance frameworks and best practices.</Clause>
          </SubSection>

          <SubSection id="4.2" title="Legal Basis for Processing.">
            <P>We process personal data only on valid legal grounds under the DPDP Act:</P>
            <Bullet>Consent (explicit, informed, free, specific, unambiguous)</Bullet>
            <Bullet>Contractual necessity (for providing services to participants and customers)</Bullet>
            <Bullet>Legitimate interest (for security, fraud prevention, and platform improvement)</Bullet>
            <Bullet>Legal obligation (for tax, audit, and regulatory compliance)</Bullet>
          </SubSection>

          <SubSection id="4.3" title="Grievance Redressal.">
            <P>We have appointed a Grievance Officer as required under the DPDP Act and IT Rules:</P>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 10, padding: '16px 20px', marginBottom: 12,
            }}>
              <p style={{ margin: '0 0 6px', fontSize: 15, color: 'var(--text-1)', fontWeight: 700, fontFamily: 'var(--fh)' }}>Partha Roy, Founder &amp; Grievance Officer</p>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-3)', lineHeight: 1.9 }}>
                Email: <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)' }}>contact@rikai.tech</a><br />
                Response Time: We aim to acknowledge grievances within 72 hours and resolve them as promptly as practicable, generally within 30 days.
              </p>
            </div>
            <P>If you are not satisfied with our resolution, you may escalate to the Data Protection Board of India once constituted.</P>
          </SubSection>

          <SubSection id="4.4" title="Third-Party Assessments.">
            <P>We engage independent security and privacy professionals to conduct assessments, audits, and penetration tests periodically. While we are not currently certified, we have implemented a range of security, privacy, and governance controls designed to support future certification efforts.</P>
          </SubSection>
        </Section>

        {/* ── Section 5: Platform Availability ── */}
        <Section number="5" title="Platform Availability and Service Levels">
          <Clause id="5.1">The Rik.ai platform is designed for high availability, resilience, and continuity of service. We maintain operational procedures, monitoring, backup, and recovery processes intended to support reliable platform performance. Scheduled maintenance may occasionally be required to maintain, improve, or secure the platform, and we will use reasonable efforts to provide advance notice where practicable.</Clause>
          <P>Specific service availability commitments, uptime targets, maintenance windows, and service credits (if applicable) may be agreed separately with enterprise customers under a written Service Level Agreement (SLA) or Statement of Work.</P>
        </Section>

        {/* ── Section 6: Responsible Disclosure ── */}
        <Section number="6" title="Responsible Disclosure and Bug Bounty">
          <P>We take security vulnerabilities seriously. If you discover a security vulnerability in any Rik.ai system, please report it to us immediately at <a href="mailto:security@rikai.tech" style={{ color: 'var(--purple-light)' }}>security@rikai.tech</a>. We will use reasonable efforts to acknowledge your report promptly and work with you to investigate and remediate the issue. We do not currently operate a public bug bounty program but will consider reports in good faith.</P>
        </Section>

        {/* ── Section 7: Contact ── */}
        <Section number="7" title="Contact Us">
          <P>For security, privacy, compliance, or AI-related questions, or to report a concern:</P>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '18px 22px',
          }}>
            <p style={{ margin: '0 0 4px', fontSize: 15, color: 'var(--text-1)', fontWeight: 700, fontFamily: 'var(--fh)' }}>Rik Technologies</p>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--text-3)', lineHeight: 1.9 }}>
              Email: <a href="mailto:privacy@rikai.tech" style={{ color: 'var(--purple-light)' }}>privacy@rikai.tech</a><br />
              Website: <a href="https://rikai.tech" style={{ color: 'var(--text-3)' }}>https://rikai.tech</a>
            </p>
          </div>
          <P style={{ marginTop: 12 }}>We will use reasonable efforts to acknowledge and address communications in a timely manner.</P>
        </Section>

      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid var(--border)',
        padding: 'clamp(16px, 3vw, 24px) clamp(20px, 5vw, 48px)',
        display: 'flex', flexWrap: 'wrap', gap: 12,
        justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontSize: 13, color: 'var(--text-3)' }}>© 2026 Rik Technologies. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <a href="/trust" style={{ fontSize: 13, color: 'var(--purple-light)' }}>Trust Center</a>
          <a href="/privacy" style={{ fontSize: 13, color: 'var(--text-3)' }}>Privacy Policy</a>
          <a href="/terms" style={{ fontSize: 13, color: 'var(--text-3)' }}>Terms of Service</a>
        </div>
      </div>

    </div>
  );
}
