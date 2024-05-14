import ViewHome from "@views/home"
import { Metadata } from "next"
import { generatePageMetadata } from "src/seo"

export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  return await generatePageMetadata({
    locale: locale,
    url: "/",
  })
}
export default function PageHome() {
  return <ViewHome />
}
