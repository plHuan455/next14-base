import { useRef, useState } from "react"

interface UseActiveTimeoutProps {
  delay?: number
}

const useActiveTimeout = (props?: UseActiveTimeoutProps) => {
  const { delay = 2000 } = props
  const timeoutFn = useRef<NodeJS.Timeout>()
  const [isActive, setIsActive] = useState<boolean>(false)

  return {
    triggerActive() {
      if (timeoutFn.current) clearTimeout(timeoutFn.current)
      if (!isActive) {
        setIsActive(true)
      }
      timeoutFn.current = setTimeout(() => {
        setIsActive(false)
      }, delay)
    },
    isActive,
  }
}

export default useActiveTimeout
