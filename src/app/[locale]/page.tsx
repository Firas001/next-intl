import { useTranslations } from "next-intl";
import { Container } from "@mantine/core";
import OurServices from "@/common/components/OurServices/OurServices";
import HeroHome from "@/common/components/HeroHome/HeroHome";
import ClientFeedbacks from "@/common/components/ClientFeedbacks/ClientFeedbacks";
import Banners from "@/common/components/DevelopmentApproach/Bunners";
import SubmitRequest from "@/common/components/SubmitRequest/SubmitRequest";
import ProcessSteps from "@/common/components/ProcessSteps/ProcessSteps";
import { OurProject } from "@/common/components/OurProjects/OurProject";
import OurPartner from "@/common/components/OurPartner/OurPartner";
import TeamTechniques from "@/common/components/TeamTechniques/TeamTechniques";
import AboutCompany from "@/common/components/AboutCompany/AboutCompany";

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  const t = useTranslations("home");

  return (
    <Container size={"100vw"} mt={50} px={0}>
      <HeroHome />
      <OurPartner dir={locale === "ar" ? "rtl" : "ltr"} />
      <ClientFeedbacks dir={locale === "ar" ? "rtl" : "ltr"} />
      <OurProject />
      <AboutCompany />
      <OurServices dir={locale === 'ar' ? 'rtl' : 'ltr'} />
      <TeamTechniques />
      <Banners />
      <ProcessSteps />
      <SubmitRequest />
    </Container>
  );
};

export default Home;
