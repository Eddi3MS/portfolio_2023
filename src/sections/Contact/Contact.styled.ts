import styled from 'styled-components'
export const Contact = styled.section`
  min-height: calc(100vh - var(--header-height));
  background-color: var(--bg);
  padding-inline: 0.5rem;

  h2 {
    padding-block: 2.5rem;
    text-align: center;
  }

  .form__wrapper,
  .input__wrapper {
    display: flex;
    flex-direction: column;
  }

  .form__wrapper {
    max-width: 600px;
    width: 80%;
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
