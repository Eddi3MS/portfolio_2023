import { Box, Heading, Text } from '@ems-ignite/react'
import { Fade } from 'react-awesome-reveal'
import { CustomReveal } from '../../components'
import useTranslation from '../../hooks/useTranslation'
import aboutTexts from './about.json'
import * as S from './About.styled'

const About = () => {
  const currLocale = useTranslation(aboutTexts.lang)

  return (
    <S.About id='1'>
      <Fade cascade className='z5'>
        <Heading size='3xl'>{currLocale.title}</Heading>
      </Fade>

      <div className='about__container'>
        <CustomReveal className='about__wrapper' delay={200}>
          <Box>
            {currLocale.first_block?.map((text, i) => (
              <Text size='md' className='inter' key={i}>
                {text}
              </Text>
            ))}
          </Box>
        </CustomReveal>
        <CustomReveal className='about__wrapper' delay={400}>
          <Box>
            {currLocale.second_block?.map((text, i) => (
              <Text size='md' className='inter' key={i}>
                {text}
              </Text>
            ))}
          </Box>
        </CustomReveal>
        <CustomReveal className='about__wrapper' delay={600}>
          <Box>
            {currLocale.third_block?.map((text, i) => (
              <Text size='md' className='inter' key={i}>
                {text}
              </Text>
            ))}
          </Box>
        </CustomReveal>
      </div>
    </S.About>
  )
}

export default About
