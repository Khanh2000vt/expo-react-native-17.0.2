import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./auth";
export * from "./auth";

import mainReducer from "./main";
export * from "./main";

import joinedCommunitiesReducers from "./JoinedCommunities";
export * from "./JoinedCommunities";

import postReducer from "./post";
export * from "./post";

import forumReducer from "./forum";
export * from "./forum";

const productReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
  joined: joinedCommunitiesReducers,
  post: postReducer,
  forum: forumReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  // if (action.type === RESET) {
  //   // reset state
  //   state = {} as RootState;
  //   // reset local storage
  //   localStorage.clear();
  // }
  return productReducer(state, action);
};
export default rootReducer;
