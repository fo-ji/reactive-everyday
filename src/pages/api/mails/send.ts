import { MailDataRequired } from '@sendgrid/helpers/classes/mail'
import sgMail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

import { MAIL_FROM, MAIL_TO, SENDGRID_API_KEY } from '@/config'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  sgMail.setApiKey(SENDGRID_API_KEY)
  const msg: MailDataRequired = {
    from: MAIL_FROM,
    html: `
    <strong>${req.body.name}さんからの問い合わせ</strong>
    <p>メールアドレス：${req.body.email}</p>
    <p>${req.body.message}</p>
    `,
    subject: 'reactな日常_お問い合わせフォーム',
    text: `${req.body.name}さん(${req.body.email})からの問い合わせ: ${req.body.message}`,
    to: MAIL_TO
  }

  try {
    await sgMail.send(msg)
    res.status(200).json(msg)
  } catch (err) {
    console.error(err)
    res.status(500).json(err)
  }
}
