import { GestureResponderEvent } from "react-native";

export interface BasePostDetailProps {
  postFocus: any;
  onPressLikeDetail: () => void | undefined;
  liked: boolean;
  initAmountLike: number;
}
