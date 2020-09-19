import React, { SVGAttributes } from "react";

interface RomanNumeralFifteenProps {
  id: string;
  svg?: SVGAttributes<SVGElement>;
  path?: SVGAttributes<SVGPathElement>;
}

const RomanNumeralFifteen: React.FC<RomanNumeralFifteenProps> = ({
  id,
  svg = {},
  path = {},
}: RomanNumeralFifteenProps) => {
  return (
    <svg
      id={id}
      width="131"
      height="103"
      viewBox="0 0 131 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svg}
    >
      <path
        d="M45.6669 55.1304L70.2327 74.6415C74.305 77.8757 77.0636 79.7557 78.5085 80.2817C79.9737 80.7684 81.5391 80.8464 83.2045 80.5159L83.7279 82.1694L54.1885 91.5212L53.6651 89.8677C55.9621 88.9438 57.3683 88.1053 57.8838 87.3521C58.3992 86.5988 58.5344 85.8349 58.2891 85.0603C58.1193 84.5241 57.8642 84.0804 57.5236 83.7293C56.8235 82.9676 55.2526 81.6293 52.8108 79.7145L39.817 69.422L34.1458 83.6569C32.4598 87.9602 31.8101 90.7226 32.1968 91.9441C32.4704 92.8081 33.0825 93.4993 34.0334 94.0178C34.9842 94.5362 36.2116 94.7377 37.7156 94.6221C38.3979 94.6028 39.7072 94.2866 41.6437 93.6735L42.1672 95.327L18.8843 102.698L18.3608 101.045C20.8897 99.8178 22.7489 98.4426 23.9382 96.9188C25.5004 94.9164 27.3805 91.1744 29.5786 85.6929L36.9594 67.2291L14.3687 49.4528C10.6573 46.5305 8.55683 44.9173 8.06727 44.6134C6.95161 43.8849 5.94045 43.4348 5.0338 43.2629C4.12714 43.091 2.95557 43.1178 1.51909 43.3431L0.995613 41.6896L31.0713 32.168L31.5947 33.8215L30.0753 34.3025C28.3473 34.8496 27.2303 35.5146 26.7243 36.2976C26.2089 37.0508 26.0832 37.8445 26.3473 38.6787C26.5548 39.3341 26.8383 39.8672 27.1977 40.2778L31.7527 43.9493L42.8823 53.0128L46.7969 43.1691C48.8008 38.1095 49.548 34.7754 49.0387 33.1666C48.784 32.3622 48.3099 31.6928 47.6163 31.1585C46.9525 30.6147 46.1273 30.286 45.1407 30.1722C44.154 30.0584 42.7521 30.2892 40.9347 30.8646L40.4112 29.2111L62.711 22.1512L63.2345 23.8047C61.4862 24.391 60.1418 25.0625 59.2013 25.8191C58.2514 26.546 57.3401 27.6539 56.4676 29.143C55.9194 30.1032 54.6855 32.9358 52.7661 37.6408L45.6669 55.1304ZM130.37 0.731197L130.894 2.38469C128.802 3.44017 127.208 5.23949 126.112 7.78265C125.333 9.66842 124.579 13.7586 123.851 20.053L117.639 72.9579L116.164 73.4248L80.1319 31.8289C75.7901 26.8116 73.0269 23.9333 71.8422 23.1939C70.6873 22.445 68.8906 22.3091 66.4521 22.7861L65.9286 21.1326L94.9764 11.9364L95.4999 13.5899L94.5168 13.9011C91.895 14.7312 90.2112 15.6248 89.4653 16.5821C88.9216 17.2459 88.7865 18.0098 89.06 18.8738C89.2298 19.41 89.5517 20.0129 90.0259 20.6822C90.4906 21.3218 91.9128 23.0185 94.2925 25.7725L116.757 51.8487L120.231 21.199C120.633 17.4989 120.823 15.0458 120.802 13.8397C120.781 12.6336 120.648 11.6433 120.402 10.8687C120.119 9.9749 119.631 9.26086 118.938 8.72654C118.244 8.19222 117.379 7.8925 116.342 7.82738C114.901 7.72648 113.122 8.01087 111.007 8.68054L110.483 7.02705L130.37 0.731197Z"
        fill="#F2E6CC"
        fillOpacity="0.8"
        {...path}
      />
    </svg>
  );
};

export default RomanNumeralFifteen;
