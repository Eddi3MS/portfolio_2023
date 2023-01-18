import Head from 'next/head'
import dynamic from 'next/dynamic'
import { lazy } from 'react'
import { Hero } from '../sections'

const About = lazy(() => import('../sections/About'))
const Contact = lazy(() => import('../sections/Contact'))

const Projects = dynamic(() => import('../sections/Projects'), {
  ssr: false,
})

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
      <Projects />
      <Contact />
    </>
  )
}
