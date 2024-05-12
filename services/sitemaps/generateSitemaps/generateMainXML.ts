import { APP_ENV } from "configs"

import { formatISO8601 } from "lib/utils/time-utils"

import { sitemapFormat, sitemapItemFormat } from "../utils"

const ROUTES = ["/"]

export const generateMainXML = async () => {
  const createdAt = formatISO8601(Date.now())
  return sitemapFormat(
    ROUTES.reduce((acc, value) => {
      return acc + sitemapItemFormat(`${APP_ENV.DOMAIN}${value}`, createdAt, "0.8")
    }, ""),
  )
}
