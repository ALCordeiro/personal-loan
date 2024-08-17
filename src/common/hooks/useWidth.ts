import { useState, useEffect } from 'react'

const getWidthCallback = (): number => window.innerWidth

const useWidth = (): number => {
  const [width, setWidth] = useState<number>(getWidthCallback());

  function handleWindowSizeChange() {
    setWidth(getWidthCallback());
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return width
}

export default useWidth
