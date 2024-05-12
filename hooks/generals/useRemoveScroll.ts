const useRemoveScroll = () => {
  return {
    removeScroll() {
      if (document.body) {
        document.body.style.overflow = "hidden"
        document.body.style.paddingRight = "calc(var(--scroll-width)*1px)"
      }
    },
    unRemoveScroll() {
      if (document.body) {
        document.body.style.overflow = null
        document.body.style.paddingRight = null
      }
    },
  }
}

export default useRemoveScroll
