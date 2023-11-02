import { IconArrowUpRight, IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Button,
  CardSection,
  Container,
  Box,
} from "@mantine/core";
import classes from "./OurProject.module.css";
import OurProjectsData from "./OurProjectsData";

export function MobileOurProject() {
  // const { image, title } = mockdata;

  const mockdata = OurProjectsData.map((item, index) => (
    <Box key={index} py={25}>
      <Card radius="md" bg={item.mobileBgColor} p={35}>
        <CardSection
          bg={item.mobileShapeBgColor}
          className={classes.imagesection}
        >
          <Image
            src={item.projectImage}
            className={classes.image}
            alt={item.title}
          />
        </CardSection>
        <CardSection mt="md" className={classes.imagesection}>
          <Text fz="lg" fw={500}>
            {item.title}
          </Text>
        </CardSection>
        <CardSection mt="md" className={classes.imagesection}>
          <Button
            rightSection={
              <IconArrowUpRight size={18} className={classes.flipx} />
            }
            variant="filled"
            color="#2A2C32"
          >
            {item.readMore}
          </Button>
        </CardSection>
      </Card>
    </Box>
  ));

  return <Container hiddenFrom="md">{mockdata}</Container>;
}
