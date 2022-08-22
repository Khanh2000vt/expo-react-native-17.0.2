import { ColorValue, StyleProp, TextStyle, ViewStyle } from "react-native";

interface BaseButtonProps {
  title: string;
  IconView?: React.ReactNode;
  color?: ColorValue | undefined;
  backgroundColor?: ColorValue | undefined;
  onPress?: () => void | undefined;
  option?: "fill" | "solid" | "default" | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  styleText?: StyleProp<TextStyle> | undefined;
}
export type { BaseButtonProps };
