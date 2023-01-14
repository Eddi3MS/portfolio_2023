import React from 'react'

const useNextEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

export default useNextEffect
