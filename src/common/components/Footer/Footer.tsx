import { Text, ActionIcon, Group, Box } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
} from "@tabler/icons-react";
import classes from "./Footer.module.css";
import { useTranslations } from "next-intl";
import Logo from "@/common/assets/Logo";
import { Container } from "@/common/components/Container/Container";

export default function Footer() {
  const data = useTranslations("common");

  return (
    <footer className={classes.footer}>
      <Container mt={10}>
        <Box className={classes.logo}>
          <Logo h={50} w={50} />
        </Box>
        <Box className={classes.inner}>
          <Text c="dark-7" size="sm">
            {data("copyright")}
            {data("company")}
          </Text>
        </Box>

        <Box className={classes.afterFooter}>
          <Group className={classes.social}>
            <ActionIcon className={classes.socialIcon} variant="transparent">
              <IconBrandTwitter stroke={1.5} />
            </ActionIcon>
            <ActionIcon className={classes.socialIcon} variant="transparent">
              <IconBrandFacebook stroke={1.5} />
            </ActionIcon>
            <ActionIcon className={classes.socialIcon} variant="transparent">
              <IconBrandInstagram stroke={1.5} />
            </ActionIcon>
            <ActionIcon className={classes.socialIcon} variant="transparent">
              <IconBrandLinkedin stroke={1.5} />
            </ActionIcon>
          </Group>
        </Box>
      </Container>
    </footer>
  );
}
