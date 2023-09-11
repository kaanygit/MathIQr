import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type QuizState = {
  startExam: boolean;
};
type InitialState={
  value:QuizState
}

const initialState = {
  value:{
    startExam: false,
  }as QuizState
} as InitialState;

export const quiz = createSlice({
  name: "counter",
  initialState,
  reducers: {
    endQuiz:()=>{
      return initialState;
    },
    startingQuiz:(state,action:PayloadAction<boolean>)=>{
      return {
        value:{
          startExam:action.payload,
        }
      }
    }
  },
});

export const {
  startingQuiz,
  endQuiz
} = quiz.actions;
export default quiz.reducer;