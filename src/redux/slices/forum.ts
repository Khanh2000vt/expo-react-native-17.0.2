import { postData } from "@helper";
import { IForumAPI } from "@model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface IState {
  posts: IForumAPI[];
}

interface IPayload {
  post: IForumAPI;
}
const initialState: IState = {
  posts: postData,
};

const forumSlide = createSlice({
  name: "forum",
  initialState: initialState,
  reducers: {
    pushPostInForum: (state: IState, action: PayloadAction<IPayload>) => {
      const { post } = action.payload;
      const initNew: IForumAPI = {
        ...post,
        id: (state.posts.length + 1).toString(),
      };
      state.posts = [initNew, ...state.posts];
    },
  },
});

export const { pushPostInForum } = forumSlide.actions;
export const selectForum = (state: RootState) => state.forum;
export default forumSlide.reducer;
