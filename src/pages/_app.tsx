import '../styles/global.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    if (pageProps.githubUsername === "undefined" ) {
      router.replace('/login');
    } else if (pageProps.githubUsername !== "undefined" ) {
      router.replace('/');
    }
  }, [])

  return (
    <Component {...pageProps} />
  ) 
}