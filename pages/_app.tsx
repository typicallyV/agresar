import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    import('bootstrap');
  }, []);

  return (
    <>
      <Head>
        {/* FIX: This is the critical line that was missing.
            Without it, mobile browsers render the page at ~980px wide
            then scale it down — causing the narrow column + white void. */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}