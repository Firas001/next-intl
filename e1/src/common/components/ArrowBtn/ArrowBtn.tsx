import { ActionIcon } from "@mantine/core";
import { IconCircleArrowRight, IconCircleArrowLeft } from "@tabler/icons-react";

interface PropTypes {
  dir: "left" | "right",
  filled?: boolean,
  style: object,
  onClick: () => void
}

const ArrowBtn = ({ dir, filled = false, style={}, onClick }: PropTypes) => {
  const color = "var(--mantine-primary-color)";
  const stroke = 0.8;
  const size = 60;

  const styles = {
    width: "max-content",
    padding: 0,
    margin: 0,
    height: "max-content",
    borderRadius: "50%",
    ...style
  };


  if (dir === "right" && filled) {
    return (
      <ActionIcon variant="transparent" style={styles} onClick={onClick}>
        <IconCircleArrowRight
          color={"white"}
          stroke={stroke}
          size={size + 5}
          fill={color}
        />
      </ActionIcon>
    );
  } else if (dir === "left" && filled) {
    return (
      <ActionIcon variant="transparent" style={styles} onClick={onClick}>
        <IconCircleArrowLeft
          color={"white"}
          stroke={stroke}
          size={size + 5}
          fill={color}
        />
      </ActionIcon>
    );
  } else if (dir === "right" && filled === false) {
    return (
      <ActionIcon variant="transparent" style={styles} onClick={onClick}>
        <IconCircleArrowRight color={color} stroke={stroke} size={size} />
      </ActionIcon>
    );
  } else {
    return (
      <ActionIcon variant="transparent" style={styles} onClick={onClick}>
        <IconCircleArrowLeft color={color} stroke={stroke} size={size} />
      </ActionIcon>
    );
  }
};

export default ArrowBtn;
