import { ColorValue, StyleProp, TextStyle, ViewStyle } from "react-native";

interface BaseButtonProps {
  title: string;
  IconRight?: React.ReactNode;
  IconLeft?: React.ReactNode;
  color?: ColorValue | undefined;
  backgroundColor?: ColorValue | undefined;
  onPress?: () => void | undefined;
  option?: "fill" | "solid" | "default" | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  styleText?: StyleProp<TextStyle> | undefined;
  disabled?: boolean;
}
export type { BaseButtonProps };
