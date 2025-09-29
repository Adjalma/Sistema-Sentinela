
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID; // obrigatório para envio automático
const FROM_EMAIL = process.env.RESEND_FROM || 'no-reply@sistemassentinela.com.br';
const SUBJECT_DEFAULT = process.env.NEWSLETTER_SUBJECT || 'Novidades do Sistema Sentinela';
const INTRO_DEFAULT = process.env.NEWSLETTER_INTRO || '';

// Importar dados dos projetos para gerar destaques automaticamente
// Caminho relativo: api/ -> src/
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { projects } = require('../src/data/projects');

import { Pool } from 'pg';

async function fetchAudienceContacts(): Promise<string[]> {
  // Sem Audience: lemos do Postgres serverless (tabela subscribers)
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await pool.query(`CREATE TABLE IF NOT EXISTS subscribers (
    email TEXT PRIMARY KEY,
    consent BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
  )`);
  const { rows } = await pool.query<{ email: string }>(`SELECT email FROM subscribers WHERE consent = TRUE`);
  await pool.end();
  return rows.map((r) => String(r.email).toLowerCase());
}

type SimpleProject = {
  id: string;
  name: string;
  description: string;
  status: string;
  progress: number;
  github?: string;
  demo?: string;
};

function formatStatus(status: string): string {
  switch (status) {
    case 'development':
      return 'Em Desenvolvimento';
    case 'testing':
      return 'Em Testes';
    case 'production':
      return 'Em Produção';
    case 'planning':
      return 'Planejamento';
    default:
      return status;
  }
}

function pickTopProjects(): SimpleProject[] {
  const order = (p: any) => ({
    priority: p.priority === 'high' ? 0 : p.priority === 'medium' ? 1 : 2,
    progress: -p.progress,
  });
  const sorted = [...projects].sort((a: any, b: any) => {
    const oa = order(a);
    const ob = order(b);
    if (oa.priority !== ob.priority) return oa.priority - ob.priority;
    return oa.progress - ob.progress;
  });
  return sorted.slice(0, 4).map((p: any) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    status: p.status,
    progress: p.progress,
    github: p.github,
    demo: p.demo,
  }));
}

function buildHtml(): string {
  const date = new Date();
  const month = date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  const site = process.env.APP_BASE_URL || 'https://sistemas-sentinela.vercel.app';
  const intro = INTRO_DEFAULT ? `<p>${INTRO_DEFAULT}</p>` : '';
  const top = pickTopProjects();

  // Novidades da quinzena: 3 primeiros projetos com próximo marco (quando existir)
  const highlights = top.slice(0, 3)
    .map((p: any) => {
      const milestone = p.nextMilestone ? ` – Próximo marco: ${p.nextMilestone}` : '';
      return `<li><b>${p.name}</b>: ${formatStatus(p.status)}, ${p.progress}%${milestone}</li>`;
    })
    .join('');

  const projectCards = top
    .map(
      (p) => `
      <tr>
        <td style="padding:12px;border:1px solid #eee;border-radius:8px">
          <h3 style="margin:0 0 6px 0;color:#111;font-size:16px">${p.name}</h3>
          <p style="margin:0 0 8px 0;color:#444;font-size:14px">${p.description}</p>
          <p style="margin:0 0 8px 0;color:#6b7280;font-size:12px">Status: ${formatStatus(p.status)} • Progresso: ${p.progress}%</p>
          <div>
            <a href="${site}/projetos" style="margin-right:10px;color:#dc2626;text-decoration:none">Ver no Portfólio</a>
            ${p.github ? `<a href="${p.github}" style="margin-right:10px;color:#111;text-decoration:none">Código</a>` : ''}
            ${p.demo ? `<a href="${p.demo}" style="color:#111;text-decoration:none">Demo</a>` : ''}
          </div>
        </td>
      </tr>`
    )
    .join('');

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
    <h1 style="margin:0 0 16px 0">Sistema Sentinela – Atualizações ${month}</h1>
    ${intro}
    <h2 style="margin:0 0 8px 0;font-size:18px">Novidades da quinzena</h2>
    <ul style="margin-top:0">${highlights}</ul>
    <p>Obrigado por acompanhar nossos projetos. Abaixo, os destaques recentes:</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 12px">${projectCards}</table>
    <p style="margin-top:16px">Links rápidos: 
      <a href="${site}" target="_blank">Portfólio</a> • 
      <a href="${site}/projetos" target="_blank">Todos os Projetos</a> • 
      <a href="${site}/sobre" target="_blank">Nossa História</a> • 
      <a href="https://github.com/Adjalma" target="_blank">GitHub</a> • 
      <a href="https://wa.me/5522974032357?text=Olá!%20Quero%20conversar%20sobre%20um%20projeto" target="_blank">Iniciar Projeto</a>
    </p>
    <p>Se não quiser mais receber, responda este e‑mail com "cancelar".</p>
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
    <p style="font-size:12px;color:#6b7280">© ${date.getFullYear()} Sistema Sentinela • Macaé, RJ – Brasil</p>
  </div>`;
}

async function sendBatch(to: string[], subject: string, html: string) {
  if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY não configurada');
  const headers = {
    Authorization: `Bearer ${RESEND_API_KEY}`,
    'Content-Type': 'application/json',
  } as const;

  // Enviar em lotes de até 100 destinatários por requisição
  const chunkSize = 100;
  for (let i = 0; i < to.length; i += chunkSize) {
    const chunk = to.slice(i, i + chunkSize);
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        from: `Sistema Sentinela <${FROM_EMAIL}>`,
        to: chunk,
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Falha ao enviar lote: ${res.status} ${text}`);
    }
  }
}

export default async function handler(req: any, res: any) {
  try {
    const dry = req.query.dry === '1';
    const recipients = await fetchAudienceContacts();
    if (recipients.length === 0) {
      return res.status(200).json({ ok: true, info: 'Sem contatos para enviar' });
    }

    const subject = SUBJECT_DEFAULT;
    const html = buildHtml();

    if (!dry) {
      await sendBatch(recipients, subject, html);
    }

    return res.status(200).json({ ok: true, sent: dry ? 0 : recipients.length, preview: dry });
  } catch (err: any) {
    console.error('newsletter error', err);
    return res.status(500).json({ error: err.message || 'Erro ao enviar newsletter' });
  }
}


