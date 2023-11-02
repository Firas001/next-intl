import {
  Image,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionControl,
  SimpleGrid,
} from "@mantine/core";

export const MobileAccordion = ({
  TeamTechniquesData,
}: {
  TeamTechniquesData: { [key: string]: string[] };
}) => {
  const styles: object = {
    chevron: { display: "none" },
    label: { textAlign: "center" },
  };

  return (
    <>

      <Accordion
        variant="contained"
        radius="xl"
        disableChevronRotation
        defaultValue="Backend"
        hiddenFrom="md"
      >

        {Object.keys(TeamTechniquesData).map((key: string) => (
          <AccordionItem value={key} key={key}>
            <AccordionControl styles={styles}>{key}</AccordionControl>
            <AccordionPanel>
              <SimpleGrid
                cols={{ base: 2, sm: 3 }}
                style={{ justifyItems: "center" }}
              >
                {TeamTechniquesData[key].map((img, index) => (
                  <Image
                    src={img}
                    alt="tech logo"
                    radius="md"
                    fit="contain"
                    key={index}
                    w={120}
                  />
                ))}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        ))}

      </Accordion>
    </>
  );
};
