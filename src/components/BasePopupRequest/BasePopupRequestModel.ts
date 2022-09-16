import { StyleProp, ViewStyle } from "react-native";

export interface BasePopupRequestProps {
  isVisible: boolean;
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
  styleContainer?: StyleProp<ViewStyle> | undefined;
  onPressCancel?: () => void;
  onPressOK?: () => void;
  accept?: boolean;
  coinRequest?: number;
}
