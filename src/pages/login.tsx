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
            <meta name="description" content="{props.description}" />

            <meta property="og:site_name" content="Move.it" />

            <meta property="og:title" content="{props.title}" />
            <meta property="og:description" content="{props.description}" />

            <meta property="og:image" content="https://moveit-teal-omega.vercel.app/api/thumbnail.png?level=20&challenges=10&exp=155500" />
            <meta property="og:image:type" content="image/png" />

            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="{props.title}" />
            <meta name="twitter:description" content="{props.description}" />
            <meta name="twitter:image" content="https://moveit-teal-omega.vercel.app/api/thumbnail.png?level=20&challenges=10&exp=155500" />
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