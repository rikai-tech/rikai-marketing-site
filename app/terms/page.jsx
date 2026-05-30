export const metadata = {
  title: 'Terms of Service — Rik.ai',
  description: 'Terms governing your access to and use of the Rik.ai marketing website.',
};

const Section = ({ number, title, children }) => (
  <div style={{ marginBottom: 44 }}>
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

const P = ({ children }) => (
  <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 12 }}>{children}</p>
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

const Caps = ({ id, children }) => (
  <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.85, marginBottom: 10, letterSpacing: '0.01em' }}>
    {id && <span style={{ color: 'var(--text-3)', fontWeight: 600, marginRight: 8 }}>{id}</span>}
    {children}
  </p>
);

export default function TermsPage() {
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
        <h1 style={{ fontFamily: 'var(--fh)', fontWeight: 800, fontSize: 'clamp(28px, 5vw, 38px)', color: 'var(--text-1)', letterSpacing: '-1px', marginBottom: 12 }}>Terms of Service</h1>
        <p style={{ fontSize: 14, color: 'var(--text-3)' }}>Rik Technologies · Last updated: [Date]</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(32px, 5vw, 56px) clamp(20px, 5vw, 24px) 96px' }}>

        {/* Preamble */}
        <P>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Rik.ai marketing website located at{' '}
          <a href="https://rikai.tech" style={{ color: 'var(--purple-light)' }}>https://rikai.tech</a>{' '}
          (the &quot;Website&quot;), operated by Rik Technologies, a company incorporated under the laws of India (&quot;Rik.ai&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
        </P>
        <P>
          By accessing, browsing, or using any part of the Website, you (&quot;you&quot;, &quot;your&quot;, &quot;user&quot;) acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must immediately cease using the Website.
        </P>
        <P>
          These Terms apply exclusively to the marketing website. They do not govern the Rik.ai product platform (including the Customer Portal at customer.rikai.tech or the Participant Portal at survey.rikai.tech), which is subject to separate Platform Terms of Service.
        </P>

        {/* Section 1 */}
        <Section number="1" title="Nature and Purpose of the Website">
          <Clause id="1.1">The Website is a public-facing, informational marketing website. Its sole purposes are:</Clause>
          <SubItem label="(a)">To provide general information about Rik.ai&apos;s AI-powered market research platform, features, and capabilities;</SubItem>
          <SubItem label="(b)">To allow prospective business customers to request a product demonstration or sales consultation; and</SubItem>
          <SubItem label="(c)">To enable visitors to contact Rik.ai for legitimate business enquiries.</SubItem>
          <div style={{ marginBottom: 10 }} />
          <Clause id="1.2">The Website does not provide access to any part of the Rik.ai product platform. No surveys, data collection, participant interactions, or platform functionalities are available through this Website.</Clause>
          <Clause id="1.3">Submission of information through the Website may result in such information being processed through third-party systems engaged by Rik.ai for customer relationship management, communications, analytics, or operational purposes, as further described in the Privacy Policy.</Clause>
          <Clause id="1.4">The Website is intended for business-to-business (B2B) audiences – professionals and organisations seeking market research solutions. It is not intended for individual consumers or for use by persons under the age of 18.</Clause>
          <Clause id="1.5">Rik.ai may from time to time introduce additional informational, educational, interactive, marketing, or customer engagement features through the Website. Such features shall be governed by these Terms unless otherwise specified.</Clause>
        </Section>

        {/* Section 2 */}
        <Section number="2" title="Acceptance and Modification of Terms">
          <Clause id="2.1">By using the Website, you confirm that you are at least 18 years of age and have the legal capacity to enter into a binding agreement.</Clause>
          <Clause id="2.2">If you are using the Website on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation to these Terms, and references to &quot;you&quot; shall include that organisation.</Clause>
          <Clause id="2.3">Rik.ai reserves the right to modify, amend, or replace these Terms at any time at its sole discretion. Material changes will be communicated by posting an updated version on the Website with a revised &quot;Last updated&quot; date.</Clause>
          <Clause id="2.4">Your continued use of the Website after any such modification constitutes your acceptance of the revised Terms. It is your responsibility to review these Terms periodically.</Clause>
        </Section>

        {/* Section 3 */}
        <Section number="3" title="Permitted Use and User Obligations">
          <Clause id="3.1">You are granted a limited, revocable, non-exclusive, non-transferable licence to access and use the Website for lawful, informational, and business enquiry purposes only.</Clause>
          <Clause id="3.2">You agree to use the Website only in compliance with all applicable laws and regulations of India, including but not limited to the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, and any rules framed thereunder.</Clause>
          <Clause id="3.3">You agree to provide accurate, current, and complete information when filling out any forms on the Website, including the demo request form, contact forms, or any other submission.</Clause>
          <Clause id="3.4">You agree not to:</Clause>
          <SubItem label="(a)">Use the Website for any unlawful, fraudulent, deceptive, or harmful purpose;</SubItem>
          <SubItem label="(b)">Submit false, misleading, or impersonated information;</SubItem>
          <SubItem label="(c)">Interfere with or disrupt the operation of the Website, including by introducing viruses, malware, or other harmful code;</SubItem>
          <SubItem label="(d)">Attempt to gain unauthorised access to any systems, servers, or data associated with the Website;</SubItem>
          <SubItem label="(e)">Scrape, crawl, index, or extract Website content using automated tools (bots, scrapers, spiders) without our prior written permission;</SubItem>
          <SubItem label="(f)">Reproduce, republish, distribute, or commercially exploit any Website content without our express written consent;</SubItem>
          <SubItem label="(g)">Use the Website to send unsolicited communications, spam, or chain letters;</SubItem>
          <SubItem label="(h)">Reverse engineer, decompile, or disassemble any software or underlying code of the Website.</SubItem>
        </Section>

        {/* Section 4 */}
        <Section number="4" title="Intellectual Property Rights">
          <Clause id="4.1">All content, materials, and intellectual property on the Website – including but not limited to text, graphics, logos, icons, images, audio clips, video clips, software, code, designs, layout, data compilations, and the overall &quot;look and feel&quot; – are the exclusive property of Rik Technologies or its licensors and are protected under Indian and international copyright, trademark, and other intellectual property laws.</Clause>
          <Clause id="4.2">The trademarks, service marks, and logos displayed on the Website, including &quot;Rik.ai&quot;, the Rik.ai logo, and &quot;Rishi&quot;, are registered or unregistered marks of Rik Technologies. Nothing on this Website shall be construed as granting, by implication, estoppel, or otherwise, any licence or right to use any trademark without our prior written permission.</Clause>
          <Clause id="4.3">You may download, print, or share excerpts of Website content for personal, non-commercial, or internal business reference purposes, provided that you do not modify the content and retain all copyright and other proprietary notices.</Clause>
          <Clause id="4.4">You may not:</Clause>
          <SubItem label="(a)">Republish, distribute, or transmit any Website content to any third party for commercial purposes;</SubItem>
          <SubItem label="(b)">Use any data mining, robots, or similar data gathering or extraction methods;</SubItem>
          <SubItem label="(c)">Frame or mirror any part of the Website without our prior written consent.</SubItem>
        </Section>

        {/* Section 5 */}
        <Section number="5" title="Demo Requests and Communications">
          <Clause id="5.1">The Website includes a &quot;Book a Demo&quot; form that allows you to request a sales demonstration or consultation. By submitting the form, you:</Clause>
          <SubItem label="(a)">Confirm that the information provided is accurate and complete;</SubItem>
          <SubItem label="(b)">Consent to Rik.ai using your information to respond to your request, contact you via email, phone, or other means, and send you relevant information about our products and services;</SubItem>
          <SubItem label="(c)">Agree to receive transactional and follow-up communications related to your demo request.</SubItem>
          <div style={{ marginBottom: 10 }} />
          <Clause id="5.2">Rik.ai aims to respond to demo requests within 5 business days but does not guarantee any response time.</Clause>
          <Clause id="5.3">
            You may opt out of marketing communications at any time by clicking the &quot;unsubscribe&quot; link in any email or by contacting{' '}
            <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)' }}>contact@rikai.tech</a>.
          </Clause>
          <Clause id="5.4">Submission of a demo request, enquiry, or contact form does not create any customer relationship, contractual relationship, partnership, agency relationship, or obligation on Rik.ai to provide any products or services.</Clause>
        </Section>

        {/* Section 6 */}
        <Section number="6" title="Privacy and Data Protection">
          <Clause id="6.1">
            Your use of the Website is subject to our{' '}
            <a href="/privacy" style={{ color: 'var(--purple-light)', fontWeight: 600 }}>Privacy Policy</a>,
            which is incorporated into these Terms by reference. The Privacy Policy explains how we collect, use, disclose, and protect your personal data.
          </Clause>
          <Clause id="6.2">By using the Website, you consent to the collection and processing of your personal data as described in the Privacy Policy.</Clause>
          <Clause id="6.3">
            The Website may use cookies and similar technologies. Further information is available in our{' '}
            <a href="/privacy" style={{ color: 'var(--purple-light)' }}>Privacy Policy</a>.
          </Clause>
        </Section>

        {/* Section 7 */}
        <Section number="7" title="Disclaimer of Warranties">
          <Caps id="7.1">THE WEBSITE AND ALL CONTENT, INFORMATION, AND MATERIALS PROVIDED THEREON ARE MADE AVAILABLE ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.</Caps>
          <Caps id="7.2">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RIK.AI DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO:</Caps>
          <SubItem label="(a)">IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT;</SubItem>
          <SubItem label="(b)">WARRANTIES THAT THE WEBSITE WILL BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS;</SubItem>
          <SubItem label="(c)">WARRANTIES REGARDING THE ACCURACY, COMPLETENESS, RELIABILITY, OR TIMELINESS OF ANY CONTENT OR INFORMATION ON THE WEBSITE.</SubItem>
          <div style={{ marginBottom: 10 }} />
          <Clause id="7.3">Content on the Website is for general informational purposes only and does not constitute professional, legal, financial, or technical advice. You should consult appropriate professionals before making any decisions based on Website content.</Clause>
          <Clause id="7.4">Any descriptions of artificial intelligence functionality, analytical capabilities, benchmarks, examples, demonstrations, case studies, expected outcomes, or use cases presented on the Website are illustrative only. Actual results may vary depending on customer data, implementation, configurations, and other factors. Nothing on the Website constitutes a guarantee of accuracy, performance, or business outcomes.</Clause>
        </Section>

        {/* Section 8 */}
        <Section number="8" title="Limitation of Liability">
          <Caps id="8.1">TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, IN NO EVENT SHALL RIK.AI, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:</Caps>
          <SubItem label="(a)">LOSS OF PROFITS, REVENUE, OR BUSINESS OPPORTUNITIES;</SubItem>
          <SubItem label="(b)">LOSS OF DATA OR GOODWILL;</SubItem>
          <SubItem label="(c)">BUSINESS INTERRUPTION;</SubItem>
          <SubItem label="(d)">REPUTATIONAL HARM;</SubItem>
          <SubItem label="(e)">DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE WEBSITE;</SubItem>
          <SubItem label="(f)">RELIANCE ON ANY CONTENT OR INFORMATION ON THE WEBSITE;</SubItem>
          <SubItem label="(g)">ANY UNAUTHORISED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA;</SubItem>
          <SubItem label="(h)">ANY ERRORS, OMISSIONS, OR INACCURACIES IN WEBSITE CONTENT;</SubItem>
          <SubItem label="(i)">ANY VIRUSES OR MALICIOUS CODE OBTAINED THROUGH THE WEBSITE.</SubItem>
          <div style={{ marginBottom: 10 }} />
          <Caps id="8.2">NOTWITHSTANDING THE FOREGOING, IF A COURT OF COMPETENT JURISDICTION FINDS RIK.AI LIABLE UNDER CIRCUMSTANCES WHERE LIABILITY CANNOT BE EXCLUDED, RIK.AI&apos;S TOTAL AGGREGATE LIABILITY TO YOU SHALL NOT EXCEED THE AMOUNT OF ONE THOUSAND INDIAN RUPEES (INR 1,000).</Caps>
          <Clause id="8.3">Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under applicable Indian law.</Clause>
        </Section>

        {/* Section 9 */}
        <Section number="9" title="Indemnification">
          <P>You agree to indemnify, defend, and hold harmless Rik Technologies and its officers, directors, employees, agents, and affiliates from and against any and all claims, demands, liabilities, losses, damages, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:</P>
          <SubItem label="(a)">Your breach of these Terms;</SubItem>
          <SubItem label="(b)">Your violation of any applicable law or regulation;</SubItem>
          <SubItem label="(c)">Your misuse of the Website;</SubItem>
          <SubItem label="(d)">Any false, inaccurate, or misleading information you submit through the Website.</SubItem>
        </Section>

        {/* Section 10 */}
        <Section number="10" title="Third-Party Links and Services">
          <Clause id="10.1">The Website may contain links to third-party websites, plugins, applications, or services that are not owned or controlled by Rik.ai. Such links are provided solely for your convenience.</Clause>
          <Clause id="10.2">Rik.ai does not endorse, approve, or assume any responsibility for the content, privacy policies, terms of use, or practices of any third-party websites.</Clause>
          <Clause id="10.3">You access third-party websites at your own risk. We encourage you to read the terms and privacy policies of any third-party website you visit.</Clause>
        </Section>

        {/* Section 11 */}
        <Section number="11" title="Suspension and Termination">
          <Clause id="11.1">Rik.ai may, at its sole discretion and without prior notice, suspend or terminate your access to the Website if:</Clause>
          <SubItem label="(a)">You breach any provision of these Terms;</SubItem>
          <SubItem label="(b)">You engage in conduct that is harmful to Rik.ai, its users, or the Website;</SubItem>
          <SubItem label="(c)">We are required to do so by law or regulatory order.</SubItem>
          <div style={{ marginBottom: 10 }} />
          <Clause id="11.2">Upon termination, all rights granted to you under these Terms shall immediately cease.</Clause>
        </Section>

        {/* Section 12 */}
        <Section number="12" title="Governing Law and Dispute Resolution">
          <Clause id="12.1">These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to its conflict of laws principles.</Clause>
          <Clause id="12.2">Any dispute, controversy, or claim arising out of or relating to these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal, India.</Clause>
          <Clause id="12.3">
            Before initiating formal legal proceedings, you agree to first contact us at{' '}
            <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)' }}>contact@rikai.tech</a>{' '}
            and make a good-faith effort to resolve the dispute through informal negotiation for a period of thirty (30) days.
          </Clause>
          <Clause id="12.4">Nothing in this section shall prevent either party from seeking urgent interim, injunctive, or equitable relief from a court of competent jurisdiction where necessary to prevent immediate harm.</Clause>
        </Section>

        {/* Section 13 */}
        <Section number="13" title="Miscellaneous Provisions">
          <Clause id="13.1"><strong style={{ color: 'var(--text-1)' }}>Entire Agreement.</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and Rik.ai regarding your use of the Website and supersede all prior agreements, understandings, or representations.</Clause>
          <Clause id="13.2"><strong style={{ color: 'var(--text-1)' }}>Severability.</strong> If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be severed, and the remaining provisions shall continue in full force and effect.</Clause>
          <Clause id="13.3"><strong style={{ color: 'var(--text-1)' }}>Waiver.</strong> No failure or delay by Rik.ai in exercising any right under these Terms shall constitute a waiver of that right. A waiver of any provision shall be in writing and signed by Rik.ai.</Clause>
          <Clause id="13.4"><strong style={{ color: 'var(--text-1)' }}>Assignment.</strong> You may not assign or transfer these Terms or any rights or obligations hereunder without our prior written consent. Rik.ai may freely assign these Terms to any affiliate or successor in connection with a merger, acquisition, or sale of assets.</Clause>
          <Clause id="13.5"><strong style={{ color: 'var(--text-1)' }}>Force Majeure.</strong> Rik.ai shall not be liable for any delay or failure to perform its obligations under these Terms resulting from causes beyond its reasonable control, including natural disasters, war, terrorism, strikes, internet outages, governmental actions, or cyberattacks.</Clause>
          <Clause id="13.6"><strong style={{ color: 'var(--text-1)' }}>No Third-Party Beneficiaries.</strong> These Terms are for the benefit of the Parties and their permitted assigns. No third party shall have any rights under or as a beneficiary of these Terms.</Clause>
        </Section>

        {/* Section 14 */}
        <Section number="14" title="Contact Information">
          <P>For any questions, complaints, or legal notices regarding these Terms:</P>
          <div style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '18px 22px', marginBottom: 12,
          }}>
            <p style={{ margin: '0 0 4px', fontSize: 15, color: 'var(--text-1)', fontWeight: 700, fontFamily: 'var(--fh)' }}>Rik Technologies</p>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--text-3)', lineHeight: 1.9 }}>
              Email: <a href="mailto:contact@rikai.tech" style={{ color: 'var(--purple-light)' }}>contact@rikai.tech</a><br />
              Website: <a href="https://rikai.tech" style={{ color: 'var(--text-3)' }}>https://rikai.tech</a>
            </p>
          </div>
          <P>We will use reasonable efforts to acknowledge and address communications in a timely manner.</P>
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
          <a href="/trust" style={{ fontSize: 13, color: 'var(--text-3)' }}>Trust Center</a>
          <a href="/privacy" style={{ fontSize: 13, color: 'var(--text-3)' }}>Privacy Policy</a>
          <a href="/terms" style={{ fontSize: 13, color: 'var(--purple-light)' }}>Terms of Service</a>
        </div>
      </div>

    </div>
  );
}
