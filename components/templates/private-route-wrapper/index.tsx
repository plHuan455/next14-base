"use server"

import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import React from "react"

import { STORAGE_TOKEN_NAME } from "services/storage/constants"

import ClientWrapper from "./client-wrapper"

interface Props {
  children: React.ReactNode
}

export default async function PrivateRouteWrapper({ children }: Props) {
  const token = getCookie(STORAGE_TOKEN_NAME, { cookies })
  if (!token) {
    redirect("/login")
  }
  return <ClientWrapper>{children}</ClientWrapper>
}
