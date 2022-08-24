import { StyleProp, TextStyle, ViewStyle } from "react-native";

interface PropsBaseDropDown {
  data: {
    label: string;
    value: string;
  }[];
  title?: string;
  value?: string;
  styleView?: StyleProp<ViewStyle> | undefined;
  placeholder?: string;
  placeholderStyle?: StyleProp<TextStyle>;
  onChangeValue?: (value: any | any[] | undefined) => void | undefined;
  error?: boolean | undefined;
  messageError?: string;
}

export type { PropsBaseDropDown };
