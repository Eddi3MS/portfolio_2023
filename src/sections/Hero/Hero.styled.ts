import styled from 'styled-components'
export const Hero = styled.section`
  min-height: calc(100vh - var(--header-height));
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  padding-inline: 0.5rem;

  position: relative;

  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  p {
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  a {
    margin-top: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1;
    color: var(--primary);
    transition: background var(--transition);
    max-width: 230px;
    margin-inline: auto;
  }
`
