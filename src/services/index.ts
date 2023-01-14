import { AxiosResponse } from 'axios'
import { MailerProps } from '../pages/api/contact'
import api from './api'

class AppService {
  public static async sendEmail({
    name,
    senderMail,
    text,
  }: MailerProps): Promise<AxiosResponse> {
    return await api.post('/api/contact', {
      name,
      senderMail,
      text,
    })
  }
}

export { AppService }
