import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Response from '../types/Response';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),
  endpoints: builder => ({
    indexCharacters: builder.query<Response, void>({
      query: () => 'character',
    }),
  }),
});

export const { useIndexCharactersQuery } = apiSlice;
