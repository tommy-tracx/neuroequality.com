import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NeuroEquality</title>
        <meta name="description" content="Advocating for accessibility and inclusion in neurodiversity" />
        <link rel="icon" href="/icon-neuroequality.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
