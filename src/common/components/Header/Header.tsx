"use client";
import { useState } from "react";
import {
  Group,
  Burger,
  Box,
  Drawer,
  ScrollArea,
  Divider,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import { useTranslation } from '../../../app/i18n/client'
import Logo from "@/common/assets/Logo";
import { Container } from "@/common/components/Container/Container";
import Link from "next/link";
// import { languages } from '../../../app/i18n/settings'

export default function Header() {
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [active, setActive] = useState(0);

  const { t, i18n } = useTranslation('common');
  const lng = i18n.resolvedLanguage;

  const href = lng === "ar" ? "/?lng=en" : "/?lng=ar";

  const mainLinks = [
    { link: `/`, label: t("home") },
    { link: `#`, label: t("about") },
    { link: `#`, label: t("services") },
    { link: `#`, label: t("portfolio") },
    { link: `#`, label: t("contact") },
  ];

  const mainItems = mainLinks.map((item, index) => (
    <Link
      key={item.label}
      href={item.link}
      className={classes.link}
      data-active={index === active || undefined}
      onClick={() => {
        setActive(index);
      }}
    >
      {item.label}
    </Link>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Container mt={0} className={classes.inner}>
          <Link href="/">
            <Logo />
          </Link>

          <Group gap={5} visibleFrom="xs">
            {mainItems}

            <Link className={classes.link} href={href}>
              {t("language")}
            </Link>

          </Group>

          <Burger
            opened={opened}
            onClick={toggleDrawer}
            hiddenFrom="xs"
            size="sm"
          />
        </Container>
      </header>
      <Drawer
        opened={opened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={t("menu")}
        hiddenFrom="sm"
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {mainItems}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
