import { communitiesData } from "@helper";
import { ICommunityAPI, IUserAPI, IUserID } from "@model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getIndexCommunityByID } from "@utils";
import { RootState } from ".";

interface IState {
  communities: ICommunityAPI[];
}

const initialState: IState = {
  communities: communitiesData,
};

interface IPayload {
  idCommunity: string;
  user: IUserAPI;
}

const communitySlice = createSlice({
  name: "community",
  initialState: initialState,
  reducers: {
    joinCommunity: (state: IState, action: PayloadAction<IPayload>) => {
      const { idCommunity, user } = action.payload;
      const initUser: IUserID = {
        id_user: user.id,
      };
      const id: number = getIndexCommunityByID(idCommunity, state.communities);
      if (id !== -1) {
        const members = state.communities[id].members;
        state.communities[id].members = [initUser, ...members];
      }
    },
    exitCommunity: (state: IState, action: PayloadAction<IPayload>) => {
      const { idCommunity, user } = action.payload;
      const id: number = getIndexCommunityByID(idCommunity, state.communities);
      const members = state.communities[id].members;
      state.communities[id].members = members.filter(
        (member) => member.id_user !== user.id
      );
    },
  },
});

export const { joinCommunity, exitCommunity } = communitySlice.actions;
export const selectCommunity = (state: RootState) => state.auth;
export default communitySlice.reducer;
