import { StyleProp, TextInputProps, ViewStyle } from "react-native";

interface PropsBaseInput extends TextInputProps {
  title: string;
  IconView?: React.ReactNode | undefined;
  styleContainer?: StyleProp<ViewStyle> | undefined;
  onPressIcon?: () => void | undefined;
  // option?: "default" | " password" | "email" | "phone" | undefined;
}

export type { PropsBaseInput };
