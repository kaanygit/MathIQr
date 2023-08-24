"use client"
import { createSelector } from "reselect";
import { RootState } from "../root-reducer";

const selectUserState = (state: RootState) => state.user;

export const selectUser = createSelector(
  [selectUserState],
  (userState) => userState.user
);

// export const selectUserName = createSelector(
//   [selectUser],
//   (user) => (user ? user.name : "")
// );

// export const selectUserEmail = createSelector(
//   [selectUser],
//   (user) => (user ? user.email : "")
// );

