import { getCookie } from "cookies-next"
import { Provider } from "jotai"
import { cookies } from "next/headers"

import { STORAGE_TOKEN_NAME } from "services/storage/constants"

import HydrateWrapper from "./hydrate-wrapper"

interface Props {
  children: React.ReactNode
  token?: string
}
export default function JotaiProvider({
  children,
}: // token
Props) {
  const token = getCookie(STORAGE_TOKEN_NAME, { cookies })
  return (
    <Provider>
      <HydrateWrapper token={token}>{children}</HydrateWrapper>
    </Provider>
  )
}
