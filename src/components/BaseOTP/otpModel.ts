import { ColorValue, StyleProp, ViewStyle } from "react-native";

interface PropsOTP {
  pinCount?: number;
  onCodeFilled?: (code: string) => void | undefined;
  type?: "otp" | "password";
  clearInputs?: boolean;
  styleInputOTP?: StyleProp<ViewStyle> | undefined;
  styleViewOTP?: StyleProp<ViewStyle> | undefined;
  styleContainerOTP?: StyleProp<ViewStyle> | undefined;
  styleInputHighlight?: StyleProp<ViewStyle> | undefined;
  backgroundColor?: ColorValue | undefined;
}

interface PropsInputOTP {
  code: string[];
  index: number;
  onTextChange: (text: string, index: number) => void;
  onLayout: (a: any, i: number) => void;
  onKeyPress: (s: string, c: string, index: number) => void;
  type: "otp" | "password";
  styleInputOTP?: StyleProp<ViewStyle> | undefined;
  styleInputHighlight?: StyleProp<ViewStyle> | undefined;
  indexFocused: number;
  backgroundColor?: ColorValue | undefined;
}

export type { PropsOTP, PropsInputOTP };
