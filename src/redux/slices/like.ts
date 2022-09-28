import { likeData } from "@helper";
import { IForumAPI, ILikeAPI, IUserAPI, IUserID } from "@model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getIndexPostInLikes } from "@utils";
import { RootState } from ".";

interface IState {
  likes: ILikeAPI[];
}

interface IPayload {
  post: IForumAPI;
  user: IUserAPI;
}

const initialState: IState = {
  likes: likeData,
};

const likeSlice = createSlice({
  name: "reply",
  initialState: initialState,
  reducers: {
    addLike: (state: IState, action: PayloadAction<IPayload>) => {
      const { post, user } = action.payload;
      const initUser: IUserID = {
        id_user: user.id,
      };
      const initNew: ILikeAPI = {
        id: (state.likes.length + 1).toString(),
        id_post: post.id,
        data: [initUser],
      };
      const id: number = getIndexPostInLikes(post, state.likes);
      if (id === -1) {
        state.likes = state.likes.concat(initNew);
      } else {
        const data = state.likes[id].data;
        state.likes[id].data = [initUser, ...data];
      }
    },
    removeLike: (state: IState, action: PayloadAction<IPayload>) => {
      const { post, user } = action.payload;
      const id: number = getIndexPostInLikes(post, state.likes);
      const data = state.likes[id].data;
      state.likes[id].data = data.filter((like) => like.id_user !== user.id);
    },
  },
});

export const {
  addLike,
  removeLike,
  //  addCoins, spendCoins, updateUser
} = likeSlice.actions;

export const selectLike = (state: RootState) => state.like;
export default likeSlice.reducer;
