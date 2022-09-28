import { commentData } from "@helper";
import { IForumAPI, IReplyAPI, IUserAPI, IUserComment } from "@model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getIndexPostInReplies } from "@utils";
import { RootState } from ".";

interface IState {
  reply: IReplyAPI[];
}

interface IPayload {
  post: IForumAPI;
  user: IUserAPI;
  comment: string;
}

const initialState: IState = {
  reply: commentData,
};

const replySlice = createSlice({
  name: "reply",
  initialState: initialState,
  reducers: {
    addReply: (state: IState, action: PayloadAction<IPayload>) => {
      const { post, user, comment } = action.payload;
      const initUser: IUserComment = {
        id_user: user.id,
        comment: comment,
        createdAt: new Date().toISOString(),
      };
      const initNew: IReplyAPI = {
        id: (state.reply.length + 1).toString(),
        id_post: post.id,
        data: [initUser],
      };
      const id: number = getIndexPostInReplies(post, state.reply);
      if (id === -1) {
        state.reply = state.reply.concat(initNew);
      } else {
        const data = state.reply[id].data;
        state.reply[id].data = [...data, initUser];
      }
    },
    deleteReply: (state: IState, action: PayloadAction<IPayload>) => {},
  },
});

export const {
  addReply,
  deleteReply,
  //  addCoins, spendCoins, updateUser
} = replySlice.actions;

export const selectReply = (state: RootState) => state.reply;
export default replySlice.reducer;
