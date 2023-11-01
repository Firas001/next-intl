import { Card, Divider, Flex, Text, Title } from "@mantine/core";
import classes from "./ProcessCard.module.css";

interface PropcessCardProps {
  title: string;
  desc: string;
  index: number;
}

const ProcessCard = ({ title, desc, index }: PropcessCardProps) => {


  return (
      <Card radius="md" className={classes.card} padding="md" w={320} h={150}>
        <Flex justify="flex-start" align="center" gap={10}>
          <Text className={classes.indexColor}>{index}#</Text>
          <Title order={3}>{title}</Title>
        </Flex>
        <Text c="dimmed">{desc}</Text>
      </Card>
  );
};

export default ProcessCard;
