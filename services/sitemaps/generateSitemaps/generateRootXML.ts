import { APP_ENV } from "configs"

import { formatISO8601 } from "lib/utils/time-utils"

import SITEMAP_ROUTE_DATA from "../sitemap-routes.json"

const { SITEMAP_ROUTES } = SITEMAP_ROUTE_DATA

export const generateRootXML = async () => {
  const now = new Date()
  const formattedNow = formatISO8601(now)

  const content = Object.keys(SITEMAP_ROUTES).reduce((acc, key) => {
    return (
      acc +
      `
      <sitemap>
        <loc>${APP_ENV.DOMAIN}${SITEMAP_ROUTES[key]}</loc>
        <lastmod>${formattedNow}</lastmod>
      </sitemap>
    `
    )
  }, "")

  return `
    <?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${content}
    </sitemapindex>
  `.trim()
}
