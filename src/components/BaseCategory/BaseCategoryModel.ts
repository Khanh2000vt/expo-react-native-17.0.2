import { StyleProp, ViewStyle } from "react-native";

interface BaseCategoryProps {
  item?: any;
  onPress?: (item: any, pressed: boolean) => void;
  isShowTick?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
}

export type { BaseCategoryProps };
