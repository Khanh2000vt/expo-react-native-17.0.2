import { StyleProp, TextInputProps, ViewStyle } from "react-native";

interface PropsBaseInput extends TextInputProps {
  title: string;
  IconView?: React.ReactNode | undefined;
  styleContainer?: StyleProp<ViewStyle> | undefined;
  onPressIcon?: () => void | undefined;
  error?: boolean | undefined;
  messageError?: string;
}

export type { PropsBaseInput };
