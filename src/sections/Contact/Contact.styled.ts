import styled from 'styled-components'
export const Contact = styled.section`
  min-height: 100vh;
  background-color: var(--bg);
  padding-inline: 0.5rem;

  h2 {
    padding-block: 2.5rem 5rem;
    text-align: center;
  }

  .form__wrapper,
  .input__wrapper {
    display: flex;
    flex-direction: column;
  }

  .form__wrapper {
    max-width: 600px;
    margin-inline: auto;
    position: relative;
    gap: 1.5rem;

    .input__wrapper {
      gap: 0.5rem;
    }

    button {
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
`
