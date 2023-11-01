"use client";

import React from "react";
import ProcessCard from "../ProcessCardWithLine/ProcessCard/ProcessCard";
import ProcessesData from "../ProcessesData";
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import classes from "./ProcessMobile.module.css";
import { Box } from "@mantine/core";

interface ProcessMobileProps {
  hiddenFrom: "xs" | "sm" | "md" | "lg" | "xl";
}

const ProcessMobile = ({hiddenFrom}: ProcessMobileProps) => {

  const [emblaRef] = useEmblaCarousel({axis: 'y', align: "start"})

  return (
    <Box className={classes.embla} hiddenFrom={hiddenFrom}>
      <div className={classes.emblaViewport} ref={emblaRef}>
        <div className={classes.emblaContainer}>
          {ProcessesData.map((process, index) => (
            <div className={classes.emblaSlide} key={index}>
             <ProcessCard
              title={process.title}
              desc={process.desc}
              index={index}
              key={index}
            />
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default ProcessMobile;
