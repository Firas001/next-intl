interface IconCircleProps {
    size: number,
    top?: number | "unset",
    left?: number | "unset",
    right?: number | "unset",
    bottom?: number | "unset",
}

const p = (number: number | "unset") =>{
if (number !== "unset" && number !== 0){
    return `${number}%`
} else return number

}

const IconCircle = (props: IconCircleProps) => {
    const {size, top = "unset", left = "unset", right = "unset", bottom = "unset"}= props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{position: "absolute", zIndex: -1, top: p(top), left: p(left), right: p(right), bottom: p(bottom)}}
    >
      <circle cx="36" cy="36" r="36" fill="url(#paint0_linear_2_1564)" />
      <defs>
        <linearGradient
          id="paint0_linear_2_1564"
          x1="2.6087"
          y1="-612"
          x2="-380.758"
          y2="-543.074"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#052E40" />
          <stop offset="0.317708" stopColor="#24A9E1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default IconCircle;
