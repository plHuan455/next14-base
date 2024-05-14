"use client"

import LoadingDots from "@comp/atoms/loading-dots"

import { useAuthValue } from "lib/redux/reducers/auth"

interface Props {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: Props) {
  const auth = useAuthValue()
  if (auth.isLoading) {
    return (
      <div className="h-screen supports-[height:100dvh]:h-[100dvh] w-full flex items-center">
        <LoadingDots />
      </div>
    )
  }
  return children
}
