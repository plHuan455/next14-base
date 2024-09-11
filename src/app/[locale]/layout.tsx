import JotaiProvider from "@libs/jotai/provider"
import ThemeProviderBase from "@libs/next-themes/provider"
import QueryClientProvider from "@libs/react-query/provider"
import { LOCALE_CONSTANTS } from "constants/locale"
import { NextIntlClientProvider, useMessages } from "next-intl"

import "../../../styles/index.scss"

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}
export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  const messages = useMessages()
  return (
    <html lang={locale || LOCALE_CONSTANTS.vi} className={`font-sans`} suppressHydrationWarning>
      <body>
        <ThemeProviderBase>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <QueryClientProvider>
              <JotaiProvider>{children}</JotaiProvider>
            </QueryClientProvider>
          </NextIntlClientProvider>
        </ThemeProviderBase>
      </body>
    </html>
  )
}
