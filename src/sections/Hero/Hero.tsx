import { Button, Heading, Text } from '@ems-ignite/react'
import { Download } from 'phosphor-react'
import { CustomReveal, NextSec } from '../../components'
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
      <NextSec href='#1' />
    </S.Hero>
  )
}

export default Hero
