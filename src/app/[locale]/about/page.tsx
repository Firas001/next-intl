import { useTranslations } from "next-intl";
import AboutCompany from "@/common/components/AboutCompany/AboutCompany";
import AboutUs from "./AboutUs/AboutUs";

const About = ({ params: { locale } }: { params: { locale: string } }) => {
  const t = useTranslations("about");
  return (
    <></>
  );
};
export default About;
