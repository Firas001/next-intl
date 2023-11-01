const Logo = (props: any) => {
  const { h = 30, w = 50 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={w}
      height={h}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={w}
        height={h}
        viewBox="0 0 59 80"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.9178 0H6.48969V12.9795H51.9178V0ZM58.4076 49.9709C58.4076 66.0997 45.3326 79.1747 29.2038 79.1747C13.075 79.1747 0 66.0997 0 49.9709C0 33.8421 13.075 20.7671 29.2038 20.7671C45.3326 20.7671 58.4076 33.8421 58.4076 49.9709ZM45.4281 49.9709C45.4281 58.9314 38.1643 66.1953 29.2038 66.1953C20.2434 66.1953 12.9795 58.9314 12.9795 49.9709C12.9795 41.0105 20.2434 33.7466 29.2038 33.7466C38.1643 33.7466 45.4281 41.0105 45.4281 49.9709Z"
          fill="#24A9E1"
        ></path>
      </svg>
      <style>@media (prefers-color-scheme: light)</style>
    </svg>
  );
};
export default Logo;
