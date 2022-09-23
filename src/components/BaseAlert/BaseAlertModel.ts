import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

interface BaseAlertProps {
  children: React.ReactNode;
  isVisible: boolean;
  styleContainer?: StyleProp<ViewStyle> | undefined;
  onBackButtonPress?: () => void | undefined;
  onBackdropPress?: () => void | undefined;
}

export type { BaseAlertProps };
