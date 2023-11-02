import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme, resolver } from "@/common/config/theme";
import { notFound } from "next/navigation";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Lamah Tech Website",
  description: "Developing lamah tch website",
};

const locales = ["en", "ar"];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: JSX.Element;
  params: { locale: string };
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />

        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning={true}>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <Header locale={locale} />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
