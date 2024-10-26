import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Quiz = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type QuizState = {
  isLoading: boolean;
  quiz: Quiz[];
};

export type QuizApiResponse = Quiz[];

export const quizApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  reducerPath: "quizApi",
  tagTypes: ["Quiz"],
  endpoints: (build) => ({
    getQuiz: build.query<QuizApiResponse, void>({
      query: () => `/posts`,
      providesTags: (result, error) => [{ type: "Quiz" }],
    }),
  }),
});

export const { useGetQuizQuery } = quizApiSlice;
