"use client";
import { useState } from "react";
import { usePathname } from "next-intl/client";
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
import Link from "next-intl/link";
import { useTranslations } from "next-intl";
import Logo from "@/common/assets/Logo";
import { Container } from "@/common/components/Container/Container";

export default function ClientHeader({ locale }: { locale: string }) {
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [active, setActive] = useState(0);
  const pathname = usePathname();

  const data = useTranslations("common");
  const href = locale === "ar" ? "en" : "ar";

  const mainLinks = [
    { link: `/`, label: data("home") },
    { link: `/about`, label: data("about") },
    { link: `/services`, label: data("services") },
    { link: `/portfolio`, label: data("portfolio") },
    { link: `/contact`, label: data("contact") },
  ];

  const mainItems = mainLinks.map((item, index) => (
    <Link
      key={item.label}
      href={item.link}
      className={`${classes.link} ${
        pathname === item.link && classes.linkActive
      }`}
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

            <Link className={classes.link} href={pathname} locale={href}>
              {data("language")}
            </Link>
            {/* <Button onClick={() => router.replace(pathname, { locale: href })}>
              {data("language")}
            </Button> */}
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
        title={data("menu")}
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
