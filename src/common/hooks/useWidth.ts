import { useState, useEffect } from 'react'

const getWidthCallback = (): number => window.innerWidth

const useWidth = (): number => {
  const [width, setWidth] = useState(getWidthCallback())

  useEffect(() => {
    let timeoutId = -1
    const resizeListener = (): void => {
      timeoutId !== -1 && clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => setWidth(getWidthCallback()), 50)
    }

    window.addEventListener('resize', resizeListener)

    return (): void => window.removeEventListener('resize', resizeListener)

  }, [width])



  return width
}

export default useWidth
