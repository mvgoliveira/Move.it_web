import '../styles/global.css';

import { Provider } from 'next-auth/client';

export default function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  )
}