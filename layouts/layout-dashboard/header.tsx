import React from "react"

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 h-[--dashboard-header-height] bg-content-1 px-6">
      <div className="flex items-center h-full justify-between">
        <div className="shrink-0">LOGO</div>
        <div className="min-w-0">
          <div className="w-10 aspect-square rounded-full flex items-center justify-center bg-primary">T</div>
        </div>
      </div>
    </header>
  )
}
