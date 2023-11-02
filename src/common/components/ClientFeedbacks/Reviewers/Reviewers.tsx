"use client";

import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel-react";
import { flushSync } from "react-dom";
import classes from "./Reviewers.module.css";
import { Avatar, Flex, Rating, Text } from "@mantine/core";

const TWEEN_FACTOR_SCALE = 1.5;
const TWEEN_FACTOR_OPACITY = 4.8;

type PropType = {
  image: string;
  name: string;
  job: string;
  rate: number;
  index: number;
  emblaApi: EmblaCarouselType | undefined;
};

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const Reviewers = (props: PropType) => {
  const { image, name, job, rate, index, emblaApi } = props;

  const [tweenValues, setTweenValues] = useState<{
    opacity: number[];
    scale: number[];
  }>({ opacity: [], scale: [] });

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }

      const tweenValueOpacity = 1 - Math.abs(diffToTarget * TWEEN_FACTOR_OPACITY);
      const tweenValueScale = 1 - Math.abs(diffToTarget * TWEEN_FACTOR_SCALE);

      return {
        opacity: numberWithinRange(tweenValueOpacity, 0, 1),
        scale: numberWithinRange(tweenValueScale, 0, 1),
      };
    });

    const opacityStyles = styles.map((style) => style.opacity);
    const scaleStyles = styles.map((style) => style.scale);

    setTweenValues({ opacity: opacityStyles, scale: scaleStyles });
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className={classes.emblaSlide} >
      <div
        className={classes.emblaScale}
        style={{
          ...(tweenValues.opacity.length && {
            opacity: tweenValues.opacity[index],
          }),
          ...(tweenValues.scale.length && {
            transform: `scale(${tweenValues.scale[index]})`,
          }),
        }}
      >
        <Flex direction="column" justify="center" align="center" gap={3}>
          <Avatar src={image} alt="reviewer img" radius="50%" size={100} />

          <Rating fractions={2} defaultValue={rate} readOnly />
          <Text fw={700} c="lamah">
            {name}
          </Text>
          <Text>
            {job} #{index}
          </Text>
        </Flex>
      </div>
    </div>
  );
};

export default Reviewers;
