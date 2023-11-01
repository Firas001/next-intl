import HeroHome from "@/common/components/HeroHome/HeroHome";
import { useTranslation } from './i18n'
import Header from "@/common/components/Header/Header";

export default async function Page() {
  const { t } = await useTranslation()

  return (
    <>
    <Header />
      <HeroHome />

      {/* <Footer /> */}

      </>
  );
};