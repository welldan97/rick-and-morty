import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import Character from '../../types/Character';
import Episode from '../../types/Episode';
import Response from '../../types/CharacterResponse';

import transformCharacterResponse from './transformCharacterResponse';
import transformCharacter from './transformCharacter';
import transformEpisode from './transformEpisode';

interface Filter {
  page?: number;
  name?: string;
  status?: Character['status'];
  gender?: Character['gender'];
}

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
  }),

  endpoints: builder => ({
    indexCharacters: builder.query<Response, Filter>({
      query: ({ page = 1, name = '', status = '', gender = '' } = {}) =>
        `character/?${new URLSearchParams({
          page: page.toString(),
          name,
          status,
          gender,
        }).toString()}`,
      transformResponse: transformCharacterResponse,
    }),

    getCharacter: builder.query<Character, number>({
      query: id => `character/${id}`,
      transformResponse: transformCharacter,
    }),

    getEpisode: builder.query<Episode, number>({
      query: id => `episode/${id}`,
      transformResponse: transformEpisode,
    }),
  }),
});

export const {
  useIndexCharactersQuery,
  useGetCharacterQuery,
  useGetEpisodeQuery,
} = apiSlice;
