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

function Tick({ stroke, ...props }: any) {
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
        stroke={stroke || "#fff"}
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

function CircleComplete(props: any) {
  return (
    <Svg
      width={90}
      height={90}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M45 .313A44.687 44.687 0 1089.688 45 44.74 44.74 0 0045 .312zm21.283 36.862l-25.21 24.063a3.448 3.448 0 01-4.754 0L23.717 49.206a3.44 3.44 0 014.754-4.975l10.225 9.766L61.53 32.2a3.44 3.44 0 014.753 4.975z"
        fill="#3FAEC7"
      />
    </Svg>
  );
}

function VectorRight(props: any) {
  return (
    <Svg
      width={7}
      height={12}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1l5 5-5 5"
        stroke="#3FAEC7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function TabHome({ stroke, ...props }: any) {
  return (
    <Svg
      width={28}
      height={29}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M26.007 12.415L14.756 2.187a1.125 1.125 0 00-1.514 0L1.993 12.415a1.125 1.125 0 00-.368.832V26.25a1.125 1.125 0 001.125 1.125h22.5a1.125 1.125 0 001.125-1.125V13.247a1.126 1.126 0 00-.368-.832z"
        stroke={stroke || "#3FAEC7"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function TabCommunities({ stroke, ...props }: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.625 6.75h-6.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h6.75c.622 0 1.125-.504 1.125-1.125v-6.75c0-.621-.503-1.125-1.125-1.125zM14.625 20.25h-6.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h6.75c.622 0 1.125-.504 1.125-1.125v-6.75c0-.621-.503-1.125-1.125-1.125zM28.125 6.75h-6.75c-.621 0-1.125.504-1.125 1.125v6.75c0 .621.504 1.125 1.125 1.125h6.75c.622 0 1.125-.504 1.125-1.125v-6.75c0-.621-.503-1.125-1.125-1.125z"
        stroke={stroke || "#C6CBCC"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function TabAccount({ stroke, ...props }: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18 22.5a9 9 0 100-18 9 9 0 000 18z"
        stroke={stroke || "#3FAEC7"}
        strokeWidth={2.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M4.358 30.374a15.755 15.755 0 0127.284 0"
        stroke={stroke || "#C6CBCC"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function TomoCoins(props: any) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 19c7.18 0 13-2.686 13-6s-5.82-6-13-6S3 9.686 3 13s5.82 6 13 6zM16 19v6"
        stroke="#FEA827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 13v6c0 3 5 6 13 6s13-3 13-6v-6M24 17.763v6M8 17.763v6"
        stroke="#FEA827"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ViaTwitter(props: any) {
  return (
    <Svg
      width={28}
      height={24}
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.23 7.77l-.258.259-.032.363C22.232 16.61 15.298 23 7 23c-1.723 0-3.05-.275-4-.75h0c-.75-.375-.997-.745-1-.75h.002c.05-.02 3.203-1.221 5.283-3.575l.736-.832-.905-.645a12.7 12.7 0 01-2.865-2.822H4.25C2.678 11.491.959 7.727 2 2h0l-.298-.954L2 2h0l.001.001c.055.055 4.38 4.333 9.746 5.731l1.251.326L13 6.765 13 6.004A5.04 5.04 0 0118.066 1a5.015 5.015 0 014.266 2.5l.289.5H27l-3.77 3.77zM2 2h0z"
        stroke="#406FF1"
        strokeWidth={2}
      />
    </Svg>
  );
}

function ViaFacebook(props: any) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
        stroke="#642AE3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 11h-2a3 3 0 00-3 3v14M12 18h8"
        stroke="#642AE3"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export {
  ArrowDownIcon,
  ArrowRight,
  EyeSlash,
  Plus,
  Tick,
  Vector,
  VectorBack,
  CircleComplete,
  TabHome,
  TabCommunities,
  TabAccount,
  VectorRight,
  TomoCoins,
  ViaTwitter,
  ViaFacebook,
};
