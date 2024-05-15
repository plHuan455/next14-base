import LayoutDashboard from "layouts/layout-dashboard"
import React from "react"

interface Props {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return <LayoutDashboard>{children}</LayoutDashboard>
}
