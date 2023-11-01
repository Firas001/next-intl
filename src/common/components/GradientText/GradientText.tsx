import { Text, TextProps } from "@mantine/core";


interface GradientTextProps extends TextProps {
  text: string;
}

const GradientText = (props: GradientTextProps) => {
  return (
    <Text
      fw="700"
      {...props}
      variant="gradient"
      gradient={{ from: "lamah", to: "rgba(5,46,64,1) 180%", deg: 20 }}
    >
      {props.text}
    </Text>
  );
};

export default GradientText;
