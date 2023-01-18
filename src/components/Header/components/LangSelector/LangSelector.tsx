import { useRouter } from 'next/router'
import { HTMLAttributes } from 'react'
import * as S from './LangSelector.styled'
import { Fade } from 'react-awesome-reveal'

const langs = [
  {
    id: 1,
    src: '/usa.png',
    value: 'en',
    title: 'English',
  },
  {
    id: 2,
    src: '/br.png',
    value: 'pt',
    title: 'Portuguese',
  },
]

type LangSelectorProps = HTMLAttributes<HTMLElement>

const LangSelector = (props: LangSelectorProps) => {
  const router = useRouter()

  const changeLanguage = (key: string) => {
    router.push(router.asPath, undefined, {
      locale: key,
    })
  }

  return (
    <S.LangSelector {...props}>
      {langs.map((lang, i) => (
        <Fade cascade damping={0.3} delay={i === 0 ? 1500 : 1800} key={lang.id}>
          <button
            className={`lang-box  ${
              router.locale === lang.value ? 'active' : ''
            }`}
            onClick={changeLanguage.bind(this, lang.value)}
            style={{ backgroundImage: `url(${lang.src})` }}
            aria-label={`change language to ${lang.title}`}
          >
            <span aria-label={lang.title}>{lang.title}</span>
          </button>
        </Fade>
      ))}
    </S.LangSelector>
  )
}

export default LangSelector
