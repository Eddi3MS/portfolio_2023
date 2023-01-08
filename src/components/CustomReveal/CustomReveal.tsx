import { keyframes } from '@emotion/react'
import { Reveal, RevealProps } from 'react-awesome-reveal'

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, -50px, -300px) scale(.8);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`

interface CustomRevealProps extends RevealProps {
  type?: ''
}

const CustomReveal = ({ children, ...rest }: CustomRevealProps) => {
  return (
    <Reveal keyframes={customAnimation} {...rest}>
      {children}
    </Reveal>
  )
}

export default CustomReveal
