import { ColorValue, StyleProp, ViewStyle } from "react-native";
interface PropsOTPBase {
  type?: "otp" | "password";
  backgroundColor?: ColorValue | undefined;
  styleInputOTP?: StyleProp<ViewStyle> | undefined;
  styleInputHighlight?: StyleProp<ViewStyle> | undefined;
}

interface PropsOTP extends PropsOTPBase {
  pinCount?: number;
  onCodeFilled?: (code: string) => void | undefined;
  clearInputs?: boolean;
  styleViewOTP?: StyleProp<ViewStyle> | undefined;
  styleContainerOTP?: StyleProp<ViewStyle> | undefined;
}

interface PropsInputOTP extends PropsOTPBase {
  codeChar: string;
  index: number;
  onTextChange: (text: string, index: number) => void;
  onLayout: (a: any, i: number) => void;
  onKeyPress: (s: string, c: string, index: number) => void;
  focused: boolean;
}

export type { PropsOTP, PropsInputOTP };
