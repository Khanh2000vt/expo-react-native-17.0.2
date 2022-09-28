import { IForumAPI, IUserComment, IUserID } from "@model";

export interface BaseInteractiveProps {
  post: IForumAPI;
  type: "like" | "reply";
  userID?:IUserID;
  userCommentID?: IUserComment
}
