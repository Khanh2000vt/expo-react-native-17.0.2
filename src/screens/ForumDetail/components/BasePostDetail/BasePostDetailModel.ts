import { IForumAPI } from "@model";

export interface BasePostDetailProps {
  postFocus: IForumAPI;
  onPressLikeDetail: () => void;
}
