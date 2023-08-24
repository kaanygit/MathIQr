"use client"
import { USER_DETAILS_TYPES, UserDetailsTS, SetUserAction, ClearUserAction } from "./user-types";

export const setUserDetails = (userData: UserDetailsTS): SetUserAction => {
  return {
    type: USER_DETAILS_TYPES.SET_USER_DETAILS,
    payload: userData,
  };
};

export const clearUserDetails = (): ClearUserAction => {
  return {
    type: USER_DETAILS_TYPES.CLEAR_USER_DETAILS,
  };
};
