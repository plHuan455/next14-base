"use client"

import { Provider } from "react-redux"

import { getAuthInitialState } from "lib/redux/reducers/auth"
import { makeStore } from "lib/redux/store"

interface Props {
  children: React.ReactNode
  token?: string
}
const store = makeStore()
export default function StoreProvider({ children, token }: Props) {
  return (
    <Provider
      store={store}
      serverState={{
        auth: getAuthInitialState(token),
      }}
    >
      {children}
    </Provider>
  )
}
