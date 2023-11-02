import {
  Text,
  Group,
  TypographyStylesProvider,
  Paper,
  ActionIcon,
  SimpleGrid,
} from "@mantine/core";
import classes from "./Bunners.module.css";
import MainTitle from "@/common/components/MainTitle/MainTitle";
import bannerData from "./BannersData";
import {
  ColorContainer,
  Container,
} from "@/common/components/Container/Container";

export default function Banners() {
  const data = bannerData.map((item, index) => (
    <Paper withBorder radius="md" className={classes.card} key={index}>
      <Group>
        <ActionIcon
          variant="gradient"
          size="xl"
          aria-label="Gradient action icon"
          gradient={{ from: item.colorFrom, to: item.colorTo, deg: 45 }}
        >
          <item.icon color={item.iconColor} stroke={item.iconStrokeWidth} />
        </ActionIcon>
        <div>
          <Text fz="md" fw={600}>
            {item.title}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.banner}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html: item.description,
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  ));
  return (
    <ColorContainer mt={80}>
      <Container>
        <MainTitle
          boldText="نهج التطوير في مواقع الويب"
          regularText="عنوان افتراضي"
          center
        />
        <SimpleGrid
          cols={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          spacing={20}
          py={50}
        >
          {data}
        </SimpleGrid>
      </Container>
    </ColorContainer>
  );
}
