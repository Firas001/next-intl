import React from "react";
import TranlateProvider from "@/common/providers/TranlateProvider";
import ClientHeader from "./ClientHeader";

const Header = ({ locale }: { locale: string }) => {
  return (
    <TranlateProvider page={"common"} locale={locale}>
      <ClientHeader locale={locale} />
    </TranlateProvider>
  );
};

export default Header;
