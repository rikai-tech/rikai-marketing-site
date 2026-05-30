import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Formatting helpers ───────────────────────────────────────────────────────

function formatSlotLong(slot) {
  const d = new Date(slot.date.year, slot.date.month, slot.date.day);
  const dateStr = d.toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  return `${dateStr} at ${slot.time} IST`;
}

function formatSlotShort(slot) {
  const d = new Date(slot.date.year, slot.date.month, slot.date.day);
  return d.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' }) + ' · ' + slot.time;
}

// ─── Email templates ──────────────────────────────────────────────────────────

function teamEmailHTML({ name, company, email, phone, slots, guests, notes }) {
  const slotsHTML = slots.map((s, i) => `
    <tr>
      <td style="padding:10px 16px 10px 0;vertical-align:top;white-space:nowrap">
        <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#4f6ef7);color:#fff;font-size:11px;font-weight:800;text-align:center;line-height:24px">${i + 1}</span>
      </td>
      <td style="padding:10px 0;color:#1a1a2e;font-size:14px;line-height:1.5">
        <strong>${formatSlotLong(s)}</strong>
      </td>
    </tr>`).join('');

  const guestsHTML = guests.length
    ? `<div style="margin-top:24px">
        <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em">Guest Emails to Include in Invite</p>
        ${guests.map(g => `<div style="display:inline-block;margin:0 6px 6px 0;padding:4px 12px;background:#f3f0ff;border:1px solid #ddd6fe;border-radius:100px;color:#5b21b6;font-size:13px">${g}</div>`).join('')}
      </div>`
    : '';

  const notesHTML = notes
    ? `<div style="margin-top:24px;padding:16px 20px;background:#fafafa;border-left:4px solid #7c3aed;border-radius:0 8px 8px 0">
        <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em">Additional Notes from Prospect</p>
        <p style="margin:0;color:#444;font-size:14px;line-height:1.7">${notes}</p>
      </div>`
    : '';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f0f5;font-family:'Segoe UI',Arial,sans-serif">
  <div style="max-width:600px;margin:32px auto">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#7c3aed,#4f6ef7);border-radius:12px 12px 0 0;padding:24px 32px">
      <p style="margin:0 0 4px;color:rgba(255,255,255,0.65);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase">⚡ New Demo Request</p>
      <h1 style="margin:0;color:#fff;font-size:24px;font-weight:800;letter-spacing:-.5px">${name}</h1>
      <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:15px">${company}</p>
    </div>

    <!-- Body -->
    <div style="background:#fff;border-radius:0 0 12px 12px;padding:28px 32px;border:1px solid #e8e8f0;border-top:none">

      <!-- Contact details -->
      <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em">Contact Details</p>
      <table style="border-collapse:collapse;width:100%;margin-bottom:24px">
        <tr>
          <td style="padding:6px 0;color:#888;font-size:13px;width:100px">Email</td>
          <td style="padding:6px 0"><a href="mailto:${email}" style="color:#4f6ef7;font-size:14px;font-weight:600">${email}</a></td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#888;font-size:13px">Phone</td>
          <td style="padding:6px 0;color:#1a1a2e;font-size:14px">${phone || '—'}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#888;font-size:13px">Company</td>
          <td style="padding:6px 0;color:#1a1a2e;font-size:14px;font-weight:600">${company}</td>
        </tr>
      </table>

      <hr style="border:none;border-top:1px solid #f0f0f5;margin:0 0 24px">

      <!-- Slots -->
      <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em">Preferred Slots — in Priority Order</p>
      <table style="border-collapse:collapse;width:100%">${slotsHTML}</table>

      ${guestsHTML}
      ${notesHTML}

      <hr style="border:none;border-top:1px solid #f0f0f5;margin:28px 0 16px">
      <p style="margin:0;color:#bbb;font-size:12px;text-align:center">Submitted via rikai.tech · Rik AI Demo Booking System</p>
    </div>
  </div>
</body>
</html>`;
}

function confirmationEmailHTML({ name, slots, guests, notes }) {
  const slotsHTML = slots.map((s, i) => `
    <tr>
      <td style="padding:10px 14px 10px 0;vertical-align:top;white-space:nowrap">
        <span style="display:inline-block;width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#4f6ef7);color:#fff;font-size:10px;font-weight:800;text-align:center;line-height:22px">${i + 1}</span>
      </td>
      <td style="padding:10px 0;font-size:14px;color:#2d2d4e;line-height:1.5">
        ${formatSlotLong(s)}
      </td>
    </tr>`).join('');

  const whatToExpect = [
    { num: '01', title: 'Platform Overview', desc: 'A live walkthrough of Rik AI\'s continuous intelligence engine — from signal capture to actionable insights.' },
    { num: '02', title: 'Use Case Discussion', desc: 'We\'ll explore how Rik AI fits your team, industry, and customer understanding goals.' },
    { num: '03', title: 'Live Demo', desc: 'See the platform in action with scenarios tailored to your context and data.' },
    { num: '04', title: 'Q&A Session', desc: 'Time for all your questions — answered by our product and solutions experts.' },
  ];

  const expectHTML = whatToExpect.map(item => `
    <tr>
      <td style="padding:12px 16px 12px 0;vertical-align:top;color:#c4b5fd;font-size:11px;font-weight:800;font-family:monospace;white-space:nowrap">${item.num}</td>
      <td style="padding:12px 0;border-bottom:1px solid #f0eeff">
        <p style="margin:0 0 3px;font-size:14px;font-weight:700;color:#2d2d4e">${item.title}</p>
        <p style="margin:0;font-size:13px;color:#777;line-height:1.55">${item.desc}</p>
      </td>
    </tr>`).join('');

  const guestsHTML = guests?.length
    ? `<div style="margin-top:6px;padding:14px 18px;background:#fafafa;border-radius:8px;border:1px solid #eee">
        <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.07em">Your Guests</p>
        <p style="margin:0;font-size:13px;color:#555">The following will be included in your calendar invite: <strong>${guests.join(', ')}</strong></p>
      </div>`
    : '';

  const notesHTML = notes
    ? `<div style="margin-top:10px;padding:14px 18px;background:#fafafa;border-radius:8px;border:1px solid #eee">
        <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.07em">Your Notes</p>
        <p style="margin:0;font-size:13px;color:#555;line-height:1.6;font-style:italic">"${notes}"</p>
        <p style="margin:6px 0 0;font-size:12px;color:#999">We've noted this and will come prepared.</p>
      </div>`
    : '';

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:'Segoe UI',Arial,sans-serif">
  <div style="max-width:580px;margin:32px auto">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#7c3aed,#4f6ef7);border-radius:12px 12px 0 0;padding:32px;text-align:center">
      <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.2);margin:0 auto 16px;text-align:center;line-height:48px;font-size:22px;color:#fff">✓</div>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">Your demo is being scheduled</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px">Hi ${name}, we've received your preferred slots</p>
    </div>

    <!-- Body -->
    <div style="background:#fff;padding:28px 32px;border:1px solid #e8e8f0;border-top:none">

      <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.7">
        Thank you for your interest in Rik AI. Our team will review your preferred slots and confirm the best available time within <strong>24 hours</strong>. Once confirmed, you'll receive a calendar invite directly to your inbox.
      </p>

      <!-- Slots recap -->
      <div style="background:#faf8ff;border:1px solid #ede9fe;border-radius:10px;padding:18px 20px;margin-bottom:20px">
        <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em">Your Preferred Slots</p>
        <table style="border-collapse:collapse;width:100%">${slotsHTML}</table>
      </div>

      ${guestsHTML}
      ${notesHTML}

      <hr style="border:none;border-top:1px solid #f0f0f5;margin:24px 0">

      <!-- What to expect -->
      <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em">What to Expect in Your Demo</p>
      <table style="border-collapse:collapse;width:100%">${expectHTML}</table>

      <hr style="border:none;border-top:1px solid #f0f0f5;margin:24px 0">

      <p style="margin:0;color:#666;font-size:13px;line-height:1.7">
        Questions in the meantime? Reply to this email or reach us at <a href="mailto:sales@rikai.tech" style="color:#7c3aed;font-weight:600">sales@rikai.tech</a>
      </p>
    </div>

    <!-- Footer -->
    <div style="padding:18px 32px;text-align:center">
      <p style="margin:0;color:#bbb;font-size:12px">Rik AI · The new verse of market intelligence</p>
    </div>
  </div>
</body>
</html>`;
}

