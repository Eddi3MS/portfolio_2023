import { ArrowCircleDown } from 'phosphor-react'
import { AnchorHTMLAttributes } from 'react'
import { AttentionSeeker } from 'react-awesome-reveal'
import * as S from './NextSec.styled'

const NextSec = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <S.NextSec className='arrow_down' {...props}>
      <AttentionSeeker effect='bounce'>
        <ArrowCircleDown size={40} />
      </AttentionSeeker>
    </S.NextSec>
  )
}

export default NextSec
