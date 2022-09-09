import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
interface IState {}

const initialState: IState = {
  // user: null
};

const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    resetMain: () => {
      return initialState;
    },
    setMain: (state, action: PayloadAction<IState>) => {
      //   state.email = action.payload.email;
      //   state.password = action.payload.password;
      //   state.token = action.payload.token;
    },
  },
});

export const { resetMain, setMain } = mainSlice.actions;

export const selectMain = (state: RootState) => state.main;

export default mainSlice.reducer;
