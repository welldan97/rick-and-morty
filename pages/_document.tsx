import { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html className="bg-base-300">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
