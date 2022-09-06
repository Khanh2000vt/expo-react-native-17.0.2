import { ColorValue, StyleProp, TextStyle, ViewStyle } from "react-native";

interface BaseButtonProps {
  title: string;
  IconRight?: React.ReactNode | JSX.Element;
  IconLeft?: React.ReactNode | JSX.Element;
  color?: ColorValue | undefined;
  backgroundColor?: ColorValue | undefined;
  onPress?: () => void | undefined;
  option?: "fill" | "solid" | "default" | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  styleText?: StyleProp<TextStyle> | undefined;
  disabled?: boolean;
}
export type { BaseButtonProps };
