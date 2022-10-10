import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Character from '../types/Character';
import Episode from '../types/Episode';
import Response from '../types/Response';

interface Filter {
  page?: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),

  endpoints: builder => ({
    indexCharacters: builder.query<Response, Filter>({
      query: ({ page }) => `character/?page=${page || 1}`,
    }),

    getCharacter: builder.query<Character, number>({
      query: id => `character/${id}`,
    }),

    getEpisode: builder.query<Episode, number>({
      query: id => `episode/${id}`,
    }),
  }),
});

export const {
  useIndexCharactersQuery,
  useGetCharacterQuery,
  useGetEpisodeQuery,
} = apiSlice;
