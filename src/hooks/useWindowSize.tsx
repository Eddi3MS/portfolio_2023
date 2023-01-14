import { useState } from 'react'
import useEventListener from './useEventListener'
import useNextEffect from './useNextEffect'

interface WindowSize {
  width: number
  height: number
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEventListener('resize', handleSize)

  // Set size at the first client-side load
  useNextEffect(() => {
    handleSize()
  }, [])

  return windowSize
}

export default useWindowSize
