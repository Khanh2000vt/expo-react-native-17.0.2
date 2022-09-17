import React from "react";
import Svg, { Path, Rect } from "react-native-svg";
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

function VectorBack({ stroke, ...props }: any) {
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
        stroke={stroke || "#191B1D"}
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

function CaretRight({ stroke, ...props }: any) {
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
        stroke={stroke || "#3FAEC7"}
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

function MagnifyingGlass(props: any) {
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
        d="M10.875 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75zM16.443 16.444L21 21"
        stroke="#C6CBCC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SvgMessages(props: any) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M43.2 2.4H21.6c-2.64 0-4.8 2.16-4.8 4.8v19.2h16.8l7.2 7.2v-7.2h2.4c2.64 0 4.8-2.158 4.8-4.8V7.2c0-2.64-2.16-4.8-4.8-4.8z"
        fill="#3FAEC7"
      />
      <Path
        d="M13.92 29.28V14.4H4.8c-2.64 0-4.8 2.16-4.8 4.8v14.4c0 2.64 2.16 4.8 4.8 4.8h2.4v7.2l7.2-7.2h12c2.64 0 4.8-2.16 4.8-4.8v-4.368c-.158.034-.319.05-.48.05h-16.8v-.002z"
        fill="#C6CBCC"
      />
    </Svg>
  );
}

function SvgInfo({ stroke, ...props }: any) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14 24.5c5.799 0 10.5-4.701 10.5-10.5S19.799 3.5 14 3.5 3.5 8.201 3.5 14 8.201 24.5 14 24.5z"
        stroke={stroke || "#3FAEC7"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.125 13.125H14v6.125h.875"
        stroke={stroke || "#3FAEC7"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.781 10.5a1.313 1.313 0 100-2.625 1.313 1.313 0 000 2.625z"
        fill={stroke || "#3FAEC7"}
      />
    </Svg>
  );
}

function SlidersHorizontal(props: any) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.188 18.812H4.374M23.625 18.812h-3.063M18.375 21a2.188 2.188 0 100-4.376 2.188 2.188 0 000 4.376zM9.188 9.187H4.375M23.625 9.187H13.562M11.375 11.374a2.188 2.188 0 100-4.375 2.188 2.188 0 000 4.375z"
        stroke="#191B1D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SvgUser(props: any) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.5 10.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z"
        stroke="#2B3641"
        strokeMiterlimit={10}
      />
      <Path
        d="M9.713 4.12a3.25 3.25 0 11.882 6.38M1 12.837a5.501 5.501 0 019 0M10.595 10.5a5.494 5.494 0 014.5 2.337"
        stroke="#2B3641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SvgCopy(props: any) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.813 11.812h3.374v-9h-9v3.375"
        stroke="#5A636D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.813 6.187h-9v9h9v-9z"
        stroke="#5A636D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function UserCircle(props: any) {
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
        stroke="#191B1D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 20a5 5 0 100-10 5 5 0 000 10zM7.975 24.922a9.004 9.004 0 0116.05 0"
        stroke="#191B1D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Prohibit(props: any) {
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
        stroke="#191B1D"
        strokeWidth={1.5}
        strokeMiterlimit={10}
      />
      <Path
        d="M7.515 7.515l16.97 16.97"
        stroke="#191B1D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function LockKeyOpen(props: any) {
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
        d="M15.999 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM15.999 20v3"
        stroke="#191B1D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.999 11h-20a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V12a1 1 0 00-1-1zM11.499 11V6.5a4.5 4.5 0 119 0"
        stroke="#191B1D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SignOut({ stroke, strokeWidth, ...props }: any) {
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
        d="M21.751 10.75L27 16l-5.249 5.25M13 16h13.996M13 27H6a1 1 0 01-1-1V6a1 1 0 011-1h7"
        stroke={stroke || "#191B1D"}
        strokeWidth={strokeWidth || 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Warnings(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 8.125v3.125M8.918 3.124L2.045 14.998a1.25 1.25 0 001.082 1.876h13.746a1.25 1.25 0 001.082-1.876L11.082 3.124a1.25 1.25 0 00-2.164 0v0z"
        stroke="#FF4C41"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 15a.937.937 0 100-1.875A.937.937 0 0010 15z"
        fill="#FF4C41"
      />
    </Svg>
  );
}

function PencilLine(props: any) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.5 23.625H5.25a.875.875 0 01-.875-.875v-4.887a.875.875 0 01.256-.62L17.756 4.12a.875.875 0 011.238 0l4.887 4.887a.875.875 0 010 1.238L10.5 23.625zM14.875 7L21 13.125"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.625 23.625H10.5l-6.07-6.07"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Bell(props: any) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.939 21.29c-.29-1.069-.46-2.996.373-6.106l.172-.642c1.075-4.01-1.262-8.159-5.208-9.248l-.056-.015a7.49 7.49 0 00-9.167 5.308l-.194.725c-.833 3.11-1.944 4.693-2.73 5.474a1.5 1.5 0 00.666 2.514l3.533.946a3.75 3.75 0 007.244 1.942l3.533.946a1.5 1.5 0 001.834-1.844zm-9.571 2.1a2.252 2.252 0 01-1.591-2.755l4.346 1.164a2.252 2.252 0 01-2.755 1.591z"
        fill="#56C2FF"
      />
    </Svg>
  );
}

