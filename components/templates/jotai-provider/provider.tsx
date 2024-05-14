import { Provider } from "jotai"
import React from "react"

export default function ProviderWrapper({ children }) {
  return <Provider>{children}</Provider>
}
