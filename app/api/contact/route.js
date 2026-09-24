import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function teamEmailHTML({ name, email, company, product, message }) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f0f5;font-family:'Segoe UI',Arial,sans-serif">
  <div style="max-width:600px;margin:32px auto">
    <div style="background:linear-gradient(135deg,#7c3aed,#4f6ef7);border-radius:12px 12px 0 0;padding:24px 32px">
      <p style="margin:0 0 4px;color:rgba(255,255,255,0.65);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase">✉ New Contact Form Submission</p>
      <h1 style="margin:0;color:#fff;font-size:24px;font-weight:800;letter-spacing:-.5px">${name}</h1>
      <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:15px">${company || 'No company given'}</p>
    </div>
    <div style="background:#fff;border-radius:0 0 12px 12px;padding:28px 32px;border:1px solid #e8e8f0;border-top:none">
      <table style="border-collapse:collapse;width:100%;margin-bottom:20px">
        <tr>
          <td style="padding:6px 0;color:#888;font-size:13px;width:110px">Email</td>
          <td style="padding:6px 0"><a href="mailto:${email}" style="color:#4f6ef7;font-size:14px;font-weight:600">${email}</a></td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#888;font-size:13px">Interested in</td>
          <td style="padding:6px 0;color:#1a1a2e;font-size:14px;font-weight:600">${product || 'Not specified'}</td>
        </tr>
      </table>
      <hr style="border:none;border-top:1px solid #f0f0f5;margin:0 0 20px">
      <p style="margin:0 0 8px;font-size:11px;font-weight:700;color:#7c3aed;text-transform:uppercase;letter-spacing:.08em">Message</p>
      <p style="margin:0;color:#333;font-size:14px;line-height:1.7;white-space:pre-wrap">${message}</p>
      <hr style="border:none;border-top:1px solid #f0f0f5;margin:24px 0 16px">
      <p style="margin:0;color:#bbb;font-size:12px;text-align:center">Submitted via rikai.tech · Contact form</p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request) {
  try {
    const { name, email, company, product, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    const fromAddress = process.env.RESEND_FROM_ADDRESS || 'Rik AI <noreply@rikai.tech>';
    const toAddress = process.env.CONTACT_NOTIFY_EMAIL || 'sales@rikai.tech';

    const result = await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: email,
      subject: `New enquiry — ${name}${company ? ` (${company})` : ''}`,
      html: teamEmailHTML({ name, email, company, product, message }),
    });

    if (result.error) {
      console.error('[contact] Resend error:', result.error);
      return Response.json({ success: false }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return Response.json({ success: false }, { status: 500 });
  }
}
