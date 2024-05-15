"use client"

import { buttonBaseVariants } from "@comp/atoms/button-base"
import LinkBase from "@comp/atoms/link-base"
import Typography from "@comp/atoms/typography"
import { useTranslations } from "next-intl"
import React, { useMemo, useState } from "react"

import { cn } from "lib/utils/cn"

export default function SlideBar() {
  const t = useTranslations("Dashboard")
  const [isFull] = useState(true)
  const listMenu = useMemo(
    () => [
      { label: t("SlideBar.tab_overview"), value: "overview", href: "/dashboard/overview" },
      { label: t("SlideBar.tab_products"), value: "create_page", href: "/dashboard/create-page" },
      { label: t("SlideBar.tab_invite"), value: "settings", href: "/dashboard" },
    ],
    [t],
  )
  return (
    <div
      data-full={isFull}
      className="h-screen pt-[calc(var(--dashboard-header-height)+2px)] group/slideBar data-[full=true]:w-[256px] w-[72px] duration-200"
    >
      <div className="h-full bg-content-1">
        <ul>
          {listMenu.map((value) => (
            <li key={value.value}>
              <LinkBase
                href={value.href}
                className={cn(
                  buttonBaseVariants({ size: 56, color: "default_200", variant: "text" }),
                  "rounded-none justify-start py-4 cursor-pointer px-6",
                )}
              >
                <Typography size={16} className="font-medium">
                  {value.label}
                </Typography>
              </LinkBase>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
