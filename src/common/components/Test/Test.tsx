import React from "react";
import ClientTest from "./ClientTest";
import TranlateProvider from "@/common/providers/TranlateProvider";

const Test = ({locale} : {locale: string}) => {
  return (
    <TranlateProvider page={"home"} locale={locale}>
      <ClientTest />
    </TranlateProvider>
  );
};

export default Test;