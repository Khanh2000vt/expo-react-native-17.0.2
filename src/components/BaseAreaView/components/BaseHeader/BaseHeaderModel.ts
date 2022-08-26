import { StyleProp, ViewStyle } from "react-native";

interface PropsBaseHeader {
  title?: string;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  styleHeader?: StyleProp<ViewStyle> | undefined;
}

export type { PropsBaseHeader };
