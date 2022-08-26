import React from "react";
import Svg, { Path } from "react-native-svg";
function ArrowDownIcon(props: any) {
  return (
    <Svg
      width={12}
      height={7}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 1L6 6 1 1"
        stroke="#3FAEC7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ArrowRight({ stroke, ...props }: any) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.625 10h13.75M11.75 4.375L17.375 10l-5.625 5.625"
        stroke={stroke || "#fff"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function EyeSlash(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.5 3.75l15 16.5M14.522 14.775a3.75 3.75 0 01-5.045-5.55"
        stroke="#3FAEC7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.937 6.43C3.115 8.367 1.5 12 1.5 12s3 6.75 10.5 6.75c1.757.013 3.493-.392 5.062-1.181M19.557 15.853C21.601 14.023 22.5 12 22.5 12s-3-6.75-10.5-6.75a11.75 11.75 0 00-1.939.157M12.706 8.316a3.753 3.753 0 013.027 3.331"
        stroke="#3FAEC7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Plus(props: any) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.5 8h11M8 2.5v11"
        stroke="#A8ACAE"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Tick(props: any) {
  return (
    <Svg
      width={16}
      height={12}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.375 1.625l-8.75 8.75L1.25 6"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Vector(props: any) {
  return (
    <Svg
      width={12}
      height={7}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 1L6 6 1 1"
        stroke="#3FAEC7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function VectorBack(props: any) {
  return (
    <Svg
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.5 18.75L1.75 10l8.75-8.75"
        stroke="#191B1D"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export { ArrowDownIcon, ArrowRight, EyeSlash, Plus, Tick, Vector, VectorBack };
