import { QueryClient } from "react-query"

export const getQueryClient = (() => {
  let cached = undefined
  return () => {
    cached =
      cached ||
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            retry: 2,
            staleTime: 90000,
          },
        },
      })
    return cached as QueryClient
  }
})()
