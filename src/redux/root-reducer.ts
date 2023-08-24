"use client"
import { combineReducers } from "redux";
import userDetailsReducer from "./user/user-reducer";


export const rootReducer=combineReducers({
    user:userDetailsReducer
});
export type RootState=ReturnType<typeof rootReducer>;

