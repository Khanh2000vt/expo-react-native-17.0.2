import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";
interface IState {
  isLoading: boolean;
  errorMessage: string;
  token: string | null;
}

const initialState: IState = {
  isLoading: false,
  errorMessage: "",
  token: null,
};

export const loginAuth: any = createAsyncThunk(
  "user/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios(
        "https://6316f6fdcb0d40bc4148114b.mockapi.io/khanhmacro/api/login/1"
      );
      return response.data.token;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logoutAuth: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAuth.pending, (state: IState) => {
        state.isLoading = true;
      })
      .addCase(
        loginAuth.fulfilled,
        (state: IState, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.token = action.payload;
        }
      )
      .addCase(
        loginAuth.rejected,
        (state: IState, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.errorMessage = action.payload;
        }
      );
  },
});

export const { logoutAuth } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
