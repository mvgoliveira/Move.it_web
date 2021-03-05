import Head from 'next/head';
import {GetServerSideProps} from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import styles from '../styles/pages/Index.module.css';

import IndexBox from '../components/IndexBox';

interface HomeProps {
  level: number ;
  currentExperience: number ;
  challengesCompleted: number ;
  githubUsername: string ;
}

function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);  
  }, [to]);

  return null;
}

export default function Index(props : HomeProps) {

  if (props.githubUsername !== "undefined") {
    return <Redirect to="/home" />
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Move.it</title>
      </Head>
      <IndexBox />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {level, currentExperience, challengesCompleted, githubUsername} = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      githubUsername: String(githubUsername)
    }
  }
}


