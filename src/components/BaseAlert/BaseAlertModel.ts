import { StyleProp, ViewStyle } from "react-native";
import { BaseButtonProps } from "../BaseButton/BaseButtonModel";

interface BaseAlertProps {
  title?: string;
  isVisible: boolean;
  arrayButton?: BaseButtonProps[];
  styleContainer?: StyleProp<ViewStyle> | undefined;
  styleBody?: StyleProp<ViewStyle> | undefined;
  styleViewButton?: StyleProp<ViewStyle> | undefined;
}

export type { BaseAlertProps };
