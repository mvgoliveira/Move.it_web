import Head from 'next/head';

import { LoginProvider } from '../contexts/LoginContext';

import { LoginBox } from '../components/LoginBox';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

interface LoginProps {
   githubUsername: string
}

 function Redirect({ to }) {
   const router = useRouter();
 
   useEffect(() => {
     router.replace(to);  
   }, [to]);
 
   return null;
 }

export default function Login(props: LoginProps) {

   if (props.githubUsername !== "undefined") {
      return <Redirect to="/" />
   }

   return (
      <LoginProvider githubUsername={props.githubUsername}>

         <Head>
            <title>Login | Move.it</title>
         </Head>

         <LoginBox />
      </LoginProvider>
   );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const { githubUsername } = ctx.req.cookies;
   
   return {
      props: {
         githubUsername: String(githubUsername)
      }
   }
}