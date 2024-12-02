import { addDomain } from "@libs/utils/site"

export const revalidate = 86400

export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: ${addDomain("/sitemap.xml")}
  `

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
    },
  })
}
