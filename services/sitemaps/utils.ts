import { ServerResponse } from "http"

export const returnXml = (res: ServerResponse, xml: string) => {
  res.setHeader("Content-Type", "text/xml")
  res.write(xml)
  res.end()
}

export const sitemapFormat = (content: string) =>
  `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${content}
  </urlset>
`.trim()

export const sitemapItemFormat = (loc: string, lastmod: string, priority: string) =>
  `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>
`.trim()

export const returnInternalError = (res: ServerResponse) => {
  res.statusCode = 500
  res.statusMessage = "INTERNAL ERROR"
  returnXml(res, "<error>INTERNAL ERROR</error>")
}
