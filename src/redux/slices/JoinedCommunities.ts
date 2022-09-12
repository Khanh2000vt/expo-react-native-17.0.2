import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from ".";

interface IState {
  communities: any[];
  isLoading: boolean;
}

const initialState: IState = {
  communities: [],
  isLoading: false,
};

export const getJoined: any = createAsyncThunk(
  "user/joined",
  async (_data, { rejectWithValue }) => {
    try {
      const response = await axios(
        "https://6316f6fdcb0d40bc4148114b.mockapi.io/khanhmacro/api/joined"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const joinedSlice = createSlice({
  name: "joined",
  initialState: initialState,
  reducers: {
    addCommunity: (state: IState, action: PayloadAction<any>) => {
      state.communities.push(action.payload);
    },
    deleteCommunity: (state: IState, action: PayloadAction<any>) => {
      let index = state.communities.indexOf(action.payload);
      let tempCommunities = state.communities;
      tempCommunities.splice(index, 1);
      state.communities = tempCommunities;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJoined.pending, (state: IState) => {
        state.isLoading = true;
      })
      .addCase(
        getJoined.fulfilled,
        (state: IState, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.communities = action.payload;
        }
      )
      .addCase(getJoined.rejected, (state: IState) => {
        return state;
      });
  },
});

export const { addCommunity } = joinedSlice.actions;
export const selectJoined = (state: RootState) => state.auth;
export default joinedSlice.reducer;
