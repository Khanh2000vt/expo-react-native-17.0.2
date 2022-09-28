import { IImage } from "@model";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface IState {
  title: string;
  body: string;
  images: IImage[];
}

const initialState: IState = {
  title: "",
  body: "",
  images: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    resetPost: () => {
      return initialState;
    },
    createPost: (_, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { resetPost, createPost } = postSlice.actions;
export const selectPost = (state: RootState) => state.post;
export default postSlice.reducer;
