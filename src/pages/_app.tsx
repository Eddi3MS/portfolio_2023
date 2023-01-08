import type { AppProps } from 'next/app'
import { Header, Particles } from '../components'
import { GlobalStyle } from '../styles/GlobalStyles'
import '../styles/reset.css'
import Fonts from '../fonts/Fonts'
import { ToastProvider } from '@ems-ignite/react'

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
    </ToastProvider>
  )
}
