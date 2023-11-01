import pick from "lodash/pick";
import { NextIntlClientProvider, useMessages } from "next-intl";

const TranlateProvider = ({
  children,
  page,
  locale
}: {
  children: JSX.Element;
  page: string;
  locale: string;
}) => {
  const messages = useMessages();
  if (!messages) return null;

  return (
    <NextIntlClientProvider
      timeZone="Libya"
      messages={
        // Only provide the minimum of messages
        pick(messages, page)
      }
      locale={locale}
    >
      {children}
    </NextIntlClientProvider>
  );
};

export default TranlateProvider;
