import { RootState } from "./slices";

export * from "./slices";
export * from "./store";
export { default as rootReducer } from "./slices";

export const getCommunitiesRedux = (state: RootState) =>
  state.community.communities;

export const getForumRedux = (state: RootState) => state.forum.posts;

export const getLikeRedux = (state: RootState) => state.like.likes;

export const getPostRedux = (state: RootState) => state.post;

export const getReplyRedux = (state: RootState) => state.reply.reply;

export const getUserRedux = (state: RootState) => state.user.user;

export const getMemberRedux = (state: RootState) => state.member.members;
