import {
  Box,
  Button,
  Heading,
  Text,
  TextArea,
  TextInput,
  useToast,
} from '@ems-ignite/react'
import { FormEvent, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { CustomReveal } from '../../components'
import useTranslation from '../../hooks/useTranslation'
import { AppService } from '../../services'
import contactTexts from './contact.json'
import * as S from './Contact.styled'

const Contact = () => {
  const currLocale = useTranslation(contactTexts.lang)
  const [loading, setLoading] = useState(false)

  const { toast } = useToast()

  const handleContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)

    const senderMail = form.get('senderMail') as string
    const name = form.get('name') as string
    const text = form.get('text') as string

    if (!name || !text || !senderMail)
      return toast({
        content: currLocale.warning.message,
        title: currLocale.warning.title,
      })

    setLoading(true)

    try {
      await AppService.sendEmail({ name, text, senderMail })

      toast({
        content: currLocale.success.message,
        title: currLocale.success.title,
      })

      const formElement = document.getElementById(
        'contact_form'
      ) as HTMLFormElement
      formElement.reset()
    } catch (error) {
      toast({
        content: currLocale.error.message,
        title: currLocale.error.title,
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <S.Contact id="3">
      <Fade cascade className="z5">
        <Heading size="3xl">{currLocale.title}</Heading>
      </Fade>

      <CustomReveal delay={100} className="z5">
        <Box
          as="form"
          className="form__wrapper z5"
          onSubmit={handleContact}
          id="contact_form"
        >
          <CustomReveal delay={300}>
            <Text as="label" className="input__wrapper inter" htmlFor="name">
              {currLocale.name}:
              <TextInput name="name" id="name" type="text" />
            </Text>
          </CustomReveal>

          <CustomReveal delay={400}>
            <Text
              as="label"
              className="input__wrapper inter"
              htmlFor="senderMail"
            >
              {currLocale.email}:
              <TextInput name="senderMail" id="senderMail" type="email" />
            </Text>
          </CustomReveal>

          <CustomReveal delay={500}>
            <Text as="label" className="input__wrapper inter" htmlFor="text">
              {currLocale.message}:
              <TextArea name="text" id="text" rows={3} />
            </Text>
          </CustomReveal>

          <CustomReveal delay={600}>
            <Button
              type="submit"
              size="full"
              className="inter"
              disabled={loading}
            >
              {loading ? currLocale.btn_send : currLocale.btn}
            </Button>
          </CustomReveal>
        </Box>
      </CustomReveal>
    </S.Contact>
  )
}

export default Contact
