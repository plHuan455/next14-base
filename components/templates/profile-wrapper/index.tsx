"use client"

import { QUERY_KEY } from "@constants/query-key"
import { useQuery } from "react-query"
import { useDispatch } from "react-redux"

import { authActions } from "lib/redux/reducers/auth"
import { getMyShopServices } from "services/api/shop"

interface Props {
  children: React.ReactNode
}

export default function ProfileWrapper({ children }: Props) {
  const dispatch = useDispatch()
  useQuery({
    queryKey: [QUERY_KEY.SHOP.login],
    queryFn: getMyShopServices,
    onSuccess(data) {
      dispatch(authActions.updateState({ shop: data.shop, isLogged: true, isLoading: false, token: data.token }))
    },
    onError() {
      alert("error")
    },
  })
  return <div>{children}</div>
}
