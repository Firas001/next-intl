import { Card, Text, Title } from '@mantine/core'
import classes from "./ServiceCard.module.css"

interface ServiceCardProps {
    title: string,
    description: string
    Icon: any
}
const ServiceCard = ({title, description, Icon}: ServiceCardProps) => {
  return (
    <Card shadow="md" radius="md" className={classes.card} padding="xl" bg={"#FAFAFA"}>
         <div className={classes.iconContainer} >
      <Icon style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </div>
    <Title order={3} mt="md">
      {title}
    </Title>
    <Text fz="sm" mt="sm">
      {description}
    </Text>
  </Card>
  )
}

export default ServiceCard