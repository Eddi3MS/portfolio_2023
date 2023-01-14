import styled, { css } from 'styled-components'

export const About = styled.section<{ width: number }>`
  min-height: calc(100vh - var(--header-height) - 5rem);
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url('/space.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  position: relative;
  z-index: 2;

  ${({ width }) => css`
    padding-bottom: ${width > 840 ? '5rem' : '2.5rem'};
  `}

  h2 {
    padding-block: 2.5rem;
    text-align: center;
  }

  .about__container {
    max-width: min(1280px, 96%);
    margin-inline: auto;
  }

  .about__wrapper {
    border-radius: 8px;
    max-width: 600px;

    & div {
      background: rgba(0, 0, 0, 0.8);
      transition: background var(--transition);

      &:hover {
        background: #141413;
      }
    }
  }
  .about__wrapper:nth-of-type(1) {
    margin-right: auto;
  }
  .about__wrapper:nth-of-type(2) {
    margin-inline: auto;
  }
  .about__wrapper:nth-of-type(3) {
    margin-left: auto;
  }

  .about__wrapper:not(:nth-of-type(1)) {
    margin-top: 1rem;
  }
`
