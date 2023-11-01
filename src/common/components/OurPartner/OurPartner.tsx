"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import classes from "./OurPartner.module.css";
import { Image, Box } from "@mantine/core";
import { ColorContainer, Container } from "../Container/Container";
import IconCircle from "@/common/assets/IconCircle";
import MainTitle from "../MainTitle/MainTitle";
import partnerData from "./PartnerData";

const EmblaCarousel = ({ dir }: { dir: "rtl" | "ltr" }) => {
  const [emblaRef] = useEmblaCarousel({ direction: dir, loop: true });

  const dataPartner = partnerData.map((item, index) => (
    <div className={classes.embla__slide} key={index}>
      <Image
        src={item.partnerImage}
        alt="Your alt text"
        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
      />
    </div>
  ));

  return (
    <>
      <Container>
        <MainTitle regularText="عملائنا" boldText="المتميزون" inline />
      </Container>
      <Box pos="relative" py={25}>
        <IconCircle size={50} top={0} right={35} />
        <ColorContainer className={classes.embla}>
          <div className={classes.embla__viewport} ref={emblaRef}>
            <div className={classes.embla__container}>{dataPartner}</div>
          </div>
        </ColorContainer>
      </Box>
    </>
  );
};

export default EmblaCarousel;
