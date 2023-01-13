import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  --header-height: 3rem;

  --white: #E3F9E5;
  --black: #202023;

  --primary-light: #00B37E;
  --primary: #00875F;
  --primary-dark: #015F43;
  --primary-darker: #00291D;

  --neutral-000: #ffffff;
  --neutral-050: #F5F7FA;
  --neutral-100: #E4E7EB;
  --neutral-150: #CBD2D9;

  --bg: #202023;
  --bg-01: #141413;

 
  --transition: 0.2s ease-in-out;


  @media (max-width: 658px) {
    --header-height: 6rem;
    }
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--header-height);
  -webkit-font-smoothing: antialiased,
}

main {
  padding-top: var(--header-height);
}

h1,
h2 {
    background: -webkit-linear-gradient(
      100deg,
      var(--primary-darker),
      var(--primary-light)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.z5 {
    position: relative;
    z-index: 5;
  }

  audio {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  

  section {
    padding-bottom: 5rem;
  }
`
