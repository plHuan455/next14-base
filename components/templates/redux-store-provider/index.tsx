import { getCookie } from "cookies-next"
import { cookies } from "next/headers"

import { STORAGE_TOKEN_NAME } from "services/storage/constants"

import StoreProvider from "./store-provider"

interface Props {
  children: React.ReactNode
}
export default function ReduxStoreProvider({ children }: Props) {
  const token = getCookie(STORAGE_TOKEN_NAME, { cookies })
  return <StoreProvider token={token}>{children}</StoreProvider>
}
