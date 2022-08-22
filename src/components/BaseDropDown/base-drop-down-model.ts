import { PickerProps } from "@react-native-picker/picker";
import { StyleProp, ViewStyle } from "react-native";

interface PropsBaseDropDown extends PickerProps {
  data: {
    label: string;
    value: string;
  }[];
  title?: string;
  value?: string;
  styleView?: StyleProp<ViewStyle> | undefined;
}

export type { PropsBaseDropDown };
