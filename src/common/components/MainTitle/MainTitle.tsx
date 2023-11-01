import { Divider, Flex, Title } from "@mantine/core";
import React from "react";
import classes from "./MainTitle.module.css";

const MainTitle = ({
  inline = false,
  center = false,
  boldText = "",
  regularText = "",
}) => {

  const alignText = center ? "center" : "start";
  const alignFlex = center ? "center" : "flex-start";
  return (
    <>
      <Flex direction={"column"} align={alignFlex} gap={"sm"}>
        <Divider w={70} className={classes.gradientLine} />
        <Title order={2} fw={700} ta={alignText}>
          <span style={{ fontWeight: 500 }}>{regularText}</span>
          {(!inline) ? <br /> : ' '}
          {boldText}
        </Title>
      </Flex>
    </>
  );
};

export default MainTitle;
