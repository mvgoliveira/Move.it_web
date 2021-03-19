import styles from '../styles/pages/Login.module.css';
import { signIn } from 'next-auth/client';
import {AiFillGoogleCircle} from 'react-icons/ai';

export function LoginBox() {

   return (
      <div className={styles.container}>
         <div className={styles.leftContainer}>
         </div>

         <div className={styles.rightContainer}>
            <img src="/logo-full.svg" alt="Move.it Logo"/>
            <strong>Bem-vindo</strong>

            <div>
               <p>Faça login com seu Github ou google para começar</p>
            </div>
               <div className={styles.buttonContainer}>
                  <button 
                     className={styles.buttonActive} 
                     onClick={(): Promise<void> => signIn(
                        'github'
                        )}>

                     <img width={30} src="/icons/github-logo.svg" alt="github Logo"/>
                     <p>Logar no github</p>
                     
                  </button>
                  <button 
                     className={styles.buttonActive} 
                     onClick={(): Promise<void> => signIn(
                        'google'
                        )}>

                     <AiFillGoogleCircle size={30}/>
                     <p>Logar no google</p>
                     
                  </button>
               </div>
         </div>
      </div>
   );
}