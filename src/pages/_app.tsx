import { ToastProvider } from '@ems-ignite/react'
import type { AppProps } from 'next/app'
import { Header, Music, Particles } from '../components'
import Fonts from '../fonts/Fonts'
import { GlobalStyle } from '../styles/GlobalStyles'
import '../styles/reset.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider duration={2000}>
      <Fonts />
      <GlobalStyle />
      <main id='main_wrapper'>
        <Particles />

        <Header />
        <Component {...pageProps} />
      </main>
      <Music />
    </ToastProvider>
  )
}
