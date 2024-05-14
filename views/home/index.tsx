"use client"

import { useAuthValue } from "lib/redux/reducers/auth"

export default function ViewHome() {
  const auth = useAuthValue()
  return (
    <div>
      <div>{JSON.stringify(auth)}</div>
    </div>
  )
}
