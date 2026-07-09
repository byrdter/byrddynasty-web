import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@byrddynasty.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Byrddynasty Contact <onboarding@resend.dev>'

type ContactPayload = {
  name?: string
  email?: string
  company?: string
  industry?: string
  employees?: string
  challenge?: string
  subject?: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    )
  }

  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  const name = body.name?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const challenge = body.challenge?.trim() ?? ''
  const subject = body.subject?.trim() ?? ''

  if (!name || !email || !challenge || !subject) {
    return NextResponse.json(
      { error: 'Missing required fields.' },
      { status: 400 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  const company = body.company?.trim() || '—'
  const industry = body.industry?.trim() || '—'
  const employees = body.employees?.trim() || '—'

  const subjectLine = `New contact: ${name} (${subject})`

  const textBody = [
    `New contact form submission`,
    ``,
    `Name:       ${name}`,
    `Email:      ${email}`,
    `Company:    ${company}`,
    `Industry:   ${industry}`,
    `Size:       ${employees}`,
    `Interest:   ${subject}`,
    ``,
    `Manual process taking the most time:`,
    challenge,
  ].join('\n')

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #111;">
      <h2 style="margin: 0 0 16px;">New contact form submission</h2>
      <table cellpadding="6" style="border-collapse: collapse;">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
        <tr><td><strong>Industry</strong></td><td>${escapeHtml(industry)}</td></tr>
        <tr><td><strong>Size</strong></td><td>${escapeHtml(employees)}</td></tr>
        <tr><td><strong>Interest</strong></td><td>${escapeHtml(subject)}</td></tr>
      </table>
      <h3 style="margin: 24px 0 8px;">Manual process taking the most time</h3>
      <p style="white-space: pre-wrap; line-height: 1.5;">${escapeHtml(challenge)}</p>
    </div>
  `

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: subjectLine,
      text: textBody,
      html: htmlBody,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
