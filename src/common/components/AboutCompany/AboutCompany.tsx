import { Text, Grid, Flex, GridCol, Image, Anchor } from "@mantine/core";
import { IconArrowRight} from '@tabler/icons-react';
import AboutImage from "@/common/assets/lamah-emp.jpg"
import classes from "./AboutCompany.module.css"
import MainTitle from "@/common/components/MainTitle/MainTitle";
import Link from 'next/link'
import { Container } from "@/common/components/Container/Container";
import GradientText from "@/common/components/GradientText/GradientText";





function AboutCompany() {
  
  return (
    <>
      <Container mt={80}>
        <Grid gutter={50} >
          <GridCol span={6}  >
          <Flex ml={0} direction="column" align="flex-start" gap={40}>

          <MainTitle boldText="يتحدث عن مقال أو تعريف بالشركة " regularText="عنوان فرعي افتراضي"/>  

              <Text c="dimmed" fz={18} ta={"justify"} lh={2} dir="rtl">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية،</Text>
              

    
              <Anchor component={Link} href="/" style={{display: "flex"}} underline="never" className={classes.be}>

              

              <Text fz={18} fw={"bold"} >عرض المزيد</Text>
              <GradientText text="عرض المزيد" />
              <IconArrowRight size={24}  className={classes.icon} />
              </Anchor>



              </Flex>
          </GridCol>
          <GridCol span={{base: 12, lg: 6}}  >
            <Image
              src={AboutImage.src}
              alt="about image"
            />
          </GridCol>
        </Grid>
      </Container>
      
    </>
  );
}

export default AboutCompany;