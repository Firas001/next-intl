const ProjectBackground = (props: {
  h?: number;
  w?: number;
  bgColor?: string;
  shapeColor?: string;
}) => {
  const {
    h = 426,
    w = 929,
    bgColor = "#EDF0F9",
    shapeColor = "#D9DFF2",
  } = props;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 929 426"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <rect
        x="0.00012207"
        y="0.000244141"
        width={w}
        height={h}
        rx="23"
        fill={bgColor}
      />
      <path
        d="M699.796 208.117C699.796 93.1775 792.973 0.000244141 907.913 0.000244141C919.559 0.000244141 929 9.44112 929 21.087V425.665H699.796V208.117Z"
        fill={shapeColor}
      />
      <path
        d="M119.552 -9.91821e-05C119.552 54.6715 75.2315 98.9917 20.5599 98.9917L11.1211 98.9917C4.97905 98.9917 -1.48235e-05 94.0126 -1.42866e-05 87.8706L-8.61538e-06 22.9999C-7.50489e-06 10.2974 10.2974 -0.000108733 23 -0.000107623L119.552 -9.91821e-05Z"
        fill={shapeColor}
      />
    </svg>
  );
};

export default ProjectBackground;
