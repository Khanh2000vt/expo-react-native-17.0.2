import { FormikErrors, FormikTouched } from "formik";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

interface PropsBaseInput extends TextInputProps {
  title?: string;
  option?: "search" | "password" | "search-filter" | "default";
  styleContainer?: StyleProp<ViewStyle> | undefined;
  styleTitle?: StyleProp<TextStyle> | undefined;
  styleBody?: StyleProp<ViewStyle> | undefined;
  error?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  messageError?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  onPressFilter?: () => void;
}

export type { PropsBaseInput };
