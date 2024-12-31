import { addDomain } from "@libs/utils/site"
import ENVS from "envs"

export const revalidate = 86400

export async function GET() {
  const content = `
User-agent: *
${ENVS.GG_TAG ? "Allow: /" : "Disallow / "}

Sitemap: ${addDomain("/sitemap.xml")}
  `

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=UTF-8",
    },
  })
}
