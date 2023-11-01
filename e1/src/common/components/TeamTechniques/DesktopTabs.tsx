import React from "react";
import { Tabs, TabsTab, TabsList, Image, Flex, TabsPanel } from "@mantine/core";
import classes from "./TeamTechniques.module.css";

const DesktopTabs = ({
  TeamTechniquesData,
}: {
  TeamTechniquesData: { [key: string]: string[] };
}) => {
  const images = (images: string[]) => {
    const imgsLimit = 5;
    const imgsLines = [];

    for (let i = 0; i < images.length; i += imgsLimit) {
      const imgsGroup = images.slice(i, i + imgsLimit);
      imgsLines.push(
        <Flex
          key={i}
          justify="space-between"
          px={imgsGroup.length !== 5 ? 150 : 0}
          mt={30}
        >
          {imgsGroup.map((img, index) => (
            <Image
              src={img}
              alt="tech logo"
              radius="md"
              fit="contain"
              key={index}
            />
          ))}
        </Flex>
      );
    }

    return imgsLines;
  };

  return (
    <Tabs
      defaultValue="Backend"
      variant="unstyled"
      classNames={classes}
      visibleFrom="md"
    >
      <TabsList justify="space-evenly" px={50} mb={30}>
        {Object.keys(TeamTechniquesData).map((key: string) => (
          <TabsTab value={key} fz={20} key={key}>
            {key}
          </TabsTab>
        ))}
      </TabsList>

      {Object.keys(TeamTechniquesData).map((key: string) => (
        <TabsPanel value={key} key={key}>
          {images(TeamTechniquesData[key])}
        </TabsPanel>
      ))}
    </Tabs>
  );
};

export default DesktopTabs;
