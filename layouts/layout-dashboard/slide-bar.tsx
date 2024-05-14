"use client"

import LinkBase from "@comp/atoms/link-base"
import Typography from "@comp/atoms/typography"
import { useTranslations } from "next-intl"
import React, { useMemo, useState } from "react"

export default function SlideBar() {
  const t = useTranslations("Dashboard")
  const [isFull] = useState(true)
  const listMenu = useMemo(
    () => [
      { label: t("SlideBar.tab_overview"), value: "overview", href: "/dashboard/overview" },
      { label: t("SlideBar.tab_create_page"), value: "create_page", href: "/dashboard/create-page" },
      { label: t("SlideBar.tab_settings"), value: "settings", href: "/dashboard" },
    ],
    [t],
  )
  return (
    <div
      data-full={isFull}
      className="h-screen pt-[calc(var(--dashboard-header-height)+2px)] group/slideBar data-[full=true]:w-[256px] w-[72px] duration-200"
    >
      <div className="h-full bg-default">
        <ul>
          {listMenu.map((value) => (
            <li key={value.value}>
              <LinkBase href={value.href} className="py-4 cursor-pointer px-6 hover:bg-default-400">
                <Typography size={16}>{value.label}</Typography>
              </LinkBase>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
