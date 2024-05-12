import { createLocalizedPathnamesNavigation } from "next-intl/navigation"

import { LOCALES } from "constants/common"

import { localePrefix, pathnames } from "./i18n"

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales: LOCALES,
  pathnames,
  localePrefix,
})
