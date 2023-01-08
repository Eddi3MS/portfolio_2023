import Head from 'next/head'
import { About, Contact, Hero } from '../sections'

export default function Home() {
  return (
    <>
      <Head>
        <title>Edson Marcelo | Frontend Developer</title>
        <meta name='description' content='A Developer in development' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />

      <About />
      <section
        id='2'
        style={{ minHeight: '100vh', background: 'blue' }}
      ></section>
      <Contact />
    </>
  )
}
