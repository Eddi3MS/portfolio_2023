import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 6;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--bg-01);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

  .c_header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1280px;
    margin-inline: 1.5rem;

    @media (max-width: 658px) {
      display: grid;
      grid-template-areas:
        'logo logo'
        'nav lang';
      place-items: center;
      gap: 0.5rem;

      .logo {
        grid-area: logo;
        text-align: center;
        padding-top: 1rem;
      }

      nav {
        grid-area: nav;
      }

      .lang {
        grid-area: lang;
      }
    }
  }

  .logo {
    font-size: 1.5rem;
    color: var(--primary);
    transition: color var(--transition);
    &:hover {
      color: var(--primary-light);
    }
  }

  nav {
    display: flex;
    gap: 1.5rem;

    a {
      text-transform: uppercase;
      font-weight: 600;
      color: var(--primary);
      transition: color var(--transition);

      &:hover,
      &.active {
        color: var(--primary-light);
      }
    }
  }
`
