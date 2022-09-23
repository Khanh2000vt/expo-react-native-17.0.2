import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

export interface BasePopupRequestProps {
  isVisible: boolean;
  onBackButtonPress?: () => void | undefined;
  onBackdropPress?: () => void | undefined;
  styleContainer?: StyleProp<ViewStyle> | undefined;
  onPressCancel?: () => void | undefined;
  onPressOK?: () => void | undefined;
  accept?: boolean;
  coinRequest?: number;
}
