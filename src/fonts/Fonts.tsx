/* eslint-disable react/no-unknown-property */
import { Inter, Pinyon_Script, Roboto_Slab } from '@next/font/google'

const inter = Inter({
  variable: '--ff-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: true,
  fallback: ['sans-serif'],
})
const roboto_slab = Roboto_Slab({
  variable: '--ff-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: true,
  fallback: ['sans-serif'],
})
const pinyon = Pinyon_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--ff-pinyon',
  preload: true,
  fallback: ['sans-serif'],
})

const Fonts = () => {
  return (
    <style jsx global>{`
      body {
        font-family: ${roboto_slab.style.fontFamily};
      }
      .inter {
        font-family: ${inter.style.fontFamily};
      }
      .pinyon {
        font-family: ${pinyon.style.fontFamily};
      }
      .roboto {
        font-family: ${roboto_slab.style.fontFamily};
      }
    `}</style>
  )
}

export default Fonts
