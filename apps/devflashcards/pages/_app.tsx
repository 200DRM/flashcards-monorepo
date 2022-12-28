import { AppProps } from 'next/app';
import Head from 'next/head';

import '@app/styles/globals.scss';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>
          Dev Learn App - flashcards to learn front-end development and other
          IT-related theory
        </title>
        <meta
          name="description"
          content="Dev Learn App - flashcards to learn front-end development theory and more"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
