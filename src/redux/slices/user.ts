import { userData } from "@helper";
import { IMemberAPI, IRequest, IUserAPI, IUserID } from "@model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
interface IState {
  user: IUserAPI;
}

interface IMemberRequest {
  user: IMemberAPI | IUserAPI;
}

const initialState: IState = {
  user: userData,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addCoins: (state: IState, action: PayloadAction<number>) => {
      let coin = state.user.coin + action.payload;
      state.user.coin = coin;
    },
    spendCoins: (state: IState, action: PayloadAction<number>) => {
      let coin = state.user.coin - action.payload;
      state.user.coin = coin;
    },
    updateUser: (state: IState, action: PayloadAction<any>) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    acceptMemberApproval: (
      state: IState,
      action: PayloadAction<IMemberRequest>
    ) => {
      const { user } = action.payload;
      const init: IUserID = {
        id_user: user.id,
      };
      state.user.approval = state.user.approval.filter(
        (member) => member.id_user !== user.id
      );
      state.user.friend = [...state.user.friend, init];
    },
    rejectMemberApproval: (
      state: IState,
      action: PayloadAction<IMemberRequest>
    ) => {
      const { user } = action.payload;
      state.user.approval = state.user.approval.filter(
        (member) => member.id_user !== user.id
      );
    },
    addMemberBlock: (state: IState, action: PayloadAction<IMemberRequest>) => {
      const { user } = action.payload;
      const init: IUserID = {
        id_user: user.id,
      };
      state.user.friend = state.user.friend.filter(
        (member) => member.id_user !== user.id
      );
      state.user.approval = state.user.approval.filter(
        (member) => member.id_user !== user.id
      );
      state.user.request = state.user.request.filter(
        (member) => member.id_user !== user.id
      );
      state.user.block = [...state.user.block, init];
    },
    removeMemberBlock: (
      state: IState,
      action: PayloadAction<IMemberRequest>
    ) => {
      const { user } = action.payload;
      state.user.block = state.user.block.filter(
        (member) => member.id_user !== user.id
      );
    },
    addMemberRequest: (
      state: IState,
      action: PayloadAction<IMemberRequest>
    ) => {
      const { user } = action.payload;
      const init: IRequest = {
        id_user: user.id,
        createdAt: new Date().toISOString(),
      };
      state.user.request = [init, ...state.user.request];
    },
  },
});

export const {
  addCoins,
  spendCoins,
  updateUser,
  acceptMemberApproval,
  rejectMemberApproval,
  addMemberBlock,
  removeMemberBlock,
  addMemberRequest,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
