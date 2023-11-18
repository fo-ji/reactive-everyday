import sgMail, { MailDataRequired } from '@sendgrid/mail'
import { NextRequest, NextResponse } from 'next/server'

import { MAIL_FROM, MAIL_TO, SENDGRID_API_KEY } from '@/config'

export async function POST(req: NextRequest) {
  const requestBody = await req.json()

  sgMail.setApiKey(SENDGRID_API_KEY)

  const msg: MailDataRequired = {
    from: MAIL_FROM,
    html: `
    <strong>${requestBody.name}さんからの問い合わせ</strong>
    <p>メールアドレス：${requestBody.email}</p>
    <p>${requestBody.message}</p>
    `,
    subject: 'reactな日常_お問い合わせフォーム',
    text: `${requestBody.name}さん(${requestBody.email})からの問い合わせ: ${requestBody.message}`,
    to: MAIL_TO
  }

  try {
    await sgMail.send(msg)
    return NextResponse.json({ msg })
  } catch (err) {
    console.error(err)
    return Promise.reject(err)
  }
}
