import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme, resolver } from "@/common/config/theme";
import { dir } from 'i18next'
import { detectLanguage, useTranslation } from './i18n'


export default async function RootLayout({
  children,
}: {
  children: JSX.Element;
}) {

  const lng = detectLanguage()
  const { t } = await useTranslation()


  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <title>{t('title')}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning={true}>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
