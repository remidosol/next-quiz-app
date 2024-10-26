"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const Results: React.FC = () => {
  const { questions, answers } = useSelector((state: RootState) => state.quiz);

  return (
    <div>
      <h1>Quiz Results</h1>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={index}>
              <td>{question.questionText}</td>
              <td>{answers[index] || "No Answer"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
