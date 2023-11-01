"use client";

import { Box, Flex, Progress, Title, Text } from "@mantine/core";
import ServiceCard from "./ServiceCard/ServiceCard";
import servicesData from "./servicesData";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import classes from "./OurServices.module.css";
import { ColorContainer } from "../Container/Container";
import IconCircle from "@/common/assets/IconCircle";
import { DotButton, useDotButton } from "./servicesIndicators";

const getPercent = (index: number, total: number) => {
  return Math.floor(((index + 1) / total) * 100);
};

const OurServices = ({ dir }: { dir: "rtl" | "ltr" }) => {
  const classNamesOptions = { snapped: classes.serviceSnapped };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { direction: dir, loop: true },
    [ClassNames(classNamesOptions)]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <Box pos="relative" py={25} mt={80}>
      <IconCircle size={50} top={0} left={30} />
      <IconCircle size={50} bottom={0} left={5} />
      <ColorContainer>
        <Flex direction="column" align="center" pos="relative" h={500}>
          <Title order={2} fw={700}>
            أبرز الخدمات
          </Title>

          <div className={classes.embla}>
            <div className={classes.embla__viewport} ref={emblaRef}>
              <div className={classes.embla__container}>
                {servicesData.map((feature, index) => (
                  <div
                    className={`${classes.embla__slide} ${classes["embla__class-names"]}`}
                    key={index}
                  >
                    <ServiceCard
                      title={feature.title}
                      description={feature.description}
                      Icon={feature.icon}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={classes.embla__dots}>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={
                    classes.embla__dot +
                    (index === selectedIndex
                      ? " " + classes["embla__dot--selected"]
                      : "")
                  }
                />
              ))}
            </div>

            <Flex className={classes.emblaProgress} align="center" gap={10}>
              <Text c="dark" fw="500" h={18}>
                {scrollSnaps.length < 10 ? "01" : ""}
              </Text>
              <Progress
                value={getPercent(selectedIndex, scrollSnaps.length)}
                w={150}
                h={5}
              />
              <Text c="lamah" fw="500" h={18}>
                {scrollSnaps.length < 10
                  ? `0${scrollSnaps.length}`
                  : scrollSnaps.length}
              </Text>
            </Flex>
          </div>
        </Flex>
      </ColorContainer>
    </Box>
  );
};

export default OurServices;
