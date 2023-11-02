import { Title, Button } from "@mantine/core";
import classes from "./SubmitRequest.module.css";
import { useTranslations } from "next-intl";
import { Container } from "@/common/components/Container/Container";

export default function SubmitRequest() {
  const data = useTranslations("SubmitRequest");
  return (
    <Container>
      <div className={classes.wrapper}>
        <Title className={classes.title}>{data("title")}</Title>

        <Button
          w="250"
          variant="gradient"
          size="lg"
          gradient={{ from: "#FFC656", to: "#F16063", deg: 225 }}
        >
          {data("button")}
        </Button>
      </div>
    </Container>
  );
}
