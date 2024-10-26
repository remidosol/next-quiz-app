import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useGetQuizQuery } from "./quizApiSlice";

interface Question {
  questionText: string;
  options: string[];
}

interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  answers: (string | null)[];
  isOptionClickable: boolean;
  timeLeft: number;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  isOptionClickable: false,
  timeLeft: 30,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
      state.answers = Array(action.payload.length).fill(null);
    },
    nextQuestion(state) {
      state.currentQuestionIndex += 1;
      state.isOptionClickable = false;
      state.timeLeft = 30;
    },
    selectAnswer(state, action: PayloadAction<string>) {
      state.answers[state.currentQuestionIndex] = action.payload;
    },
    setOptionClickable(state, action: PayloadAction<boolean>) {
      state.isOptionClickable = action.payload;
    },
    decrementTime(state) {
      state.timeLeft -= 1;
      console.log("Time decremented:", state.timeLeft);
    },
    resetQuiz() {
      return initialState;
    },
  },
});

export const { setQuestions, nextQuestion, selectAnswer, setOptionClickable, decrementTime, resetQuiz } =
  quizSlice.actions;

export const quizReducer = quizSlice.reducer;
