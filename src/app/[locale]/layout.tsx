import { LOCALE_CONSTANTS } from "constants/locale"
// eslint-disable-next-line import/named
import { NextIntlClientProvider, useMessages } from "next-intl"

import QueryClientWrapper from "components/templates/query-client-wrapper"

import "../../../styles/index.scss"

interface RootLayoutProps {
  children: React.ReactNode
  locale: never
}
export default function RootLayout({ children, locale }: RootLayoutProps) {
  const messages = useMessages()
  return (
    <html lang={locale || LOCALE_CONSTANTS.en} className={`font-sans`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <QueryClientWrapper>{children}</QueryClientWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
