import styles from '../styles/pages/Login.module.css';
import { signIn } from 'next-auth/client';
import { useEffect } from 'react';

export function LoginBox() {
   useEffect(() => {
      console.log(process.env.URL);
      
   }, [])

   return (
      <div className={styles.container}>
         <div className={styles.leftContainer}>
         </div>

         <div className={styles.rightContainer}>
            <img src="/logo-full.svg" alt="Move.it Logo"/>
            <strong>Bem-vindo</strong>

            <div>
               <p>Faça login com seu Github para começar</p>
            </div>
               <button 
                  className={styles.buttonActive} 
                  onClick={(): Promise<void> => signIn(
                     'github', 
                     { callbackUrl: 'https://moveitapp.netlify.app/'}
                  )}>

                  <img width={30} src="/icons/github-logo.svg" alt="github Logo"/>
                  <p>Logar no github</p>
                  
               </button>
         </div>
      </div>
   );
}