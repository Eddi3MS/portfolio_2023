import { Text } from '@ems-ignite/react'
import { Fade } from 'react-awesome-reveal'
import useTranslation from '../../hooks/useTranslation'
import { LangSelector } from './components'
import headerTexts from './header.json'
import * as S from './Header.styled'

const Header = () => {
  const currLocale = useTranslation(headerTexts.lang)

  return (
    <S.Header>
      <div className='c_header__wrapper'>
        <Fade delay={100}>
          <Text as='a' href='#0' className='logo inter'>
            Edson Marcelo
          </Text>
        </Fade>
        <nav>
          <Fade cascade damping={0.3} delay={500}>
            <a href='#1' className='inter'>
              {currLocale.about}
            </a>

            <a href='#2' className='inter'>
              {currLocale.projects}
            </a>

            <a href='#3' className='inter'>
              {currLocale.contact}
            </a>
          </Fade>
        </nav>

        <LangSelector className='lang' />
      </div>
    </S.Header>
  )
}

export default Header
