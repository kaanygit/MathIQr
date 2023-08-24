"use client"
import { USER_DETAILS_TYPES, UserActionTypes, UserState } from "./user-types";

const initialState: UserState = {
  user: null,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case USER_DETAILS_TYPES.SET_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case USER_DETAILS_TYPES.CLEAR_USER_DETAILS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
