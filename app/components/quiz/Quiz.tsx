"use client";
import { useGetQuizQuery } from "@/lib/features/quiz/quizApiSlice";
import { useState } from "react";
import styles from "./Quiz.module.css";

export const Quiz = () => {
  const { data, isError, isLoading, isSuccess } = useGetQuizQuery();

  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <h3>Select the Quantity of Quiz to Fetch:</h3>
        {data.slice(0, 5).map(({ id, title, body }) => (
          <blockquote key={id}>
            {title}
            <footer>
              <cite>{body.split("\n").join(" ")}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    );
  }

  return null;
};
