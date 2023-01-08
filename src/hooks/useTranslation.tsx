import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useTranslation = <Type extends { locale: string }>(
  texts: Type[]
): Type => {
  const [currentTexts, setCurrentTexts] = useState({} as Type)
  const { locale } = useRouter()

  useEffect(() => {
    const currentPageTexts = texts.find(
      (text) => text.locale === locale
    ) as Type

    setCurrentTexts(currentPageTexts)
  }, [locale, texts])

  return currentTexts
}

export default useTranslation
