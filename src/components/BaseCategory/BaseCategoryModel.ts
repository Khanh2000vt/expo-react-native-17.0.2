import { ICommunityAPI } from "@model";
import { StyleProp, ViewStyle } from "react-native";

interface BaseCategoryProps {
  community: ICommunityAPI;
  onPress?: (item: ICommunityAPI, pressed: boolean) => void;
  isShowTick?: boolean;
  isShowMember?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
}

export type { BaseCategoryProps };
