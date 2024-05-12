import { LOCALE_CONSTANTS } from "constants/locale"
import "../../../styles/index.scss"
// eslint-disable-next-line import/named
import { NextIntlClientProvider, useMessages } from "next-intl"

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
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
