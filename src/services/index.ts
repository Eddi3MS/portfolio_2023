import axios, { AxiosResponse } from 'axios'
import { MailerProps } from '../pages/api/contact'

class AppService {
  public static async sendEmail({
    name,
    senderMail,
    text,
  }: MailerProps): Promise<AxiosResponse> {
    return await axios.post('/api/contact', {
      name,
      senderMail,
      text,
    })
  }
}

export { AppService }
