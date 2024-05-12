import { useCallback } from "react"

import { breakPoint, screenSizes } from "configs/screens"

export interface ScreenSize {
  width: number
  height: number
  screen: keyof typeof breakPoint
}

const useScreenSize = () => {
  const isClient = typeof window === "object"

  const getScreenSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : 0,
      height: isClient ? window.innerHeight : 0,
      screen: null,
    }
  }, [isClient])

  const screenSize = getScreenSize()

  if (screenSize.width < screenSizes.sm) {
    screenSize.screen = breakPoint.sm
  } else if (screenSize.width >= screenSizes.sm && screenSize.width < screenSizes.md) {
    screenSize.screen = breakPoint.md
  } else if (screenSize.width >= screenSizes.md && screenSize.width < screenSizes.lg) {
    screenSize.screen = breakPoint.lg
  } else {
    screenSize.screen = breakPoint.xl
  }

  return screenSize
}

export default useScreenSize
