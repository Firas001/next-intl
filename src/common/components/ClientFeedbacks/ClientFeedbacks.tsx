"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import classes from "./ClientFeedbacks.module.css";
import { Text, Flex } from "@mantine/core";
import MainTitle from "@/common/components/MainTitle/MainTitle";
import QuoteIcon from "@/common/assets/QuoteIcon";
import Reviewers from "./Reviewers/Reviewers";
import reviewersData from "./FeedBackData";
import ArrowBtn from "@/common/components/ArrowBtn/ArrowBtn";
import { Container } from "@/common/components/Container/Container";

const ClientFeedbacks = ({dir}: {dir: 'rtl' | 'ltr'}) => {
  const options: EmblaOptionsType = {direction: dir, loop: true };

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(options);

  const changeEmbla = useCallback(
    (
      api: EmblaCarouselType | undefined,
      targetApi: EmblaCarouselType | undefined
    ) => {
      if (!api || !targetApi) return;
      api.scrollTo(targetApi.selectedScrollSnap());
    },
    []
  );

  // changeEmblaThumbs
  useEffect(() => {
    if (!emblaMainApi) return;
    changeEmbla(emblaThumbsApi, emblaMainApi);
    emblaMainApi.on("select", () => changeEmbla(emblaThumbsApi, emblaMainApi));
    emblaMainApi.on("reInit", () => changeEmbla(emblaThumbsApi, emblaMainApi));
  }, [emblaMainApi, emblaThumbsApi, changeEmbla]);

  // changeEmblaMain
  useEffect(() => {
    if (!emblaThumbsApi) return;
    changeEmbla(emblaMainApi, emblaThumbsApi);
    emblaThumbsApi.on("select", () =>
      changeEmbla(emblaMainApi, emblaThumbsApi)
    );
    emblaThumbsApi.on("reInit", () =>
      changeEmbla(emblaMainApi, emblaThumbsApi)
    );
  }, [emblaMainApi, emblaThumbsApi, changeEmbla]);

  const NavScroll = useCallback(
    (api: EmblaCarouselType | undefined, nav: "next" | "prev") => {
      if (!api) return;
      if (nav === "next") api.scrollNext();
      else api.scrollPrev();
    },
    []
  );

  return (
    <Container>
    <Flex direction="column" gap={80} align={"center"}>
      <MainTitle
        boldText="نيايبة عن العنوان الأصلي"
        regularText="عنوان افتراضي"
        center
      />

      <div className={classes.embla}>
        <div className={classes.emblaViewport} ref={emblaMainRef}>
          <div className={classes.emblaContainer}>
            {reviewersData.map((slide, index) => (
              <div className={classes.emblaSlide} key={index}>
                <Flex pos={"relative"} w={"70%"} h={100} align={"center"}>
                  <Text
                    c="dimmed"
                    ta={"center"}
                    w={500}
                    mr={"auto"}
                    ml={"auto"}
                    style={{ cursor: "default" }}
                  >
                    {slide.comment} <br />
                  </Text>
                  <QuoteIcon className={classes.leftIconPosition} />
                  <QuoteIcon className={classes.rightIconPosition} />
                </Flex>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.emblaThumbs}>
          <div className={classes.emblaViewport} ref={emblaThumbsRef}>
            <div className={classes.emblaContainer}>
              {reviewersData.map((slide, index) => (
                <Reviewers
                  image={slide.image}
                  name={slide.name}
                  job={slide.job}
                  rate={slide.rate}
                  index={index}
                  key={index}
                  emblaApi={emblaThumbsApi}
                />
              ))}
            </div>
          </div>
        </div>

        <ArrowBtn
          dir="right"
          style={{ right: 0, top: "30%", position: "absolute" }}
          onClick={() => NavScroll(emblaMainApi, "next")}
        />
        <ArrowBtn dir="left"
          style={{ left: 0, top: "30%", position: "absolute" }}
          onClick={() => NavScroll(emblaMainApi, "prev")}
        />
      </div>
    </Flex>
    </Container>
  );
};

export default ClientFeedbacks;
