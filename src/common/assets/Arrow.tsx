interface IconCircleProps {
  h: number;
  w: number;
  top?: number | "unset";
  left?: number | "unset";
  right?: number | "unset";
  bottom?: number | "unset";
  transform?: string;
}

const p = (number: number | "unset") => {
  if (number !== "unset" && number !== 0) {
    return `${number}%`;
  } else return number;
};

const DoceArrow = (props: IconCircleProps) => {
  const {
    top = "unset",
    left = "unset",
    right = "unset",
    bottom = "unset",
    w,
    h,
  } = props;
  return (
    <svg
      width={w} //181
      height={h} //253
      viewBox="0 0 181 253"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: p(top),
        left: p(left),
        right: p(right),
        bottom: p(bottom),
        transform: `rotate(${props.transform}deg)`,
      }}
    >
      <path
        d="M5.7089 10.1679L17.2807 5.2773L22.1713 16.8491L25.4768 15.452L19.1892 0.574707L4.31186 6.86237L5.7089 10.1679Z"
        fill="url(#paint0_linear_493_690)"
      />
      <path
        d="M11.5957 24.7671C11.9067 23.8236 12.2264 22.8782 12.5547 21.9309L10.665 21.2759C10.3333 22.2328 10.0104 23.1878 9.69623 24.141L11.5957 24.7671Z"
        fill="url(#paint1_linear_493_690)"
      />
      <path
        d="M8.25483 36.0618C8.74641 34.1845 9.27198 32.299 9.83218 30.4056L7.91436 29.8382C7.34823 31.7516 6.817 33.6574 6.32006 35.5552L8.25483 36.0618Z"
        fill="url(#paint2_linear_493_690)"
      />
      <path
        d="M5.64597 47.5494C6.0118 45.6463 6.41249 43.7341 6.84874 41.8131L4.89839 41.3702C4.45724 43.3128 4.05198 45.2468 3.68193 47.1719L5.64597 47.5494Z"
        fill="url(#paint3_linear_493_690)"
      />
      <path
        d="M3.82352 59.19C4.05586 57.2652 4.32383 55.3305 4.62818 53.3858L2.65224 53.0766C2.34428 55.0442 2.07309 57.0022 1.83793 58.9503L3.82352 59.19Z"
        fill="url(#paint4_linear_493_690)"
      />
      <path
        d="M2.8356 70.9321C2.92735 68.9927 3.05528 67.0421 3.22018 65.0806L1.22721 64.913C1.06026 66.8988 0.930747 68.8737 0.837837 70.8376L2.8356 70.9321Z"
        fill="url(#paint5_linear_493_690)"
      />
      <path
        d="M2.72011 82.7148C2.66562 80.7698 2.64753 78.8126 2.66673 76.8435L0.666827 76.824C0.647381 78.8183 0.6657 80.8007 0.7209 82.7708L2.72011 82.7148Z"
        fill="url(#paint6_linear_493_690)"
      />
      <path
        d="M3.50136 94.4704C3.29715 92.5309 3.12922 90.5781 2.99851 88.6122L1.00292 88.7449C1.13533 90.7365 1.30547 92.7149 1.51236 94.6798L3.50136 94.4704Z"
        fill="url(#paint7_linear_493_690)"
      />
      <path
        d="M5.18813 106.128C4.83338 104.206 4.51437 102.27 4.23211 100.319L2.25273 100.606C2.53871 102.582 2.86192 104.544 3.22136 106.491L5.18813 106.128Z"
        fill="url(#paint8_linear_493_690)"
      />
      <path
        d="M7.7733 117.619C7.26991 115.727 6.80134 113.818 6.36865 111.895L4.41742 112.334C4.85581 114.283 5.33053 116.216 5.8405 118.133L7.7733 117.619Z"
        fill="url(#paint9_linear_493_690)"
      />
      <path
        d="M11.2349 128.876C10.5873 127.025 9.9733 125.157 9.39389 123.272L7.48223 123.86C8.06916 125.769 8.69113 127.661 9.34701 129.536L11.2349 128.876Z"
        fill="url(#paint10_linear_493_690)"
      />
      <path
        d="M15.5383 139.84C14.7537 138.041 14.0008 136.225 13.281 134.391L11.4193 135.122C12.1483 136.979 12.9106 138.818 13.7051 140.64L15.5383 139.84Z"
        fill="url(#paint11_linear_493_690)"
      />
      <path
        d="M20.6396 150.459C19.7265 148.722 18.8433 146.967 17.9912 145.193L16.1885 146.06C17.0511 147.855 17.9451 149.632 18.8694 151.39L20.6396 150.459Z"
        fill="url(#paint12_linear_493_690)"
      />
      <path
        d="M26.4883 160.688C25.4554 159.02 24.4503 157.332 23.4743 155.625L21.7381 156.618C22.7258 158.345 23.7428 160.053 24.7878 161.741L26.4883 160.688Z"
        fill="url(#paint13_linear_493_690)"
      />
      <path
        d="M33.031 170.493C31.8871 168.898 30.769 167.283 29.6777 165.648L28.0143 166.758C29.118 168.412 30.2489 170.045 31.4057 171.658L33.031 170.493Z"
        fill="url(#paint14_linear_493_690)"
      />
      <path
        d="M40.2145 179.845C38.9682 178.327 37.7454 176.788 36.5474 175.229L34.9614 176.447C36.1727 178.024 37.4089 179.58 38.6688 181.114L40.2145 179.845Z"
        fill="url(#paint15_linear_493_690)"
      />
      <path
        d="M47.9844 188.719C46.6444 187.282 45.3256 185.823 44.0294 184.343L42.5248 185.661C43.8349 187.157 45.1676 188.631 46.5217 190.083L47.9844 188.719Z"
        fill="url(#paint16_linear_493_690)"
      />
      <path
        d="M56.2907 197.096C54.865 195.743 53.4584 194.367 52.0719 192.969L50.6519 194.377C52.0526 195.79 53.4737 197.179 54.914 198.546L56.2907 197.096Z"
        fill="url(#paint17_linear_493_690)"
      />
      <path
        d="M65.0868 204.958C63.5832 203.692 62.0964 202.403 60.6275 201.09L59.2947 202.581C60.7784 203.907 62.2801 205.21 63.7986 206.488L65.0868 204.958Z"
        fill="url(#paint18_linear_493_690)"
      />
      <path
        d="M74.3294 212.291C72.7562 211.115 71.1974 209.915 69.6543 208.691L68.4114 210.258C69.9697 211.494 71.5438 212.706 73.1324 213.893L74.3294 212.291Z"
        fill="url(#paint19_linear_493_690)"
      />
      <path
        d="M83.9787 219.076C82.343 217.994 80.7194 216.887 79.1091 215.755L77.9588 217.391C79.5848 218.534 81.2242 219.652 82.8757 220.744L83.9787 219.076Z"
        fill="url(#paint20_linear_493_690)"
      />
      <path
        d="M94.0078 225.299C92.3131 224.314 90.6281 223.302 88.954 222.263L87.8995 223.962C89.5898 225.011 91.2913 226.033 93.0025 227.028L94.0078 225.299Z"
        fill="url(#paint21_linear_493_690)"
      />
      <path
        d="M104.38 230.936C102.631 230.05 100.888 229.136 99.1537 228.193L98.1987 229.95C99.9499 230.902 101.71 231.825 103.477 232.72L104.38 230.936Z"
        fill="url(#paint22_linear_493_690)"
      />
      <path
        d="M115.061 235.954C113.26 235.173 111.464 234.361 109.674 233.52L108.824 235.33C110.632 236.18 112.446 236.999 114.265 237.789L115.061 235.954Z"
        fill="url(#paint23_linear_493_690)"
      />
      <path
        d="M126.016 240.317C124.175 239.649 122.337 238.949 120.501 238.218L119.761 240.076C121.615 240.815 123.474 241.522 125.334 242.197L126.016 240.317Z"
        fill="url(#paint24_linear_493_690)"
      />
      <path
        d="M137.213 243.98C135.342 243.435 133.469 242.856 131.596 242.243L130.974 244.144C132.867 244.763 134.761 245.349 136.653 245.901L137.213 243.98Z"
        fill="url(#paint25_linear_493_690)"
      />
      <path
        d="M148.652 246.895C146.744 246.48 144.832 246.028 142.916 245.539L142.422 247.477C144.36 247.971 146.295 248.429 148.226 248.85L148.652 246.895Z"
        fill="url(#paint26_linear_493_690)"
      />
      <path
        d="M160.251 248.978C158.314 248.706 156.369 248.394 154.416 248.042L154.062 250.011C156.04 250.367 158.01 250.682 159.973 250.958L160.251 248.978Z"
        fill="url(#paint27_linear_493_690)"
      />
      <path
        d="M171.947 250.138C170.009 250.028 168.058 249.875 166.095 249.679L165.897 251.67C167.887 251.868 169.867 252.023 171.834 252.134L171.947 250.138Z"
        fill="url(#paint28_linear_493_690)"
      />
      <path
        d="M180.765 250.339C179.796 250.351 178.823 250.351 177.847 250.34L177.824 252.34C178.816 252.351 179.805 252.351 180.789 252.339L180.765 250.339Z"
        fill="url(#paint29_linear_493_690)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint24_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint25_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint26_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint27_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint28_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
        <linearGradient
          id="paint29_linear_493_690"
          x1="-131.175"
          y1="-331"
          x2="-216.662"
          y2="-318.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.229167" stopColor="#137DAA" />
          <stop offset="1" stopColor="#24A9E1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default DoceArrow;
