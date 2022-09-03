import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

interface PropsBaseInput extends TextInputProps {
  title?: string;
  option?: "search" | "password" | "search-filter" | "default";
  styleContainer?: StyleProp<ViewStyle> | undefined;
  styleTitle?: StyleProp<TextStyle> | undefined;
  styleBody?: StyleProp<ViewStyle> | undefined;
  error?: boolean | undefined;
  messageError?: string;
  onPressFilter?: (value: {
    minAge: string;
    maxAge: string;
    gender: string;
  }) => void;
}

export type { PropsBaseInput };
