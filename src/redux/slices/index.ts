import { AnyAction, Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer from "./auth";
export * from "./auth";

import userReducer from "./user";
export * from "./user";

import communityReducers from "./community";
export * from "./community";

import postReducer from "./post";
export * from "./post";

import forumReducer from "./forum";
export * from "./forum";

import likeReducer from "./like";
export * from "./like";

import replyReducer from "./reply";
export * from "./reply";

import memberReducer from "./member";
export * from "./member";

const productReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  community: communityReducers,
  post: postReducer,
  forum: forumReducer,
  like: likeReducer,
  reply: replyReducer,
  member: memberReducer,
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