// ─── HubSpot helpers ──────────────────────────────────────────────────────────

async function hubspotRequest(path, method, body) {
  const res = await fetch(`https://api.hubapi.com${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.HUBSPOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return { ok: res.ok, status: res.status, data: res.ok ? await res.json() : null };
}

async function upsertHubSpotContact({ name, company, email, phone, consent }) {
  const [firstname, ...rest] = name.trim().split(' ');
  const lastname = rest.join(' ');

  const consentProperties = consent ? {
    hs_legal_basis: 'Freely given consent from contact',
    hs_lawful_basis_explanation: 'Contact submitted the Book a Demo form on rikai.tech and explicitly consented to be contacted about their enquiry and related products.',
  } : {};

  // Try create first
  const create = await hubspotRequest('/crm/v3/objects/contacts', 'POST', {
    properties: { firstname, lastname, email, phone: phone || '', company, hs_lead_status: 'NEW', ...consentProperties },
  });

  if (create.ok) return create.data.id;

  // 409 = already exists — search by email to get existing ID
  if (create.status === 409) {
    const search = await hubspotRequest('/crm/v3/objects/contacts/search', 'POST', {
      filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }],
    });
    if (search.ok && search.data.results?.length) return search.data.results[0].id;
  }

  return null;
}

async function createHubSpotDeal({ name, company, slots, notes, guests, contactId }) {
  const slotsSummary = slots.map((s, i) => `#${i + 1}: ${formatSlotShort(s)}`).join(' | ');
  const parts = [`Preferred slots: ${slotsSummary}`];
  if (guests?.length) parts.push(`Guests: ${guests.join(', ')}`);
  if (notes) parts.push(`Notes: ${notes}`);

  const associations = contactId
    ? [{ to: { id: contactId }, types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }] }]
    : [];

  const deal = await hubspotRequest('/crm/v3/objects/deals', 'POST', {
    properties: {
      dealname: `Demo Request — ${name} (${company})`,
      dealstage: 'appointmentscheduled',
      pipeline: 'default',
      description: parts.join('\n\n'),
    },
    associations,
  });

  return deal.ok ? deal.data : null;
}

