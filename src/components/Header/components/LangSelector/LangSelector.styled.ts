import styled from 'styled-components'
export const LangSelector = styled.div`
  display: flex;
  gap: 0.5rem;

  & button {
    background-color: transparent;
    border: 2px solid transparent;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    background-size: cover;
    cursor: pointer;
    transition: border-color var(--transition);

    span {
      visibility: hidden;
    }

    &.active {
      border: 2px solid var(--primary);
    }

    &:hover {
      border: 2px solid var(--primary-light);
    }
  }
`
