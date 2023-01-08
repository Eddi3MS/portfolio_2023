import { globalCss } from '@ems-ignite/react'

export const globalStitches = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },
  body: {
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
