import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
  <>
  <Head>
    <title>Rawlify</title>
    <meta name='description' content='The best version of Spotify built by Rawle Night Long!'/>
    <link rel='shortcut icon' href="/favicon.ico"/>
  </Head>
  <Component {...pageProps} />
  </>
  )
}
