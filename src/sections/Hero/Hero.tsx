import { Button, Heading, Text } from '@ems-ignite/react'
import { ArrowCircleDown, Download } from 'phosphor-react'
import { AttentionSeeker } from 'react-awesome-reveal'
import { CustomReveal } from '../../components'
import useTranslation from '../../hooks/useTranslation'
import heroTexts from './hero.json'
import * as S from './Hero.styled'

const Hero = () => {
  const currLocale = useTranslation(heroTexts.lang)

  return (
    <S.Hero id='0'>
      <div className='wrapper z5'>
        <CustomReveal>
          <Text as='p' size='md' className='inter'>
            {currLocale.title_1}
          </Text>
        </CustomReveal>
        <CustomReveal>
          <Heading as='h1' size='3xl' className='inter'>
            {currLocale.title_2}
          </Heading>
        </CustomReveal>
        <CustomReveal>
          <Heading as='h2' size='3xl' className='inter'>
            {currLocale.title_3}
          </Heading>
        </CustomReveal>
        <CustomReveal>
          <Button
            as='a'
            href={currLocale.download}
            download='edson_marcelo_curriculum'
            role='button'
            variant='secondary'
          >
            <Download size={24} weight='bold' /> {currLocale.button}
          </Button>
        </CustomReveal>
      </div>
      <a href='#1' className='arrow_down'>
        <AttentionSeeker effect='bounce'>
          <ArrowCircleDown size={40} />
        </AttentionSeeker>
      </a>
    </S.Hero>
  )
}

export default Hero
