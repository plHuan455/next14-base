import { useEffect, useState } from "react"

const useGetContainerSpacing = (containerEle: HTMLElement) => {
  const [spacing, setSpacing] = useState<number>()
  useEffect(() => {
    if (!containerEle) return
    setSpacing((document.body.offsetWidth - containerEle.clientWidth) / 2)
  }, [containerEle])
  return spacing
}

export default useGetContainerSpacing
