import { userData } from "@helper";
import { IMemberAPI, IUserAPI, IUserID } from "@model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
interface IState {
  user: IUserAPI;
}

interface IApproval {
  user: IMemberAPI;
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
    acceptMemberApproval: (state: IState, action: PayloadAction<IApproval>) => {
      const { user } = action.payload;
      const init: IUserID = {
        id_user: user.id,
      };
      state.user.approval = state.user.approval.filter(
        (member) => member.id_user !== user.id
      );
      state.user.friend = [...state.user.friend, init];
    },
    rejectMemberApproval: (state: IState, action: PayloadAction<IApproval>) => {
      const { user } = action.payload;
      state.user.approval = state.user.approval.filter(
        (member) => member.id_user !== user.id
      );
    },
  },
});

export const {
  addCoins,
  spendCoins,
  updateUser,
  acceptMemberApproval,
  rejectMemberApproval,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
