import { Container } from "@/common/components/Container/Container";
import TeamTechniquesData from "./TeamTechniquesData";
import DesktopTabs from "./DesktopTabs";
import { MobileAccordion } from "./MobileAccordion";

function TeamTechniques() {
  return (
    <>
      <Container>
        <DesktopTabs TeamTechniquesData={TeamTechniquesData} />

        <MobileAccordion TeamTechniquesData={TeamTechniquesData} />
      </Container>
    </>
  );
}
export default TeamTechniques;
