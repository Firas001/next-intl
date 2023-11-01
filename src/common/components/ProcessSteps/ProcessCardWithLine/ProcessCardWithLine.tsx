import { Divider, Flex } from "@mantine/core";
import ProcessCard from "./ProcessCard/ProcessCard";

interface ProcessCardWithLineProps {
  title: string;
  desc: string;
  index: number;
  dir: "top" | "bottom";
}

const setDirection = (dir: "top" | "bottom") => {
  const horizontal = 115;
  const vertical = -20;

  if (dir === "bottom") return {justify: "flex-end", top: vertical, bottom: "unset", left: "unset", right: horizontal}
  else return {justify: "flex-start", top: "unset", bottom: vertical, left: "unset", right: horizontal}
}

const ProcessCardWithLine = ({ title, desc, index, dir }: ProcessCardWithLineProps) => {

  const props = setDirection(dir);

  return (
    <Flex
      mt={props.bottom !== "unset" ? 70 : 0}
      pos="relative"
      h={200}
      direction="column"
      justify={props.justify}
    >
      <ProcessCard title={title}
            desc={desc}
            index={index} 
            />

      <Divider
        size="sm"
        h={50}
        color="#F76680"
        orientation="vertical"
        pos="absolute"
        bottom={props.bottom}
        right={props.right}
        top={props.top}
        left={props.left}
      />
    </Flex>
  );
};

export default ProcessCardWithLine;
