import { configureStore } from "@reduxjs/toolkit";
import quizReducer from './features/quiz-slice'
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store=configureStore({
  reducer:{
    quizReducer,
  }
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

