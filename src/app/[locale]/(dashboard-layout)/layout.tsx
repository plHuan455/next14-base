import PrivateRouteWrapper from "@comp/templates/private-route-wrapper"
import LayoutDashboard from "layouts/layout-dashboard"
import React from "react"

interface Props {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <PrivateRouteWrapper>
      <LayoutDashboard>{children}</LayoutDashboard>
    </PrivateRouteWrapper>
  )
}
