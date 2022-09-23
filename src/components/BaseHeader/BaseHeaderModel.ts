import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";

interface PropsBaseHeader {
  title?: string;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
  onPressLeft?: () => void | undefined;
  onPressRight?: () => void | undefined;
  styleHeader?: StyleProp<ViewStyle> | undefined;
  styleTitleHeader?: StyleProp<TextStyle> | undefined;
}

export type { PropsBaseHeader };
