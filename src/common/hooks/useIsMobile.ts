import useWidth from "./useWidth"

const useIsMobile = (): boolean => {
  return useWidth() <= 768
}

export default useIsMobile
