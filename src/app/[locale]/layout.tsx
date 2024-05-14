import ProfileWrapper from "@comp/templates/profile-wrapper"
import ReduxStoreProvider from "@comp/templates/redux-store-provider"
import { LOCALE_CONSTANTS } from "constants/locale"
import { getCookie } from "cookies-next"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { cookies } from "next/headers"

import QueryClientWrapper from "components/templates/query-client-wrapper"
import { STORAGE_TOKEN_NAME } from "services/storage/constants"

import "../../../styles/index.scss"

interface RootLayoutProps {
  children: React.ReactNode
  locale: never
}
export default function RootLayout({ children, locale }: RootLayoutProps) {
  const messages = useMessages()
  const token = getCookie(STORAGE_TOKEN_NAME, { cookies })
  return (
    <html lang={locale || LOCALE_CONSTANTS.vi} className={`font-sans`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <QueryClientWrapper>
            <ReduxStoreProvider token={token}>
              <ProfileWrapper>{children}</ProfileWrapper>
            </ReduxStoreProvider>
          </QueryClientWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
