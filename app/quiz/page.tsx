"use client";

import {
  decrementTime,
  nextQuestion,
  selectAnswer,
  setOptionClickable,
  setQuestions,
} from "@/lib/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AppDispatch, RootState } from "@/lib/store";
import { useEffect } from "react";
import Results from "@/results/page";
import { useRouter } from "next/navigation";
import usePreventBack from "@/hooks/usePreventBack";
import { useGetQuizQuery } from "@/lib/features/quiz/quizApiSlice";

const QuizPage: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch<AppDispatch>();
  const { questions, currentQuestionIndex, isOptionClickable, timeLeft, answers } = useAppSelector(
    (state: RootState) => state.quiz
  );

  const currentQuestion = questions[currentQuestionIndex];

  const { data, error, isLoading } = useGetQuizQuery();

  usePreventBack();

  useEffect(() => {
    if (data && data.length > 0 && questions.length === 0) {
      const processedQuestions = data
        .slice(0, 10)
        .map((item) => ({ questionText: item.title, options: item.body.split("\n") }));

      dispatch(setQuestions(processedQuestions));
    }
  }, [data, dispatch, questions.length]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentQuestionIndex < questions.length) {
      timer = setInterval(() => {
        dispatch(decrementTime());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [currentQuestionIndex, dispatch]);

  useEffect(() => {
    if (timeLeft === 20) {
      dispatch(setOptionClickable(true));
    }

    if (timeLeft === 0) {
      if (currentQuestionIndex < questions.length - 1) {
        dispatch(nextQuestion());
      } else {
        router.push("/results");
      }
    }
  }, [timeLeft, dispatch, currentQuestionIndex, questions.length, router]);

  const handleOptionClick = (option: string) => {
    if (isOptionClickable && !answers[currentQuestionIndex]) {
      dispatch(selectAnswer(option));
    }
  };

  if (isLoading || !currentQuestion) {
    return <div>Loading question...</div>;
  }

  if (error) {
    return <div>Error loading quiz data.</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    return <Results />;
  }

  const selectedAnswer = answers[currentQuestionIndex];

  return (
    <div>
      <h2>{currentQuestion.questionText}</h2>
      <p>{isOptionClickable ? "You can select an answer now." : "Please wait..."}</p>
      <ul>
        {currentQuestion.options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionClick(option)}
            style={{
              pointerEvents: isOptionClickable && !selectedAnswer ? "auto" : "none",
              opacity: isOptionClickable && !selectedAnswer ? 1 : selectedAnswer === option ? 1 : 0.5,
              cursor: isOptionClickable && !selectedAnswer ? "pointer" : "default",
              backgroundColor: selectedAnswer === option ? "#d3f9d8" : undefined,
            }}
          >
            {option}
          </li>
        ))}
      </ul>
      <p>Time left: {timeLeft} seconds</p>
    </div>
  );
};

export default QuizPage;
