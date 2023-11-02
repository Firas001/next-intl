import { Avatar, Text, Paper, SimpleGrid } from "@mantine/core";
import TeamMemberData from "./TeamMemberData";
import { Container } from "../Container/Container";

export function TeamMember() {
  const TeamMember = TeamMemberData.map((item, index) => (
    <Paper key={index} mt={20}>
      <Avatar src={item.image} color="cyan" size={100} radius={120} mx="auto">
        {item.shortName}
      </Avatar>
      <Text ta="center" fz="md" fw={500} mt="md">
        {item.name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {item.job}
      </Text>
    </Paper>
  ));

  return (
    <Container>
      <SimpleGrid cols={{ xs: 2, sm: 4, md: 5, lg: 6, xl: 6 }}>
        {TeamMember}
      </SimpleGrid>
    </Container>
  );
}
