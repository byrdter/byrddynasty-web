import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@byrddynasty.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Byrddynasty <onboarding@resend.dev>'

type SubscribePayload = {
  email?: string
  source?: string
}

export async function POST(request: Request) {
  let body: SubscribePayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  const email = body.email?.trim() ?? ''
  const source = (body.source?.trim() || 'site').slice(0, 64)

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  // Until a dedicated list provider is wired up, notify the inbox so no signup is lost.
  if (!process.env.RESEND_API_KEY) {
    console.warn(`[subscribe] RESEND_API_KEY not set — captured ${email} (source: ${source})`)
    return NextResponse.json({ ok: true })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New subscriber: ${email}`,
      text: `New email-updates signup\n\nEmail:  ${email}\nSource: ${source}`,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Subscribe route error:', err)
    return NextResponse.json({ error: 'Failed to subscribe.' }, { status: 500 })
  }
}
