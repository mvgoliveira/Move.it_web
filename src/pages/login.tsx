import Head from 'next/head';

import { LoginProvider } from '../contexts/LoginContext';

import { LoginBox } from '../components/LoginBox';
import { GetServerSideProps } from 'next';

interface LoginProps {
   githubUsername: string
 }

export default function Login(props: LoginProps) {
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