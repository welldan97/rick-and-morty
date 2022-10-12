import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { apiSlice } from '../api/apiSlice';
import rawCharacterResponse from '../test/fixtures/rawCharacterResponse';
import List from './index';

jest.mock('@react-hook/window-size');

const server = setupServer();

describe('List', () => {
  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });

  test('render', async () => {
    server.use(
      rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) =>
        res(ctx.json(rawCharacterResponse)),
      ),
    );

    const { container } = render(
      <ApiProvider api={apiSlice}>
        <List />
      </ApiProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('wrapper')).toBeTruthy();
    });

    expect(container).toMatchSnapshot();
  });
});
