import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
0% {
  scale: 1;
  opacity: 1;
}
50% {
  scale: .7;
  opacity: .5;
}
100% {
  scale: 1;
  opacity: 1;
}


`
export const Music = styled.div`
  color: var(--primary);
  background: transparent;
  border: 0;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  border: 2px solid var(--primary);
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  align-items: center;

  &:hover {
    animation-name: ${pulse};
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`
