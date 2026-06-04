import nodemailer from 'nodemailer'
import { Lead } from '@/types'

export async function sendContactEmail(lead: Lead): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn('Email not configured — skipping email send.')
    return
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  await transporter.sendMail({
    from: `"KEVCA Web" <${SMTP_USER}>`,
    to: SMTP_USER,
    subject: `Nuevo contacto: ${lead.nombre}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #0C006E;">Nuevo mensaje desde la web</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight: bold;">Nombre</td><td style="padding: 8px;">${lead.nombre}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Teléfono</td><td style="padding: 8px;">${lead.telefono}</td></tr>
          ${lead.email ? `<tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${lead.email}</td></tr>` : ''}
          ${lead.servicio ? `<tr><td style="padding: 8px; font-weight: bold;">Servicio</td><td style="padding: 8px;">${lead.servicio}</td></tr>` : ''}
          ${lead.mensaje ? `<tr><td style="padding: 8px; font-weight: bold;">Mensaje</td><td style="padding: 8px;">${lead.mensaje}</td></tr>` : ''}
        </table>
      </div>
    `,
  })
}
