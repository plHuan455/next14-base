import PrivateRouteWrapper from "@comp/templates/private-route-wrapper"
import React from "react"

interface Props {
  children: React.ReactNode
}
export default function LayoutDashboard({ children }: Props) {
  return (
    <PrivateRouteWrapper>
      <div>
        layout
        {children}
      </div>
    </PrivateRouteWrapper>
  )
}
