import { ISelect } from "@model";
import { FormikErrors, FormikTouched } from "formik";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

interface BaseModalProps extends TouchableOpacityProps {
  title?: string;
  placeholder?: string;
  data: ISelect[];
  onChangeValue?: (value: string) => void;
  styleContainer?: StyleProp<ViewStyle>;
  error?: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  messageError?:
    | string
    | string[]
    | FormikErrors<any>
    | FormikErrors<any>[]
    | undefined;
  value?: string;
}

export type { BaseModalProps };
