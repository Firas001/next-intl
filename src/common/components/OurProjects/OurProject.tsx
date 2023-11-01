import {
  Text,
  Title,
  Image,
  SimpleGrid,
  Box,
  Button,
  Group,
} from "@mantine/core";
import classes from "./OurProject.module.css";
import MainTitle from "../MainTitle/MainTitle";
import { ColorContainer } from "../Container/Container";
import { useTranslations } from "next-intl";
import ProjectBackground from "@/common/assets/ProjectBackground";
import { IconArrowUpRight } from "@tabler/icons-react";
import OurProjectsData from "./OurProjectsData";
import DoceArrow from "@/common/assets/Arrow";

export function OurProject() {
  const data = useTranslations("project");

  const projectsData = OurProjectsData.map((item, index) => (
    <>
      <Box pos={"relative"}>
        <ProjectBackground
          bgColor={item.bgColor}
          shapeColor={item.shapeBgColor}
        />

        <SimpleGrid
          cols={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          spacing={100}
          className={classes.body}
          mb={-50}
          key={index}
        >
          <Image
            src={item.projectImage}
            alt="Project Image"
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            className={classes.aboutProject}
          />

          <div className={classes.aboutProject}>
            <Title order={2}>{item.title}</Title>
            <Group py={25}>
              <Button variant="light" color={item.btnColor} h={40} w={130}>
                {item.btn1}
              </Button>
              <Button variant="light" color={item.btnColor} h={40} w={130}>
                {item.btn2}
              </Button>
            </Group>
            <Text className={classes.description}>{item.description}</Text>
            <Group py={25}>
              <Button
                rightSection={
                  <IconArrowUpRight size={18} className={classes.flipx} />
                }
                variant="filled"
                color={item.btnReadMoreColor}
                h={45}
                w={150}
              >
                {item.readMore}
              </Button>
            </Group>
          </div>
        </SimpleGrid>
      </Box>
    </>
  ));

  return (
    <Box pos="relative" pt={100}>
      <DoceArrow right={15} top={0} h={223} w={151} transform={"250"} />
      <DoceArrow left={15} top={0} h={223} w={151} />
      <ColorContainer py={100}>
        <MainTitle
          boldText={data("mainTitle")}
          regularText={data("mainDescription")}
          center
        />
        {projectsData}
      </ColorContainer>
    </Box>
  );
}
