import { getRequestConfig } from "next-intl/server"
import { notFound } from "next/navigation"

import { Locale, routing } from "./routing"

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as Locale)) notFound()
  return {
    messages: (await import(`../../content/${locale}.json`)).default,
  }
})
