import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/todos",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({ query: () => "/" }),
    getTodo: builder.query({ query: ({ id }) => `/${id}` }),
    addTodo: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "/",
        body,
      }),
    }),
    updateTodo: builder.mutation({
      query: (body) => ({
        method: "PUT",
        url: `/${body.id}`,
        body,
      }),
    }),
    removeTodo: builder.mutation({
      query: ({ id }) => ({
        method: "DELETE",
        url: `/${id}`,
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useRemoveTodoMutation,
} = todoApi;
