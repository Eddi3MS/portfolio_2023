/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import { NextApiRequest, NextApiResponse } from 'next'

export interface MailerProps {
  senderMail: string
  name: string
  text: string
}

const { OAuth2 } = google.auth

const email = process.env.MAILADRESS

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN

const OAuth2_client = new OAuth2(clientId, clientSecret)
OAuth2_client.setCredentials({ refresh_token: refreshToken })

const accessToken = OAuth2_client.getAccessToken()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: email,
    clientId,
    clientSecret,
    refreshToken,
    accessToken,
  },
})

const mailer = ({ senderMail, name, text }: MailerProps) => {
  const from = `${name} <${senderMail}>`
  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${name}`,
    text,
    replyTo: from,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error: any, info: unknown) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST')
    return res.status(403).send({ message: 'method not allowed.' })

  const { senderMail, name, text } = req.body
  if (senderMail === '' || name === '' || text === '') {
    res.status(403).send({ message: 'invalid request data' })
    return
  }

  const mailerRes = (await mailer({ senderMail, name, text })) as {
    messageId?: string
  }

  if ('messageId' in mailerRes) {
    return res.status(200).send({ message: 'message sent.' })
  }

  return res.status(403).send({ message: 'Something went wrong.' })
}
