import { IForumAPI } from "@model";

export interface RenderItemProps {
  post: IForumAPI;
  onPress: (item: IForumAPI) => void;
}
