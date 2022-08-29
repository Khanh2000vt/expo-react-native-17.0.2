import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

interface BaseModalProps extends TouchableOpacityProps {
  title?: string;
  placeholder?: string;
  data: { label: string; value: string }[];
  onChangeValue?: (value: string) => void;
  styleContainer?: StyleProp<ViewStyle>;
  error?: boolean;
  messageError?: string;
}

export type { BaseModalProps };
