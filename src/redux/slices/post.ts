import { IImage } from "@model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    createPost: (state: IState, action: PayloadAction<any>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { resetPost, createPost } = postSlice.actions;
export const selectPost = (state: RootState) => state.post;
export default postSlice.reducer;
