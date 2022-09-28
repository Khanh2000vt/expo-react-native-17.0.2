import { IForumAPI, ILikeAPI, IMemberAPI, IReplyAPI, IUserAPI } from "@model";

export const getAmountLikeInForum = (post: IForumAPI, likes: ILikeAPI[]) => {
  const likeFind = likes.find((like) => like.id_post === post.id);
  return likeFind ? likeFind.data.length : 0;
};

export const isLikedPost = (
  user: IUserAPI,
  likes: ILikeAPI[],
  post: IForumAPI
) => {
  const likesPost = likes.find((like) => like.id_post === post.id);
  if (likesPost !== undefined) {
    return likesPost.data.some((likePost) => likePost.id_user === user.id);
  } else {
    return false;
  }
};

export const getElementLikeOfPost = (
  post: IForumAPI,
  likes: ILikeAPI[]
): ILikeAPI | undefined => {
  const likeFind = likes.find((like) => like.id_post === post.id);
  return likeFind;
};

export const getIndexPostInLikes = (post: IForumAPI, likes: ILikeAPI[]) => {
  const index = likes.findIndex((like) => like.id_post === post.id);
  return index;
};

export const getAmountReplyInForum = (
  post: IForumAPI,
  replies: IReplyAPI[]
) => {
  const replyFind = replies.find((reply) => reply.id_post === post.id);
  return replyFind ? replyFind.data.length : 0;
};

export const getElementReplyInPost = (
  post: IForumAPI,
  replies: IReplyAPI[]
): IReplyAPI | undefined => {
  const replyFind = replies.find((reply) => reply.id_post === post.id);
  return replyFind;
};

export const getIndexPostInReplies = (
  post: IForumAPI,
  replies: IReplyAPI[]
) => {
  const index = replies.findIndex((reply) => reply.id_post === post.id);
  return index;
};

export const findMemberPostInForum = (
  post: IForumAPI,
  members: IMemberAPI[],
  user: IUserAPI
): IUserAPI | IMemberAPI | undefined => {
  if (post.id_user === "1") {
    return user;
  } else {
    const memberFind = members.find((member) => member.id === post.id_user);
    return memberFind;
  }
};
