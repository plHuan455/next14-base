"use client"

import LoadingDots from "@comp/atoms/loading-dots"
import { useAtom } from "jotai"

import { authAtom } from "lib/jotai/atoms/auth"

interface Props {
  children: React.ReactNode
}

export default function ClientWrapper({ children }: Props) {
  const [auth] = useAtom(authAtom)
  if (auth.isLoading) {
    return (
      <div className="h-screen supports-[height:100dvh]:h-[100dvh] w-full flex items-center justify-center">
        <LoadingDots />
      </div>
    )
  }
  return children
}
