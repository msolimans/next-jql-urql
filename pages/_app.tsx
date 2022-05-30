import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { client } from '../lib/graphql';
import { Provider } from 'urql';

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider value={client} ><Component {...pageProps} /></Provider>;
}

export default MyApp
