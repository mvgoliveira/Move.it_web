import Head from 'next/head';

import { LoginBox } from '../components/LoginBox';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getSession } from 'next-auth/client';

interface LoginProps {
   session: object
}

function Redirect({ to }) {
   const router = useRouter();

   useEffect(() => {
      router.replace(to);  
   }, [to]);

   return null;
}

export default function Login(props: LoginProps) {

   useEffect(() => {
      console.log(props.session);
   }, [])

   if (props.session) {
      return <Redirect to="/home" />
   }
   
   return (
      <>

         <Head>
            <title>Login | Move.it</title>
         </Head>

         <LoginBox />
      </>
   );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
   const session = await getSession(ctx);
   
   return {
      props: {
         session
      }
   }
}