async function createHubSpotNote({ slots, guests, notes, contactId, dealId }) {
  const slotsText = slots.map((s, i) => `#${i + 1}  ${formatSlotLong(s)}`).join('\n');
  const guestsText = guests?.length ? guests.map(g => `• ${g}`).join('\n') : 'None';
  const notesText = notes?.trim() || 'Not provided';

  const noteBody = `PREFERRED SLOTS\n${slotsText}\n\nGUESTS TO INCLUDE IN CALENDAR INVITE\n${guestsText}\n\nADDITIONAL NOTES FROM PROSPECT\n${notesText}`;

  const note = await hubspotRequest('/crm/v3/objects/notes', 'POST', {
    properties: {
      hs_note_body: noteBody,
      hs_timestamp: new Date().toISOString(),
    },
  });

  if (!note.ok) return;
  const noteId = note.data.id;

  await Promise.allSettled([
    contactId && hubspotRequest(`/crm/v3/objects/notes/${noteId}/associations/contacts/${contactId}/note_to_contact`, 'PUT'),
    dealId    && hubspotRequest(`/crm/v3/objects/notes/${noteId}/associations/deals/${dealId}/note_to_deal`, 'PUT'),
  ]);
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    const { name, company, email, phone, slots, guests, notes, consent } = await request.json();

    const fromAddress = process.env.RESEND_FROM_ADDRESS || 'Rik AI <noreply@rikai.tech>';
    const toAddress = process.env.BOOKING_NOTIFY_EMAIL || 'sales@rikai.tech';

    const allRecipients = [email, ...(guests || [])].filter(Boolean);

    const [teamEmail, confirmEmail, hubspot] = await Promise.allSettled([
      // Internal team notification
      resend.emails.send({
        from: fromAddress,
        to: [toAddress],
        subject: `New Demo Request — ${name} (${company})`,
        html: teamEmailHTML({ name, company, email, phone, slots, guests: guests || [], notes }),
      }),

      // Confirmation to prospect + guests
      resend.emails.send({
        from: fromAddress,
        to: allRecipients,
        replyTo: toAddress,
        subject: `Your Rik AI demo request is confirmed — we'll be in touch shortly`,
        html: confirmationEmailHTML({ name, slots, guests: guests || [], notes }),
      }),

      // HubSpot CRM
      (async () => {
        const contactId = await upsertHubSpotContact({ name, company, email, phone, consent });
        const deal = await createHubSpotDeal({ name, company, slots, notes, guests, contactId });
        await createHubSpotNote({ slots, guests, notes, contactId, dealId: deal?.id || null });
      })(),
    ]);

    // Log failures server-side but don't expose them to the client
    if (teamEmail.status === 'rejected')   console.error('[book-demo] Team email failed:', teamEmail.reason);
    if (confirmEmail.status === 'rejected') console.error('[book-demo] Confirm email failed:', confirmEmail.reason);
    if (hubspot.status === 'rejected')      console.error('[book-demo] HubSpot failed:', hubspot.reason);

    return Response.json({ success: true });
  } catch (err) {
    console.error('[book-demo] Unexpected error:', err);
    return Response.json({ success: false }, { status: 500 });
  }
}
