import styles from '../styles/pages/Login.module.css';
import { signIn } from 'next-auth/client';

export function LoginBox() {
   const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `https://${process.env.VERCEL_URL}`;

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
                     { callbackUrl: `${baseUrl}/home`}
                  )}>

                  <img width={30} src="/icons/github-logo.svg" alt="github Logo"/>
                  <p>Logar no github</p>
                  
               </button>
         </div>
      </div>
   );
}