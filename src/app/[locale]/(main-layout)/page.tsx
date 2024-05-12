import { IMAGE_SRC } from "constants/image"
import { Metadata } from "next"
import { generatePageMetadata } from "src/seo"

import ViewHome from "views/home"

interface Props {}

export async function generateMetadata({ params: { locale } }): Promise<Metadata> {
  return await generatePageMetadata({
    locale: locale,
    thumbnail: IMAGE_SRC.thumbnail,
    url: "/",
  })
}

const HomePage: Props = () => {
  return <ViewHome />
}

export default HomePage
