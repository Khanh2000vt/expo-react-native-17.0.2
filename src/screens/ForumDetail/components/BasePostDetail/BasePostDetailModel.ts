import { IForumAPI, IMemberAPI, IUserAPI } from "@model";

export interface BasePostDetailProps {
  postFocus: IForumAPI;
  onPressLikeDetail: () => void;
  onPressMember: (user: IMemberAPI | IUserAPI) => void;
}
