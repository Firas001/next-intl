import { Text, Grid, GridCol, Image, Title, Flex, Button } from "@mantine/core";
import HeroWrapper from "@/common/assets/HeroWrapper.png"
import classes from "./HeroHome.module.css"
import { Container } from "@/common/components/Container/Container";


const HeroHome =() => {
  return (
    <>
      <Container mt={80}  >
        <Grid gutter={50}>
        <GridCol span={{base: 12, lg: 6}} mt={90}>
            <Flex direction="column" align="flex-start" gap={20} >
              <Title order={2}fz={50} className={classes.grColor}> 
              <span className={classes.blackfw500}>نص</span> افتراضي
              <span className={classes.blackfw500}> يعرض</span> <span className={classes.black}>عنوان خاص </span>
              غير حقيقي
              
              </Title>
              <Text c="dimmed" ta={"justify"} lh={2} >
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى
              </Text>

              
              <Button variant="primary" px={40} h={50} style={{boxShadow: "0px 0px 30px  rgb(204, 204, 204)"}} >اطلق خدماتك الإلكترونية الآن</Button>
            
            </Flex>
          </GridCol>

          <GridCol span={{base: 12, lg: 6}}  pl={50}>
            <Image
              src={HeroWrapper.src}
              alt="hero wrapper"
            />
          </GridCol>
        </Grid>
      </Container>
      
    </>
  );
}

export default HeroHome;