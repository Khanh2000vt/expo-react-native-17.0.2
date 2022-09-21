import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

interface BaseButtonProps {
  title: string | React.ReactNode;
  IconRight?: React.ReactNode | JSX.Element;
  IconLeft?: React.ReactNode | JSX.Element;
  color?: ColorValue | undefined;
  backgroundColor?: ColorValue | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  option?: "fill" | "solid" | "default" | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  styleText?: StyleProp<TextStyle> | undefined;
  disabled?: boolean;
}
export type { BaseButtonProps };
