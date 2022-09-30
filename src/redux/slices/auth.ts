import { IMemberAPI } from "@model";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { LoginApi } from "../../api";
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
      const response = await LoginApi.getAll();
      return response;
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
        (state: IState, action: PayloadAction<IMemberAPI>) => {
          state.isLoading = false;
          state.token = action.payload.token;
          // state.user = action.payload;
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

export const {
  logoutAuth,
  //  addCoins, spendCoins, updateUser
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
