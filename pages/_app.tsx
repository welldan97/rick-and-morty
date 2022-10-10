import type { AppProps } from 'next/app';

import '../styles/globals.css';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '../features/api/apiSlice';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ApiProvider api={apiSlice}>
    <Component {...pageProps} />
  </ApiProvider>
);

export default MyApp;