function SingOut19(props: any) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.915 6.383L16.031 9.5l-3.116 3.117M7.719 9.5h8.31M7.719 16.031H3.562a.594.594 0 01-.593-.593V3.562a.594.594 0 01.594-.593h4.156"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Users(props: any) {
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
        d="M7.375 12.5a4.062 4.062 0 100-8.125 4.062 4.062 0 000 8.125z"
        stroke="#2B3641"
        strokeMiterlimit={10}
      />
      <Path
        d="M12.642 4.526a4.063 4.063 0 111.102 7.974M1.75 15.422a6.876 6.876 0 0111.25 0M13.744 12.5a6.867 6.867 0 015.625 2.921"
        stroke="#2B3641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Crown(props: any) {
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
        d="M4.026 15.314a.627.627 0 00.78.458 21.398 21.398 0 0111.386-.001.626.626 0 00.779-.458l1.99-8.462a.626.626 0 00-.861-.715l-3.952 1.757a.625.625 0 01-.8-.268l-2.301-4.142a.625.625 0 00-1.093 0L7.653 7.625a.625.625 0 01-.8.268L2.9 6.136a.625.625 0 00-.862.714l1.988 8.464zM8 12.631a23.902 23.902 0 015 0"
        stroke="#2B3641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Coin(props: any) {
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
        d="M10.5 11.875c4.487 0 8.125-1.679 8.125-3.75 0-2.071-3.638-3.75-8.125-3.75s-8.125 1.679-8.125 3.75c0 2.071 3.638 3.75 8.125 3.75zM10.5 11.875v3.75"
        stroke="#2B3641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.375 8.125v3.75c0 1.875 3.125 3.75 8.125 3.75s8.125-1.875 8.125-3.75v-3.75M15.5 11.102v3.75M5.5 11.102v3.75"
        stroke="#2B3641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Eye(props: any) {
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
        d="M16 6.999C6 6.999 2 16 2 16s4 8.999 14 8.999S30 16 30 16s-4-9.001-14-9.001z"
        stroke="#3FAEC7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 21a5 5 0 100-10 5 5 0 000 10z"
        stroke="#3FAEC7"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CheckCircle(props: any) {
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
        d="M16 3a13 13 0 1013 13A13.015 13.015 0 0016 3zm6.191 10.724l-7.334 7a1.003 1.003 0 01-1.382 0l-3.666-3.5a1 1 0 011.382-1.448l2.975 2.841 6.643-6.34a1 1 0 011.382 1.447z"
        fill="#3FAEC7"
      />
    </Svg>
  );
}

