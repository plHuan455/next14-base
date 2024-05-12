import { generateMainXML, generateRootXML } from "./generateSitemaps"
import SITEMAP_ROUTE_DATA from "./sitemap-routes.json"

const { SITEMAP_ROUTES, SITEMAP_ROOT_ROUTE } = SITEMAP_ROUTE_DATA

type SitemapMapType = {
  [key in (typeof SITEMAP_ROUTES)[keyof typeof SITEMAP_ROUTES]]: {
    generateXML: () => Promise<string> | string
  }
}

export const postSitemapFromDate = 48 * 60 * 60 // 48 hours

export const ROOT_SITEMAP_PAGE = SITEMAP_ROOT_ROUTE

export const SITEMAP_MAP: SitemapMapType = {
  [SITEMAP_ROOT_ROUTE]: {
    generateXML: generateRootXML,
  },
  [SITEMAP_ROUTES.main]: {
    generateXML: generateMainXML,
  },
}
