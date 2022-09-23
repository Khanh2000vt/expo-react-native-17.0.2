import { ISelect } from "@model";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

interface PropsBaseDropDown {
  data: ISelect[];
  title?: string;
  value?: string;
  styleView?: StyleProp<ViewStyle> | undefined;
  placeholder?: string;
  placeholderStyle?: StyleProp<TextStyle>;
  onChangeValue?: (value: any | any[] | undefined) => void | undefined;
  error?: boolean | undefined;
  messageError?: string;
  zIndex?: number;
  zIndexInverse?: number;
}

export type { PropsBaseDropDown };
