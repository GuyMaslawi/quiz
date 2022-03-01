import { createSlice } from "@reduxjs/toolkit";
import { QUESTIONS } from "../constants/questions";

const initialState = {
  total: QUESTIONS.length,
  currentQuestion:
    JSON.parse(localStorage.getItem("currentQuestion")) || QUESTIONS[0],
  score: 0,
  quizOver: false,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setNextQuestion: (state) => {
      if (state.currentQuestion.id < state.total - 1) {
        const currentIndex = state.currentQuestion.id;
        state.currentQuestion = QUESTIONS[currentIndex + 1];
        localStorage.setItem(
          "currentQuestion",
          JSON.stringify(state.currentQuestion)
        );
      } else {
        state.quizOver = true;
      }
    },
    setPrevQuestion: (state) => {
      if (state.currentQuestion.id > 0) {
        const currentIndex = state.currentQuestion.id;
        state.currentQuestion = QUESTIONS[currentIndex - 1];
      }
    },
    checkAnswer: (state, action) => {
      const answerId = action.payload;
      const isCorrect =
        QUESTIONS[state.currentQuestion.id - 1].answers[answerId].isCorrect;
      if (isCorrect) {
        state.score += 1;
      }
    },
    resetQuiz: () => {
      localStorage.clear();
      return initialState;
    },
  },
});

export const { setNextQuestion, setPrevQuestion, checkAnswer, resetQuiz } =
  questionsSlice.actions;

export default questionsSlice.reducer;
