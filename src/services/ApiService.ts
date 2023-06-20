import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BookResponse } from '../models/book';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    books: builder.query<BookResponse, string>({
      query: (query) => `volumes?q=${query}&key=${import.meta.env.VITE_KEY}`,
      providesTags: ['Books'],
    }),
  }),
});

export const { useBooksQuery } = booksApi;
