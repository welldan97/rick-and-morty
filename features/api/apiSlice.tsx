import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Character from '../types/Character';
import Episode from '../types/Episode';
import Response from '../types/Response';

interface Filter {
  page?: string;
  name?: string;
  status?: string;
  gender?: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),

  endpoints: builder => ({
    indexCharacters: builder.query<Response, Filter>({
      query: ({ page, name, status, gender }) =>
        `character/?page=${page || 1}&name=${name || ''}&status=${
          status || ''
        }&gender=${gender || ''}`,
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
