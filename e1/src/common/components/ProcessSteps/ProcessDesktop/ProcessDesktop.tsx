import React from "react";
import { Flex, Image, Divider } from "@mantine/core";
import cupImg from "@/common/assets/cup.png";
import ProcessCard from "../ProcessCardWithLine/ProcessCardWithLine";
import ProcessesData from "../ProcessesData";

interface ProcessDesktopProps {
  visibleFrom: "xs" | "sm" | "md" | "lg" | "xl";
}

const ProcessDesktop = ({ visibleFrom }: ProcessDesktopProps) => {
  const marginx = 50;

  return (
    <>
      <Flex justify="space-evenly" ml={marginx} visibleFrom={visibleFrom}>

        {ProcessesData
        .filter((process) => process.dir === "top")
        .map((process, index, filteredArray) => {
          const processIndex = ProcessesData.indexOf(filteredArray[index]) + 1;
          return (
            <ProcessCard
            title={process.title}
            desc={process.desc}
            dir={process.dir}
            index={processIndex}
            key={processIndex}
          />
          );
        })}

      </Flex>

      <Flex w={"100%"} align={"center"} visibleFrom={visibleFrom}>
        <Divider size="sm" w={"100%"} color="#F76680" />
        <Image src={cupImg.src} alt="" w={50}></Image>
      </Flex>

      <Flex justify="space-evenly" mr={marginx} visibleFrom={visibleFrom}>
      {ProcessesData
        .filter((process) => process.dir === "bottom")
        .map((process, index, filteredArray) => {
          const processIndex = ProcessesData.indexOf(filteredArray[index]) + 1;
          return (
            <ProcessCard
            title={process.title}
            desc={process.desc}
            dir={process.dir}
            index={processIndex}
            key={processIndex}
          />
          );
        })}
      </Flex>
    </>
  );
};

export default ProcessDesktop;
