"use client"

import { useHydrateAtoms } from "jotai/utils"

import { authAtom, getAuthInitialState } from "lib/jotai/atoms/auth"

interface Props {
  children: React.ReactNode
  token?: string
}
function HydrateWrapper({ children, token }: Props) {
  useHydrateAtoms([[authAtom, getAuthInitialState(token)] as const])
  return children
}

export default HydrateWrapper
