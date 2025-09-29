
// Simple email validator
const isValidEmail = (email: string): boolean => {
  return /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/.test(
    email.trim().toLowerCase()
  );
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID; // optional
const FROM_EMAIL = process.env.RESEND_FROM || 'no-reply@sistemassentinela.com.br';
const NOTIFY_EMAIL = process.env.RESEND_NOTIFY || 'suporte@sistemassentinela.com.br';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, consent } = req.body ?? {};

    // Basic anti-bot honeypot (hidden field)
    if (typeof req.body?.website === 'string' && req.body.website.length > 0) {
      return res.status(200).json({ ok: true });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Email inválido' });
    }

    if (!RESEND_API_KEY) {
      return res.status(500).json({ error: 'RESEND_API_KEY não configurada' });
    }

    const headers = {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    } as const;

    // 1) Optionally add to Audience (creates contact for newsletter)
    if (RESEND_AUDIENCE_ID) {
      await fetch('https://api.resend.com/audiences/contacts', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          audience_id: RESEND_AUDIENCE_ID,
          email,
          unsubscribed: false,
        }),
      });
    }

    // 2) Send confirmation email (double opt-in like)
    const baseUrl = process.env.APP_BASE_URL || 'https://sistemas-sentinela.vercel.app';
    const confirmUrl = `${baseUrl}/?subscribed=1`;

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: `Sistema Sentinela <${FROM_EMAIL}>`,
        to: [email],
        subject: 'Confirme sua inscrição – Sistema Sentinela',
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6">
            <h2>Quase lá!</h2>
            <p>Confirme sua inscrição para receber novidades do Sistema Sentinela.</p>
            <p><a href="${confirmUrl}" style="background:#dc2626;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none">Confirmar inscrição</a></p>
            <p style="font-size:12px;color:#6b7280">Se você não solicitou esta inscrição, ignore este e‑mail.</p>
          </div>
        `,
      }),
    });

    // 3) Notify internal mailbox
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: `Sistema Sentinela <${FROM_EMAIL}>`,
        to: [NOTIFY_EMAIL],
        subject: 'Novo inscrito na newsletter',
        html: `<p>Email: <b>${email}</b></p><p>Consentimento: ${!!consent}</p>`,
      }),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('subscribe error', err);
    return res.status(500).json({ error: 'Erro ao processar inscrição' });
  }
}


