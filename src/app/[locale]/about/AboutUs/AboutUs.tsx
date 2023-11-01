import { Text, Grid, Flex, GridCol, Image } from "@mantine/core";
import AboutCom from "@/common/assets/lamah-emp.jpg";
import classes from "./AboutUs.module.css";
import MainTitle from "@/common/components/MainTitle/MainTitle";
import { Container } from "@/common/components/Container/Container";

function AboutUs() {
  return (
    <Container mt={80}>
      <MainTitle
        boldText="عملية مبسطة بشكل ملحوظ مع قيادة وإشراف لا مثيل لهما"
        regularText="عن الشركة"
      />

      <Grid>
        <GridCol span={6} bg={"#F6F6F6"} className={classes.flex} p={20}>
          <Flex direction="column" gap={40}>
            <Text c="dark" fz={21} lh={2} dir="rtl">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
              ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
              عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم
              فيظهر بشكل لا يليق.هذا النص يمكن أن يتم تركيبه على أي تصميم دون
              مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
              مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.
            </Text>
          </Flex>
        </GridCol>
        <GridCol span={{ base: 12, lg: 6 }}>
          <Image src={AboutCom.src} alt="aboutcom image" />
        </GridCol>
      </Grid>
    </Container>
  );
}

export default AboutUs;
