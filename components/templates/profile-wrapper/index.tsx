"use client"

import { QUERY_KEY } from "@constants/query-key"
import { useAtom } from "jotai"
import { useQuery } from "react-query"

import { authAtom } from "lib/jotai/atoms/auth"
import { getMyShopServices } from "services/api/shop"

interface Props {
  children: React.ReactNode
}

export default function ProfileWrapper({ children }: Props) {
  const [_, setAuth] = useAtom(authAtom)
  useQuery({
    queryKey: [QUERY_KEY.SHOP.login],
    queryFn: getMyShopServices,
    onSuccess(data) {
      setAuth({
        isLoading: false,
        isLogged: true,
        shop: data.shop,
        token: data.token,
      })
    },
    onError() {
      setAuth({
        isLoading: false,
        isLogged: false,
      })
      alert("error")
    },
  })
  return <div>{children}</div>
}
