import React from "react";
import { Container } from "@/common/components/Container/Container";
import { Flex } from "@mantine/core";
import MainTitle from "@/common/components/MainTitle/MainTitle";
import ProcessDesktop from "./ProcessDesktop/ProcessDesktop";
import ProcessMobile from "./ProcessMobile/ProcessMobile";

const ProcessSteps = () => {
  return (
    <Container>
      <Flex direction="column">
        <MainTitle
          boldText="نيابة عن العنوان الأصلي"
          regularText="عنوان افتراضي"
          center
        />

        <ProcessDesktop visibleFrom="lg" />
        <ProcessMobile hiddenFrom="lg" />
      </Flex>
    </Container>
  );
};

export default ProcessSteps;
