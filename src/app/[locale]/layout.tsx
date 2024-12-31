import I18Provider from "@libs/i18/provider"
import JotaiProvider from "@libs/jotai/provider"
import ThemeProviderBase from "@libs/next-themes/provider"
import QueryClientProvider from "@libs/react-query/provider"

import "../../../styles/index.scss"

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}
export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <html lang={locale} className={`font-sans`}>
      <body>
        <ThemeProviderBase>
          <I18Provider locale={locale}>
            <QueryClientProvider>
              <JotaiProvider>{children}</JotaiProvider>
            </QueryClientProvider>
          </I18Provider>
        </ThemeProviderBase>
      </body>
    </html>
  )
}