function MinusCircle(props: any) {
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
        d="M16 3a13 13 0 1013 13A13.015 13.015 0 0016 3zm5 14H11a1 1 0 010-2h10a1 1 0 010 2z"
        fill="#A8ACAE"
      />
    </Svg>
  );
}

function WarningsFill(props: any) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M44.39 35.244l-16.494-28.5a4.502 4.502 0 00-7.79 0v.001L3.612 35.244a4.5 4.5 0 003.893 6.754h32.991a4.5 4.5 0 003.894-6.754zM22.5 19.5a1.5 1.5 0 013 0V27a1.5 1.5 0 11-3 0v-7.5zM24 36a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
        fill="#FF4C41"
      />
    </Svg>
  );
}

function CurrencyJpy(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.25 13.125h7.5M6.25 10.625h7.5M10 10.625v6.25M15.625 3.75L10 10.625 4.375 3.75"
        stroke="#2B3641"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Pencil(props: any) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={48} height={48} rx={8} fill="#3FAEC7" />
      <Path
        d="M20.347 33.103h-4.623a.828.828 0 01-.828-.827v-4.623a.827.827 0 01.243-.585l12.414-12.414a.828.828 0 011.17 0l4.623 4.623a.828.828 0 010 1.17L20.932 32.861a.828.828 0 01-.585.242zM24.828 17.38l5.793 5.792M20.637 33.05l-5.688-5.687"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.497 33.118h3.31m3.31 0h-3.31m0 0v-3.325m0 3.325v3.296"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function HeartOutline(props: any) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.038 7.371a5.25 5.25 0 000 7.425L14 23.758l8.962-8.962a5.25 5.25 0 00-7.424-7.425L14 8.91 12.462 7.37a5.25 5.25 0 00-7.424 0v0z"
        stroke="#2B3641"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function HeartFill(props: any) {
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
        d="M5.757 8.424a6 6 0 000 8.485L16 27.152l10.243-10.243a6 6 0 10-8.486-8.485L16 10.18l-1.757-1.757a6 6 0 00-8.486 0z"
        fill="#FF4C41"
      />
    </Svg>
  );
}

function Annotation(props: any) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14 23.333l-4.667-4.666h-3.5A2.333 2.333 0 013.5 16.332V7a2.333 2.333 0 012.333-2.333h16.334A2.333 2.333 0 0124.5 7v9.333a2.333 2.333 0 01-2.333 2.334h-3.5L14 23.332z"
        stroke="#2B3641"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ImageSVG(props: any) {
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
        d="M30.031 7.063H5.97c-.604 0-1.094.49-1.094 1.093v19.688c0 .604.49 1.093 1.094 1.093H30.03c.604 0 1.094-.49 1.094-1.093V8.156c0-.604-.49-1.094-1.094-1.094z"
        stroke="#3FAEC7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.875 23.469l6.883-6.883a1.093 1.093 0 011.547 0l6.11 6.11a1.091 1.091 0 001.546 0l2.828-2.829a1.094 1.094 0 011.547 0l5.789 5.79"
        stroke="#3FAEC7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.828 15.813a1.64 1.64 0 100-3.282 1.64 1.64 0 000 3.281z"
        fill="#3FAEC7"
      />
    </Svg>
  );
}

function SvgX(props: any) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.188 4.813L4.813 17.188M17.188 17.188L4.813 4.813"
        stroke="#fff"
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
  CaretRight,
  TomoCoins,
  ViaTwitter,
  ViaFacebook,
  MagnifyingGlass,
  SvgMessages,
  SvgInfo,
  SlidersHorizontal,
  SvgUser,
  SvgCopy,
  UserCircle,
  Prohibit,
  LockKeyOpen,
  SignOut,
  Warnings,
  PencilLine,
  Bell,
  SingOut19,
  Users,
  Crown,
  Coin,
  Eye,
  CheckCircle,
  MinusCircle,
  WarningsFill,
  CurrencyJpy,
  Pencil,
  HeartOutline,
  HeartFill,
  Annotation,
  ImageSVG,
  SvgX,
};
