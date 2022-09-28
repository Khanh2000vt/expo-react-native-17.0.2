import { membersData } from "@helper";
import { IMemberAPI } from "@model";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface IState {
  members: IMemberAPI[];
}
const initialState: IState = {
  members: membersData,
};

const memberSlice = createSlice({
  name: "member",
  initialState: initialState,
  reducers: {},
});

export const {} = memberSlice.actions;

export const selectMember = (state: RootState) => state.member;

export default memberSlice.reducer;
