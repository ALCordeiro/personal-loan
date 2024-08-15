import useWidth from "./useWidth"

const useIsMobile = (): boolean => {
  return useWidth() <= 450
}

export default useIsMobile
