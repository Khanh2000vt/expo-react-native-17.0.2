import { StyleProp, ViewStyle } from "react-native";

interface BaseAlertProps {
  children: React.ReactNode;
  isVisible: boolean;
  styleContainer?: StyleProp<ViewStyle> | undefined;
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
}

export type { BaseAlertProps };
