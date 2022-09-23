import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import commentData from "../../helper/commentData.json";
import likeData from "../../helper/likeData.json";
import { findIndexPostById } from "../../utils";
interface IState {
  replies: {
    post_id: string;
    data: {
      createdAt: string;
      name: string;
      avatar: string;
      body: string;
      id: string;
    }[];
  }[];
  likes: {
    post_id: string;
    data: {
      user_id: string;
    }[];
  }[];
}

const initialState: IState = {
  replies: commentData,
  likes: likeData,
};

const forumSlide = createSlice({
  name: "forum",
  initialState: initialState,
  reducers: {
    addLikes: (state: IState, action: PayloadAction<any>) => {
      const { post, user } = action.payload;
      const index = findIndexPostById(post, state.likes);
      if (index !== -1) {
        state.likes[index].data = [
          ...state.likes[index].data,
          { user_id: user.user_id.toString() },
        ];
      } else {
        state.likes = [
          ...state.likes,
          {
            post_id: post.id,
            data: [
              {
                user_id: user.user_id.toString(),
              },
            ],
          },
        ];
      }
    },
    deleteLikes: (state: IState, action: PayloadAction<any>) => {
      const { post, user } = action.payload;
      const index = findIndexPostById(post, state.likes);

      state.likes[index].data = [
        ...state.likes[index].data.filter(
          (like) => like.user_id !== user.user_id.toString()
        ),
      ];
    },
    addReply: (state: IState, action: PayloadAction<any>) => {
      const { post, user, comment } = action.payload;
      const index = findIndexPostById(post, state.replies);
      const initReply = {
        createdAt: new Date().toISOString(),
        name: user.name,
        avatar: user.avatar,
        body: comment,
        id: "1",
      };
      if (index !== -1) {
        state.replies[index].data = [
          { ...initReply, id: state.replies[index].data.length.toString() },
          ...state.replies[index].data,
        ];
      } else {
        state.replies = [
          ...state.replies,
          {
            post_id: post.id,
            data: [initReply],
          },
        ];
      }
    },
  },
});

export const { addLikes, deleteLikes, addReply } = forumSlide.actions;
export const selectForum = (state: RootState) => state.forum;
export default forumSlide.reducer;
